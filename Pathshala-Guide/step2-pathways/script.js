/* ════════════════════════════════════════════
   PATHSHALA GUIDE — PATHWAYS PAGE SCRIPTS
   Depends on: ../shared/shared.js
════════════════════════════════════════════ */

/* ── COLLEGE DATA ── */
const collegeData = {
  science:[
    {name:'Budhanilkantha School',    p:'bagmati',loc:'Kathmandu',    prog:'Science & A-Levels',  v:true},
    {name:'Patan Secondary School',   p:'bagmati',loc:'Lalitpur',     prog:'All NEB Groups',      v:true},
    {name:'Viswa Niketan Secondary',  p:'bagmati',loc:'Tripureshwor', prog:'Science & Management',v:true},
    {name:'Tri-Chandra Campus (TU)',  p:'bagmati',loc:'Kathmandu',    prog:'Science / B.Sc.',     v:true},
    {name:'Adarsha Secondary School', p:'p1',     loc:'Biratnagar',   prog:'Science & Management',v:true},
    {name:'Mahendra Multiple Campus', p:'gandaki',loc:'Pokhara',      prog:'+2 All Groups (NEB)', v:true},
    {name:'Kalika Secondary School',  p:'lumbini',loc:'Butwal',       prog:'Science & Technical', v:true},
  ]
};

function renderCol(pathway, filter){
  const tbody = document.getElementById(pathway+'-tbody');
  if(!tbody) return;
  const rows = (collegeData[pathway]||[]).filter(c => filter==='all'||c.p===filter);
  tbody.innerHTML = rows.length
    ? rows.map(c=>`<tr>
        <td><strong>${c.name}</strong></td>
        <td style="color:var(--muted)">${c.loc}</td>
        <td><span class="prog-tag">${c.prog}</span></td>
        <td style="font-size:16px;text-align:center">${c.v?'✅':'—'}</td>
      </tr>`).join('')
    : `<tr><td colspan="4" style="padding:20px;text-align:center;color:var(--muted);font-size:13px">No institutions found for this province.</td></tr>`;
}

function filterCol(pathway, prov, btn){
  btn.closest('.prov-filters').querySelectorAll('.pf').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderCol(pathway, prov);
}

/* ── TABS ── */
function switchTab(id){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('panel-'+id).classList.add('active');
  document.getElementById('tab-'+id).classList.add('active');
  // re-trigger animations
  document.querySelectorAll('#panel-'+id+' .reveal').forEach(el=>{
    el.classList.remove('in');
    setTimeout(()=>obs.observe(el), 40);
  });
  renderCol(id,'all');
  window.scrollTo({top:document.getElementById('pageTop').offsetTop-68, behavior:'smooth'});
}

/* ── LANG ── */
/* [shared.js handles this] */
/* ── MOBILE NAV ── */
/* [shared.js handles this] */
/* [shared.js handles this] */

/* ── REVEAL ── */
const obs = new IntersectionObserver(entries=>entries.forEach(x=>{
  if(x.isIntersecting){x.target.classList.add('in'); obs.unobserve(x.target);}
}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* ── INIT ── */
renderCol('science','all');
