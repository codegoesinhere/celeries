/* Personal salary overlay and proposed APS negotiations. Runs independently of existing table renderers. */
(function(){
'use strict';
const $=id=>document.getElementById(id);
const money=(n,dp=2)=>Number.isFinite(n)?'$'+n.toLocaleString('en-AU',{minimumFractionDigits:dp,maximumFractionDigits:dp}):'—';
const percent=n=>Number.isFinite(Number(n))?Number(n).toFixed(2)+'%':'—';
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let state=null, serial=0, syncing=false;
const fixedOffers=[{id:"cpsu-1",name:"CPSU Claim 1",date:"2026-08-20",rates:[5,5,5],fixed:true,color:"#ff7775", brandColor:"#da1715"},{id:"initial",name:"APSC Offer 1",date:"2026-10-13",rates:[3.2,3,2.8],fixed:true,color:"#67B7F7", brandColor:"#003E6B"}];
let customOffers=[];
function api(){return window.salaryDashboardAPI||{};}
function key(a){if(typeof api().agencyKey==='function')return api().agencyKey(a);const slug=s=>String(s||'').toLowerCase().replace(/’s\b/g,'s').replace(/'s\b/g,'s').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');return slug(a.portfolio)+'|'+slug(a.agency);}
function getAgency(id){return (window.agreements||[]).find(a=>key(a)===id);}
function getPay(id,cls){return api().findPaySet?.(id,cls,$('chartDateSel')?.value||new Date().toISOString().slice(0,10));}
function option(select,value,label){const o=document.createElement('option');o.value=value;o.textContent=label;select.append(o);}
function refreshClasses(){const id=$('personalAgency').value,old=$('personalClass').value;const cls=[...new Set((window.payRates||[]).filter(r=>r.agencyId===id).map(r=>r.classification))].sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));const el=$('personalClass');el.innerHTML='';option(el,'','Select classification');cls.forEach(c=>option(el,c,c.replace(/^([A-Z]+)(\d)/,'$1 $2')));if(cls.includes(old))el.value=old;refreshPoints();}
function refreshPoints(){const el=$('personalPoint'),old=el.value;el.innerHTML='';option(el,'','Select paypoint');const pay=getPay($('personalAgency').value,$('personalClass').value);(pay?.points||[]).forEach((p,i)=>{if(Number.isFinite(Number(p.rate)))option(el,String(i),p.kind==='step'?`Paypoint ${p.step} — ${money(Number(p.rate))}`:`${p.label||p.kind} — ${money(Number(p.rate))}`)});if([...el.options].some(o=>o.value===old))el.value=old;update();}
function personal(){const id=$('personalAgency').value,cls=$('personalClass').value,point=$('personalPoint').value,manual=$('personalManual').value.trim();const pay=getPay(id,cls);const p=point!==''?pay?.points?.[Number(point)]:null;const salary=manual!==''?Number(manual):Number(p?.rate);if(!Number.isFinite(salary)||salary<=0)return null;return {name:'My salary',agency:getAgency(id)?.agency||'Custom salary',classification:cls||'Not specified',paypoint:p?.kind==='step'?p.step:null,salary,manual:manual!==''};}
function classificationWithPoint(s){return s.paypoint!=null?`${s.classification}.${s.paypoint}`:s.classification;}
function update(){state=personal();$('personalSummary').textContent=state?`${state.agency} · ${classificationWithPoint(state)} · ${money(state.salary)} annual base salary${state.manual?' (actual salary override)':''}`:'Select a published paypoint or enter an actual salary.';updateCharts();syncTables();renderNegotiations();}
// Cyan is intentionally distinct from the orange salary/paypoint markers.
const PERSONAL_CHART_COLOR='#33d6e8';
function positionPersonalLabel(chart){
 const tag=chart.personalSalaryTag;
 if(!tag||!state||!$('personalVisible').checked)return;
 const axis=chart.yAxis?.[0];
 if(!axis)return;
 const pixel=axis.toPixels(state.salary);
 if(!Number.isFinite(pixel)){tag.hide();return;}
 const bbox=tag.getBBox();
 // Place the label inside the plot, above the first category, not on the points.
 const x=Math.max(chart.plotLeft+4,Math.min(pixel-bbox.width/2,chart.plotLeft+chart.plotWidth-bbox.width-4));
 const y=Math.max(8,chart.plotTop-bbox.height-12);
 tag.attr({x,y}).show();
}
function updateCharts(){
 if(!window.Highcharts)return;
 for(const chart of window.Highcharts.charts||[]){
  if(!chart||!['chartContainer','compareChartContainer'].includes(chart.renderTo?.id))continue;
  const axis=chart.yAxis?.[0];if(!axis)continue;
  // Reserve a dedicated header band above the first plotted category.
  // The reference label is drawn in this band, beneath the chart's top edge.
  if(!chart.personalSalaryHeaderSpace){
   chart.personalSalaryHeaderSpace=true;
   chart.update({chart:{spacingTop:72}},false);
  }
  axis.removePlotLine('personal-salary');
  if(chart.personalSalaryTag){chart.personalSalaryTag.destroy();chart.personalSalaryTag=null;}
  if(!state||!$('personalVisible').checked)continue;
  axis.addPlotLine({id:'personal-salary',value:state.salary,color:PERSONAL_CHART_COLOR,width:3,dashStyle:'Dash',zIndex:0});
  chart.personalSalaryTag=chart.renderer.label(`My salary ${money(state.salary,0)}`,0,0,'rect')
   .attr({fill:'#07323b',stroke:PERSONAL_CHART_COLOR,'stroke-width':1,padding:5,r:4,zIndex:10})
   .css({color:'#eaffff',fontWeight:'bold',fontSize:'12px'})
   .add();
  positionPersonalLabel(chart);
 }
}

function rowFor(table){if(!state||!table)return;const tbody=table.tBodies?.[0];if(!tbody||tbody.querySelector('.personal-row'))return;const tr=tbody.insertRow(0);tr.className='personal-row';const cells=table.tHead?.rows?.[0]?.cells?.length||0;const name=escape(state.agency),cls=escape(classificationWithPoint(state)),annual=state.salary;
if(table.id==='fortnightSalaryTable'&&cells>=8){tr.innerHTML=`<td></td><td>My salary — ${name}</td><td>${cls}</td><td style="text-align:right">${money(annual)}</td><td style="text-align:right">${money(annual*12/313/75,4)}</td><td style="text-align:right">${money(annual*12/313)}</td><td style="text-align:right">${money(annual*.154)}</td><td style="text-align:right">${money(annual*1.154)}</td>`;return;}
if(table.id==='compareSalaryTable'){const heads=[...table.tHead.rows[0].cells].map(c=>c.textContent.toLowerCase());tr.innerHTML=heads.map(h=>`<td${['hour','fortnight','super','package','salary'].some(k=>h.includes(k))?' style="text-align:right"':''}>${h.includes('agency')?'My salary — '+name:h.includes('class')?cls:h.includes('hour')?money(annual*12/313/75,4):h.includes('fortnight')?money(annual*12/313):h.includes('super')&&!h.includes('package')?money(annual*.154):h.includes('package')?money(annual*1.154):h.includes('salary')?money(annual):'—'}</td>`).join('');}}
function syncTables(){if(syncing)return;syncing=true;try{for(const id of ['fortnightSalaryTable','compareSalaryTable']){const t=$(id);if(t){const current=t.querySelector('.personal-row');const signature=state?`${state.salary}|${state.agency}|${state.classification}|${state.paypoint}`:'';if(current?.dataset.signature!==signature){current?.remove();if(state){rowFor(t);const added=t.querySelector('.personal-row');if(added)added.dataset.signature=signature;}}}}for(const id of ['fortnightTableMount','compareTableMount']){const mount=$(id);if(!mount)continue;const old=mount.querySelector('.personal-empty');if(old&&(!state||mount.querySelector('table')))old.remove();if(state&&!mount.querySelector('table')&&!mount.querySelector('.personal-empty')){const d=document.createElement('div');d.className='personal-empty personal-summary';d.textContent=`My salary: ${money(state.salary)} (${classificationWithPoint(state)}). Select Chart 2 entities to see additional comparisons.`;mount.prepend(d);}}}finally{syncing=false;}}
function allOffers(){return [...fixedOffers,...customOffers];}
function addComparison(){if(customOffers.length>=12)return;const id=++serial;customOffers.push({id:`custom-${id}`,name:`Custom offer ${id}`,date:"",rates:[3.2,3,2.8],fixed:false});renderOfferControls();renderNegotiations();}
function displayOfferDate(value){
 if(!value)return '';
 const [y,m,d]=value.split('-').map(Number);
 if(!y||!m||!d)return '';
 return new Date(y,m-1,d).toLocaleDateString('en-AU',{day:'numeric',month:'short',year:'numeric'});
}
function renderOfferControls(){
 const mount=$('negOffers');if(!mount)return;mount.replaceChildren();
 allOffers().forEach(offer=>{
    const card = document.createElement('div');
    card.className = 'neg-offer-card';

    if (offer.fixed && offer.color) {
    card.style.borderLeft = `4px solid ${offer.color}`;
    }
  const heading=document.createElement('div');heading.className='neg-offer-heading';
  if(offer.fixed){
   const title=document.createElement('strong');title.textContent=offer.name;if(offer.color)title.style.color=offer.color;heading.append(title);
   const tag=document.createElement('span');tag.className='neg-fixed-label';tag.textContent='Fixed offer';heading.append(tag);
  }else{
   const name=document.createElement('input');name.type='text';name.value=offer.name;name.setAttribute('aria-label','Custom offer name');
   name.addEventListener('input',()=>{offer.name=name.value.trim()||'Custom offer';renderNegotiations();});
   heading.append(name);
   const remove=document.createElement('button');remove.type='button';remove.className='btn-quiet';remove.textContent='Remove';
   remove.addEventListener('click',()=>{customOffers=customOffers.filter(x=>x!==offer);renderOfferControls();renderNegotiations();});
   heading.append(remove);
  }
  card.append(heading);
  const fields=document.createElement('div');fields.className='neg-offer-inline';
  const dateWrap=document.createElement('div');dateWrap.className='neg-offer-date';
  if(offer.fixed){
   const date=document.createElement('span');date.textContent=displayOfferDate(offer.date)||'Date not specified';dateWrap.append(date);
  }else{
   const label=document.createElement('label');label.textContent='Date';
   const date=document.createElement('input');date.type='date';date.value=offer.date||'';
   date.setAttribute('aria-label',`${offer.name} date`);
   date.addEventListener('change',()=>{offer.date=date.value;renderNegotiations();});
   dateWrap.append(label,date);
  }
  fields.append(dateWrap);
  offer.rates.forEach((rate,i)=>{
   const field=document.createElement('div');field.className='neg-offer-rate';
   const label=document.createElement('label');label.textContent=`Year ${i+1} (${2027+i}):`;
   if(offer.fixed){
    const value=document.createElement('span');value.textContent=percent(rate);field.append(label,value);
   }else{
    const input=document.createElement('input');input.type='number';input.step='0.01';input.min='-99.99';input.value=Number(rate).toFixed(2);
    input.setAttribute('aria-label',`${offer.name}, Year ${i+1} (${2027+i}) percentage`);
    input.addEventListener('input',()=>{offer.rates[i]=input.value===''?NaN:Number(input.value);renderNegotiations();});
    input.addEventListener('blur',()=>{if(Number.isFinite(offer.rates[i]))input.value=offer.rates[i].toFixed(2);});
    const suffix=document.createElement('span');suffix.textContent='%';
    field.append(label,input,suffix);
   }
   fields.append(field);
  });
  card.append(fields);mount.append(card);
 });
}
function renderNegotiations(){const offers=allOffers(),tbody=$('negTable')?.tBodies?.[0],salaryBody=$('negSalaryTable')?.tBodies?.[0],dollarBody=$('negDollarTable')?.tBodies?.[0];if(!tbody||!salaryBody||!dollarBody)return;tbody.replaceChildren();salaryBody.replaceChildren();dollarBody.replaceChildren();const initial=1.032*1.03*1.028-1;
 const valid=offer=>offer.rates.every(r=>Number.isFinite(r)&&r>-100);
 offers.forEach(offer=>{const ok=valid(offer);const compound=ok?offer.rates.reduce((n,r)=>n*(1+r/100),1)-1:NaN;const cells=[offer.name,...offer.rates.map(percent),ok?(compound*100).toFixed(2)+'%':'—',ok?((compound-initial)*100>=0?'+':'')+((compound-initial)*100).toFixed(2)+' pp':'—'];const row=tbody.insertRow();if(offer.fixed){row.className='neg-offer-fixed-row';row.style.setProperty('--offer-color',offer.color||'#33d6e8');}cells.forEach(c=>{const td=row.insertCell();td.textContent=c;});if(state&&ok){const values=[state.salary];offer.rates.forEach(r=>values.push(values.at(-1)*(1+r/100)));const increases=values.slice(1).map((v,i)=>v-values[i]);const dr=dollarBody.insertRow();if(offer.fixed){dr.className='neg-offer-fixed-row';dr.style.setProperty('--offer-color',offer.color||'#33d6e8');}[offer.name,...increases.map(v=>money(v)),money(increases.reduce((a,b)=>a+b,0))].forEach(c=>{const td=dr.insertCell();td.textContent=c;});const sr=salaryBody.insertRow();if(offer.fixed){sr.className='neg-offer-fixed-row';sr.style.setProperty('--offer-color',offer.color||'#33d6e8');}[offer.name,...values.map(v=>money(v)),money(values.at(-1)-values[0])].forEach(c=>{const td=sr.insertCell();td.textContent=c;});}});
 for(const id of ['negDollarHint','negSalaryHint','negPercentHint']){
  const hint=$(id);if(!hint)continue;
  hint.replaceChildren();
  if(state){
   hint.append(document.createTextNode('Based on '));
   const cls=document.createElement('strong');cls.className='neg-salary-highlight';cls.textContent=classificationWithPoint(state);
   const salary=document.createElement('strong');salary.className='neg-salary-highlight';salary.textContent=money(state.salary);
   hint.append(cls,document.createTextNode(' — '),salary,document.createTextNode(' annual base salary. Paypoint progression is excluded.'));
  }else hint.textContent='Select a salary in the My salary section to see the dollar impact of each offer.';
 }
 $('negSummary').textContent=`${offers.length} offer${offers.length===1?'':'s'} compared. APSC Offer 1 compounded increase: ${(initial*100).toFixed(2)}%. Differences are percentage points relative to APSC Offer 1.`;
 const chartMount=$('negChart');
 if(!state){
  if(chartMount)chartMount.innerHTML='<p class="muted">Select My salary above to compare annual dollar increases for each offer.</p>';
  return;
 }
 if(window.Highcharts){
  const series=offers.filter(valid).map(o=>{
   let current=state.salary;
   return {name:o.name,...(o.color?{color:o.color}:{}),data:o.rates.map(rate=>{const increase=current*rate/100;current+=increase;return Math.round(increase*100)/100;})};
  });
  window.Highcharts.chart('negChart',{
   chart:{type:'column',backgroundColor:'transparent',height:360},
   title:{text:null},
   xAxis:{categories:['Year 1 (2027)','Year 2 (2028)','Year 3 (2029)'],labels:{style:{color:'#e8ecf1'}}},
   yAxis:{title:{text:'Annual base salary increase ($)',style:{color:'#e8ecf1'}},labels:{style:{color:'#e8ecf1'},formatter:function(){return '$'+this.value.toLocaleString('en-AU');}}},
   legend:{itemStyle:{color:'#e8ecf1'}},
   tooltip:{shared:true,pointFormatter:function(){return this.series.name+': <b>'+money(this.y)+'</b><br/>';}},
   series,credits:{enabled:false}
  });
 }else if(chartMount){chartMount.innerHTML='<p class="muted">The salary increase chart requires Highcharts to load.</p>';}
}

function init(){if(!$('personalAgency'))return;option($('personalAgency'),'','Select entity');(window.agreements||[]).slice().sort((a,b)=>a.agency.localeCompare(b.agency)).forEach(a=>option($('personalAgency'),key(a),a.agency));$('personalAgency').addEventListener('change',refreshClasses);$('personalClass').addEventListener('change',refreshPoints);['personalPoint','personalManual','personalVisible'].forEach(id=>$(id).addEventListener(id==='personalManual'?'input':'change',update));$('personalClear').addEventListener('click',()=>{$('personalAgency').value='';$('personalManual').value='';refreshClasses();});$('negAdd').addEventListener('click',addComparison);$('negReset').addEventListener('click',()=>{customOffers=[];renderOfferControls();renderNegotiations();});$('chartDateSel')?.addEventListener('change',()=>{refreshPoints();setTimeout(updateCharts,100);});if(window.Highcharts){window.Highcharts.addEvent(window.Highcharts.Chart,'load',function(){if(['chartContainer','compareChartContainer'].includes(this.renderTo?.id))setTimeout(updateCharts,0);});window.Highcharts.addEvent(window.Highcharts.Chart,'redraw',function(){if(this.personalSalaryTag)positionPersonalLabel(this);});}const observer=new MutationObserver(()=>{if(!syncing)syncTables();});['fortnightTableMount','compareTableMount'].forEach(id=>{if($(id))observer.observe($(id),{childList:true,subtree:false});});refreshClasses();renderOfferControls();renderNegotiations();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
