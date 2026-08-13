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
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: 0.08 });
document.querySelectorAll('section').forEach((section) => observer.observe(section));
