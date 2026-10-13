/* Personal salary overlay and proposed APS negotiations. Runs independently of existing table renderers. */
(function(){
'use strict';
const $=id=>document.getElementById(id);
const money=(n,dp=2)=>Number.isFinite(n)?'$'+n.toLocaleString('en-AU',{minimumFractionDigits:dp,maximumFractionDigits:dp}):'—';
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let state=null, serial=0, syncing=false;
const fixedOffers=[{id:"initial",name:"Offer 1 — Initial offer",rates:[3.2,3,2.8],fixed:true}];
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
  axis.addPlotLine({id:'personal-salary',value:state.salary,color:PERSONAL_CHART_COLOR,width:3,dashStyle:'Dash',zIndex:8});
  chart.personalSalaryTag=chart.renderer.label(`My salary ${money(state.salary,0)}`,0,0,'rect')
   .attr({fill:'#07323b',stroke:PERSONAL_CHART_COLOR,'stroke-width':1,padding:5,r:4,zIndex:10})
   .css({color:'#eaffff',fontWeight:'bold',fontSize:'12px'})
   .add();
  positionPersonalLabel(chart);
 }
}

function rowFor(table){if(!state||!table)return;const tbody=table.tBodies?.[0];if(!tbody||tbody.querySelector('.personal-row'))return;const tr=tbody.insertRow(0);tr.className='personal-row';const cells=table.tHead?.rows?.[0]?.cells?.length||0;const name=escape(state.agency),cls=escape(classificationWithPoint(state)),annual=state.salary;
if(table.id==='fortnightSalaryTable'&&cells>=8){tr.innerHTML=`<td></td><td>My salary — ${name}</td><td>${cls}</td><td style="text-align:right">${money(annual)}</td><td style="text-align:right">${money(annual*12/313/75,4)}</td><td style="text-align:right">${money(annual*12/313)}</td><td style="text-align:right">${money(annual*.154)}</td><td style="text-align:right">${money(annual*1.154)}</td>`;return;}
if(table.id==='compareSalaryTable'){const heads=[...table.tHead.rows[0].cells].map(c=>c.textContent.toLowerCase());tr.innerHTML=heads.map(h=>`<td>${h.includes('agency')?'My salary — '+name:h.includes('class')?cls:h.includes('hour')?money(annual*12/313/75,4):h.includes('fortnight')?money(annual*12/313):h.includes('super')&&!h.includes('package')?money(annual*.154):h.includes('package')?money(annual*1.154):h.includes('salary')?money(annual):'—'}</td>`).join('');}}
function syncTables(){if(syncing)return;syncing=true;try{for(const id of ['fortnightSalaryTable','compareSalaryTable']){const t=$(id);if(t){const current=t.querySelector('.personal-row');const signature=state?`${state.salary}|${state.agency}|${state.classification}|${state.paypoint}`:'';if(current?.dataset.signature!==signature){current?.remove();if(state){rowFor(t);const added=t.querySelector('.personal-row');if(added)added.dataset.signature=signature;}}}}for(const id of ['fortnightTableMount','compareTableMount']){const mount=$(id);if(!mount)continue;const old=mount.querySelector('.personal-empty');if(old&&(!state||mount.querySelector('table')))old.remove();if(state&&!mount.querySelector('table')&&!mount.querySelector('.personal-empty')){const d=document.createElement('div');d.className='personal-empty personal-summary';d.textContent=`My salary: ${money(state.salary)} (${classificationWithPoint(state)}). Select Chart 2 entities to see additional comparisons.`;mount.prepend(d);}}}finally{syncing=false;}}
function allOffers(){return [...fixedOffers,...customOffers];}
function addComparison(){if(customOffers.length>=12)return;const id=++serial;customOffers.push({id:`custom-${id}`,name:`Custom offer ${id}`,rates:[3.2,3,2.8],fixed:false});renderOfferControls();renderNegotiations();}
function renderOfferControls(){const mount=$('negOffers');if(!mount)return;mount.replaceChildren();allOffers().forEach(offer=>{
 const card=document.createElement('div');card.className='neg-offer-card';
 const header=document.createElement('div');header.className='neg-offer-heading';
 if(offer.fixed){const strong=document.createElement('strong');strong.textContent=offer.name;header.append(strong);const tag=document.createElement('span');tag.className='neg-fixed-label';tag.textContent='Fixed offer';header.append(tag);}
 else {const label=document.createElement('label');label.textContent='Scenario name';const name=document.createElement('input');name.type='text';name.value=offer.name;name.setAttribute('aria-label','Custom offer name');name.addEventListener('input',()=>{offer.name=name.value.trim()||'Custom offer';renderNegotiations();});header.append(label,name);const remove=document.createElement('button');remove.type='button';remove.className='btn-quiet';remove.textContent='Remove';remove.addEventListener('click',()=>{customOffers=customOffers.filter(x=>x!==offer);renderOfferControls();renderNegotiations();});header.append(remove);}
 card.append(header);const grid=document.createElement('div');grid.className='neg-offer-rates';offer.rates.forEach((rate,i)=>{const field=document.createElement('div');field.className='control';const label=document.createElement('label');label.textContent=`Year ${i+1} (%)`;const input=document.createElement('input');input.type='number';input.step='0.1';input.min='-99.99';input.value=rate;input.disabled=offer.fixed;input.setAttribute('aria-label',`${offer.name}, Year ${i+1} percentage`);if(!offer.fixed)input.addEventListener('input',()=>{offer.rates[i]=input.value===''?NaN:Number(input.value);renderNegotiations();});field.append(label,input);grid.append(field);});card.append(grid);mount.append(card);
 });}
function renderNegotiations(){const offers=allOffers(),tbody=$('negTable')?.tBodies?.[0],salaryBody=$('negSalaryTable')?.tBodies?.[0];if(!tbody||!salaryBody)return;tbody.replaceChildren();salaryBody.replaceChildren();const initial=1.032*1.03*1.028-1;
 const valid=offer=>offer.rates.every(r=>Number.isFinite(r)&&r>-100);
 offers.forEach(offer=>{const ok=valid(offer);const compound=ok?offer.rates.reduce((n,r)=>n*(1+r/100),1)-1:NaN;const cells=[offer.name,...offer.rates.map(r=>Number.isFinite(r)?r.toFixed(2)+'%':'—'),ok?(compound*100).toFixed(2)+'%':'—',ok?((compound-initial)*100>=0?'+':'')+((compound-initial)*100).toFixed(2)+' pp':'—'];const row=tbody.insertRow();if(offer.fixed)row.className='neg-offer-fixed-row';cells.forEach(c=>{const td=row.insertCell();td.textContent=c;});if(state&&ok){const values=[state.salary];offer.rates.forEach(r=>values.push(values.at(-1)*(1+r/100)));const sr=salaryBody.insertRow();if(offer.fixed)sr.className='neg-offer-fixed-row';[offer.name,...values.map(v=>money(v)),money(values.at(-1)-values[0])].forEach(c=>{const td=sr.insertCell();td.textContent=c;});}});
 $('negSalaryHint').textContent=state?`Based on ${classificationWithPoint(state)} — ${money(state.salary)} annual base salary. Paypoint progression is excluded.`:'Select a salary in the My salary section to see the dollar impact of each offer.';
 $('negSummary').textContent=`${offers.length} offer${offers.length===1?'':'s'} compared. Offer 1 compounded increase: ${(initial*100).toFixed(2)}%. Differences are percentage points relative to Offer 1.`;
 if(window.Highcharts){window.Highcharts.chart('negChart',{chart:{type:'column',backgroundColor:'transparent',height:360},title:{text:null},xAxis:{categories:['Year 1','Year 2','Year 3'],labels:{style:{color:'#e8ecf1'}}},yAxis:{title:{text:'Annual increase (%)',style:{color:'#e8ecf1'}},labels:{style:{color:'#e8ecf1'},format:'{value}%'}},legend:{itemStyle:{color:'#e8ecf1'}},tooltip:{shared:true,valueSuffix:'%',valueDecimals:2},series:offers.filter(valid).map(o=>({name:o.name,data:o.rates})),credits:{enabled:false}});}
}
function init(){if(!$('personalAgency'))return;option($('personalAgency'),'','Select entity');(window.agreements||[]).slice().sort((a,b)=>a.agency.localeCompare(b.agency)).forEach(a=>option($('personalAgency'),key(a),a.agency));$('personalAgency').addEventListener('change',refreshClasses);$('personalClass').addEventListener('change',refreshPoints);['personalPoint','personalManual','personalVisible'].forEach(id=>$(id).addEventListener(id==='personalManual'?'input':'change',update));$('personalClear').addEventListener('click',()=>{$('personalAgency').value='';$('personalManual').value='';refreshClasses();});$('negAdd').addEventListener('click',addComparison);$('negReset').addEventListener('click',()=>{customOffers=[];renderOfferControls();renderNegotiations();});$('chartDateSel')?.addEventListener('change',()=>{refreshPoints();setTimeout(updateCharts,100);});if(window.Highcharts){window.Highcharts.addEvent(window.Highcharts.Chart,'load',function(){if(['chartContainer','compareChartContainer'].includes(this.renderTo?.id))setTimeout(updateCharts,0);});window.Highcharts.addEvent(window.Highcharts.Chart,'redraw',function(){if(this.personalSalaryTag)positionPersonalLabel(this);});}const observer=new MutationObserver(()=>{if(!syncing)syncTables();});['fortnightTableMount','compareTableMount'].forEach(id=>{if($(id))observer.observe($(id),{childList:true,subtree:false});});refreshClasses();renderOfferControls();renderNegotiations();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
