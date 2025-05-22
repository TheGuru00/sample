function revealOnScroll() {
    const fadeUps = document.querySelectorAll('.fade-up');
    const windowHeight = window.innerHeight;
  
    fadeUps.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);