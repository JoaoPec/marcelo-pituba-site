document.documentElement.classList.add('js-motion');

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuButton?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  mobileNav.setAttribute('aria-hidden', String(!open));
});
document.querySelectorAll('.mobile-nav a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  mobileNav.setAttribute('aria-hidden', 'true');
}));
const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: 0.08 });
document.querySelectorAll('section').forEach((section) => sectionObserver.observe(section));

const hero = document.querySelector('.hero');
const floatingWhatsApp = document.querySelector('.whatsapp-float');
if (hero && floatingWhatsApp) {
  const heroObserver = new IntersectionObserver(([entry]) => {
    floatingWhatsApp.classList.toggle('is-visible', !entry.isIntersecting);
  }, { threshold: 0 });
  heroObserver.observe(hero);
}
