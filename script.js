// Hero slide carousel
const slides = document.querySelectorAll('.hero-slide');
if (slides.length > 0) {
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  // Mostrar primeiro slide
  showSlide(0);
  
  // Trocar slide a cada 13 segundos (12s da animação zoom + 1s de transição)
  setInterval(nextSlide, 13000);
}

// Mobile nav
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

btn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});

nav?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
});

// Header shadow on scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.style.boxShadow =
    window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,.06)' : 'none';
});

// Year
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
