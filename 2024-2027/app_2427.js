// Guard: ensure STEP_POINT_COLOR exists for both main and compare charts
if (typeof window !== 'undefined') {
  if (typeof window.STEP_POINT_COLOR === 'undefined') window.STEP_POINT_COLOR = '#ff8a00';
}
if (typeof STEP_POINT_COLOR === 'undefined') {
  var STEP_POINT_COLOR = (typeof window !== 'undefined' && window.STEP_POINT_COLOR) ? window.STEP_POINT_COLOR : '#ff8a00';
}


// === Label helpers ===
function prettyClassificationLabel(classification){
  // "APS6" -> "APS 6", "EL1" -> "EL 1", "EL2.1" -> "EL 2.1"
  if (!classification) return "";
  return classification.replace(/^([A-Z]+)(\d)/, "$1 $2").toUpperCase();
}

// === Effective date helpers ===
function todayISODate(){
  const d = new Date();
  const pad = n => String(n).padStart(2,'0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}
function getSelectedEffectiveDateString(){
  const el = document.getElementById('chartDateSel');
  const v = el && typeof el.value === 'string' ? el.value : '';
  return (v && /^\d{4}-\d{2}-\d{2}$/.test(v)) ? v : todayISODate();
}

// Show the currently selected effective date (right-aligned) above Chart 2 and the fortnightly table
function updateEffectiveDateDisplays(){
  const s = getSelectedEffectiveDateString();

  // Above Chart 2
  const chart2 = document.getElementById('compareChartContainer');
  if (chart2){
    let lab = document.getElementById('effectiveDateLabel_chart2');
    if (!lab){
      lab = document.createElement('div');
      lab.id = 'effectiveDateLabel_chart2';
      lab.style.textAlign = 'right';
      lab.style.marginTop = '0.25rem';
      lab.style.marginBottom = '0.25rem';
      lab.style.fontSize = '0.9rem';
      lab.style.color = '#bdbdbd';
      chart2.parentNode.insertBefore(lab, chart2);
    }
    lab.textContent = `Effective Date: ${s}`;
  }

  // Above Fortnightly table
  const mount = document.getElementById('fortnightTableMount');
  if (mount){
    let lab2 = document.getElementById('effectiveDateLabel_fortnight');
    if (!lab2){
      lab2 = document.createElement('div');
      lab2.id = 'effectiveDateLabel_fortnight';
      lab2.style.textAlign = 'right';
      lab2.style.marginTop = '0.25rem';
      lab2.style.marginBottom = '0.25rem';
      lab2.style.fontSize = '0.9rem';
      lab2.style.color = '#bdbdbd';
      mount.parentNode.insertBefore(lab2, mount);
    }
    lab2.textContent = `Effective Date: ${s}`;
  }
  // Above Quick Compare table (Table 2)
  const cmpMount = document.getElementById('compareTableMount');
  if (cmpMount){
    let lab3 = document.getElementById('effectiveDateLabel_compare');
    if (!lab3){
      lab3 = document.createElement('div');
      lab3.id = 'effectiveDateLabel_compare';
      lab3.style.textAlign = 'right';
      lab3.style.marginTop = '0.25rem';
      lab3.style.marginBottom = '0.25rem';
      lab3.style.fontSize = '0.9rem';
      lab3.style.color = '#bdbdbd';
      cmpMount.parentNode.insertBefore(lab3, cmpMount);
    }
    lab3.textContent = `Effective Date: ${s}`;
  }

}
function getSelectedEffectiveDateObj(){
  const s = getSelectedEffectiveDateString();
  // Force local midnight to avoid timezone shifting the date
  return new Date(s + 'T00:00:00');
}

function stepDisplayLabel(classification, point){
  if (!point) return "";
  if (point.kind === "step"){
    const s = point.step;
    if (typeof s === "number") return `${prettyClassificationLabel(classification)}.${s}`;
    return String(s);
  }
  if (point.kind === "min") return point.label || "Minimum guidepoint";
  if (point.kind === "max") return point.label || "Maximum guidepoint";
  return "";
}
// app.js — Clean salaries-focused renderer (4 columns)

(function(){

// Group + order agencies exactly like the table
function normTypeForGroup(a){
  try { return String(normEntityTypeForPGPA(a) || '').toLowerCase(); } catch(e){ return ''; }
}

function getAgencyGroupsForSelect(){
  const all = (window.agreements || []).filter(a => { const id = (typeof agencyKey === 'function') ? agencyKey(a) : (a && a.agencyId) || ''; return true; });

  // Sort A→Z by agency name
  all.sort((x,y) => (x.agency || '').localeCompare(y.agency || '', 'en-AU', { sensitivity:'base' }));

  const groups = { department: [], ncce: [], cce: [], company: [] };
  for (const a of all) {
    const t = normTypeForGroup(a);
    if (t === 'department') groups.department.push(a);
    else if (t === 'ncce') groups.ncce.push(a);
    else if (t === 'cce') groups.cce.push(a);
    else if (t === 'company') groups.company.push(a);
    else groups.department.push(a);
  }
  return groups;
}

function populateAgencyOptions(selectEl){
  // wipe
  selectEl.innerHTML = '';

  // top “blank” choice
  const blank = document.createElement('option');
  blank.value = '';
  blank.textContent = '— Select agency —';
  selectEl.appendChild(blank);

  const groups = getAgencyGroupsForSelect();

  function appendHeader(label){
    const hdr = document.createElement('option');
    hdr.value = '';
    hdr.textContent = `— ${label} —`;
    hdr.disabled = true;
    hdr.style.fontStyle = 'italic';
    selectEl.appendChild(hdr);
  }
  function appendGroup(arr){
    for (const a of arr) {
      const opt = document.createElement('option');
      opt.value = agencyKey(a);
      // Show just agency; switch to `${a.portfolio} – ${a.agency}` if preferred
      opt.textContent = a.agency || '';
      selectEl.appendChild(opt);
    }
  }appendGroup(groups.department);appendGroup(groups.ncce);appendGroup(groups.cce);appendGroup(groups.company);
}


function styleLikeTopSelect(el, fallbackId){
  const topClassSel = document.getElementById('chartClassSel');
  const topPortSel  = document.getElementById('chartPortfolioSel');
  const donor = (fallbackId === 'portfolio' ? (topPortSel || topClassSel) : topClassSel) || null;
  if (donor){
    el.className = donor.className;
    for (const a of donor.getAttributeNames()){
      if (a.startsWith('data-') && !el.hasAttribute(a)) el.setAttribute(a, donor.getAttribute(a));
    }
    const w = donor.style.width; if (w) el.style.width = w;
  }
}

  // --- Data ---
  if (!Array.isArray(window.agreements)) window.agreements = [];

  // --- Element refs ---
  const els = {
    search: document.getElementById('search'),
    clearSearch: document.getElementById('clearSearch'),
    portfolioFilter: document.getElementById('portfolioFilter'),
    entityFilter: document.getElementById('entityFilter'),
    extraStreamsFilter: document.getElementById('extraStreamsFilter'),
    extraClassFilter: document.getElementById('extraClassFilter'),
    sortOrder: document.getElementById('sortOrder'),
    exportCsv: document.getElementById('exportCsv'),
    toggleAll: document.getElementById('toggleAll'),
    tbody: document.querySelector('#eaTable tbody'),
    countTotal: document.getElementById('countTotal'),
    countShown: document.getElementById('countShown'),
    countStreamsYes: document.getElementById('countStreamsYes'),
    countStreamsNo: document.getElementById('countStreamsNo'),
    countExtraClassYes: document.getElementById('countExtraClassYes'),
    countExtraClassNo: document.getElementById('countExtraClassNo'),
backToTop: document.getElementById('backToTop'),
  };

  // --- Helpers ---
  // ---- Chart theming + colours ----
function getLinkColor() {
  // Try CSS var (if you have one), else computed link colour, else a safe orange
  const root = getComputedStyle(document.documentElement);
  const varCol = root.getPropertyValue('--link') || root.getPropertyValue('--accent');
  const probe = document.createElement('a'); probe.style.display='none'; document.body.appendChild(probe);
  const cssLink = getComputedStyle(probe).color; probe.remove();
  return (varCol && varCol.trim()) || cssLink || '#ff8a00';
}
const STEP_POINT_COLOR = 'orange'; // or your exact hex, e.g. '#ff8a00'

// Only use for known edge cases
const AGENCY_ID_ALIASES = new Map([
  // PM&C: ensure any variant resolves to your data key
  ["prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pm-c",
   "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc"],
  // If you ever had a variant with “the” or similar, add it here, e.g.:
  // ["prime-minister-and-cabinet|department-of-the-prime-minister-and-cabinet-pmc",
  //  "prime-minister-and-cabinet|department-of-prime-minister-and-cabinet-pmc"],
  // Attorney-General’s variants (kept for safety even though yours now works)
  ["attorney-general-s|attorney-general-s-department",
   "attorney-generals|attorney-generals-department"]
]);


// === Unified findPaySet (alias-aware) ===
function findPaySet(agencyId, classification, year, setName){
  const wantId   = resolveAgencyAlias(agencyId);      // e.g. pm-c → pmc
  const wantCls  = slugKey(classification);
  const wantSet  = setName ? slugKey(setName) : null;

  // `year` arg is historically a year number; we now also accept:
  // - Date object
  // - ISO date string (YYYY-MM-DD)
  // When a date is provided, pick the pay set whose effectiveFrom/To covers that date.
  const wantDateStr =
    (year instanceof Date && !isNaN(year)) ? year.toISOString().slice(0,10) :
    (typeof year === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(year)) ? year :
    null;

  const wantYear = wantDateStr ? Number(wantDateStr.slice(0,4)) : Number(year);

  const pool = (window.payRates || []).filter(r =>
    resolveAgencyAlias(r.agencyId) === wantId &&
    slugKey(r.classification) === wantCls &&
    (wantSet ? slugKey(r.setName) === wantSet : true)
  );

  if (!pool.length) return null;

  // Prefer exact year, then next year, else first available
  const chosen = (()=>{
    if (wantDateStr){
      // Prefer the set whose effective window contains the selected date
      const inWindow = pool.filter(r => {
        const from = (r.effectiveFrom || '').slice(0,10);
        const to   = (r.effectiveTo   || '').slice(0,10);
        if (from && wantDateStr < from) return false;
        if (to && wantDateStr > to) return false;
        return true;
      });

      if (inWindow.length){
        // If multiple match, choose the most recent effectiveFrom
        inWindow.sort((a,b)=> String(b.effectiveFrom||'').localeCompare(String(a.effectiveFrom||'')));
        return inWindow[0];
      }

      // If none match, fall back to closest past effectiveFrom (latest <= date), else earliest future
      const past = pool.filter(r => (r.effectiveFrom||'') && String(r.effectiveFrom).slice(0,10) <= wantDateStr)
                       .sort((a,b)=> String(b.effectiveFrom||'').localeCompare(String(a.effectiveFrom||'')));
      if (past.length) return past[0];

      const future = pool.filter(r => (r.effectiveFrom||'') && String(r.effectiveFrom).slice(0,10) > wantDateStr)
                         .sort((a,b)=> String(a.effectiveFrom||'').localeCompare(String(b.effectiveFrom||'')));
      if (future.length) return future[0];
    }

    // Legacy year-based fallback
    return pool.find(r => Number(r.year) === wantYear) ||
           pool.find(r => Number(r.year) === wantYear + 1) ||
           pool[0];
  })();


  if (!chosen) return null;

  // Sort points so min/base first, steps in order, max/top last
  const sortPoints = pts => [...(pts||[])].sort((a,b)=>{
    const rank = p => p?.kind === "base" || p?.kind === "min" ? 0
               : p?.kind === "step" ? (p.step||0)
               : p?.kind === "top"  || p?.kind === "max" ? 9998
               : 9999;
    return rank(a) - rank(b);
  });

  return { ...chosen, points: sortPoints(chosen.points || []) };
}




function resolveAgencyAlias(id){ 
  if (id == null) return id;
  const parts = String(id).split("|");
  const p  = slugKey(parts[0] || "");
  const ag = slugKey(parts[1] || "");
  const key = `${p}|${ag}`;
  return AGENCY_ID_ALIASES.get(key) || key;
}


// Map entity type -> dumbbell colour
function colorForEntityType(a){
  // Special-case: Parliamentary Departments are not a portfolio; color them like NCCE.
  // We detect them by the agencyId/slug prefix: "parliamentary-departments-not-a-portfolio|"
  try {
    const id = (typeof a === 'string')
      ? a
      : (a?.agencyId || (typeof agencyKey === 'function' ? agencyKey(a) : "")) || "";
    if (String(id).startsWith("parliamentary-departments-not-a-portfolio|")) {
      return '#ccccff'; // NCCE colour
    }
  } catch (e) { /* fall through */ }

  const t = normEntityTypeForPGPA(a);
  if (t === 'ncce')   return '#ccccff';
  if (t === 'cce')    return '#aae1c2';
  if (t === 'company')return '#f9eeba';
  // Departments (and anything else): default department color
  return 'purple';
}
// Expose palette globally so compare chart can reuse exact colours
if (typeof window !== 'undefined') window.colorForEntityType = window.colorForEntityType || colorForEntityType;


// === Classification ordering (APS1..APS6, EL1, EL2, EL2.1, EL2.2, SESx) ===
function classificationRank(level) {
  if (!level) return 999;
  const s = String(level).trim().toLowerCase();

  // Fast paths for common levels
  if (s === 'aps1') return 1;
  if (s === 'aps2') return 2;
  if (s === 'aps3') return 3;
  if (s === 'aps4') return 4;
  if (s === 'aps5') return 5;
  if (s === 'aps6') return 6;
  if (s === 'el1')  return 7;
  if (s === 'el2')  return 8;
  if (s === 'el2.1' || s === 'el2-1') return 9;   // dotted/slugged
  if (s === 'el2.2' || s === 'el2-2') return 10;

  // Generic fallback: APS < EL < SES; numeric (and optional .x) is respected
  const m = s.match(/^(aps|el|ses)(\d+(?:[.-]\d+)?)$/);
  if (m) {
    const base = { aps: 0, el: 10, ses: 20 }[m[1]] ?? 30;
    const num = Number(m[2].replace('-', '.'));
    return base + (isFinite(num) ? num : 0);
  }
  return 999;
}

function displayClassification(s) {
  const raw = (s ?? '').toString().trim();
  // normalise hyphen to dot for subgrades, then format
  const t = raw.replace(/-/g, '.').toLowerCase();
  // e.g. aps6 -> APS6, el2.1 -> EL2.1, ses3 -> SES3
  return t.replace(/^([a-z]+)(\d+(?:\.\d+)?)$/, (_, k, n) => k.toUpperCase() + n);
}

  // === MULTI-CLASSIFICATION HELPERS ===
function listAgencyClassifications(agencyId){
  const want = slugKey(agencyId);
  const seen = new Set();
  for (const r of (window.payRates || [])){
    if (slugKey(r.agencyId) === want) seen.add(slugKey(r.classification));
  }
  // keep a sensible order: APS1..APS6, EL1..EL2, SES.. (any others alphabetically after)
  const order = ["aps1","aps2","aps3","aps4","aps5","aps6","el1","el2","el2.1","el2.2","ses1","ses2","ses3"];
  return Array.from(seen).sort((a,b)=>{
    const ia = order.indexOf(a), ib = order.indexOf(b);
    if (ia !== -1 || ib !== -1) return (ia===-1?99:ia) - (ib===-1?99:ib);
    return a.localeCompare(b);
  });
}

// Renders every classification found for the agency (this year vs next)
function renderPayRatesPanel(agencyId){
  const classes = listAgencyClassifications(agencyId);
  if (!classes.length) return "";
  let out = '<section class="payrates-multi">';
  for (const c of classes){
    const html = renderPayRatesTable(agencyId, c); // pass the raw token (e.g., "el2-1" or "EL2.1")
    if (html) out += html;
  }
  out += "</section>";
  return out;
}

  const ENTITY_LABEL = {
    department: "DEPARTMENT",
    ncce: "NCCE",
    cce: "CCE",
    company: "Company"
  };
  function link(href, text){
    const a = document.createElement("a");
    a.href = href || "#";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = text || (href || "");
    return a;
  }
  function slugify(s){
    return (s||"").toString().normalize("NFKD")
      .replace(/[^\w\s-]/g,"")
      .trim().replace(/\s+/g,"-").toLowerCase();
  }
  function anchorFor(a){
    return `entry-${slugify(a.portfolio)}-${slugify(a.agency)}`;
  }
  
  // === PAY CHART HELPERS ===

function normaliseAgencyIdForCompare(id){
  // apply slugKey, then drop "-the-" in the agency half if present
  const s = slugKey(id);
  if (!s.includes('|')) return s;
  const [port, ag] = s.split('|');
  return `${port}|${stripStopWordsFromAgencySlug(ag)}`;
}

function buildPortfolioPaySeries(portfolioName, classification){
  const effDate = getSelectedEffectiveDateString();
  const allInPortfolio = (window.agreements || []).filter(a => (a.portfolio || "") === portfolioName);

  // Force PGPA order for the chart, independent of table state
  const ordered = allInPortfolio.slice();
  if (typeof comparePGPA === 'function') ordered.sort(comparePGPA);

  const rows = [];
  for (const a of ordered) {
    const id = agencyKey(a);
    const pay = findPaySet(id, classification, effDate);
    const __ov = (pay && pay.agencyClassification) || '';
    const __classBase = (__ov && /^[A-Za-z]{1,4}\d{1,2}$/i.test(__ov)) ? __ov.toUpperCase() : classification;
    if (!pay || !pay.points || !pay.points.length) continue;

    const minPoint = pay.points.find(p => p.kind === "min");
    const maxPoint = pay.points.find(p => p.kind === "max");
    const steps    = pay.points.filter(p => p.kind === "step");

    const minVal = minPoint ? minPoint.rate : Math.min(...steps.map(s => s.rate));
    const maxVal = maxPoint ? maxPoint.rate : Math.max(...steps.map(s => s.rate));

    rows.push({
      a,
      agency: a.agency,
      color: colorForEntityType(a),
      min: Number(minVal),
      max: Number(maxVal),

      stepPairs: [
        ...(minPoint ? [{ rate: Number(minPoint.rate), label: stepDisplayLabel(__classBase, { kind: "min",  label: minPoint.label }) }] : []),
        ...steps.map(s => ({ rate: Number(s.rate), label: stepDisplayLabel(__classBase, { kind: "step", step: s.step }) })),
        ...(maxPoint ? [{ rate: Number(maxPoint.rate), label: stepDisplayLabel(__classBase, { kind: "max",  label: maxPoint.label }) }] : [])
      ],
    
      
      stepVals: [
        ...(minPoint ? [Number(minPoint.rate)] : []),
        ...steps.map(s => Number(s.rate)),
        ...(maxPoint ? [Number(maxPoint.rate)] : []),
      ],
      stepPairs: [
        ...(minPoint ? [{ rate: Number(minPoint.rate), label: stepDisplayLabel(__classBase, { kind: "min", label: minPoint.label }) }] : []),
        ...steps.map(s => ({ rate: Number(s.rate), label: stepDisplayLabel(__classBase, { kind: "step", step: s.step }) })),
        ...(maxPoint ? [{ rate: Number(maxPoint.rate), label: stepDisplayLabel(__classBase, { kind: "max", label: maxPoint.label }) }] : []),
      ],
    });
  }

  const categories = rows.map(r => r.agency);

  // Force colours per point for dumbbell
  const dumbbellData = rows.map(r => ({
    low: r.min,
    high: r.max,
    color: r.color,            // fallback
    connectorColor: r.color,   // line between ends
    lowColor: r.color,         // left end
    highColor: r.color         // right end
  }));

  // Force orange markers for steps
  const scatterData = rows.flatMap((r, i) =>
    (r.stepPairs || []).map(sp => ({
      x: i,
      y: Number(sp.rate),
      name: sp.label,
      stepLabel: sp.label,
      marker: { radius: 7, symbol: 'circle', lineColor: STEP_POINT_COLOR, fillColor: STEP_POINT_COLOR }
    }))
  );
return { categories, dumbbellData, scatterData };

}

function renderPortfolioPayChart(opts = {}){
  const classSel = document.getElementById("chartClassSel");
  const scopeSel = document.getElementById("chartScopeSel");
  const portSel  = document.getElementById("chartPortfolioSel");

  const classification = (opts.classification || classSel?.value || "APS6");
  const scope          = (opts.scope || scopeSel?.value || "depts");
  const portfolio      = (opts.portfolio || portSel?.value || "Treasury");

  // Build data per scope
  const data = scope === 'depts'
    ? buildDepartmentsPaySeries(classification)
    : buildPortfolioPaySeries(portfolio, classification);

  const { categories, dumbbellData, scatterData } = data;
  const container = document.getElementById("chartContainer");
  if (!container) return;

  if (!categories.length){
    container.innerHTML = `<div class="muted" style="padding:1rem">No pay-rate data for ${classification}${scope==='depts' ? ' (Departments)' : ` in ${portfolio}` }.</div>`;
    return;
  }

  Highcharts.chart(container, {
    chart: {
      type: 'dumbbell',
      inverted: true,
      height: Math.max(420, 28 * categories.length + 160),
      backgroundColor: 'transparent' // blend with page
    },
    title: { text: null },
    xAxis: {
      categories,
      title: { text: null },
      labels: { style: { color: '#fff' } },
      lineColor: 'rgba(255,255,255,0.25)',
      tickColor: 'rgba(255,255,255,0.25)'
    },
    yAxis: {
      title: { text: 'Annual base salary (AUD)', style: { color: '#fff' } },
      labels: {
        style: { color: '#fff' },
        formatter: function(){ return new Intl.NumberFormat('en-AU').format(this.value); }
      },
      gridLineColor: 'rgba(255,255,255,0.12)'
    },
    legend: {
      enabled: true,
      itemStyle: { color: '#fff' }
    },
    tooltip: { headerFormat: '', backgroundColor: 'rgba(0,0,0,0.85)', borderColor: 'rgba(255,255,255,0.2)', style: { color: '#fff' }, 
      shared: false,
      backgroundColor: 'rgba(0,0,0,0.85)',
      borderColor: 'rgba(255,255,255,0.2)',
      style: { color: '#fff' },
      pointFormatter: function () {
        const nf = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });
        if (this.low != null && this.high != null) {
          return `<span style="color:${this.color}">●</span> Range: <b>${nf.format(this.low)}</b> – <b>${nf.format(this.high)}</b><br/>`;
        }
        if (this.y != null) {
          const lbl = (this.point && (this.point.stepLabel || this.point.name)) ? (this.point.stepLabel || this.point.name) : "";
          return `<b>${lbl}</b><br/><span style="color:${this.color}">●</span> <b>${nf.format(this.y)}</b><br/>`;
        }
        return '';
      }
    },
  series: [
    {
      name: 'Min–Max',
      type: 'dumbbell',
      colorByPoint: true,  // use point colors
      data: dumbbellData,
      connectorWidth:3,
      lineWidth: 5,
      // Make sure markers at the ends don't pick a default palette
      lowColor: undefined,
      highColor: undefined
    },
    {
      name: 'Steps',
      type: 'scatter',
      data: scatterData,
      
      color: STEP_POINT_COLOR,
      marker: {                           // series default
        radius: 7,
        symbol: 'circle',
        fillColor: STEP_POINT_COLOR,
        lineColor: STEP_POINT_COLOR
      }
    }
  ],

    accessibility: { enabled: true },
    credits: { enabled: false }
  });
}

  // === PAY RATES HELPERS (APS6 only, this-year vs next-year) ===
function slugKey(s){
  return (s ?? "")
    .toString()
    .trim()
    .toLowerCase()
    // normalize possessives ’s / 's -> s
    .replace(/’s\b/g, "s")
    .replace(/'s\b/g, "s")
    // then do the usual slugging
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function agencyKey(a){
  const p  = slugKey(a.portfolio);
  let ag   = slugKey(a.agency);
  return `${p}|${ag}`;
}

function renderPayRatesTable(agencyId, classification){
  // For the large listing we want columns ordered by oldest effectiveFrom first.
  const wantId  = resolveAgencyAlias(agencyId);
  const wantCls = slugKey(classification);

  const pool = (window.payRates || [])
    .filter(r =>
      resolveAgencyAlias(r.agencyId) === wantId &&
      slugKey(r.classification) === wantCls
    )
    .slice()
    .sort((a,b) => {
      const af = String(a.effectiveFrom || '');
      const bf = String(b.effectiveFrom || '');
      if (af && bf) return af.localeCompare(bf); // ISO sorts lexicographically
      if (af) return -1;
      if (bf) return 1;
      // fallback to year if effectiveFrom missing
      return Number(a.year||0) - Number(b.year||0);
    });

  if (!pool.length) return "";

  // take the first 2 sets (oldest first, then next oldest)
  const left = pool[0] || null;
  const right = pool[1] || null;

  // Sort points so min/base first, steps in order, max/top last
  const sortPoints = pts => [...(pts||[])].sort((a,b)=>{
    const rank = p => p?.kind === "base" || p?.kind === "min" ? 0
               : p?.kind === "step" ? (p.step||0)
               : p?.kind === "top"  || p?.kind === "max" ? 9998
               : 9999;
    return rank(a) - rank(b);
  });

  const L = left  ? { ...left,  points: sortPoints(left.points  || []) } : null;
  const R = right ? { ...right, points: sortPoints(right.points || []) } : null;

  if (!L && !R) return "";

  const __agencyClassOverride = ((L && L.agencyClassification) || (R && R.agencyClassification) || '');
  const __classBase = (__agencyClassOverride && /^[A-Za-z]{1,4}\d{1,2}$/i.test(__agencyClassOverride))
    ? __agencyClassOverride.toUpperCase()
    : classification;

  const labelOf = p => stepDisplayLabel(__classBase, p);
  const keyOf = p => (p.kind === "step" ? `step-${p.step}` : p.kind);

  const keys = new Map(); // preserve order
  for (const p of (L?.points || [])) keys.set(keyOf(p), labelOf(p));
  for (const p of (R?.points || [])) if (!keys.has(keyOf(p))) keys.set(keyOf(p), labelOf(p));

  const lMap = Object.fromEntries((L?.points || []).map(p => [keyOf(p), p.rate]));
  const rMap = Object.fromEntries((R?.points || []).map(p => [keyOf(p), p.rate]));

  const AUD = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });

  const fmtEff = (v) => {
    const s = String(v || '').slice(0,10);
    if (!s) return '';
    const d = new Date(s + 'T00:00:00Z');
    if (isNaN(d)) return s;
    return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const hdrL = (L && L.effectiveFrom) ? fmtEff(L.effectiveFrom) : (L && L.year ? String(L.year) : "");
  const hdrR = (R && R.effectiveFrom) ? fmtEff(R.effectiveFrom) : (R && R.year ? String(R.year) : "");

  let rows = "";
  for (const [k, label] of keys.entries()){
    const lv = lMap[k] != null ? AUD.format(lMap[k]) : "—";
    const rv = rMap[k] != null ? AUD.format(rMap[k]) : "—";
    rows += `<tr><th scope="row">${label}</th><td>${lv}</td><td>${rv}</td></tr>`;
  }

  const disp = __agencyClassOverride ? `${__agencyClassOverride} (${displayClassification(classification)})` : displayClassification(classification);

  return `
    <section class="payrates">
      <h3 class="payrates-title">Pay rates - ${disp}</h3>
      <div class="table-wrap">
        <table class="payrates-table"><colgroup><col style="width:34%"><col style="width:33%"><col style="width:33%"></colgroup>
          <thead><tr><th>Guidepoint</th><th>${hdrL}</th><th>${hdrR}</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}
  // END NEW

  // Sorting
  function cmp(a,b){ return a.localeCompare(b, undefined, {sensitivity:"base"}); }
  function compareAZ(a,b){ return cmp(a.agency, b.agency); }
  function isParliamentaryPortfolio(name){
    const norm = (name || "").toString().trim().toLowerCase();
    return norm === "parliamentary departments (not a portfolio)";
  }
// Put this near your other helpers:
function normEntityTypeForPGPA(a){
  const t = ((a.entityType || "").toString().trim().toLowerCase()).replace(/[^a-z]/g, "");
  const name = (a.agency || "").toString().trim().toLowerCase();

  // Treat departments correctly:
  //  - explicit department types
  //  - names that start with "Department of ..."
  //  - names that include the word "department" anywhere (e.g., "Attorney-General's Department")
  if (t.startsWith("dept") || name.startsWith("department of ") || /\bdepartment\b/.test(name)) {
    return "department";
  }

  // Normalise NCCCE variants/typos
  if (t === "nccce" || t === "ncce" || t === "nccc" || t === "nce") return "ncce";

  // Pass through known buckets
  if (t === "cce" || t === "company") return t;

  // Fallback
  return t;
}

function pgpaGroupIndex(a){
  const t = normEntityTypeForPGPA(a);
  if (t === "department") return 1;
  if (t === "ncce")     return 2;
  if (t === "cce")       return 3;
  if (t === "company")   return 4;
  return 9; // unknowns to the end
}

function comparePGPA(a,b){
  // Parliamentary last (as you requested earlier)
  const pa = (a.portfolio || "").trim().toLowerCase() === "parliamentary departments (not a portfolio)" ? 1 : 0;
  const pb = (b.portfolio || "").trim().toLowerCase() === "parliamentary departments (not a portfolio)" ? 1 : 0;
  if (pa !== pb) return pa - pb;

  // Portfolio A–Z
  const p = (a.portfolio || "").localeCompare((b.portfolio || ""), undefined, {sensitivity:"base"});
  if (p !== 0) return p;

  // Group order within portfolio
  const g = pgpaGroupIndex(a) - pgpaGroupIndex(b);
  if (g !== 0) return g;

  // Agency A–Z
  return (a.agency || "").localeCompare((b.agency || ""), undefined, {sensitivity:"base"});
}

function classificationRank(level) {
  if (!level) return 999;
  const m = level.toLowerCase().match(/(aps|el|ses)(\d+(\.\d+)?)/);
  if (!m) return 999;
  const base = { aps: 0, el: 10, ses: 20 }[m[1]] || 0;
  return base + parseFloat(m[2]);
}

function sortAgreements(arr){ const mode = els.sortOrder?.value || "az"; return (mode === "pgpa") ? arr.slice().sort(comparePGPA) : arr.slice().sort(compareAZ); }

  // Filters
  function uniquePortfolios(){
    return Array.from(new Set((window.agreements||[]).map(a => a.portfolio).filter(Boolean)))
      .sort((a,b)=>a.localeCompare(b));
  }
// ---- Chart portfolio helpers ----

// Returns the list of portfolios in agreements
function listAllPortfolios(){
  const ports = Array.from(new Set((window.agreements||[]).map(a => a.portfolio).filter(Boolean)));
  ports.sort((a,b) => a.localeCompare(b));
  return ports;
}

// Does this portfolio have at least one agency with pay for the selected classification/year?
function portfolioHasPay(portfolioName, classification){
  const year = new Date().getFullYear();
  const agencies = (window.agreements||[]).filter(a => (a.portfolio||"") === portfolioName);
  for (const a of agencies){
    const pay = findPaySet(agencyKey(a), classification, year);
    if (pay && pay.points && pay.points.length) return true;
  }
  return false;
}

// Populate the portfolio dropdown, optionally filtering to only those with pay for the selected class
function populateChartPortfolioOptions(classification, preferred){
  const sel = document.getElementById("chartPortfolioSel");
  if (!sel) return;

  const previous = preferred ?? sel.value;  // try to keep what user had
  sel.innerHTML = ""; // clear

  // Build list of portfolios that have pay data for this class
  const ports = listAllPortfolios().filter(p => portfolioHasPay(p, classification));

  // Rebuild options
  for (const p of ports){
    const opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    sel.appendChild(opt);
  }

  // Selection logic:
  // 1) keep previous if it still exists
  if (previous && ports.includes(previous)) {
    sel.value = previous;
    return;
  }

  // 2) prefer Treasury if present
  if (ports.includes("Treasury")) {
    sel.value = "Treasury";
    return;
  }

  // 3) otherwise pick first available (or leave empty)
  if (sel.options.length) sel.selectedIndex = 0;
}

  function uniqueEntityTypes(){
    const vals = Array.from(new Set((window.agreements||[]).map(a => (a.entityType||"").toLowerCase()).filter(Boolean)));
    const order = ["department","ncce","cce","company"];
    return vals.sort((a,b)=>{
      const ia = order.indexOf(a), ib = order.indexOf(b);
      if (ia !== -1 || ib !== -1) return (ia===-1?99:ia) - (ib===-1?99:ib);
      return a.localeCompare(b);
    });
  }
  function populatePortfolioFilter(){
    const s = els.portfolioFilter; if(!s) return;
    s.querySelectorAll('option:not([value="all"])').forEach(o=>o.remove());
    for (const p of uniquePortfolios()){
      const o = document.createElement("option");
      o.value = p; o.textContent = p; s.appendChild(o);
    }
  }
  function populateEntityFilter(){
    const s = els.entityFilter; if(!s) return;
    s.querySelectorAll('option:not([value="all"])').forEach(o=>o.remove());
    for (const v of uniqueEntityTypes()){
      const o = document.createElement("option");
      o.value = v; o.textContent = v.toUpperCase(); s.appendChild(o);
    }
  }

  function anyCollapsed(){ return Array.from(els.tbody.querySelectorAll("tr.desc-row")).some(r=>r.hidden); }
  function setToggleAllLabel(){
    if (!els.toggleAll) return;
    const collapsed = anyCollapsed();
    els.toggleAll.textContent = collapsed ? "Expand all details" : "Collapse all details";
    els.toggleAll.setAttribute("aria-expanded", String(!collapsed));
  }
  function toggleAll(){
    const rows = Array.from(els.tbody.querySelectorAll("tr.desc-row"));
    const makeOpen = anyCollapsed(); // if any collapsed, open all; else close all
    for (const r of rows){ r.hidden = !makeOpen; }
    ensureExpanderRotationCSS();
    for (const btn of els.tbody.querySelectorAll("button.expander")){
      btn.setAttribute("aria-expanded", String(makeOpen));
      btn.classList.toggle("is-open", makeOpen);
    }
    setToggleAllLabel();
  }

  // --- Core render ---
  function render(){
    ensureStreamTagCSS();
    const data = Array.isArray(window.agreements) ? window.agreements : [];
    const q = (els.search?.value || "").toString().trim().toLowerCase();
    const selPortfolio = (els.portfolioFilter?.value || "all").toString().trim();
    const selEntity = (els.entityFilter?.value || "all").toString().trim().toLowerCase();
    const selStreams = (els.extraStreamsFilter?.value || "all").toString().trim().toLowerCase();
    const selExtraClass = (els.extraClassFilter?.value || "all").toString().trim().toLowerCase();

    const filtered = data.filter(a => {
      const hay = [a.portfolio, a.agency, a.name, (a.eaHeading||"")].join(" ").toLowerCase();
      if (q && !hay.includes(q)) return false;
      if (selPortfolio !== "all" && (a.portfolio||"").toString().trim() !== selPortfolio) return false;
      if (selEntity !== "all" && (a.entityType||"").toString().trim().toLowerCase() !== selEntity) return false;
      const hasStreams = !!(a.extraStreams && String(a.extraStreams).trim());
      const hasExtraClass = !!(a.extraClass && String(a.extraClass).trim());
      if (selStreams === "yes" && !hasStreams) return false;
      if (selStreams === "no" && hasStreams) return false;
      if (selExtraClass === "yes" && !hasExtraClass) return false;
      if (selExtraClass === "no" && hasExtraClass) return false;
      return true;
    });

    const sorted = sortAgreements(filtered);

    const total = data.length;
    if (els.countTotal) els.countTotal.textContent = String(total);
    if (els.countShown) els.countShown.textContent = String(sorted.length);

    // Extra counts (reflect current filtered/shown set)
    const shownTotal = sorted.length;
    const streamsYes = sorted.reduce((n,a)=> n + ((a.extraStreams && String(a.extraStreams).trim()) ? 1 : 0), 0);
    const classYes = sorted.reduce((n,a)=> n + ((a.extraClass && String(a.extraClass).trim()) ? 1 : 0), 0);
    if (els.countStreamsYes) els.countStreamsYes.textContent = String(streamsYes);
    if (els.countStreamsNo) els.countStreamsNo.textContent = String(shownTotal);
    if (els.countExtraClassYes) els.countExtraClassYes.textContent = String(classYes);
    if (els.countExtraClassNo) els.countExtraClassNo.textContent = String(shownTotal);


    if (els.tbody) els.tbody.innerHTML = "";

    if (sorted.length === 0){
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = document.querySelector("#eaTable thead tr").children.length;
      td.className = "muted";
      td.textContent = "No results match your filters.";
      tr.appendChild(td);
      els.tbody.appendChild(tr);
      setToggleAllLabel();
      return;
    }

    const thCount = document.querySelector("#eaTable thead tr").children.length;

    for (const a of sorted){
      const tr = document.createElement("tr");
      const anchor = anchorFor(a);
      tr.id = anchor;

      // Portfolio
      const tdPortfolio = document.createElement("td");
      tdPortfolio.textContent = a.portfolio || "";

      // Agency (website link only)
      const tdAgency = document.createElement("td");
      const agencyLink = link(a.website, a.agency);
      tdAgency.appendChild(agencyLink);

      // Entity (tag + hover tooltip on the tag itself)
      const tdEntity = document.createElement("td");
      const entityWrap = document.createElement("span");
      entityWrap.className = "entity-cell";
      const entityText = document.createElement("span");
      entityText.className = "etag";
      entityText.textContent = ENTITY_LABEL[(a.entityType||"").toLowerCase()] || (a.entityType||"").toUpperCase();
      entityWrap.appendChild(entityText);
      attachEntityTooltip(entityWrap, a, entityText);
      tdEntity.appendChild(entityWrap);

// More salary streams (extraStreams)
const tdStreams = document.createElement("td");
const hasStreams = !!(a.extraStreams && String(a.extraStreams).trim());
const streamTag = document.createElement("span");
streamTag.className = hasStreams ? "badge yes" : "badge no";
streamTag.textContent = hasStreams ? "Yes" : "No";
tdStreams.appendChild(streamTag);


      // Expander

// Extra classifications (extraClass)
const tdExtraClass = document.createElement("td");
const hasExtraClass = !!(a.extraClass && String(a.extraClass).trim());
const classTag = document.createElement("span");
classTag.className = hasExtraClass ? "badge yes" : "badge no";
classTag.textContent = hasExtraClass ? "Yes" : "No";
tdExtraClass.appendChild(classTag);


      // Expander
      const tdExp = document.createElement("td");
      const btn = document.createElement("button");
      btn.className = "expander";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("title", "Toggle description");
      btn.textContent = "▶";
      tdExp.appendChild(btn);

      // Description row
      const trDesc = document.createElement("tr");
      trDesc.className = "desc-row";
      trDesc.hidden = true;
      const tdDesc = document.createElement("td");
      tdDesc.colSpan = thCount;
      const desc = document.createElement("div");
      desc.className = "desc-content";
      const parts = [];
      if (a.name){
        parts.push(`<p class="ea-head">Access the agreement: <a href="${a.eaUrl||'#'}" target="_blank" rel="noopener noreferrer">${a.name}</a></p>`);
      }
parts.push(a.description || "<p class='muted'></p>");
if (a.extraStreams && String(a.extraStreams).trim()){
  const streams = String(a.extraStreams).split(',').map(s => s.trim()).filter(Boolean);
  if (streams.length){
    parts.push('<div class="extra-streams"><p><strong>More salary streams:</strong></p><ul>' + streams.map(s => '<li>' + _esc(s) + '</li>').join('') + '</ul></div>');
  }
}

     // Add APS6 pay rates (this year vs next)
    // Add ALL classifications for this agency (this year vs next)
    const payPanel = renderPayRatesPanel(agencyKey(a));
    if (payPanel) parts.push(payPanel);
if (a.extraClass && String(a.extraClass).trim()){
  const cls = String(a.extraClass).split(',').map(s => s.trim()).filter(Boolean);
  if (cls.length){
    parts.push('<div class="extra-class"><p><strong>Extra classifications:</strong></p><ul>' + cls.map(s => '<li>' + _esc(s) + '</li>').join('') + '</ul></div>');
  }
}
if (a.issueLink && String(a.issueLink).trim()){
  const url = String(a.issueLink).trim();
  parts.push(
    '<div class="issue-link">' +
      '<p>There is an open issue related to these salary entries: <a class="btn" href="' + _esc(url) + '" target="_blank" rel="noopener noreferrer">Contribute to this issue</a></p>' +
    '</div>'
  );
}


      desc.innerHTML = parts.join("");
      normalizeZigZag(desc);
      tdDesc.appendChild(desc);
      trDesc.appendChild(tdDesc);

      // expand toggle
      btn.addEventListener("click", () => {
        ensureExpanderRotationCSS();
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!isOpen));
        btn.classList.toggle("is-open", !isOpen);
        trDesc.hidden = isOpen;
        setToggleAllLabel();
      });

      // append
      tr.append(tdPortfolio, tdAgency, tdEntity, tdStreams, tdExtraClass, tdExp);
      els.tbody.appendChild(tr);
      els.tbody.appendChild(trDesc);
    }

    setToggleAllLabel();
  }

  // --- CSV export (basic, optional) ---
  function exportCsv(){
    const data = Array.isArray(window.agreements) ? window.agreements : [];
    const header = ["Portfolio","Entity","Agency","Website","Agreement name","Agreement URL","Description"];
    const rows = data.map(a => [
      a.portfolio || "",
      (a.entityType || "").toUpperCase(),
      a.agency || "",
      a.website || "",
      a.name || "",
      a.eaUrl || "",
      (a.description || "").replace(/\s+/g," ").trim()
    ]);
    const csv = [header].concat(rows).map(r => r.map(v => {
      const s = (v ?? "").toString();
      return '"' + s.replaceAll('"','""') + '"';
    }).join(",")).join("\r\n");

    const blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "ea-salaries.csv";
    document.body.appendChild(a); a.click();
    URL.revokeObjectURL(url); a.remove();
  }

  function buildDepartmentsPaySeries(classification){
  const effDate = getSelectedEffectiveDateString();
  // Only departments
  const depts = (window.agreements || []).filter(a => normEntityTypeForPGPA(a) === 'department');

  // PGPA order (portfolios A–Z, then agencies A–Z)
  const ordered = depts.slice().sort(comparePGPA);

  const rows = [];
  for (const a of ordered) {
    const id = agencyKey(a);
    if (String(id).startsWith('parliamentary-departments-not-a-portfolio|')) continue;
    const pay = findPaySet(id, classification, effDate);
    if (!pay || !pay.points || !pay.points.length) continue;

    const minPoint = pay.points.find(p => p.kind === "min");
    const maxPoint = pay.points.find(p => p.kind === "max");
    const steps    = pay.points.filter(p => p.kind === "step");

    const minVal = minPoint ? minPoint.rate : Math.min(...steps.map(s => s.rate));
    const maxVal = maxPoint ? maxPoint.rate : Math.max(...steps.map(s => s.rate));

    rows.push({
      a,
      // Include portfolio to disambiguate similarly named departments (rare but safe)
      agency: `${a.agency}`,
      color: colorForEntityType(a), // for depts this will be near-white
      min: Number(minVal),
      max: Number(maxVal),

      stepPairs: [
        ...(minPoint ? [{ rate: Number(minPoint.rate), label: stepDisplayLabel(classification, { kind: "min",  label: minPoint.label }) }] : []),
        ...steps.map(s => ({ rate: Number(s.rate), label: stepDisplayLabel(classification, { kind: "step", step: s.step }) })),
        ...(maxPoint ? [{ rate: Number(maxPoint.rate), label: stepDisplayLabel(classification, { kind: "max",  label: maxPoint.label }) }] : []),
      ],
    
      stepVals: [
        ...(minPoint ? [Number(minPoint.rate)] : []),
        ...steps.map(s => Number(s.rate)),
        ...(maxPoint ? [Number(maxPoint.rate)] : []),
      ],
    });
  }

  const categories   = rows.map(r => r.agency);
  const dumbbellData = rows.map(r => ({ low: r.min, high: r.max, color: r.color }));
  const scatterData  = rows.flatMap((r, i) =>
    (r.stepPairs || []).map(sp => ({
      x: i,
      y: Number(sp.rate),
      name: sp.label,
      stepLabel: sp.label,
      color: STEP_POINT_COLOR,
      marker: { radius: 7, symbol: 'circle', lineColor: STEP_POINT_COLOR, fillColor: STEP_POINT_COLOR }
    }))
  );

  return { categories, dumbbellData, scatterData };
}

  function updateClearButton(){
    if(!els.clearSearch) return;
    // Ensure the clear button gets the correct styling in this page's CSS
    // (salary tool markup uses id="clearSearch" without a class)
    els.clearSearch.classList.add("clear-btn");
    els.clearSearch.hidden = !(els.search && els.search.value);
  }

  // --- UI helpers (tooltip, expander rotation, zig/zag HR normalization) ---
  function _esc(s){
    return String(s ?? "").replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }

  function ensureStreamTagCSS(){
  if (document.getElementById('streamTagCSS')) return;
  const st = document.createElement('style');
  st.id = 'streamTagCSS';
  st.textContent = `
    .stream-yes, .stream-no{
      display:inline-block;
      padding:0.15rem 0.45rem;
      border-radius:999px;
      font-weight:700;
      font-size:0.85rem;
      line-height:1.2;
    }
    .stream-yes{ background: rgba(0,128,0,0.18); color: #0a0; border:1px solid rgba(0,128,0,0.35); }
    .stream-no{  background: rgba(255,0,0,0.18); color: #f44; border:1px solid rgba(255,0,0,0.35); }
    .extra-streams ul{ margin:0.25rem 0 0.75rem 1.25rem; }
    .issue-link{ margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.14); }
  `;
  document.head.appendChild(st);
}

function ensureExpanderRotationCSS(){
    if (document.getElementById("expander-rotate-css")) return;
    const style = document.createElement("style");
    style.id = "expander-rotate-css";
    style.textContent = `
      button.expander.is-open{ transform: rotate(90deg); }
    `;
    document.head.appendChild(style);
  }

  function attachEntityTooltip(wrapEl, agencyObj, triggerEl){
    if (!wrapEl || !agencyObj) return;

    const trigger = triggerEl || wrapEl;

    // Make the trigger keyboard-focusable if it's a span (e.g. .etag)
    if (trigger && trigger.tagName === "SPAN" && !trigger.hasAttribute("tabindex")){
      trigger.setAttribute("tabindex", "0");
    }
    if (trigger) trigger.style.cursor = "help";

    const tip = document.createElement("div");
    tip.className = "tooltip";
    tip.hidden = true;

    const tipArrow = document.createElement("span");
    tipArrow.className = "tip";
    tip.appendChild(tipArrow);

    const entityKey = (agencyObj.entityType||"").toLowerCase();
    const entityLabel = ENTITY_LABEL[entityKey] || (agencyObj.entityType||"").toUpperCase();

    // Keep this tooltip focused on explaining the entity type (matches the older tool's intent)
    const entityDesc = ({
      department: "Department (a Department of State under the PGPA framework)",
      ncce: "Non-corporate Commonwealth entity",
      cce: "Corporate Commonwealth entity",
      company: "Commonwealth company"
    })[entityKey] || "";

    const html = `
      <div><strong>${_esc(entityLabel)}</strong></div>
      ${entityDesc ? `<div class="muted">${_esc(entityDesc)}</div>` : ""}
    `;
    const body = document.createElement("div");
    body.innerHTML = html;
    tip.appendChild(body);

    function show(){
      tip.hidden = false;

      // Position as a fixed overlay so it isn't clipped by overflow on the listing rows.
      const tRect = (trigger && trigger.getBoundingClientRect) ? trigger.getBoundingClientRect() : wrapEl.getBoundingClientRect();

      // Force a layout pass now that it's visible so we can size it.
      const tipRect = tip.getBoundingClientRect();

      const margin = 8;
      let left = tRect.left;
      // Clamp within viewport
      left = Math.max(margin, Math.min(left, window.innerWidth - tipRect.width - margin));

      // Prefer below; flip above if needed
      let top = tRect.bottom + 6;
      const fitsBelow = (top + tipRect.height + margin) < window.innerHeight;
      if (!fitsBelow){
        top = Math.max(margin, tRect.top - tipRect.height - 6);
      }
      tip.classList.toggle("top", !fitsBelow);

      tip.style.left = left + "px";
      tip.style.top = top + "px";
    }
    function hide(){ tip.hidden = true; }

    // Hover/focus on the entity tag itself (no separate ? button)
    trigger.addEventListener("mouseenter", show);
    trigger.addEventListener("mouseleave", hide);
    trigger.addEventListener("focus", show);
    trigger.addEventListener("blur", hide);

    // Allow click to pin/unpin on touch devices
    trigger.addEventListener("click", (e) => {
      // Don't interfere with real links if a link is used as trigger
      if (trigger.tagName === "A") return;
      e.preventDefault();
      tip.hidden ? show() : hide();
    });

    document.body.appendChild(tip);
    tip.style.position = "fixed";
    tip.style.zIndex = "9999";
  }

  function normalizeZigZag(container){
    if (!container) return;
    const hrs = Array.from(container.querySelectorAll("hr.zigzag, hr.zig-zag, hr.zig_zag"));
    if (!hrs.length) return;
    hrs.forEach((hr, idx) => {
      hr.classList.remove("zigzag", "zig-zag", "zig_zag");
      hr.classList.add(idx % 2 === 0 ? "zig" : "zag");
    });
  }

  function onScroll(){
    const scrolled = window.scrollY || document.documentElement.scrollTop || 0;
    if (!els.backToTop) return;
    if (scrolled > 600){ els.backToTop.classList.add("show"); els.backToTop.hidden=false; }
    else { els.backToTop.classList.remove("show"); els.backToTop.hidden=true; }
  }

  // --- Init ---
  document.addEventListener("DOMContentLoaded", () => {
    populatePortfolioFilter();
    populateEntityFilter();
    updateClearButton();
    els.search?.addEventListener("input", () => { updateClearButton(); render(); });
    els.clearSearch?.addEventListener("click", () => { if(els.search){ els.search.value = ""; updateClearButton(); els.search.focus(); render(); } });
    els.portfolioFilter?.addEventListener("change", render);
    els.entityFilter?.addEventListener("change", render);
    els.extraStreamsFilter?.addEventListener("change", render);
    els.extraClassFilter?.addEventListener("change", render);
    els.sortOrder?.addEventListener("change", render);
    els.exportCsv?.addEventListener("click", exportCsv);
    els.toggleAll?.addEventListener("click", toggleAll);
    els.backToTop?.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
    window.addEventListener("scroll", onScroll, {passive:true});

    render();
    onScroll();

    const classSel = document.getElementById("chartClassSel");
    
    // Effective date control (drives both charts)
    const dateSel = document.getElementById("chartDateSel");
    if (dateSel) {
      // Default to today's date if empty
      if (!dateSel.value) dateSel.value = todayISODate();
      updateEffectiveDateDisplays();
      dateSel.addEventListener("change", () => {
        renderPortfolioPayChart({
          classification: classSel?.value,
          scope: scopeSel?.value,
          portfolio: portSel?.value
        });
        if (typeof window.__renderCompareChart === 'function') window.__renderCompareChart();
        if (typeof window.__renderFortnightlyTable === 'function') window.__renderFortnightlyTable();
        updateEffectiveDateDisplays();
      });
    }

const scopeSel = document.getElementById("chartScopeSel");
    const portSel  = document.getElementById("chartPortfolioSel");

    function syncPortfolioEnable() {
      const isDepts = (scopeSel?.value === 'depts');
        if (portSel) {
          portSel.disabled = isDepts;
          portSel.style.opacity = isDepts ? 0.5 : 1;
        }
      }

    // Populate portfolios for the default class
    populateChartPortfolioOptions(classSel?.value || "APS6");

    function syncPortfolioEnable() {
      const isDepts = (scopeSel?.value === 'depts');
      if (portSel) {
        portSel.disabled = isDepts;
        portSel.style.opacity = isDepts ? 0.5 : 1;
      }
    }

  populateChartPortfolioOptions(classSel?.value || "APS6", portSel?.value);

  classSel?.addEventListener("change", () => {
    // Only repopulate when scope is "portfolio"
    if (scopeSel?.value === 'portfolio') {
      populateChartPortfolioOptions(classSel.value, portSel?.value);
    }
    renderPortfolioPayChart({
      classification: classSel.value,
      scope: scopeSel?.value,
      portfolio: portSel?.value
    });
  });

  scopeSel?.addEventListener("change", () => {
    syncPortfolioEnable();
    if (scopeSel.value === 'portfolio') {
      // Ensure options exist and keep current selection if possible
      populateChartPortfolioOptions(classSel?.value || "APS6", portSel?.value);
    }
    renderPortfolioPayChart({
      classification: classSel?.value,
      scope: scopeSel.value,
      portfolio: portSel?.value
    });
  });

  portSel?.addEventListener("change", () => {
    renderPortfolioPayChart({
      classification: classSel?.value,
      scope: scopeSel?.value,
      portfolio: portSel.value
    });
  });

  // Default view
  syncPortfolioEnable();
  renderPortfolioPayChart({
    classification: classSel?.value,
    scope: scopeSel?.value,
    portfolio: portSel?.value
  });
});

  document.addEventListener("DOMContentLoaded", () => {
  // ... your existing init stuff ...
  const classSel = document.getElementById("chartClassSel");
  classSel?.addEventListener("change", () => renderPortfolioPayChart({ classification: classSel.value }));
  renderPortfolioPayChart({ classification: classSel?.value || "APS6" });
});

// === Expose helpers for console testing ===
if (typeof window !== 'undefined') {
  try {
    Object.assign(window, {
      agencyKey: typeof agencyKey !== 'undefined' ? agencyKey : undefined,
      resolveAgencyAlias: typeof resolveAgencyAlias !== 'undefined' ? resolveAgencyAlias : undefined,
      findPaySet: typeof findPaySet !== 'undefined' ? findPaySet : undefined,
      slugKey: typeof slugKey !== 'undefined' ? slugKey : undefined
    });
  } catch (e) { /* no-op */ }
}

})();


// ======== COMPARE CHART (role+agency) — embedded clean rebuild ========
(function(){

  // --- Palette bridge ---
  function safeColorFor(a){
    if (typeof window !== 'undefined' && typeof window.colorForEntityType === 'function') return window.colorForEntityType(a);
    if (typeof colorForEntityType === 'function') return colorForEntityType(a);
    return '#6a1b9a'; // strong purple fallback
  }

  // --- Grouped agency helpers ---
  function normTypeForGroup(a){
    try { return String(normEntityTypeForPGPA(a) || '').toLowerCase(); } catch(e){ return ''; }
  }

  function getAgencyGroupsForSelect(){
    const all = (window.agreements || []).filter(a => { const id = (typeof agencyKey === 'function') ? agencyKey(a) : (a && a.agencyId) || ''; return true; });
    all.sort((x,y) => (x.agency || '').localeCompare(y.agency || '', 'en-AU', { sensitivity:'base' }));
    const groups = { department: [], ncce: [], cce: [], company: [] };
    for (const a of all){
      const t = normTypeForGroup(a);
      if (t === 'department') groups.department.push(a);
      else if (t === 'ncce') groups.ncce.push(a);
      else if (t === 'cce') groups.cce.push(a);
      else if (t === 'company') groups.company.push(a);
      else groups.department.push(a);
    }
    return groups;
  }

  function populateAgencyOptions(selectEl){
    selectEl.innerHTML = '';
    const blank = document.createElement('option');
    blank.value = '';
    blank.textContent = '— Select agency —';
    selectEl.appendChild(blank);

    const groups = getAgencyGroupsForSelect();

    function appendHeader(label){
      const hdr = document.createElement('option');
      hdr.value = '';
      hdr.textContent = '— ' + label + ' —';
      hdr.disabled = true;
      hdr.style.fontStyle = 'italic';
      selectEl.appendChild(hdr);
    }
    function appendGroup(arr){
      for (const a of arr){
        const opt = document.createElement('option');
        opt.value = agencyKey(a);
        opt.textContent = a.agency || '';
        selectEl.appendChild(opt);
      }
    }appendGroup(groups.department);appendGroup(groups.ncce);appendGroup(groups.cce);appendGroup(groups.company);
  }

  // --- Clone classes from top controls for consistent look ---
  function styleLikeTopSelect(el, key){
    const topClassSel = document.getElementById('chartClassSel');
    const topPortSel  = document.getElementById('chartPortfolioSel');
    const donor = (key === 'portfolio' ? (topPortSel || topClassSel) : topClassSel) || null;
    if (donor){
      el.className = donor.className;
      const names = donor.getAttributeNames ? donor.getAttributeNames() : [];
      for (const a of names){
        if (a.indexOf('data-') === 0 && !el.hasAttribute(a)) el.setAttribute(a, donor.getAttribute(a));
      }
      if (donor.style && donor.style.width) el.style.width = donor.style.width;
    }
  }

  function cloneClassificationOptions(){
    const src = document.getElementById('chartClassSel');
    const frag = document.createDocumentFragment();
    if (src){
      const opts = src.querySelectorAll ? src.querySelectorAll('option') : [];
      for (const opt of opts) frag.appendChild(opt.cloneNode(true));
    }
    if (!frag.firstChild){
      const o = document.createElement('option'); o.value = 'APS6'; o.textContent = 'APS6'; frag.appendChild(o);
    }
    return frag;
  }

  function makeCompareRow(rowIdx){
    const wrap = document.createElement('div');
    wrap.className = 'row';
    wrap.style.display = 'block';

    const classSel = document.createElement('select');
    classSel.id = 'compareClass-' + rowIdx;
    classSel.name = classSel.id;
    classSel.appendChild(cloneClassificationOptions());
    const mainClassSel = document.getElementById('chartClassSel');
    if (mainClassSel) classSel.value = mainClassSel.value;
    styleLikeTopSelect(classSel);

    const agencySel = document.createElement('select');
    agencySel.id = 'compareAgency-' + rowIdx;
    agencySel.name = agencySel.id;
    populateAgencyOptions(agencySel);
    styleLikeTopSelect(agencySel, 'portfolio');

    const lab1 = document.createElement('label');
    lab1.htmlFor = classSel.id;
    lab1.textContent = 'Classification #' + (rowIdx+1);

    const lab2 = document.createElement('label');
    lab2.htmlFor = agencySel.id;
    lab2.textContent = 'Agency #' + (rowIdx+1);

    const slot1 = document.createElement('div'); slot1.appendChild(lab1); slot1.appendChild(classSel); slot1.classList.add('control');
    const slot2 = document.createElement('div'); slot2.appendChild(lab2); slot2.appendChild(agencySel); slot2.classList.add('control');

    const rowGrid = document.createElement('div');
    rowGrid.style.display = 'grid';
    rowGrid.style.gridTemplateColumns = '5fr 12fr';
    rowGrid.style.gap = '.5rem';
    rowGrid.appendChild(slot1);
    rowGrid.appendChild(slot2);

    wrap.appendChild(rowGrid);

    classSel.addEventListener('change', renderCompareChart);
    agencySel.addEventListener('change', renderCompareChart);

    return wrap;
  }

  function buildCompareSeries(selections){
    const effDate = getSelectedEffectiveDateString();
    const rows = [];
    for (const sel of selections){
      const classification = sel && sel.classification;
      const agencyId = sel && sel.agencyId;
      if (!classification || !agencyId) continue;
      const a = (window.agreements || []).find(x => agencyKey(x) === agencyId);
      if (!a) continue;
      const pay = findPaySet(agencyId, classification, effDate);
      const __ov = (pay && pay.agencyClassification) || '';
      const __classBase = (__ov && /^[A-Za-z]{1,4}\d{1,2}$/i.test(__ov)) ? __ov.toUpperCase() : classification;
      if (!pay || !pay.points || !pay.points.length) continue;
      const minPoint = pay.points.find(p => p.kind === 'min');
      const maxPoint = pay.points.find(p => p.kind === 'max');
      const steps    = pay.points.filter(p => p.kind === 'step');
      const minVal = (minPoint && Number(minPoint.rate)) ?? Math.min(...steps.map(s => Number(s.rate)));
      const maxVal = (maxPoint && Number(maxPoint.rate)) ?? Math.max(...steps.map(s => Number(s.rate)));
      if (!isFinite(minVal) || !isFinite(maxVal)) continue;
      const category = (a.agency || 'Agency') + ' — ' + prettyClassificationLabel(classification);
      const pointColor = safeColorFor(a);
      rows.push({
        category,
        color: pointColor,
        min: Number(minVal),
        max: Number(maxVal),
        stepPairs: [
          ...(minPoint ? [{ rate: Number(minPoint.rate), label: stepDisplayLabel(__classBase, { kind: 'min',  label: minPoint.label }) }] : []),
          ...steps.map(s => ({ rate: Number(s.rate), label: stepDisplayLabel(__classBase, { kind: 'step', step: s.step }) })),
          ...(maxPoint ? [{ rate: Number(maxPoint.rate), label: stepDisplayLabel(__classBase, { kind: 'max',  label: maxPoint.label }) }] : [])
        ]
      });
    }
    const categories = rows.map(r => r.category);
    const dumbbellData = rows.map((r, idx) => ({ x: idx, low: r.min, high: r.max, color: r.color }));
    const scatterData = rows.flatMap((r, x) => r.stepPairs.map(sp => ({ x, y: sp.rate, name: sp.label, stepLabel: sp.label, color: STEP_POINT_COLOR })) );
    return { categories, dumbbellData, scatterData };
  }

  // === Fortnightly salary table (driven by Chart 2 selections + effective date) ===
  function ensureFortnightlyTableMount(){
    const section = document.getElementById('fortnight');
    if (!section) return null;

    let mount = document.getElementById('fortnightTableMount');
    if (!mount){
      mount = document.createElement('div');
      mount.id = 'fortnightTableMount';
      mount.style.marginTop = '1rem';
      section.appendChild(mount);
    }
    return mount;
  }

function ensureCompareQuickMount(){
  const section = document.getElementById('compare');
  if (!section) return null;
  let mount = document.getElementById('compareTableMount');
  if (!mount){
    mount = document.createElement('div');
    mount.id = 'compareTableMount';
    mount.style.marginTop = '1.5rem';
    section.appendChild(mount);
  }
  return mount;
}


  function getCompareSelections(){
    const selections = [];
    for (let i=0;i<6;i++){
      const cSel = document.getElementById('compareClass-' + i);
      const aSel = document.getElementById('compareAgency-' + i);
      selections.push({
        classification: (cSel && cSel.value) || '',
        agencyId: (aSel && aSel.value) || ''
      });
    }
    return selections;
  }

  function buildFortnightRowsFromCompare(){
    const effDate = getSelectedEffectiveDateString();
    const sels = getCompareSelections();
    const rows = [];

    for (const sel of sels){
      const classification = sel && sel.classification;
      const agencyId = sel && sel.agencyId;
      if (!classification || !agencyId) continue;

      const a = (window.agreements || []).find(x => agencyKey(x) === agencyId);
      if (!a) continue;

      const pay = findPaySet(agencyId, classification, effDate);
      if (!pay || !pay.points || !pay.points.length) continue;

      // Same classification label logic used by Chart 2 (agencyClassification override when it's like PSL1/THEA1)
      const __ov = (pay && pay.agencyClassification) || '';
      const __classBase = (__ov && /^[A-Za-z]{1,4}\d{1,2}$/i.test(__ov)) ? __ov.toUpperCase() : classification;

      const minPoint = pay.points.find(p => p.kind === 'min');
      const maxPoint = pay.points.find(p => p.kind === 'max');
      const steps    = pay.points.filter(p => p.kind === 'step');

      const ordered = [
        ...(minPoint ? [minPoint] : []),
        // IMPORTANT: preserve the same step order Chart 2 uses (source order from data.js),
        // because some agencies represent guidepoints as non-numeric "step" entries.
        ...steps,
        ...(maxPoint ? [maxPoint] : [])
      ];

      for (const p of ordered){
        const annual = Number(p && p.rate);
        if (!isFinite(annual)) continue;

        const pointLabel = stepDisplayLabel(__classBase, p);
        const fortnightGross = (annual * 12) / 313;
        const hourlyRate = fortnightGross / 75;
        const superAnnual = annual * 0.154;

        rows.push({
          agency: a.agency || agencyId,
          classification: pointLabel,
          annual,
          hourlyRate,
          fortnightGross,
          superAnnual
        });
      }
    }

    return rows;
  }

  function renderFortnightlySalaryTable(){
    const mount = ensureFortnightlyTableMount();
    if (!mount) return;

    updateEffectiveDateDisplays();

    // Persist checked rows across rerenders (but naturally drop anything that no longer exists)
    if (typeof window !== 'undefined'){
      window.__salaryCompareCheckedKeys = window.__salaryCompareCheckedKeys || new Set();
    }
    const checkedKeys = (typeof window !== 'undefined' && window.__salaryCompareCheckedKeys) ? window.__salaryCompareCheckedKeys : new Set();

    const rows = buildFortnightRowsFromCompare();

    const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

    const fmtMoney = (v, dp) => {
      const n = Number(v);
      if (!isFinite(n)) return '';
      try{
        // Force $ prefix and thousand separators
        return '$' + n.toLocaleString('en-AU', { minimumFractionDigits: dp, maximumFractionDigits: dp });
      } catch(e){
        return '$' + n.toFixed(dp);
      }
    };
    const fmtSalary = (v) => fmtMoney(v, 2);      // annual salary (2dp)
    const fmtHourly = (v) => fmtMoney(v, 4);      // hourly rate (4dp)
    const fmtGross  = (v) => fmtMoney(v, 2);      // fortnightly gross (2dp)

    // Helper to build a stable key for a row
    const rowKey = (r) => [r.agency, r.classification, String(r.annual)].join('||');

    // If no selections in Chart 2, show guidance for both tools
    if (!rows.length){
      mount.innerHTML =
        '<div class="muted" style="padding:0.5rem 0; opacity:0.85">Pick at least one classification + agency in <strong>Chart 2</strong> to populate this table.</div>' + '' +'<div class="muted" style="padding:0.5rem 0; opacity:0.85">Pick at least one classification + agency in <strong>Chart 2</strong>, then tick rows in the table above to compare them here.</div>';
        return;
    }

    // Drop checked keys that no longer exist in current rows
    const currentKeys = new Set(rows.map(rowKey));
    for (const k of Array.from(checkedKeys)){
      if (!currentKeys.has(k)) checkedKeys.delete(k);
    }

    let html = '';
    html += '<table class="salariesTable" id="fortnightSalaryTable" style="width:100%; margin-top:0.25rem">';
    html += '<thead><tr>';
    html += '<th></th>';
    html += '<th>Agency</th>';
    html += '<th>Classification</th>';
    html += '<th style="text-align:right">Salary</th>';
    html += '<th style="text-align:right">Hourly rate</th>';
    html += '<th style="text-align:right">Fortnightly Gross (before tax pay)</th>';
    html += '<th style="text-align:right">Superannuation (15.4%)</th>';
    html += '</tr></thead>';
    html += '<tbody>';

    for (const r of rows){
      const k = rowKey(r);
      const isChecked = checkedKeys.has(k);
      html += '<tr data-rowkey="' + esc(k) + '" style="' + (isChecked ? 'background:#0e0f12;' : '') + '">';
      html += '<td style="width:1%; white-space:nowrap; text-align:center">';
      html += '<input type="checkbox" class="salaryComparePick" data-rowkey="' + esc(k) + '"' + (isChecked ? ' checked' : '') + '>';
      html += '</td>';
      html += '<td>' + esc(r.agency) + '</td>';
      html += '<td>' + esc(r.classification) + '</td>';
      html += '<td style="text-align:right">' + fmtSalary(r.annual) + '</td>';
      html += '<td style="text-align:right">' + fmtHourly(r.hourlyRate) + '</td>';
      html += '<td style="text-align:right">' + fmtGross(r.fortnightGross) + '</td>';
      html += '<td style="text-align:right">' + fmtSalary(r.superAnnual) + '</td>';
      html += '</tr>';
    }

    html += '</tbody></table>';

    // // Compare salaries section (render into #compareTableMount instead of under Table 1)
mount.innerHTML = html;

const compareMount = ensureCompareQuickMount();
let compareHtml = '';

const picked = rows.filter(r => checkedKeys.has(rowKey(r)));
if (!picked.length){
  compareHtml += '<div class="muted" style="padding:0.5rem 0; opacity:0.85">Tick one or more rows in the table above to add them to this comparison table.</div>';
} else {
  compareHtml += '<table class="salariesTable" id="compareSalaryTable" style="width:100%; margin-top:0.25rem">';
  compareHtml += '<thead><tr>';
  compareHtml += '<th>Agency</th>';
  compareHtml += '<th>Classification</th>';
  compareHtml += '<th style="text-align:right">Salary</th>';
  compareHtml += '<th style="text-align:right">Hourly rate</th>';
  compareHtml += '<th style="text-align:right">Fortnightly Gross before tax pay)</th>';
  compareHtml += '<th style="text-align:right">Superannuation (15.4%)</th>';
  compareHtml += '</tr></thead><tbody>';

  for (const r of picked){
    compareHtml += '<tr>';
    compareHtml += '<td>' + esc(r.agency) + '</td>';
    compareHtml += '<td>' + esc(r.classification) + '</td>';
    compareHtml += '<td style="text-align:right">' + fmtSalary(r.annual) + '</td>';
    compareHtml += '<td style="text-align:right">' + fmtHourly(r.hourlyRate) + '</td>';
    compareHtml += '<td style="text-align:right">' + fmtGross(r.fortnightGross) + '</td>';
    compareHtml += '<td style="text-align:right">' + fmtSalary(r.superAnnual) + '</td>';
    compareHtml += '</tr>';
  }
  compareHtml += '</tbody></table>';
}

if (compareMount) compareMount.innerHTML = compareHtml;

    // Wire up checkboxes after render
    const boxes = mount.querySelectorAll('input.salaryComparePick');
    boxes.forEach(b => {
      b.addEventListener('change', (ev) => {
        const key = ev && ev.target && ev.target.getAttribute('data-rowkey');
        if (!key) return;
        if (ev.target.checked) checkedKeys.add(key);
        else checkedKeys.delete(key);
        // Re-render to update highlighting + compare table
        renderFortnightlySalaryTable();
      });
    });
  }

  // expose so effective-date handler and compare chart can force a refresh
  if (typeof window !== 'undefined') {
    window.__renderFortnightlyTable = renderFortnightlySalaryTable;
  }



  function renderCompareChart(){
    updateEffectiveDateDisplays();
    const container = document.getElementById('compareChartContainer');
    if (!container) return;
    const selections = [];
    for (let i=0;i<6;i++){
      const cSel = document.getElementById('compareClass-' + i);
      const aSel = document.getElementById('compareAgency-' + i);
      selections.push({ classification: (cSel && cSel.value) || '', agencyId: (aSel && aSel.value) || '' });
    }
    const data = buildCompareSeries(selections);
    const categories = data.categories;
    const dumbbellData = data.dumbbellData;
    const scatterData = data.scatterData;
    if (!categories.length){
      container.innerHTML = '<div class=\"muted\" style=\"paddin...\">Pick at least one classification + agency to compare.</div>';
      // Even when nothing is selected, notify tools so tables clear immediately
      document.dispatchEvent(new Event('compare:updated'));
      if (typeof window.__renderFortnightlyTable === 'function') window.__renderFortnightlyTable();
      // keep effective date labels in sync
      updateEffectiveDateDisplays();
      return;
    }

    document.dispatchEvent(new Event('compare:updated'));
    if (typeof window.__renderFortnightlyTable === 'function') window.__renderFortnightlyTable();
        updateEffectiveDateDisplays();
    // Use the exact same Highcharts options as main chart by calling a shared renderer if available
    // Otherwise, minimal config (we already copied main options in earlier build)
    
Highcharts.chart(container, {
      chart: { height: Math.max(420, 28 * categories.length + 160), inverted: true, backgroundColor: 'transparent' },
      title: { text: null },
      xAxis: { categories, labels: { style: { color: '#fff' } }, gridLineColor: 'rgba(255,255,255,0.12)', title: { text: null, style: { color: '#fff' } } },
      yAxis: {
        gridLineColor: 'rgba(255,255,255,0.12)',
        title: { text: 'Annual base salary (AUD)', style: { color: '#fff' } },
        labels: {
          style: { color: '#fff' },
          formatter: function(){ return new Intl.NumberFormat('en-AU').format(this.value); }
        }
      },
      legend: { enabled: false },
      plotOptions: {
        series: { animation: false, turboThreshold: 0, stickyTracking: true },
        dumbbell: { lineWidth: 5, colorByPoint: true, dataLabels: { enabled: false } },
        scatter: { marker: { radius: 7, symbol: 'circle' } }
      },
      tooltip: { headerFormat: '',
        shared: false,
        useHTML: true,
        backgroundColor: 'rgba(0,0,0,0.85)',
        borderColor: 'rgba(255,255,255,0.2)',
        style: { color: '#fff' },
        pointFormatter: function () {
          const nf = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });
          if (this.low != null && this.high != null) {
            return `<span style="color:${this.color}">●</span> Range: <b>${nf.format(this.low)}</b> – <b>${nf.format(this.high)}</b><br/>`;
          }
          const lbl = (this.point && (this.point.stepLabel || this.point.name)) ? (this.point.stepLabel || this.point.name) : "";
          return `<b>${lbl}</b><br/><span style="color:${this.color}">●</span> <b>${nf.format(this.y)}</b><br/>`;
        }
      },

      series: [
        { name: 'Min–Max', type: 'dumbbell', colorByPoint: true, data: dumbbellData, connectorWidth: 3, lineWidth: 5 },
        {
          name: 'Steps',
          type: 'scatter',
          data: scatterData,
          marker: { radius: 7, symbol: 'circle', lineColor: STEP_POINT_COLOR, fillColor: STEP_POINT_COLOR },
          tooltip: { headerFormat: '',
            useHTML: true,
            pointFormatter: function () {
              const nf = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });
              const lbl = (this.point && (this.point.stepLabel || this.point.name)) ? (this.point.stepLabel || this.point.name) : "";
              return `<b>${lbl}</b><br/><span style="color:${this.color}">●</span> <b>${nf.format(this.y)}</b><br/>`;
            }
          }
        }
      ],
      credits: { enabled: false }
    });

  
    // Recalc tables/hourly after chart render
    setTimeout(recalcFromCompareChart, 0);
    document.dispatchEvent(new Event('compare:updated'));
    if (typeof window.__renderFortnightlyTable === 'function') window.__renderFortnightlyTable();
        updateEffectiveDateDisplays();
}
// Expose for other controls (e.g., effective date)
window.__renderCompareChart = renderCompareChart;


  function initCompareUI(){
    const rowsWrap = document.getElementById('compareRows');
    if (!rowsWrap) return;
    rowsWrap.innerHTML = '';
    for (let i=0;i<6;i++) rowsWrap.appendChild(makeCompareRow(i));

    const clearBtn = document.getElementById('compareClear');
    if (clearBtn){
      clearBtn.addEventListener('click', function(){
        for (let i=0;i<6;i++){
          const cSel = document.getElementById('compareClass-' + i);
          const aSel = document.getElementById('compareAgency-' + i);
          if (cSel){
            const mainClassSel = document.getElementById('chartClassSel');
            cSel.value = (mainClassSel && mainClassSel.value) || (cSel.options[0] && cSel.options[0].value) || '';
          }
          if (aSel) aSel.value = '';
        }
        if (window.__salaryCompareCheckedKeys && typeof window.__salaryCompareCheckedKeys.clear === 'function') window.__salaryCompareCheckedKeys.clear();
        renderCompareChart();
      });
    }

    const mainClassSel = document.getElementById('chartClassSel');
    if (mainClassSel){
      mainClassSel.addEventListener('change', function(){
        for (let i=0;i<6;i++){
          const cSel = document.getElementById('compareClass-' + i);
          const aSel = document.getElementById('compareAgency-' + i);
          if (cSel && (!aSel || !aSel.value)) cSel.value = mainClassSel.value;
        }
        renderCompareChart();
      });
    }

    renderCompareChart();
  }

  function maybeInit(){
    const have = document.getElementById('compareRows') && document.getElementById('compareChartContainer');
    if (!have) return false;
    try { initCompareUI(); } catch(e){ console.error('initCompareUI error:', e); }
    return true;
  }

  if (document.readyState === 'loading'){
    window.addEventListener('DOMContentLoaded', function(){
      var tries=0; var t=setInterval(function(){ if(maybeInit()||++tries>10) clearInterval(t); }, 100);
    }, { once:true });
  } else {
    var tries=0; var t=setInterval(function(){ if(maybeInit()||++tries>10) clearInterval(t); }, 100);
  }

})();



// === Add-on: Fortnightly & Hourly calculations + Super tables driven by Compare chart ===

// Helpers
function money(n) {
  if (n === null || n === undefined || isNaN(n)) return '—';
  return n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });
}
function money2(n) {
  if (n === null || n === undefined || isNaN(n)) return '—';
  return n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function hourly4(n) {
  if (n === null || n === undefined || isNaN(n)) return '—';
  return Number(n).toFixed(4);
}
// Formula parts
function fortnightlyFromAnnual(annual) {
  return (annual * 12) / 313;
}
function hourlyFromAnnual(annual) {
  return fortnightlyFromAnnual(annual) / 75;
}
function superFromAnnual(annual, rate = 0.154) {
  return annual * rate;
}

// DOM helpers
function $(id) { return document.getElementById(id); }
function clearEl(el) { if (el) el.innerHTML = ''; }

function buildTableHTML(title, rows, columns) {
  const thead = `<thead><tr>${columns.map(c=>`<th${c.right? ' style="text-align:right"':''}>${c.label}</th>`).join('')}</tr></thead>`;
  const tbody = `<tbody>${rows.map(r => 
    `<tr>${columns.map(c=>{
      const v = r[c.key];
      const cell = (c.format ? c.format(v) : (v ?? '—'));
      return `<td${c.right? ' style="text-align:right"':''}>${cell}</td>`;
    }).join('')}</tr>`
  ).join('')}</tbody>`;
  return `<div class="panel" style="margin:1rem 0">
    <h3 style="margin:0 0 .5rem">${title}</h3>
    <div class="table-wrap" style="overflow:auto">
      <table class="mini">
        ${thead}${tbody}
      </table>
    </div>
  </div>`;
}

function __isStepsSeries(series){
  try{
    const t = (series.type || (series.userOptions && series.userOptions.type) || '').toLowerCase();
    // Exclude obvious range/band types
    if (/(dumbbell|arearange|columnrange|errorbar|areasplinerange|ohlc|candlestick)/.test(t)) return false;

    
    if ((series.name || '').toLowerCase() === 'steps') return true;
const pts = series.points && series.points.length ? series.points : (series.data || []);
    if (!pts.length) return false;

    // Exclude if points expose range-like structure
    if (pts.some(p => p && (typeof p.low === 'number' || typeof p.high === 'number'))) return false;

    // Count numeric y values
    const ys = pts.map(p => (p && typeof p.y === 'number' && isFinite(p.y)) ? p.y : null).filter(v => v !== null);
    if (!ys.length) return false;

    // Heuristic: exclude 2-point series (commonly min-max endpoints). 
    // If you have legit 2-step classifications, you can relax this to >=2.
    if (ys.length < 1) return false;

    return true;
  }catch(e){
    return false;
  }
}

// Persistent registry of computed selections across user additions
window.__hourlyRegistry = window.__hourlyRegistry || new Map(); // key: series name, value: {rowsFort, rowsSuper, hourlyMap, color}
function __unionCategoriesFromRegistry(){
  const set = new Set();
  for (const v of window.__hourlyRegistry.values()){
    (v.order || []).forEach(k => { if (!set.has(k)) set.add(k); });
  }
  return Array.from(set);
}

function recalcFromCompareChart() {
  const cmpEl = $('compareChartContainer');
  if (!cmpEl) return;

  const chart = (Highcharts.charts || []).find(c => c && c.renderTo && c.renderTo.id === 'compareChartContainer');
  if (!chart) return;

  const fortnightHost = $('fortnightTables');
  const superHost = $('superTables');
  if (!fortnightHost || !superHost) return;

  // Clear tables before re-rendering (we'll render from the registry)
  clearEl(fortnightHost);
  clearEl(superHost);

  // Accumulate current visible Steps-series into registry
  const seenThisPass = new Set();
  chart.series
    .filter(s => s.visible !== false && !s.userOptions.isInternal)
    .filter(__isStepsSeries)
    .forEach(series => {
      const name = series.name || 'Selected';
      seenThisPass.add(name);
      const pts = series.points && series.points.length ? series.points : series.data;
      const rowsFort = [];
      const rowsSuper = [];
      const hourlyDataOrder = [];
      const hourlyMap = new Map();
      const color = (series.color || (series.userOptions && series.userOptions.color)) || undefined;

      (pts || []).forEach((p, idx) => {
        const annual = (typeof p.y === 'number') ? p.y : (p && typeof p === 'object' ? p.y : NaN);
        const label =
          (p && p.category) ? p.category :
          (chart.xAxis[0] && chart.xAxis[0].categories && chart.xAxis[0].categories[idx]) ? chart.xAxis[0].categories[idx] :
          (p && p.name) ? p.name :
          `Point ${idx+1}`;

        const fn = fortnightlyFromAnnual(annual);
        const hr = hourlyFromAnnual(annual);
        const su = superFromAnnual(annual, 0.154);

        rowsFort.push({ paypoint: label, annual: annual, fortnightly: fn, hourly: hr });
        rowsSuper.push({ paypoint: label, annual: annual, super: su });

        hourlyMap.set(label, Number.isFinite(hr) ? Number(Number(hr).toFixed(4)) : null);
        hourlyDataOrder.push(label);
      });

      window.__hourlyRegistry.set(name, { rowsFort, rowsSuper, hourlyMap, order: hourlyDataOrder, color });
    });

  // Render all tables from the registry (accumulated)
  for (const [name, pack] of window.__hourlyRegistry.entries()) {
    const fortCols = [
      { key: 'paypoint', label: 'Paypoint' },
      { key: 'annual', label: 'Annual', right: true, format: v => money(v) },
      { key: 'fortnightly', label: 'Fortnightly gross', right: true, format: v => money2(v) },
      { key: 'hourly', label: 'Hourly (4 d.p.)', right: true, format: v => hourly4(v) }
    ];
    const superCols = [
      { key: 'paypoint', label: 'Paypoint' },
      { key: 'annual', label: 'Annual', right: true, format: v => money(v) },
      { key: 'super', label: 'Super (15.4%)', right: true, format: v => money2(v) }
    ];
    fortnightHost.insertAdjacentHTML('beforeend', buildTableHTML(name, pack.rowsFort, fortCols));
    superHost.insertAdjacentHTML('beforeend', buildTableHTML(name, pack.rowsSuper, superCols));
  }

  // Chart: build union categories across registry
  const unionCats = __unionCategoriesFromRegistry();
  const hourlyEl = $('hourlyChartContainer');
  if (!hourlyEl) return;

  const hourlySeries = [];
  for (const [name, pack] of window.__hourlyRegistry.entries()) {
    const arr = unionCats.map(cat => pack.hourlyMap.has(cat) ? pack.hourlyMap.get(cat) : null);
    const s = { name, data: arr, type: 'line', marker: { enabled: true } };
    if (pack.color) s.color = pack.color;
    hourlySeries.push(s);
  }

  if (!hourlyEl.__hourlyChart) {
    hourlyEl.__hourlyChart = Highcharts.chart('hourlyChartContainer', {
      title: { text: null },
      xAxis: { categories: unionCats },
      yAxis: {
        title: { text: 'Hourly rate (AUD)' },
        labels: { formatter: function(){ return money2(this.value); } }
      },
      tooltip: {
        shared: true,
        headerFormat: '<b>{point.key}</b><br/>',
        pointFormatter: function() {
          return `<span style="font-weight:bold">${this.series.name}</span>: ${this.y.toFixed(4)}`;
        }
      },
      legend: { enabled: true },
      series: hourlySeries,
      credits: { enabled: false }
    });
  } else {
    const hc = hourlyEl.__hourlyChart;
    hc.xAxis[0].setCategories(unionCats, false);
    while (hc.series.length) hc.series[0].remove(false);
    hourlySeries.forEach(s => hc.addSeries(s, false));
    hc.redraw();
  }
}

(function hookCompareUpdates(){
  const target = document.getElementById('compareChartContainer');
  if (!target) return;

  let tries = 0;
  const maxTries = 40;
  const timer = setInterval(() => {
    tries++;
    recalcFromCompareChart();
    if (tries >= maxTries) clearInterval(timer);
  }, 250);

  const mo = new MutationObserver(() => recalcFromCompareChart());
  mo.observe(target, { childList: true, subtree: true });

  window.addEventListener('resize', recalcFromCompareChart);
  document.addEventListener('compare:updated', recalcFromCompareChart);
})();


(function hookClearAll(){
  const btn = document.getElementById('compareClear');
  if (!btn) return;
  btn.addEventListener('click', function(){
    if (window.__hourlyRegistry) window.__hourlyRegistry.clear();
    const f = document.getElementById('fortnightTables');
    const s = document.getElementById('superTables');
    if (f) f.innerHTML = '';
    if (s) s.innerHTML = '';
    const hcEl = document.getElementById('hourlyChartContainer');
    if (hcEl && hcEl.__hourlyChart) {
      while (hcEl.__hourlyChart.series.length) hcEl.__hourlyChart.series[0].remove(false);
      hcEl.__hourlyChart.redraw();
    }
  });
})();



// === CLEAN OVERRIDE: recalcFromCompareChart (accumulate + steps-only + APS labels + clear dividers) ===
function recalcFromCompareChart() {
  const cmpEl = $('compareChartContainer');
  if (!cmpEl) return;

  const chart = (Highcharts.charts || []).find(c => c && c.renderTo && c.renderTo.id === 'compareChartContainer');
  if (!chart) return;

  const cats = (chart.xAxis && chart.xAxis[0] && chart.xAxis[0].categories) ? chart.xAxis[0].categories.slice() : [];
  const fortnightHost = $('fortnightTables');
  const superHost = $('superTables');
  if (!fortnightHost || !superHost) return;

  clearEl(fortnightHost);
  clearEl(superHost);

  // Ensure registry exists
  window.__hourlyRegistry = window.__hourlyRegistry || new Map();

  // Rebuild the registry from currently visible Steps series
  chart.series
    .filter(s => s.visible !== false && !s.userOptions.isInternal)
    .filter(__isStepsSeries)
    .forEach(series => {
      const name  = series.name || 'Selected';
      const color = (series.color || (series.userOptions && series.userOptions.color)) || undefined;

      const raw = (series.userOptions && Array.isArray(series.userOptions.data))
        ? series.userOptions.data.slice()
        : (series.data || []).map(p => p && p.y);

      const rowsFort = [];
      const rowsSuper = [];
      const hourlyMap = new Map();
      const order = [];

      const mLevel = /((APS|EL)\s?(\d))/i.exec(name);
      const levelToken = mLevel ? mLevel[1].toUpperCase().replace(' ', '') : null; // e.g., APS6

      for (let i = 0; i < cats.length; i++) {
        const labelRaw = (cats[i] != null ? String(cats[i]) : `Point ${i+1}`);
        const annual   = (typeof raw[i] === 'number' && isFinite(raw[i])) ? raw[i] : NaN;

        let apsLabel = labelRaw;
        const mStep = /(?:^|[^0-9])(\d+(?:\.\d+)?)(?:$|[^0-9])/i.exec(labelRaw);
        if (levelToken && mStep) apsLabel = `${levelToken}.${mStep[1]}`.replace('..','.');
        const label = apsLabel;

        if (!isNaN(annual)) {
          const fn = fortnightlyFromAnnual(annual);
          const hr = hourlyFromAnnual(annual);
          const su = superFromAnnual(annual, 0.154);

          rowsFort.push({ paypoint: label, annual, fortnightly: fn, hourly: hr });
          rowsSuper.push({ paypoint: label, annual, super: su });

          hourlyMap.set(label, Number.isFinite(hr) ? Number(Number(hr).toFixed(4)) : null);
          order.push(label);
        }
      }

      if (rowsFort.length) {
        window.__hourlyRegistry.set(name, { rowsFort, rowsSuper, hourlyMap, order, color });
      }
    });

  // Render tables with strong dividers
  const fortCols = [
    { key: 'paypoint',    label: 'Paypoint (APS point)' },
    { key: 'annual',      label: 'Annual', right: true,      format: v => money(v) },
    { key: 'fortnightly', label: 'Fortnightly gross', right: true, format: v => money2(v) },
    { key: 'hourly',      label: 'Hourly (4 d.p.)', right: true,    format: v => hourly4(v) }
  ];
  const superCols = [
    { key: 'paypoint', label: 'Paypoint (APS point)' },
    { key: 'annual',   label: 'Annual', right: true, format: v => money(v) },
    { key: 'super',    label: 'Super (15.4%)', right: true, format: v => money2(v) }
  ];
  const panelStyle = 'border:2px solid var(--divider,#444);border-radius:12px;padding:10px;margin:16px 0;';

  for (const [nm, pack] of window.__hourlyRegistry.entries()) {
    const fortHTML  = `<div style="${panelStyle}">${buildTableHTML(nm, pack.rowsFort,  fortCols)}</div>`;
    const superHTML = `<div style="${panelStyle}">${buildTableHTML(nm, pack.rowsSuper, superCols)}</div>`;
    fortnightHost.insertAdjacentHTML('beforeend', fortHTML);
    superHost.insertAdjacentHTML('beforeend',  superHTML);
  }

  // Union categories from registry, preserving insertion order
  const unionSet = new Set();
  for (const v of window.__hourlyRegistry.values()) (v.order || []).forEach(k => unionSet.add(k));
  const unionCats = Array.from(unionSet);

  const hourlyEl = $('hourlyChartContainer');
  if (!hourlyEl) return;

  const seriesForChart = [];
  for (const [nm, pack] of window.__hourlyRegistry.entries()) {
    const arr = unionCats.map(cat => pack.hourlyMap.has(cat) ? pack.hourlyMap.get(cat) : null);
    const s   = { name: nm, data: arr, type: 'line', marker: { enabled: true } };
    if (pack.color) s.color = pack.color;
    seriesForChart.push(s);
  }

  if (!hourlyEl.__hourlyChart) {
    hourlyEl.__hourlyChart = Highcharts.chart('hourlyChartContainer', {
      title: { text: null },
      xAxis: { categories: unionCats },
      yAxis: {
        title: { text: 'Hourly rate (AUD)' },
        labels: { formatter: function(){ return money2(this.value); } }
      },
      tooltip: {
        shared: true,
        headerFormat: '<b>{point.key}</b><br/>',
        pointFormatter: function() {
          return `<span style="font-weight:bold">${this.series.name}</span>: ${this.y != null ? this.y.toFixed(4) : '—'}`;
        }
      },
      legend: { enabled: true },
      series: seriesForChart,
      credits: { enabled: false }
    });
  } else {
    const hc = hourlyEl.__hourlyChart;
    hc.xAxis[0].setCategories(unionCats, false);
    while (hc.series.length) hc.series[0].remove(false);
    seriesForChart.forEach(s => hc.addSeries(s, false));
    hc.redraw();
  }
}