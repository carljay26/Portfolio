const portfolioConfig = {
  typedPhrases: ['Full-Stack Developer', 'Web Developer', 'App Developer', 'Game Developer', 'UI/UX Designer'],
  email: 'carljaycocamas26@gmail.com'
};

// ─── TYPED EFFECT ───
const phrases = portfolioConfig.typedPhrases;
let pi = 0;
let ci = 0;
let deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  if (!typedEl) return;
  const cur = phrases[pi];
  if (!deleting) {
    typedEl.textContent = cur.slice(0, ++ci);
    if (ci === cur.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = cur.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
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

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', toggleMenu);
  document.querySelectorAll('[data-close-menu="true"]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

// ─── NAV SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
});

// ─── FADE-IN ON SCROLL ───
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 80);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => fadeObserver.observe(el));

document.querySelectorAll('#hero .fade-in').forEach((el) => {
  setTimeout(() => el.classList.add('visible'), 100);
});
