/* ============================================
   SWIFTRUT - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initMobileMenu();
  initLeadMagnet();
  initContactForm();
  initCopyReferralCode();
  initToast();
});

/* ============================================
   NAVBAR - Scroll Effect & Active Link
   ============================================ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ============================================
   LEAD MAGNET FORM
   ============================================ */
function initLeadMagnet() {
  const forms = document.querySelectorAll('.lead-magnet-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input && input.value.trim()) {
        showToast('🎉 Guide PDF sent to your email!');
        input.value = '';
      }
    });
  });
}

/* ============================================
   CONTACT FORM
   ============================================ */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✅ Message sent successfully!');
    form.reset();
  });
}

/* ============================================
   COPY REFERRAL CODE
   ============================================ */
function initCopyReferralCode() {
  const copyBtn = document.querySelector('.copy-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const code = document.querySelector('.refer-code-box .code');
    if (code) {
      navigator.clipboard.writeText(code.textContent).then(() => {
        showToast('📋 Referral code copied!');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      }).catch(() => {
        showToast('📋 Code: ' + code.textContent);
      });
    }
  });
}

/* ============================================
   TOAST NOTIFICATION
   ============================================ */
let toastElement = null;

function initToast() {
  toastElement = document.querySelector('.toast');
  if (!toastElement) {
    toastElement = document.createElement('div');
    toastElement.className = 'toast';
    document.body.appendChild(toastElement);
  }
}

function showToast(message) {
  if (!toastElement) initToast();
  toastElement.textContent = message;
  toastElement.classList.add('show');
  setTimeout(() => {
    toastElement.classList.remove('show');
  }, 3000);
}

/* ============================================
   COUNTER ANIMATION
   ============================================ */
function animateCounters() {
  const counters = document.querySelectorAll('.hero-stat .number');
  counters.forEach(counter => {
    const target = counter.getAttribute('data-count');
    if (!target) return;
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2000;
    const step = parseInt(target) / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= parseInt(target)) {
        current = parseInt(target);
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current) + suffix;
    }, 16);
  });
}

// Trigger counter animation when hero is visible
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statsObserver.observe(heroStats);
}