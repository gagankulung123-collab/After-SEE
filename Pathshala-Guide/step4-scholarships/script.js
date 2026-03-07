/* ════════════════════════════════════════════
   PATHSHALA GUIDE — SCHOLARSHIPS PAGE SCRIPTS
   Depends on: ../shared/shared.js
════════════════════════════════════════════ */

/* ── LANG ── */
/* [shared.js handles this] */
/* ── NAV ── */
/* [shared.js handles this] */
/* [shared.js handles this] */

/* ── FILTER ── */
function filterCards(type, btn){
  document.querySelectorAll('.ftab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.sc-card').forEach(card=>{
    if(type==='all'){card.style.display='';return;}
    const types = (card.dataset.type||'').split(' ');
    card.style.display = types.includes(type) ? '' : 'none';
  });
}

/* ── STEPS MODAL ── */
const stepsData = {
  municipal:{
    title_en:'Municipal Quota — Documents Needed',
    title_ne:'नगरपालिका कोटा — आवश्यक कागजातहरू',
    docs:['SEE Marksheet (original + 2 copies)','School Leaving Certificate','Citizenship certificate or birth certificate','Permanent address certificate from ward','Recommendation letter from school principal','College acceptance/admission form']
  },
  pm:{
    title_en:"PM Scholarship — Documents Needed",
    title_ne:'प्रधानमन्त्री छात्रवृत्ति — आवश्यक कागजात',
    docs:['SEE Marksheet with GPA 3.0+','Income certificate (annual < NPR 4 Lakh)','Citizenship certificate','Bank account details','Application form from Ministry of Education website','School leaving certificate']
  },
  province:{
    title_en:'Province Scholarship — Documents Needed',
    title_ne:'प्रदेश छात्रवृत्ति — आवश्यक कागजात',
    docs:['SEE Marksheet','Permanent address in that province (citizenship)','School leaving certificate from province school','Application form from Province Education Ministry','Ward recommendation letter']
  },
  ctevt_dalit:{
    title_en:'CTEVT Dalit/Janajati — Documents Needed',
    title_ne:'CTEVT दलित/जनजाति — आवश्यक कागजात',
    docs:['SEE Certificate/Marksheet','Caste certificate (Dalit or Janajati)','Citizenship or birth certificate','Application form from CTEVT institute','Ward office recommendation']
  },
  ctevt_women:{
    title_en:'CTEVT Women Reserved — Documents Needed',
    title_ne:'CTEVT महिला आरक्षित — आवश्यक कागजात',
    docs:['SEE Certificate/Marksheet','Citizenship/birth certificate confirming gender','Application form from CTEVT institute','School leaving certificate']
  },
  ctevt_remote:{
    title_en:'CTEVT Remote Area — Documents Needed',
    title_ne:'CTEVT दुर्गम क्षेत्र — आवश्यक कागजात',
    docs:['SEE Certificate/Marksheet','Permanent address certificate from remote district','Ward/municipality recommendation letter','Citizenship or birth certificate','Application form from CTEVT institute']
  },
  nyf:{
    title_en:'Nepal Youth Foundation — How to Apply',
    title_ne:'Nepal Youth Foundation — कसरी आवेदन',
    docs:['Contact NYF Kathmandu office: 01-4371799','Provide family income proof (below poverty line)','School record / SEE marksheet','Recommendation from school or local NGO','Personal statement (why you need the scholarship)']
  },
  unicef:{
    title_en:'UNICEF/World Bank Aid — How to Apply',
    title_ne:'UNICEF/World Bank — कसरी आवेदन',
    docs:['Apply through your local municipality education department','Poverty card or income certificate','SEE marksheet','Regular attendance record from school','Citizenship / birth certificate']
  },
  institution:{
    title_en:'Institution Scholarship — How to Apply',
    title_ne:'संस्था छात्रवृत्ति — कसरी आवेदन',
    docs:['Visit the college admissions office directly','SEE Marksheet with GPA (3.5+ usually required)','School leaving certificate','Application form from the specific college','May require written entrance test or interview']
  },
  disability:{
    title_en:'Disability Scholarship — Documents Needed',
    title_ne:'अपाङ्गता छात्रवृत्ति — आवश्यक कागजात',
    docs:['Valid disability identification card (from government)','SEE Certificate/Marksheet','Citizenship or birth certificate','Application form from chosen government college','Doctor/hospital certificate confirming disability']
  }
};

function showSteps(key){
  const d = stepsData[key]; if(!d) return;
  const ne = document.body.classList.contains('lang-ne');
  const title = ne ? d.title_ne : d.title_en;
  const items = d.docs.map(i=>`<li style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.06);font-size:14px;color:rgba(255,255,255,.8)"><span style="color:var(--gold);font-weight:700;flex-shrink:0">✓</span>${i}</li>`).join('');
  document.getElementById('stepsContent').innerHTML = `
    <div style="font-family:var(--ff-m);font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:12px">Documents Checklist</div>
    <h3 style="font-family:var(--ff-d);font-size:20px;font-weight:700;margin-bottom:20px;line-height:1.3">${title}</h3>
    <ul style="list-style:none">${items}</ul>
    <div style="margin-top:20px;padding:16px;background:rgba(232,160,32,.07);border:1px solid rgba(232,160,32,.15);border-radius:12px">
      <p style="font-size:13px;color:var(--muted);line-height:1.7">
        <strong style="color:var(--gold-l)">💡 Tip:</strong>
        ${ne ? 'सबै कागजातको दुई–दुई प्रतिलिपि लिएर जानुहोस्। मूल कागजात सँगै राख्नुहोस्।' : 'Always bring 2 copies of every document. Keep originals safe — only submit photocopies unless asked otherwise.'}
      </p>
    </div>`;
  document.getElementById('stepsModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeSteps(e){
  if(!e||e.target===document.getElementById('stepsModal')){
    document.getElementById('stepsModal').classList.remove('open');
    document.body.style.overflow='';
  }
}

/* ── REVEAL ── */
/* [shared.js handles this] */
