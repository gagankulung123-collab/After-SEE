/* ════════════════════════════════════════════
   PATHSHALA GUIDE — INSTITUTIONS PAGE SCRIPTS
   Depends on: ../shared/shared.js
════════════════════════════════════════════ */

/* ── DATA ── */
const DB = [
  {id:1,icon:'🏛️',name:'Tri-Chandra Multiple Campus',name_ne:'त्रिचन्द्र बहुमुखी क्याम्पस',prov:'bagmati',loc:'Kathmandu',loc_ne:'काठमाडौँ',paths:['science','mgmt','law'],aff:'tu',gpa:'1.6+',programs:['B.Sc.','BBS','BA','BA LLB'],fee:'Government Rates',fee_ne:'सरकारी शुल्क',contact:'01-4233541',note_en:'One of Nepal\'s oldest and most respected public campuses. Strong science and law faculty. Very affordable.',note_ne:'नेपालका सबैभन्दा पुराना सार्वजनिक क्याम्पस। विज्ञान र कानून संकाय बलियो।'},
  {id:2,icon:'🏫',name:'Kathmandu Model Secondary School',name_ne:'काठमाडौँ मोडल माध्यमिक विद्यालय',prov:'bagmati',loc:'Bagbazar, Kathmandu',loc_ne:'बागबजार, काठमाडौँ',paths:['science','mgmt'],aff:'neb',gpa:'2.0+',programs:['+2 Science (PCB)','+2 Science (PCM)','+2 Management'],fee:'NPR 15,000–20,000/yr',fee_ne:'NPR १५,०००–२०,०००/वर्ष',contact:'01-4412650',note_en:'Top NEB school for +2 Science in Kathmandu. Competitive entrance required for science stream.',note_ne:'काठमाडौँमा +2 विज्ञानको लागि शीर्ष NEB विद्यालय। प्रवेश परीक्षा आवश्यक।'},
  {id:3,icon:'⚜️',name:"St. Xavier's College",name_ne:'सेन्ट जेभियर्स कलेज',prov:'bagmati',loc:'Maitighar, Kathmandu',loc_ne:'मैतीघर, काठमाडौँ',paths:['science','mgmt'],aff:'neb',gpa:'2.5+',programs:['+2 Science (PCB)','+2 Science (PCM)','+2 Management'],fee:'NPR 80,000–120,000/yr',fee_ne:'NPR ८०,०००–१२०,०००/वर्ष',contact:'01-4220571',note_en:'Premier private institution with strong academic reputation. Scholarship available for merit students.',note_ne:'उत्कृष्ट शैक्षिक प्रतिष्ठा भएको निजी संस्था। मेरिट छात्रवृत्ति उपलब्ध।'},
  {id:4,icon:'🔧',name:'CTEVT National Centre — Sanothimi',name_ne:'CTEVT राष्ट्रिय केन्द्र — सानोठिमी',prov:'bagmati',loc:'Sanothimi, Bhaktapur',loc_ne:'सानोठिमी, भक्तपुर',paths:['ctevt'],aff:'ctevt',gpa:'SEE Pass',programs:['Civil Diploma','Computer Diploma','Electrical Diploma','Hotel Management'],fee:'NPR 8,000–15,000/yr',fee_ne:'NPR ८,०००–१५,०००/वर्ष',contact:'01-6630547',note_en:'Flagship CTEVT institute. Widest program range and best scholarship availability nationwide.',note_ne:'CTEVT को मुख्य संस्थान। सबैभन्दा धेरै कार्यक्रम र छात्रवृत्ति।'},
  {id:5,icon:'⚖️',name:'Nepal Law Campus (TU)',name_ne:'नेपाल कानून क्याम्पस',prov:'bagmati',loc:'Tripureshwar, Kathmandu',loc_ne:'त्रिपुरेश्वर, काठमाडौँ',paths:['law'],aff:'tu',gpa:'1.6+',programs:['BA LLB','LLM'],fee:'Government Rates',fee_ne:'सरकारी शुल्क',contact:'01-4262904',note_en:"Nepal's premier public law campus. Affordable and prestigious for law aspirants.",note_ne:'नेपालको प्रमुख सार्वजनिक कानून क्याम्पस। कानून पढ्नेका लागि उत्तम।'},
  {id:6,icon:'🎓',name:'Apex College',name_ne:'एपेक्स कलेज',prov:'bagmati',loc:'Gairidhara, Kathmandu',loc_ne:'गैरीधारा, काठमाडौँ',paths:['mgmt'],aff:'tu',gpa:'1.6+',programs:['BBA','BIM','MBA'],fee:'NPR 90,000–130,000/yr',fee_ne:'NPR ९०,०००–१३०,०००/वर्ष',contact:'01-4002011',note_en:'Leading management college affiliated with TU. Strong industry placement record.',note_ne:'TU सम्बद्ध अग्रणी व्यवस्थापन कलेज। उद्योगमा राम्रो प्लेसमेन्ट।'},
  {id:7,icon:'🏛️',name:'Patan Multiple Campus',name_ne:'पाटन बहुमुखी क्याम्पस',prov:'bagmati',loc:'Patan, Lalitpur',loc_ne:'पाटन, ललितपुर',paths:['science','mgmt','law'],aff:'tu',gpa:'1.6+',programs:['B.Sc.','BBS','BA','BEd'],fee:'Government Rates',fee_ne:'सरकारी शुल्क',contact:'01-5522319',note_en:'Public campus in Lalitpur with affordable fees and broad program offerings.',note_ne:'ललितपुरको सस्तो र व्यापक सरकारी क्याम्पस।'},
  {id:8,icon:'🏛️',name:'Prithvi Narayan Campus',name_ne:'पृथ्वीनारायण क्याम्पस',prov:'gandaki',loc:'Pokhara',loc_ne:'पोखरा',paths:['science','mgmt','law'],aff:'tu',gpa:'1.6+',programs:['B.Sc.','BBS','BA','BA LLB'],fee:'Government Rates',fee_ne:'सरकारी शुल्क',contact:'061-523625',note_en:'Premier public campus of Gandaki province. Wide subject choice and affordable tuition.',note_ne:'गण्डकी प्रदेशको प्रमुख सार्वजनिक क्याम्पस।'},
  {id:9,icon:'⚙️',name:'Pokhara Engineering College',name_ne:'पोखरा इन्जिनियरिङ कलेज',prov:'gandaki',loc:'Pokhara',loc_ne:'पोखरा',paths:['science'],aff:'tu',gpa:'2.0+',programs:['B.E. Civil','B.E. Computer','B.E. Electrical'],fee:'NPR 160,000–200,000/yr',fee_ne:'NPR १६०,०००–२००,०००/वर्ष',contact:'061-570101',note_en:'Top engineering college in Pokhara. IOE entrance required. Municipal scholarship available.',note_ne:'पोखराको शीर्ष इन्जिनियरिङ कलेज। IOE प्रवेश आवश्यक।'},
  {id:10,icon:'🔧',name:'Pokhara CTEVT Institute',name_ne:'पोखरा CTEVT संस्थान',prov:'gandaki',loc:'Pokhara',loc_ne:'पोखरा',paths:['ctevt'],aff:'ctevt',gpa:'SEE Pass',programs:['Civil Diploma','Tourism & Hospitality','Agriculture Diploma','CMA TSLC'],fee:'NPR 7,000–12,000/yr',fee_ne:'NPR ७,०००–१२,०००/वर्ष',contact:'061-462511',note_en:"Tourism and hospitality programs are especially strong given Pokhara's industry. Scholarship seats available.",note_ne:'पोखराको पर्यटन उद्योगका कारण यहाँका कोर्सहरू विशेष लोकप्रिय।'},
  {id:11,icon:'🏥',name:'Gandaki Medical College',name_ne:'गण्डकी मेडिकल कलेज',prov:'gandaki',loc:'Pokhara',loc_ne:'पोखरा',paths:['science'],aff:'tu',gpa:'3.2+',programs:['MBBS','BDS','B.Sc. Nursing'],fee:'NPR 45 Lakh+ (MBBS)',fee_ne:'NPR ४५ लाख+ (MBBS)',contact:'061-431433',note_en:'Established medical college in Gandaki. MECEE entrance compulsory for MBBS/BDS.',note_ne:'MECEE प्रवेश अनिवार्य। गण्डकीको स्थापित मेडिकल कलेज।'},
  {id:12,icon:'🏛️',name:'Butwal Multiple Campus',name_ne:'बुटवल बहुमुखी क्याम्पस',prov:'lumbini',loc:'Butwal',loc_ne:'बुटवल',paths:['science','mgmt','law'],aff:'tu',gpa:'1.6+',programs:['B.Sc.','BBS','BA','BA LLB'],fee:'Government Rates',fee_ne:'सरकारी शुल्क',contact:'071-540231',note_en:'Major public campus in Lumbini province. Affordable with strong employment connections.',note_ne:'लुम्बिनी प्रदेशको प्रमुख सार्वजनिक क्याम्पस।'},
  {id:13,icon:'🔧',name:'Lumbini CTEVT Technical Institute',name_ne:'लुम्बिनी CTEVT प्राविधिक संस्थान',prov:'lumbini',loc:'Rupandehi',loc_ne:'रुपन्देही',paths:['ctevt'],aff:'ctevt',gpa:'SEE Pass',programs:['Civil Diploma','Electrical TSLC','Computer Diploma','Agriculture TSLC'],fee:'NPR 6,000–10,000/yr',fee_ne:'NPR ६,०००–१०,०००/वर्ष',contact:'071-550890',note_en:'Well-equipped CTEVT institute in Rupandehi. Dalit and Janajati scholarship seats reserved.',note_ne:'दलित र जनजाति छात्रवृत्ति सिट आरक्षित।'},
  {id:14,icon:'🏛️',name:'Mahendra Morang Campus (TU)',name_ne:'महेन्द्र मोरङ क्याम्पस',prov:'p1',loc:'Biratnagar',loc_ne:'बिराटनगर',paths:['science','mgmt','law'],aff:'tu',gpa:'1.6+',programs:['B.Sc.','BBS','BA','BA LLB'],fee:'Government Rates',fee_ne:'सरकारी शुल्क',contact:'021-527774',note_en:'Largest public campus in Province No. 1. Strong in science and management programs.',note_ne:'प्रदेश नं. १ को सबैभन्दा ठूलो सार्वजनिक क्याम्पस।'},
  {id:15,icon:'🔧',name:'Province 1 CTEVT Institute — Dharan',name_ne:'प्रदेश १ CTEVT संस्थान — धरान',prov:'p1',loc:'Dharan',loc_ne:'धरान',paths:['ctevt'],aff:'ctevt',gpa:'SEE Pass',programs:['Civil Diploma','Computer TSLC','Nursing TSLC','Mechanical Diploma'],fee:'NPR 7,000–11,000/yr',fee_ne:'NPR ७,०००–११,०००/वर्ष',contact:'025-522341',note_en:'Key CTEVT institute in Dharan. Remote area scholarship seats available.',note_ne:'दुर्गम क्षेत्रका विद्यार्थीका लागि छात्रवृत्ति सिट उपलब्ध।'},
  {id:16,icon:'🏛️',name:'Janakpur Campus (TU)',name_ne:'जनकपुर क्याम्पस',prov:'madhesh',loc:'Janakpur',loc_ne:'जनकपुर',paths:['mgmt','law'],aff:'tu',gpa:'1.6+',programs:['BBS','BA','BA LLB'],fee:'Government Rates',fee_ne:'सरकारी शुल्क',contact:'041-520388',note_en:'Main public campus in Madhesh province. Good for law and management aspirants.',note_ne:'मधेश प्रदेशको मुख्य सार्वजनिक क्याम्पस।'},
  {id:17,icon:'🔧',name:'Madhesh CTEVT Institute — Birgunj',name_ne:'मधेश CTEVT संस्थान — बीरगञ्ज',prov:'madhesh',loc:'Birgunj',loc_ne:'बीरगञ्ज',paths:['ctevt'],aff:'ctevt',gpa:'SEE Pass',programs:['Civil Diploma','Electrical Diploma','Computer TSLC','Agriculture TSLC'],fee:'NPR 6,000–10,000/yr',fee_ne:'NPR ६,०००–१०,०००/वर्ष',contact:'051-526712',note_en:'CTEVT institute in Birgunj. Janajati and Dalit scholarship seats reserved.',note_ne:'जनजाति र दलित छात्रवृत्ति सिट आरक्षित।'},
  {id:18,icon:'🏥',name:'Karnali Academy of Health Sciences',name_ne:'कर्णाली स्वास्थ्य विज्ञान प्रतिष्ठान',prov:'karnali',loc:'Jumla',loc_ne:'जुम्ला',paths:['science'],aff:'tu',gpa:'2.0+',programs:['B.Sc. Nursing','B.Sc. Public Health'],fee:'Government / Scholarship',fee_ne:'सरकारी / छात्रवृत्ति',contact:'087-520010',note_en:'Special institution for Karnali province. Government scholarship prioritised for Karnali students.',note_ne:'कर्णाली प्रदेशका विद्यार्थीलाई सरकारी छात्रवृत्ति प्राथमिकता।'},
  {id:19,icon:'🔧',name:'Karnali CTEVT Centre — Surkhet',name_ne:'कर्णाली CTEVT केन्द्र — सुर्खेत',prov:'karnali',loc:'Surkhet',loc_ne:'सुर्खेत',paths:['ctevt'],aff:'ctevt',gpa:'SEE Pass',programs:['Civil TSLC','Agriculture Diploma','Electrical TSLC','CMA TSLC'],fee:'NPR 5,000–8,000/yr (subsidised)',fee_ne:'NPR ५,०००–८,०००/वर्ष (अनुदानित)',contact:'083-520446',note_en:'Heavily subsidised CTEVT for Karnali students. Remote area scholarships widely available.',note_ne:'कर्णाली विद्यार्थीका लागि अत्यन्त अनुदानित।'},
  {id:20,icon:'🏛️',name:'Siddhanath Multiple Campus',name_ne:'सिद्धनाथ बहुमुखी क्याम्पस',prov:'sudurpashchim',loc:'Mahendranagar',loc_ne:'महेन्द्रनगर',paths:['mgmt','law'],aff:'tu',gpa:'1.6+',programs:['BBS','BA'],fee:'Government Rates',fee_ne:'सरकारी शुल्क',contact:'099-521341',note_en:'Main public campus in Sudurpashchim. Serves remote students across the province.',note_ne:'सुदूरपश्चिमको मुख्य सार्वजनिक क्याम्पस।'},
  {id:21,icon:'🔧',name:'Sudurpashchim CTEVT Institute — Dhangadhi',name_ne:'सुदूरपश्चिम CTEVT संस्थान — धनगढी',prov:'sudurpashchim',loc:'Dhangadhi',loc_ne:'धनगढी',paths:['ctevt'],aff:'ctevt',gpa:'SEE Pass',programs:['Civil Diploma','Computer Diploma','Agriculture TSLC','Health TSLC'],fee:'NPR 4,000–8,000/yr (subsidised)',fee_ne:'NPR ४,०००–८,०००/वर्ष',contact:'091-522901',note_en:'Most subsidised CTEVT in Nepal. Priority for remote, Dalit, Janajati and disabled students.',note_ne:'नेपालको सबैभन्दा अनुदानित CTEVT। दलित, जनजाति, अपाङ्गलाई प्राथमिकता।'},
];

/* ── STATE ── */
let F = {prov:'all', path:'all', aff:'all'};
let VIEW = 'grid';
const ne = () => document.body.classList.contains('lang-ne');

const PROV_COL  = {bagmati:'#c0272d',gandaki:'#0ea5e9',lumbini:'#16a34a',p1:'#f59e0b',madhesh:'#a855f7',karnali:'#ec4899',sudurpashchim:'#0d9488'};
const PROV_LBL  = {bagmati:'Bagmati',gandaki:'Gandaki',lumbini:'Lumbini',p1:'Province 1',madhesh:'Madhesh',karnali:'Karnali',sudurpashchim:'Sudurpashchim'};
const PROV_NE   = {bagmati:'बागमती',gandaki:'गण्डकी',lumbini:'लुम्बिनी',p1:'प्रदेश १',madhesh:'मधेश',karnali:'कर्णाली',sudurpashchim:'सुदूरपश्चिम'};
const PATH_BADGE= {science:'<span class="badge b-sci">🔬 Science</span>',mgmt:'<span class="badge b-mgt">📊 Mgmt</span>',law:'<span class="badge b-law">⚖️ Law</span>',ctevt:'<span class="badge b-ctv">🔧 CTEVT</span>'};
const AFF_LBL   = {neb:'NEB',ctevt:'CTEVT',tu:'TU Affiliated'};

/* ── FILTERS ── */
function applyFilters() {
  const q = (document.getElementById('searchInp').value||'').toLowerCase();
  const res = DB.filter(i =>
    (F.prov==='all'||i.prov===F.prov) &&
    (F.path==='all'||i.paths.includes(F.path)) &&
    (F.aff==='all' ||i.aff===F.aff) &&
    (!q || i.name.toLowerCase().includes(q) || i.loc.toLowerCase().includes(q))
  );
  renderCards(res);
  document.getElementById('cntEN').textContent = res.length;
  document.getElementById('cntNE').textContent = res.length;
}

function setF(type, val, btn, mob) {
  F[type] = val;
  const deskId = type==='prov'?'provChips':type==='path'?'pathChips':'affChips';
  const mobId  = type==='prov'?'provChipsMob':'pathChipsMob';
  [deskId, mobId].forEach(id => {
    document.getElementById(id)?.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.v===val));
  });
  applyFilters();
}

function clearFilters() {
  F = {prov:'all', path:'all', aff:'all'};
  ['provChips','pathChips','affChips','provChipsMob','pathChipsMob'].forEach(id => {
    document.getElementById(id)?.querySelectorAll('.chip').forEach((c,i) => c.classList.toggle('active',i===0));
  });
  document.getElementById('searchInp').value = '';
  applyFilters();
}

/* ── RENDER ── */
function renderCards(data) {
  const g = document.getElementById('grid');
  if (!data.length) {
    g.innerHTML = `<div class="no-res"><div class="nr-ico">🔍</div>
      <h3 class="en">No institutions found</h3><h3 class="ne">कुनै संस्था फेला परेन</h3>
      <p class="en">Try adjusting your filters or search term.</p>
      <p class="ne">फिल्टर वा खोज परिवर्तन गर्नुहोस्।</p></div>`;
    return;
  }
  g.innerHTML = data.map(inst => {
    const c = PROV_COL[inst.prov]||'#888';
    const pLbl = ne() ? PROV_NE[inst.prov] : PROV_LBL[inst.prov];
    const name = ne() ? inst.name_ne : inst.name;
    const loc  = ne() ? inst.loc_ne  : inst.loc;
    const provB = `<span class="badge b-prv" style="background:${c}1a;color:${c};border-color:${c}44">${pLbl}</span>`;
    const pathBs = inst.paths.map(p=>PATH_BADGE[p]).join('');
    const affB  = `<span class="badge b-aff">${AFF_LBL[inst.aff]||inst.aff}</span>`;
    const progs = inst.programs.map(p=>`<span class="ptag">${p}</span>`).join('');
    const gLbl  = ne() ? 'न्यूनतम GPA' : 'Min. GPA';
    const mLbl  = ne() ? 'विवरण →' : 'Details →';
    return `<div class="ic reveal" onclick="openModal(${inst.id})">
      <div class="ic-head">
        <div class="ic-icon">${inst.icon}</div>
        <div><div class="ic-name">${name}</div><div class="ic-loc">${loc}</div></div>
      </div>
      <div class="ic-badges">${provB}${pathBs}${affB}</div>
      <div class="ic-progs">${progs}</div>
      <div class="ic-foot">
        <div class="gpa-lbl">${gLbl}: <strong>${inst.gpa}</strong></div>
        <div class="more-btn">${mLbl}</div>
      </div>
    </div>`;
  }).join('');
  // re-attach reveal observer
  setTimeout(() => document.querySelectorAll('#grid .reveal').forEach(el => obs.observe(el)), 20);
}

/* ── MODAL ── */
function openModal(id) {
  const i = DB.find(x=>x.id===id); if (!i) return;
  const n = ne();
  const pLbl = n ? PROV_NE[i.prov] : PROV_LBL[i.prov];
  document.getElementById('modalBox').innerHTML = `
    <div class="modal-hd"><h2>${i.icon} ${n?i.name_ne:i.name}</h2><button class="modal-x" onclick="closeModal()">✕</button></div>
    <div class="modal-bd">
      <div class="m-sec">
        <div class="m-sec-title"><span class="en">Details</span><span class="ne">विवरण</span></div>
        <div class="m-row"><span class="m-lbl en">Location</span><span class="m-lbl ne">स्थान</span><span class="m-val">${n?i.loc_ne:i.loc}</span></div>
        <div class="m-row"><span class="m-lbl en">Province</span><span class="m-lbl ne">प्रदेश</span><span class="m-val">${pLbl}</span></div>
        <div class="m-row"><span class="m-lbl en">Affiliated</span><span class="m-lbl ne">सम्बद्ध</span><span class="m-val">${AFF_LBL[i.aff]||i.aff}</span></div>
        <div class="m-row"><span class="m-lbl en">Min. GPA</span><span class="m-lbl ne">न्यूनतम GPA</span><span class="m-val" style="color:var(--gold-l);font-weight:600">${i.gpa}</span></div>
        <div class="m-row"><span class="m-lbl en">Fees</span><span class="m-lbl ne">शुल्क</span><span class="m-val">${n?i.fee_ne:i.fee}</span></div>
        <div class="m-row"><span class="m-lbl en">Contact</span><span class="m-lbl ne">सम्पर्क</span><span class="m-val">${i.contact}</span></div>
      </div>
      <div class="m-sec">
        <div class="m-sec-title"><span class="en">Programs Offered</span><span class="ne">कार्यक्रमहरू</span></div>
        <div class="m-progs">${i.programs.map(p=>`<span class="mp">${p}</span>`).join('')}</div>
      </div>
      <div class="m-sec">
        <div class="m-sec-title"><span class="en">About</span><span class="ne">बारेमा</span></div>
        <p style="font-size:14px;color:var(--muted);line-height:1.8">${n?i.note_ne:i.note_en}</p>
        <p style="margin-top:10px;font-size:11.5px;color:#4ade80;font-family:var(--ff-m)">✅ Verified — NEB / CTEVT official sources</p>
      </div>
      <div class="modal-btns">
        <button class="btn-primary" onclick="window.location='pathshala-pathways.html'">
          <span class="en">🗺 View Pathway Guide</span><span class="ne">🗺 मार्ग गाइड हेर्नुहोस्</span>
        </button>
        <button class="btn-ghost" onclick="closeModal()">
          <span class="en">Close</span><span class="ne">बन्द</span>
        </button>
      </div>
    </div>`;
  document.getElementById('modalBg').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(e) {
  if (!e||e.target===document.getElementById('modalBg')) {
    document.getElementById('modalBg').classList.remove('open');
    document.body.style.overflow='';
  }
}

/* ── VIEW ── */
function setView(v) {
  VIEW=v;
  document.getElementById('grid').classList.toggle('list-view',v==='list');
  document.getElementById('gBtn').classList.toggle('active',v==='grid');
  document.getElementById('lBtn').classList.toggle('active',v==='list');
}

/* ── LANG ── */
function setLang(l) {
  document.body.className='lang-'+l;
  document.getElementById('bEN').className=l==='en'?'active':'';
  document.getElementById('bNE').className=l==='ne'?'active':'';
  localStorage.setItem('pg_l',l);
  applyFilters();
}
const sv=localStorage.getItem('pg_l'); if(sv) setLang(sv);

/* ── NAV ── */
/* [shared.js handles this] */
/* [shared.js handles this] */

/* ── FILTER DRAWER ── */
function openFD(){document.getElementById('fdOv').classList.add('open');document.body.style.overflow='hidden'}
function closeFD(e){if(!e||e.target===document.getElementById('fdOv')){document.getElementById('fdOv').classList.remove('open');document.body.style.overflow=''}}

/* ── COUNTS ── */
function updateCounts(){
  const map={all:DB.length,bagmati:0,gandaki:0,lumbini:0,p1:0,madhesh:0,karnali:0,sudurpashchim:0};
  DB.forEach(i=>{if(map[i.prov]!==undefined)map[i.prov]++});
  const ids={all:'ca',bagmati:'cb',gandaki:'cg',lumbini:'cl',p1:'cp1',madhesh:'cm',karnali:'ck',sudurpashchim:'cs'};
  Object.entries(ids).forEach(([k,id])=>{const el=document.getElementById(id);if(el)el.textContent=map[k]});
}

/* ── REVEAL ── */
const obs = new IntersectionObserver(entries => entries.forEach(x => {
  if(x.isIntersecting){x.target.classList.add('in');obs.unobserve(x.target)}
}),{threshold:0.06});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* ── INIT ── */
updateCounts();
applyFilters();
