/* =============================================
   YASHASVEE SPIRITUAL PRIVATE LIMITED
   Main JavaScript - All Pages
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initLightbox();
  initGalleryFilter();
  initForms();
  initSmoothScroll();
});

/* ---------- NAVBAR ---------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Active link highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ---------- MOBILE MENU ---------- */
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!btn || !mobileNav) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ---------- SCROLL REVEAL ---------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ---------- COUNTER ANIMATION ---------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * (target - start) + start);
    el.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }

  requestAnimationFrame(update);
}

/* ---------- LIGHTBOX ---------- */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ---------- GALLERY FILTER ---------- */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ---------- FORM VALIDATION ---------- */
function initForms() {
  // Lead Magnet Form
  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(leadForm)) {
        navigateToWhatsApp(leadForm, 'Free Assessment Request');
      }
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(contactForm)) {
        navigateToWhatsApp(contactForm, 'Contact Message');
      }
    });
  }

  // Product Inquiry
  const inquiryBtns = document.querySelectorAll('.inquiry-btn');
  inquiryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.dataset.product || 'our products';
      // Redirect to contact page with product info
      window.location.href = `contact.html?product=${encodeURIComponent(productName)}`;
    });
  });

  // Check for product query param on contact page
  const urlParams = new URLSearchParams(window.location.search);
  const productParam = urlParams.get('product');
  if (productParam) {
    const messageField = document.getElementById('contactMessage');
    if (messageField) {
      messageField.value = `I'm interested in ${productParam}. Please share more details.`;
    }
  }
}

function validateForm(form) {
  let isValid = true;
  const groups = form.querySelectorAll('.form-group[data-required]');

  groups.forEach(group => {
    const input = group.querySelector('input, select, textarea');
    const error = group.querySelector('.form-error');
    const isRequired = group.dataset.required === 'true';

    // Reset
    group.classList.remove('error');
    if (error) error.style.display = 'none';

    if (isRequired && !input.value.trim()) {
      group.classList.add('error');
      if (error) {
        error.textContent = 'This field is required';
        error.style.display = 'block';
      }
      isValid = false;
      return;
    }

    // Email validation
    if (input.type === 'email' && input.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        group.classList.add('error');
        if (error) {
          error.textContent = 'Please enter a valid email';
          error.style.display = 'block';
        }
        isValid = false;
      }
    }

    // Phone validation
    if (input.type === 'tel' && input.value.trim()) {
      const phoneRegex = /^[\d\s+()-]{7,15}$/;
      if (!phoneRegex.test(input.value.trim())) {
        group.classList.add('error');
        if (error) {
          error.textContent = 'Please enter a valid phone number';
          error.style.display = 'block';
        }
        isValid = false;
      }
    }
  });

  return isValid;
}

function navigateToWhatsApp(form, formType) {
  let message = formType + '\n\n';

  const formData = new FormData(form);
  for (const [name, value] of formData.entries()) {
    if (!value.trim()) continue;

    const field = form.querySelector('[name="' + name + '"]');
    if (!field) continue;

    let label;
    let displayValue = value.trim();

    if (field.tagName === 'SELECT') {
      if (field.selectedIndex <= 0) continue;
      label = 'Property Type';
      displayValue = field.options[field.selectedIndex].text;
    } else {
      label = (field.getAttribute('placeholder') || name)
        .replace(/ \*/g, '')
        .replace(/\*/g, '')
        .replace(/\(optional\)/gi, '')
        .replace(/\(.*\)/g, '')
        .trim();
    }

    if (displayValue) {
      message += label + ': ' + displayValue + '\n';
    }
  }

  const whatsappURL = 'https://wa.me/918905939369?text=' + encodeURIComponent(message);
  window.open(whatsappURL, '_blank');

  showSuccess(form);
}

function showSuccess(form) {
  const successEl = form.parentElement.querySelector('.form-success');
  if (successEl) {
    form.style.display = 'none';
    successEl.classList.add('active');
  } else {
    // Fallback: reset form
    form.reset();
    alert('Thank you! We will get back to you soon.');
  }
}

/* ---------- SMOOTH SCROLL ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}