/* ════════════════════════════════════════════
   PATHSHALA GUIDE — GPA TOOL PAGE SCRIPTS
   Depends on: ../shared/shared.js
════════════════════════════════════════════ */

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const PATHWAYS = [
  {
    id:'science', icon:'🔬', color:'#16a34a', colorL:'#4ade80',
    name_en:'Science Group', name_ne:'विज्ञान समूह',
    gpa_min:2.0, gpa_label:'2.0+',
    subjects_en:['Physics','Chemistry','Biology','Mathematics','Computer Science'],
    subjects_ne:['भौतिकशास्त्र','रसायनशास्त्र','जीवविज्ञान','गणित','कम्प्युटर'],
    roadmap:[
      {dot:'SEE', label_en:'SEE Pass', label_ne:'SEE उत्तीर्ण', sub_en:'GPA 2.0+', sub_ne:'GPA २.०+'},
      {dot:'+2', label_en:'+2 Science', label_ne:'+2 विज्ञान', sub_en:'2 years', sub_ne:'२ वर्ष'},
      {dot:'ENT', label_en:'Entrance Exam', label_ne:'प्रवेश परीक्षा', sub_en:'IOE / MECEE', sub_ne:'IOE / MECEE'},
      {dot:'BSc', label_en:'Bachelor\'s', label_ne:'स्नातक', sub_en:'4–5 years', sub_ne:'४–५ वर्ष'},
      {dot:'JOB', label_en:'Career', label_ne:'क्यारियर', sub_en:'Start working', sub_ne:'काम सुरु'},
    ],
    careers:[
      {icon:'🏥', title_en:'Medical Doctor (MBBS)', title_ne:'चिकित्सक (MBBS)', salary:'NPR 80,000–200,000/mo', growth_en:'High demand', growth_ne:'उच्च माग', growth_color:'#4ade80'},
      {icon:'⚙️', title_en:'Civil / Computer Engineer', title_ne:'इन्जिनियर', salary:'NPR 40,000–120,000/mo', growth_en:'Fastest growing', growth_ne:'तीव्र वृद्धि', growth_color:'#38bdf8'},
      {icon:'💻', title_en:'Software Developer', title_ne:'सफ्टवेयर डेभलपर', salary:'NPR 30,000–150,000/mo', growth_en:'High demand', growth_ne:'उच्च माग', growth_color:'#4ade80'},
      {icon:'🔬', title_en:'Research Scientist', title_ne:'अनुसन्धानकर्ता', salary:'NPR 35,000–80,000/mo', growth_en:'Steady', growth_ne:'स्थिर', growth_color:'#fbbf24'},
      {icon:'🏗️', title_en:'Architect', title_ne:'आर्किटेक्ट', salary:'NPR 40,000–100,000/mo', growth_en:'Good demand', growth_ne:'राम्रो माग', growth_color:'#38bdf8'},
      {icon:'💊', title_en:'Pharmacist', title_ne:'फार्मासिस्ट', salary:'NPR 25,000–60,000/mo', growth_en:'Steady', growth_ne:'स्थिर', growth_color:'#fbbf24'},
    ],
    degrees_en:['MBBS','B.E. (Civil/Computer/Electrical)','B.Sc. CSIT','B.Sc. (Physics/Chemistry/Math)','B. Pharm','B.Sc. Nursing'],
    scholarships_en:'10% Municipal Quota · PM Scholarship · Merit-based',
    note_en:'Science is the most competitive pathway. IOE entrance exam is required for engineering. MECEE is required for MBBS/BDS.',
    note_ne:'विज्ञान सबैभन्दा प्रतिस्पर्धी मार्ग हो। इन्जिनियरिङका लागि IOE र MBBS/BDS का लागि MECEE प्रवेश परीक्षा अनिवार्य।'
  },
  {
    id:'mgmt', icon:'📊', color:'#0ea5e9', colorL:'#38bdf8',
    name_en:'Management Group', name_ne:'व्यवस्थापन समूह',
    gpa_min:1.6, gpa_label:'1.6+',
    subjects_en:['Accountancy','Economics','Business Studies','Finance','Marketing'],
    subjects_ne:['लेखाशास्त्र','अर्थशास्त्र','व्यवसाय अध्ययन','वित्त','विपणन'],
    roadmap:[
      {dot:'SEE', label_en:'SEE Pass', label_ne:'SEE उत्तीर्ण', sub_en:'GPA 1.6+', sub_ne:'GPA १.६+'},
      {dot:'+2', label_en:'+2 Mgmt', label_ne:'+2 व्यवस्थापन', sub_en:'2 years', sub_ne:'२ वर्ष'},
      {dot:'BBA', label_en:'BBA/BBS', label_ne:'BBA/BBS', sub_en:'4 years', sub_ne:'४ वर्ष'},
      {dot:'MBA', label_en:'MBA (opt)', label_ne:'MBA (वैकल्पिक)', sub_en:'2 years', sub_ne:'२ वर्ष'},
      {dot:'JOB', label_en:'Career', label_ne:'क्यारियर', sub_en:'Start working', sub_ne:'काम सुरु'},
    ],
    careers:[
      {icon:'🏦', title_en:'Bank Officer / CA', title_ne:'बैंक अधिकृत / CA', salary:'NPR 35,000–120,000/mo', growth_en:'High demand', growth_ne:'उच्च माग', growth_color:'#4ade80'},
      {icon:'📈', title_en:'Finance Analyst', title_ne:'वित्त विश्लेषक', salary:'NPR 30,000–80,000/mo', growth_en:'Growing', growth_ne:'बढ्दो', growth_color:'#38bdf8'},
      {icon:'🏨', title_en:'Hotel Manager (BHM)', title_ne:'होटल व्यवस्थापक', salary:'NPR 25,000–70,000/mo', growth_en:'Tourism growth', growth_ne:'पर्यटन वृद्धि', growth_color:'#4ade80'},
      {icon:'💼', title_en:'HR / Business Manager', title_ne:'HR / व्यवसाय व्यवस्थापक', salary:'NPR 30,000–90,000/mo', growth_en:'Steady', growth_ne:'स्थिर', growth_color:'#fbbf24'},
      {icon:'📣', title_en:'Marketing Manager', title_ne:'मार्केटिङ व्यवस्थापक', salary:'NPR 25,000–75,000/mo', growth_en:'Digital boom', growth_ne:'डिजिटल वृद्धि', growth_color:'#38bdf8'},
      {icon:'💻', title_en:'IT Business Analyst (BIM)', title_ne:'IT व्यवसाय विश्लेषक', salary:'NPR 30,000–90,000/mo', growth_en:'High demand', growth_ne:'उच्च माग', growth_color:'#4ade80'},
    ],
    degrees_en:['BBA','BBS','BIM (Tribhuvan Univ.)','BHM','MBA','ACCA / CA'],
    scholarships_en:'10% Municipal Quota · Province Scholarship · Merit-based',
    note_en:'Management is the most popular pathway with the widest range of institutions. BIM offers a strong tech+business combination.',
    note_ne:'व्यवस्थापन सबैभन्दा लोकप्रिय मार्ग। BIM ले प्रविधि र व्यवसायको संयोजन प्रदान गर्छ।'
  },
  {
    id:'law', icon:'⚖️', color:'#8b5cf6', colorL:'#a78bfa',
    name_en:'Law & Humanities', name_ne:'कानून र मानविकी',
    gpa_min:1.6, gpa_label:'1.6+',
    subjects_en:['Legal Studies','Sociology','Political Science','Journalism','Social Work'],
    subjects_ne:['कानूनी अध्ययन','समाजशास्त्र','राजनीतिशास्त्र','पत्रकारिता','समाजकार्य'],
    roadmap:[
      {dot:'SEE', label_en:'SEE Pass', label_ne:'SEE उत्तीर्ण', sub_en:'GPA 1.6+', sub_ne:'GPA १.६+'},
      {dot:'+2', label_en:'+2 Humanities', label_ne:'+2 मानविकी', sub_en:'2 years', sub_ne:'२ वर्ष'},
      {dot:'BA', label_en:'BA / BA LLB', label_ne:'BA / BA LLB', sub_en:'3–5 years', sub_ne:'३–५ वर्ष'},
      {dot:'LLM', label_en:'LLM (opt)', label_ne:'LLM (वैकल्पिक)', sub_en:'2 years', sub_ne:'२ वर्ष'},
      {dot:'JOB', label_en:'Career', label_ne:'क्यारियर', sub_en:'Start working', sub_ne:'काम सुरु'},
    ],
    careers:[
      {icon:'⚖️', title_en:'Advocate / Lawyer', title_ne:'अधिवक्ता / वकिल', salary:'NPR 30,000–150,000/mo', growth_en:'Steady demand', growth_ne:'स्थिर माग', growth_color:'#fbbf24'},
      {icon:'📰', title_en:'Journalist / Editor', title_ne:'पत्रकार / सम्पादक', salary:'NPR 20,000–60,000/mo', growth_en:'Stable', growth_ne:'स्थिर', growth_color:'#fbbf24'},
      {icon:'🏛️', title_en:'Civil Service Officer', title_ne:'निजामती सेवा', salary:'NPR 25,000–80,000/mo', growth_en:'High prestige', growth_ne:'उच्च प्रतिष्ठा', growth_color:'#4ade80'},
      {icon:'🤝', title_en:'NGO/INGO Professional', title_ne:'NGO/INGO व्यावसायिक', salary:'NPR 25,000–100,000/mo', growth_en:'Growing', growth_ne:'बढ्दो', growth_color:'#38bdf8'},
      {icon:'🎓', title_en:'Teacher / Lecturer', title_ne:'शिक्षक / व्याख्याता', salary:'NPR 20,000–60,000/mo', growth_en:'Steady', growth_ne:'स्थिर', growth_color:'#fbbf24'},
      {icon:'📋', title_en:'Social Worker (BSW)', title_ne:'समाजसेवी', salary:'NPR 18,000–50,000/mo', growth_en:'NGO demand', growth_ne:'NGO माग', growth_color:'#38bdf8'},
    ],
    degrees_en:['BA LLB','BA (Sociology/Journalism)','BSW (Social Work)','BEd','LLM'],
    scholarships_en:'10% Municipal Quota · Province Scholarship · NGO Aid',
    note_en:'Law & Humanities opens doors to civil service, the legal profession, and international development work with NGOs and INGOs.',
    note_ne:'कानून र मानविकीले निजामती सेवा, कानूनी पेशा र NGO/INGO मा काम गर्ने अवसर दिन्छ।'
  },
  {
    id:'ctevt', icon:'🔧', color:'#e8a020', colorL:'#fbbf24',
    name_en:'CTEVT Technical', name_ne:'CTEVT प्राविधिक',
    gpa_min:0.0, gpa_label:'Any GPA',
    subjects_en:['Civil Engineering','Computer Science','Electrical','Agriculture','Nursing','Hotel Management'],
    subjects_ne:['सिभिल इन्जिनियरिङ','कम्प्युटर','विद्युत','कृषि','नर्सिङ','होटल व्यवस्थापन'],
    roadmap:[
      {dot:'SEE', label_en:'SEE Pass', label_ne:'SEE उत्तीर्ण', sub_en:'Any GPA', sub_ne:'जुनसुकै GPA'},
      {dot:'TSL', label_en:'TSLC (18 mo)', label_ne:'TSLC', sub_en:'or Diploma', sub_ne:'वा डिप्लोमा'},
      {dot:'DIP', label_en:'Diploma (3yr)', label_ne:'डिप्लोमा', sub_en:'optional', sub_ne:'वैकल्पिक'},
      {dot:'B.E', label_en:'Bachelor\'s', label_ne:'स्नातक', sub_en:'via bridge', sub_ne:'ब्रिज भर्ना'},
      {dot:'JOB', label_en:'Career', label_ne:'क्यारियर', sub_en:'Start working', sub_ne:'काम सुरु'},
    ],
    careers:[
      {icon:'🏗️', title_en:'Civil / Site Technician', title_ne:'सिभिल टेक्निसियन', salary:'NPR 20,000–60,000/mo', growth_en:'High demand', growth_ne:'उच्च माग', growth_color:'#4ade80'},
      {icon:'💻', title_en:'Computer Technician/IT', title_ne:'कम्प्युटर टेक्निसियन', salary:'NPR 18,000–55,000/mo', growth_en:'Fast growing', growth_ne:'तीव्र वृद्धि', growth_color:'#4ade80'},
      {icon:'⚡', title_en:'Electrician / Technician', title_ne:'विद्युत टेक्निसियन', salary:'NPR 18,000–50,000/mo', growth_en:'Steady', growth_ne:'स्थिर', growth_color:'#fbbf24'},
      {icon:'🌾', title_en:'Agriculture Technician', title_ne:'कृषि प्राविधिक', salary:'NPR 18,000–45,000/mo', growth_en:'Growing', growth_ne:'बढ्दो', growth_color:'#38bdf8'},
      {icon:'🏥', title_en:'Health Worker (TSLC)', title_ne:'स्वास्थ्यकर्मी', salary:'NPR 20,000–50,000/mo', growth_en:'High demand', growth_ne:'उच्च माग', growth_color:'#4ade80'},
      {icon:'🍽️', title_en:'Chef / Hospitality Pro', title_ne:'होटल व्यावसायिक', salary:'NPR 20,000–80,000/mo', growth_en:'Tourism growth', growth_ne:'पर्यटन वृद्धि', growth_color:'#4ade80'},
    ],
    degrees_en:['TSLC (18-month)','Diploma in Civil / Computer / Electrical','Diploma in Agriculture / Nursing','Hotel Management Certificate'],
    scholarships_en:'CTEVT Reserved (Dalit/Janajati) · Women Seats · Remote Area Full Subsidy',
    note_en:'CTEVT is the best option for students who want job-ready skills fast. No GPA minimum. Heavily subsidised. Strong scholarship availability.',
    note_ne:'CTEVT छिटो जागिरसँग सम्बन्धित सीप पाउन चाहने विद्यार्थीका लागि उत्तम। न्यूनतम GPA छैन। अत्यन्त अनुदानित।',
    special:true
  }
];

/* ══════════════════════════
   STATE + INIT
══════════════════════════ */
let currentGPA = 2.00;

function init(){ updateAll(2.00); }

/* ══════════════════════════
   SLIDER LOGIC
══════════════════════════ */
const track   = document.getElementById('sliderTrack');
const fill    = document.getElementById('sliderFill');
const thumb   = document.getElementById('sliderThumb');
const GPA_MIN = 1.0, GPA_MAX = 4.0;

function gpaToPercent(g){ return ((g - GPA_MIN) / (GPA_MAX - GPA_MIN)) * 100; }
function percentToGpa(p){ return GPA_MIN + (p / 100) * (GPA_MAX - GPA_MIN); }

function setSlider(gpa){
  gpa = Math.max(GPA_MIN, Math.min(GPA_MAX, gpa));
  const p = gpaToPercent(gpa);
  fill.style.width  = p + '%';
  thumb.style.left  = p + '%';
}

function startDrag(e){
  e.preventDefault();
  const move = ev => {
    const rect = track.getBoundingClientRect();
    const clientX = ev.touches ? ev.touches[0].clientX : ev.clientX;
    let p = ((clientX - rect.left) / rect.width) * 100;
    p = Math.max(0, Math.min(100, p));
    const g = Math.round(percentToGpa(p) * 20) / 20; // snap to 0.05
    setSlider(g);
    document.getElementById('gpaInput').value = g.toFixed(2);
    updateAll(g);
  };
  const up = () => {
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', up);
    document.removeEventListener('touchmove', move);
    document.removeEventListener('touchend', up);
  };
  document.addEventListener('mousemove', move);
  document.addEventListener('mouseup', up);
  document.addEventListener('touchmove', move, {passive:false});
  document.addEventListener('touchend', up);
}
thumb.addEventListener('mousedown', startDrag);
thumb.addEventListener('touchstart', startDrag, {passive:false});
track.addEventListener('click', e => {
  const rect = track.getBoundingClientRect();
  let p = ((e.clientX - rect.left) / rect.width) * 100;
  p = Math.max(0, Math.min(100, p));
  const g = Math.round(percentToGpa(p) * 20) / 20;
  setSlider(g);
  document.getElementById('gpaInput').value = g.toFixed(2);
  updateAll(g);
});
document.getElementById('gpaInput').addEventListener('input', e => {
  let g = parseFloat(e.target.value);
  if (isNaN(g)) return;
  g = Math.max(GPA_MIN, Math.min(GPA_MAX, g));
  setSlider(g);
  updateAll(g);
});

/* ══════════════════════════
   GRADE LABELS
══════════════════════════ */
function getGradeLabel(g){
  if(g >= 3.6) return {en:'Grade A+ — Outstanding 🏆', ne:'ग्रेड A+ — उत्कृष्ट 🏆'};
  if(g >= 3.2) return {en:'Grade A — Excellent ⭐', ne:'ग्रेड A — उत्कृष्ट ⭐'};
  if(g >= 2.8) return {en:'Grade B+ — Very Good', ne:'ग्रेड B+ — धेरै राम्रो'};
  if(g >= 2.4) return {en:'Grade B — Good Standing', ne:'ग्रेड B — राम्रो अवस्था'};
  if(g >= 2.0) return {en:'Grade C+ — Average', ne:'ग्रेड C+ — औसत'};
  if(g >= 1.6) return {en:'Grade C — Passed', ne:'ग्रेड C — उत्तीर्ण'};
  return {en:'Grade D — Passed (CTEVT eligible)', ne:'ग्रेड D — उत्तीर्ण (CTEVT योग्य)'};
}

/* ══════════════════════════
   MAIN UPDATE
══════════════════════════ */
function updateAll(g){
  currentGPA = g;
  const gStr = g.toFixed(2);
  document.getElementById('gpaDisplay').textContent = gStr;
  const lbl = getGradeLabel(g);
  document.getElementById('gpaGrade').textContent = lbl.en;
  document.getElementById('gpaGradeNe').textContent = lbl.ne;
  document.getElementById('gpaInput').value = gStr;
  document.getElementById('hdGPA').textContent = gStr;
  document.getElementById('hdGPAne').textContent = gStr;

  const unlocked = PATHWAYS.filter(p => g >= p.gpa_min);
  const locked   = PATHWAYS.filter(p => g < p.gpa_min);

  // Quick stats
  const totalCareers = unlocked.reduce((a,p)=>a+p.careers.length,0);
  const totalDegrees = unlocked.reduce((a,p)=>a+p.degrees_en.length,0);
  document.getElementById('qsPathways').textContent = unlocked.length;
  document.getElementById('qsCareers').textContent = totalCareers;
  document.getElementById('qsDegrees').textContent = totalDegrees;

  // Sub heading
  if(unlocked.length === 4){
    document.getElementById('rsSubEN').textContent = 'All 4 pathways are open to you. You have maximum options!';
    document.getElementById('rsSubNE').textContent = 'सबै ४ मार्गहरू तपाईंका लागि खुला छन्। तपाईंसँग अधिकतम विकल्पहरू छन्!';
  } else {
    document.getElementById('rsSubEN').textContent = `${unlocked.length} pathway${unlocked.length!==1?'s':''} open at GPA ${gStr}. ${locked.length>0?'Grayed sections show what higher GPA unlocks.':''}`;
    document.getElementById('rsSubNE').textContent = `GPA ${gStr} मा ${unlocked.length} मार्ग खुला। ${locked.length>0?'धमिलो खण्डहरूले उच्च GPA ले के खोल्छ देखाउँछ।':''}`;
  }

  // Pills in card
  renderPills(g);
  // Pathway blocks
  renderBlocks(g);
  // Comparison table
  renderTable(g);
}

/* ── PILLS ── */
function renderPills(g){
  const el = document.getElementById('pillResults');
  el.innerHTML = PATHWAYS.map(p => {
    const ok = g >= p.gpa_min;
    const cls = `pw-pill pw-${p.id==='mgmt'?'mgt':p.id==='law'?'law':p.id==='ctevt'?'ctv':'sci'} ${ok?'unlocked':'locked'}`;
    return `<div class="${cls}" onclick="scrollToBlock('${p.id}')">
      <span class="pw-icon">${p.icon}</span>
      <div class="pw-name">${p.name_en}<small class="en">${p.name_ne}</small></div>
      ${ok
        ? `<span class="pw-badge" style="background:${p.color}22;color:${p.colorL};border:1px solid ${p.color}44">✓ Open</span>`
        : `<span class="pw-badge" style="background:rgba(255,255,255,.04);color:var(--muted);border:1px solid rgba(255,255,255,.08)">Need ${p.gpa_label}</span>`
      }
      ${ok?'':'<span class="lock-ico">🔒</span>'}
    </div>`;
  }).join('');
}

/* ── PATHWAY BLOCKS ── */
function renderBlocks(g){
  const el = document.getElementById('pathwayBlocks');
  el.innerHTML = PATHWAYS.map(p => {
    const ok = g >= p.gpa_min;
    const isOpen = document.getElementById('pb-body-'+p.id)?.classList.contains('open') ?? ok;
    return `<div class="pathway-block ${ok?'':'locked-block'} reveal" id="pb-${p.id}">
      <div class="pb-header" onclick="toggleBlock('${p.id}')">
        <div class="pb-left">
          <div class="pb-icon-wrap" style="background:${p.color}18;border:1px solid ${p.color}30">${p.icon}</div>
          <div>
            <div class="pb-name en">${p.name_en}<small>${p.subjects_en.slice(0,3).join(' · ')}</small></div>
            <div class="pb-name ne">${p.name_ne}<small>${p.subjects_ne.slice(0,3).join(' · ')}</small></div>
          </div>
        </div>
        <div class="pb-right">
          <div class="pb-gpa-badge" style="background:${p.color}15;color:${p.colorL};border-color:${p.color}33">
            ${ok ? '✓ Eligible' : `GPA ${p.gpa_label} required`}
          </div>
          <div class="pb-toggle ${ok?'open':''}" id="pb-toggle-${p.id}">▼</div>
        </div>
      </div>
      <div class="pb-body ${ok?'open':''}" id="pb-body-${p.id}">
        ${ok ? renderBlockBody(p, g) : renderLockedBody(p, g)}
      </div>
    </div>`;
  }).join('');
  // re-attach reveal
  setTimeout(() => document.querySelectorAll('#pathwayBlocks .reveal').forEach(el => obs.observe(el)), 20);
}

function renderBlockBody(p, g){
  // Subjects
  const subjTags = p.subjects_en.map((s,i) => `<span class="subj-tag" style="background:${p.color}12;border-color:${p.color}28;color:${p.colorL}">${s} / ${p.subjects_ne[i]}</span>`).join('');
  // Roadmap
  const rmSteps = p.roadmap.map(s => `<div class="rm-step">
    <div class="rm-dot" style="color:${p.colorL};border-color:${p.color}44">${s.dot}</div>
    <div class="rm-label en">${s.label_en}</div>
    <div class="rm-label ne">${s.label_ne}</div>
    <div class="rm-sub en">${s.sub_en}</div>
    <div class="rm-sub ne">${s.sub_ne}</div>
  </div>`).join('');
  // Careers
  const ccCards = p.careers.map(c => `<div class="cc" style="">
    <style>.cc:hover::before{background:${p.color}}</style>
    <div class="cc-icon">${c.icon}</div>
    <div class="cc-title en">${c.title_en}</div>
    <div class="cc-title ne">${c.title_ne}</div>
    <div class="cc-salary">${c.salary}</div>
    <div class="cc-growth" style="background:${c.growth_color}18;color:${c.growth_color}">
      <span class="en">${c.growth_en}</span><span class="ne">${c.growth_ne}</span>
    </div>
  </div>`).join('');
  // Degrees
  const degTags = p.degrees_en.map(d=>`<span class="subj-tag" style="background:rgba(255,255,255,.04);border-color:rgba(255,255,255,.09);color:rgba(255,255,255,.65)">${d}</span>`).join('');
  return `
    <div style="margin-top:16px">
      <div style="font-family:var(--ff-m);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:10px" class="en">Subjects</div>
      <div style="font-family:var(--ff-m);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:10px" class="ne">विषयहरू</div>
      <div class="subj-strip">${subjTags}</div>
    </div>
    <div style="margin-top:20px">
      <div style="font-family:var(--ff-m);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:4px" class="en">Career Roadmap</div>
      <div style="font-family:var(--ff-m);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:4px" class="ne">क्यारियर रोडम्याप</div>
      <div class="roadmap-mini">${rmSteps}</div>
    </div>
    <div style="margin-top:20px">
      <div style="font-family:var(--ff-m);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:10px" class="en">Career Options</div>
      <div style="font-family:var(--ff-m);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:10px" class="ne">क्यारियर विकल्पहरू</div>
      <div class="career-grid">${ccCards}</div>
    </div>
    <div style="margin-top:20px">
      <div style="font-family:var(--ff-m);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:10px" class="en">Degree Programs</div>
      <div style="font-family:var(--ff-m);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:10px" class="ne">डिग्री कार्यक्रमहरू</div>
      <div style="display:flex;flex-wrap:wrap;gap:7px">${degTags}</div>
    </div>
    <div style="margin-top:20px;padding:14px 18px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;font-size:13.5px;color:var(--muted);line-height:1.7">
      💡 <span class="en">${p.note_en}</span><span class="ne">${p.note_ne}</span>
    </div>
    ${p.special ? `<div class="ctevt-note en">🎯 <strong>CTEVT Advantage:</strong> No minimum GPA required. Best scholarship availability in Nepal. Can bridge to bachelor's degree later.</div><div class="ctevt-note ne">🎯 <strong>CTEVT फाइदा:</strong> न्यूनतम GPA आवश्यक छैन। नेपालमा सबैभन्दा धेरै छात्रवृत्ति। पछि स्नातकमा जान सकिन्छ।</div>` : ''}
    <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
      <a href="pathshala-pathways.html" style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:12px;background:${p.color}18;border:1px solid ${p.color}30;color:${p.colorL};font-size:13px;font-weight:600;font-family:var(--ff-m);transition:all .2s">
        <span class="en">🗺 Full Pathway Guide →</span><span class="ne">🗺 पूर्ण मार्ग गाइड →</span>
      </a>
      <a href="pathshala-institutions.html" style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);color:rgba(255,255,255,.6);font-size:13px;font-weight:500;font-family:var(--ff-m);transition:all .2s">
        <span class="en">🏫 Find Institutions →</span><span class="ne">🏫 संस्था खोज्नुहोस् →</span>
      </a>
    </div>`;
}

function renderLockedBody(p, g){
  const need = (p.gpa_min - g).toFixed(2);
  return `<div class="locked-overlay">
    <div class="lo-icon">🔒</div>
    <p class="en">This pathway requires <strong>GPA ${p.gpa_min}+</strong>. You need <strong>${need} more GPA points</strong> to unlock it. Slide the tool up to explore what opens.</p>
    <p class="ne">यो मार्गका लागि <strong>GPA ${p.gpa_min}+</strong> आवश्यक छ। अनलक गर्न <strong>थप ${need} GPA</strong> चाहिन्छ।</p>
  </div>`;
}

/* ── COMPARISON TABLE ── */
function renderTable(g){
  const el = document.getElementById('compareTable');
  const hd = `<tr>
    <th class="en">Pathway</th><th class="en">Min. GPA</th><th class="en">Duration</th><th class="en">Top Degree</th><th class="en">Scholarships</th><th class="en">Your Status</th>
  </tr>`;
  const rows = PATHWAYS.map(p => {
    const ok = g >= p.gpa_min;
    const pct = (p.gpa_min / 4.0) * 100;
    return `<tr style="${ok?'':'opacity:.45'}">
      <td><div class="ct-path-name"><span style="font-size:18px">${p.icon}</span><span class="en">${p.name_en}</span><span class="ne">${p.name_ne}</span></div></td>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div class="gpa-bar-wrap"><div class="gpa-bar-fill" style="width:${pct}%;background:${p.color}"></div></div>
          <span style="font-family:var(--ff-m);font-size:12px;color:${p.colorL}">${p.gpa_label}</span>
        </div>
      </td>
      <td style="font-family:var(--ff-m);font-size:12px;color:var(--muted)">${p.id==='ctevt'?'18mo – 3yr':'2+4 yr'}</td>
      <td style="font-size:13px">${p.degrees_en[0]}</td>
      <td style="font-size:12px;color:var(--muted);font-family:var(--ff-m)">${p.scholarships_en}</td>
      <td><span style="font-family:var(--ff-m);font-size:11px;padding:4px 12px;border-radius:20px;background:${ok?p.color+'18':'rgba(255,255,255,.04)'};color:${ok?p.colorL:'var(--muted)'};border:1px solid ${ok?p.color+'33':'rgba(255,255,255,.08)'}">${ok?'✓ Open':'🔒 Locked'}</span></td>
    </tr>`;
  }).join('');
  el.innerHTML = hd + rows;
}

/* ── TOGGLE BLOCKS ── */
function toggleBlock(id){
  const body   = document.getElementById('pb-body-'+id);
  const toggle = document.getElementById('pb-toggle-'+id);
  if(!body) return;
  const open = body.classList.toggle('open');
  toggle.classList.toggle('open', open);
  body.style.display = open ? 'block' : 'none';
}

function scrollToBlock(id){
  const el = document.getElementById('pb-'+id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

/* ── SHARE ── */
function shareResult(){
  const unlocked = PATHWAYS.filter(p => currentGPA >= p.gpa_min).map(p => p.name_en);
  const text = `My SEE GPA is ${currentGPA.toFixed(2)} — I can access: ${unlocked.join(', ')}. Explore at Pathshala Guide!`;
  if(navigator.share){ navigator.share({title:'Pathshala Guide — My GPA Results', text}) }
  else { navigator.clipboard?.writeText(text); alert('Results copied to clipboard!'); }
}

/* ── LANG ── */
/* [shared.js handles this] */
/* ── NAV ── */
/* [shared.js handles this] */
/* [shared.js handles this] */

/* ── REVEAL ── */
/* [shared.js handles this] */

/* ── INIT ── */
init();
// Fix pb-body display on init
setTimeout(()=>{
  PATHWAYS.forEach(p=>{
    const body = document.getElementById('pb-body-'+p.id);
    if(body) body.style.display = body.classList.contains('open') ? 'block' : 'none';
  });
},50);
