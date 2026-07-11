/* ============================================
   SHIVINTA PHARMA — PREMIUM JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Navbar Scroll --- */
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* --- Mobile Menu --- */
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* --- Scroll Animations --- */
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(el => {
    fadeObserver.observe(el);
  });

  /* --- Counter Animation --- */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        if (!isNaN(target)) {
          animateCounter(el, target);
        }
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(el => {
    counterObserver.observe(el);
  });

  function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();
    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    };
    requestAnimationFrame(step);
  }

  /* --- Form Validation --- */
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[\d\s\-\+\(\)]{7,15}$/.test(phone);
  }

  function showError(input, message) {
    input.classList.add('error');
    const errorSpan = input.parentElement.querySelector('.form-error');
    if (errorSpan) errorSpan.textContent = message;
  }

  function clearError(input) {
    input.classList.remove('error');
    const errorSpan = input.parentElement.querySelector('.form-error');
    if (errorSpan) errorSpan.textContent = '';
  }

  function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    inputs.forEach(input => {
      clearError(input);
      const value = input.value.trim();

      if (!value) {
        showError(input, 'This field is required');
        isValid = false;
        return;
      }

      if (input.type === 'email' && !validateEmail(value)) {
        showError(input, 'Please enter a valid email');
        isValid = false;
      }

      if (input.type === 'tel' && !validatePhone(value)) {
        showError(input, 'Please enter a valid phone number');
        isValid = false;
      }
    });

    return isValid;
  }

  // Home Quote Form
  const homeQuoteForm = document.getElementById('homeQuoteForm');
  if (homeQuoteForm) {
    homeQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(homeQuoteForm)) {
        showFormSuccess(homeQuoteForm);
      }
    });

    // Clear errors on input
    homeQuoteForm.querySelectorAll('input, textarea, select').forEach(input => {
      input.addEventListener('input', () => clearError(input));
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(contactForm)) {
        showFormSuccess(contactForm);
      }
    });

    contactForm.querySelectorAll('input, textarea, select').forEach(input => {
      input.addEventListener('input', () => clearError(input));
    });
  }

  function showFormSuccess(form) {
    const successEl = form.parentElement.querySelector('.form-success');
    form.style.display = 'none';
    if (successEl) {
      successEl.classList.add('show');
    } else {
      // Create success message if not in HTML
      const div = document.createElement('div');
      div.className = 'form-success show';
      div.innerHTML = `
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m22 4-7.2 7.2-2.8-2.8"/></svg>
        <h4>Thank You!</h4>
        <p>Your message has been received. Our team will contact you within 24 hours.</p>
      `;
      form.parentElement.appendChild(div);
    }
  }

  /* --- Smooth Scroll for Anchor Links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});