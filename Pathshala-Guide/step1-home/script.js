/* ════════════════════════════════════════════
   PATHSHALA GUIDE — HOME PAGE SCRIPTS
   Depends on: ../shared/shared.js
════════════════════════════════════════════ */

/* [shared.js handles this] */
/* [shared.js handles this] */
/* [shared.js handles this] */

const gi=[
  {min:2.0,en:'✦ Excellent! All pathways open',ne:'✦ उत्कृष्ट! सबै मार्गहरू खुला',paths:['Science','Management','Law & Hum.','CTEVT'],cls:'green'},
  {min:1.6,en:'✦ Good — 3 pathways available',ne:'✦ राम्रो — ३ मार्गहरू उपलब्ध',paths:['Management','Law & Hum.','CTEVT'],cls:'amber'},
  {min:0,en:'✦ CTEVT is a strong choice',ne:'✦ CTEVT उत्कृष्ट विकल्प हो',paths:['CTEVT'],cls:'blue'}
];
function onSlide(el){
  const v=parseFloat(el.value);
  el.style.setProperty('--pct',(v/4*100)+'%');
  document.getElementById('gpaBig').textContent=v.toFixed(2);
  const ne=document.body.classList.contains('lang-ne');
  const info=gi.find(g=>v>=g.min);
  const r=document.getElementById('gpaR');
  r.innerHTML=`<div class="res-title">${ne?info.ne:info.en}</div><div class="res-pills">${info.paths.map(p=>`<span class="res-pill">${p}</span>`).join('')}</div>`;
  r.className='gpa-result show '+info.cls;
}
onSlide(document.getElementById('gpaS'));

/* [shared.js handles this] */
