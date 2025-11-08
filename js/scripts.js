// small JS for menu toggle, year, and simple form UX
document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle for mobile
    const menuToggle = document.getElementById('menuToggle');
    menuToggle && menuToggle.addEventListener('click', () => {
      const nav = document.querySelector('.nav');
      if (!nav) return;
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = '#fff';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '65px';
      nav.style.padding = '12px';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 6px 18px rgba(22, 28, 37, 0.06)';
    });
  
    // Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    // Simple form submit UX: show thank-you and reset (works if using formspree or similar)
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        // Allow normal post to Formspree or endpoint, but show quick feedback
        setTimeout(()=> {
          alert('Thank you! Your message has been sent. We will contact you on the provided email/WhatsApp.');
          form.reset();
        }, 500);
      });
    }
  });
  