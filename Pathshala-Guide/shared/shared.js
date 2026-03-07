/* ════════════════════════════════════════════
   PATHSHALA GUIDE — SHARED JAVASCRIPT
   Used by all 5 pages
════════════════════════════════════════════ */

/* ── LANGUAGE TOGGLE ── */
function setLang(l) {
  document.body.className = 'lang-' + l;
  document.getElementById('bEN').className = l === 'en' ? 'active' : '';
  document.getElementById('bNE').className = l === 'ne' ? 'active' : '';
  localStorage.setItem('pg_l', l);
}
// Restore saved language on load
(function () {
  const saved = localStorage.getItem('pg_l');
  if (saved) setLang(saved);
})();

/* ── MOBILE NAV ── */
function openNav() {
  document.getElementById('mobOv').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNav(e) {
  if (!e || e.target === document.getElementById('mobOv')) {
    document.getElementById('mobOv').classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(x => {
    if (x.isIntersecting) {
      x.target.classList.add('in');
      revealObserver.unobserve(x.target);
    }
  }),
  { threshold: 0.06 }
);

function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', initReveal);
