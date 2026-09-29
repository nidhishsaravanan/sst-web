// ============================================
// UTILS — Animations & Scroll Reveal
// ============================================

export function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // For staggered children
        const children = entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        children.forEach(child => child.classList.add('active'));
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
  
  return observer;
}

export function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const target = parseInt(entry.target.dataset.count);
        const suffix = entry.target.dataset.suffix || '';
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(start + (target - start) * easeOut);
          
          entry.target.textContent = current.toLocaleString() + suffix;
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }
        
        requestAnimationFrame(updateCounter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

export function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  
  if (!parallaxElements.length) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    parallaxElements.forEach(el => {
      const speed = el.dataset.speed || 0.5;
      const offset = scrolled * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  }, { passive: true });
}

export function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  
  if (!slides.length) return;

  let currentSlide = 0;
  let interval;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function startAutoplay() {
    interval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    clearInterval(interval);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      showSlide(i);
      startAutoplay();
    });
  });

  showSlide(0);
  startAutoplay();
}

export function initTestimonialSlider() {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.testimonial-dot');
  
  if (!cards.length) return;

  let current = 0;
  let interval;

  function show(index) {
    cards.forEach(c => c.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    cards[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    current = index;
  }

  function next() {
    show((current + 1) % cards.length);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(interval);
      show(i);
      interval = setInterval(next, 6000);
    });
  });

  show(0);
  interval = setInterval(next, 6000);
}
