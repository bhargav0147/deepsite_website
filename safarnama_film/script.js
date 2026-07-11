// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU =====
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    if (navOverlay) navOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });
}

if (navOverlay) {
  navOverlay.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ===== REVEAL ON SCROLL =====
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== GALLERY FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-masonry-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    
    galleryItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 50);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 400);
      }
    });
  });
});

// ===== LIGHTBOX =====
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-masonry-item, .gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (img && lightbox && lightboxImg) {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ===== FORM VALIDATION =====
function validateForm(formEl, successEl) {
  if (!formEl) return;
  
  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    const requiredFields = formEl.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      const group = field.closest('.form-group');
      if (group) {
        group.classList.remove('error');
      }
      
      if (!field.value.trim()) {
        isValid = false;
        if (group) group.classList.add('error');
      }
      
      if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
          isValid = false;
          if (group) group.classList.add('error');
        }
      }
      
      if (field.type === 'tel' && field.value.trim()) {
        const phoneRegex = /^[\d\s\-\+\(\)]{7,15}$/;
        if (!phoneRegex.test(field.value.trim())) {
          isValid = false;
          if (group) group.classList.add('error');
        }
      }
    });
    
    if (isValid) {
      formEl.style.display = 'none';
      if (successEl) {
        successEl.classList.add('show');
      }
      formEl.reset();
      
      setTimeout(() => {
        formEl.style.display = '';
        if (successEl) successEl.classList.remove('show');
      }, 4000);
    }
  });
  
  // Remove error on input
  formEl.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group) group.classList.remove('error');
    });
  });
}

// Lead magnet form
const leadForm = document.querySelector('.lead-magnet-form form');
const leadSuccess = document.querySelector('.lead-magnet-form .form-success');
validateForm(leadForm, leadSuccess);

// Contact form
const contactForm = document.querySelector('.contact-form');
const contactSuccess = document.querySelector('.contact-form-wrapper .form-success');
validateForm(contactForm, contactSuccess);

// ===== PARALLAX LIGHT =====
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  
  document.querySelectorAll('.parallax-light').forEach(el => {
    const speed = el.getAttribute('data-speed') || 0.3;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    }
  });
});

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      const suffix = entry.target.getAttribute('data-suffix') || '';
      let current = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        entry.target.textContent = Math.floor(current) + suffix;
      }, 30);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// ===== NAVBAR HIDE ON SCROLL DOWN =====
let lastScrollTop = 0;
let scrollTimeout;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  
  clearTimeout(scrollTimeout);
  
  if (scrollTop > 200) {
    if (scrollTop > lastScrollTop) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
  
  scrollTimeout = setTimeout(() => {
    navbar.style.transform = 'translateY(0)';
  }, 1500);
});