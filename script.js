// Central place for text/settings you may want to update later.
const portfolioConfig = {
  typedPhrases: ['Full-Stack Developer', 'Web Developer', 'App Developer', 'Game Developer', 'UI/UX Designer'],
  email: 'carljaycocamas26@gmail.com'
};

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
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

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

// ─── COPY EMAIL (footer Gmail) ───
const copyEmailBtn = document.getElementById('copyEmailBtn');

async function copyEmailToClipboard() {
  const { email } = portfolioConfig;
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(email);
    return;
  }
  const textarea = document.createElement('textarea');
  textarea.value = email;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const label = copyEmailBtn.textContent;
    try {
      await copyEmailToClipboard();
      copyEmailBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyEmailBtn.textContent = label;
      }, 2000);
    } catch {
      copyEmailBtn.textContent = 'Copy failed';
      setTimeout(() => {
        copyEmailBtn.textContent = label;
      }, 2000);
    }
  });
}

// ─── SCROLL ANIMATIONS ───
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 80);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach((fadeEl) => obs.observe(fadeEl));
