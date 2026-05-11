// Central place for text/settings you may want to update later.


// ─── TYPED EFFECT ───
const phrases = portfolioConfig.typedPhrases;
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-text');
function type() {
  const cur = phrases[pi];
  if (!deleting) {
    el.textContent = cur.slice(0, ++ci);
    if (ci === cur.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = cur.slice(0, --ci);
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 60 : 90);
}
type();



// ─── MOBILE MENU ───
function toggleMenu() {
  mobileMenu.classList.toggle('open');
}
function closeMenu() {
  mobileMenu.classList.remove('open');
}
menuBtn.addEventListener('click', toggleMenu);
document.querySelectorAll('[data-close-menu="true"]').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

resumeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Resume download would go here!');
});

sendMessageBtn.addEventListener('click', () => {
  alert('Message sent! (This is a demo)');
});

// ─── SCROLL ANIMATIONS ───
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 80);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach((fadeEl) => obs.observe(fadeEl));
