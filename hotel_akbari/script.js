/* ============================================
   HOTEL AKBARI - Main JavaScript
   ============================================ */

// ---------- WhatsApp Function ----------
function openWhatsApp(message) {
  const phone = '1234567890';
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

// ---------- Navbar Scroll ----------
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
}

// ---------- Mobile Menu ----------
function initMobileMenu() {
  const toggle = document.querySelector('.navbar-toggle');
  const overlay = document.querySelector('.navbar-overlay');
  const backdrop = document.querySelector('.navbar-backdrop');
  const body = document.body;

  if (!toggle || !overlay) return;

  const openMenu = () => {
    toggle.classList.add('active');
    overlay.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggle.classList.remove('active');
    overlay.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    if (overlay.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ---------- Active Nav Link ----------
function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-menu a, .navbar-overlay a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ---------- Scroll Reveal ----------
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ---------- Cursor Follow ----------
function initCursorFollow() {
  if (window.innerWidth < 769) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;
  let dotX = 0, dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.classList.add('active');
    dot.classList.add('active');
  });

  document.addEventListener('mouseleave', () => {
    glow.classList.remove('active');
    dot.classList.remove('active');
  });

  function animate() {
    // Glow follows slowly (lagging behind)
    glowX += (mouseX - glowX) * 0.06;
    glowY += (mouseY - glowY) * 0.06;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';

    // Dot follows quickly (catches up fast)
    dotX += (mouseX - dotX) * 0.18;
    dotY += (mouseY - dotY) * 0.18;
    dot.style.left = dotX + 'px';
    dot.style.top = dotY + 'px';

    requestAnimationFrame(animate);
  }

  animate();

  // Re-check on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth < 769) {
      if (glow.parentNode) glow.parentNode.removeChild(glow);
      if (dot.parentNode) dot.parentNode.removeChild(dot);
    }
  });
}

// ---------- Booking Form Validation ----------
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const checkin = form.querySelector('[name="checkin"]').value;
    const checkout = form.querySelector('[name="checkout"]').value;
    const guests = form.querySelector('[name="guests"]').value;
    const rooms = form.querySelector('[name="rooms"]').value;

    let isValid = true;

    // Clear previous errors
    form.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

    // Validate
    if (!name) {
      setFieldError(form, 'name', 'Name is required');
      isValid = false;
    }
    if (!phone) {
      setFieldError(form, 'phone', 'Phone is required');
      isValid = false;
    }
    if (!checkin) {
      setFieldError(form, 'checkin', 'Check-in date is required');
      isValid = false;
    }
    if (!checkout) {
      setFieldError(form, 'checkout', 'Check-out date is required');
      isValid = false;
    }
    if (!guests) {
      setFieldError(form, 'guests', 'Number of guests is required');
      isValid = false;
    }
    if (!rooms) {
      setFieldError(form, 'rooms', 'Number of rooms is required');
      isValid = false;
    }

    if (isValid) {
      const message = `Hello Hotel Akbari, I want to check room availability.\n\nName: ${name}\nPhone: ${phone}\nCheck-in Date: ${checkin}\nCheck-out Date: ${checkout}\nGuests: ${guests}\nRooms: ${rooms}\n\nPlease share room availability and price.`;
      openWhatsApp(message);
    }
  });
}

// ---------- Contact Form Validation ----------
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const checkin = form.querySelector('[name="checkin"]').value;
    const checkout = form.querySelector('[name="checkout"]').value;
    const guests = form.querySelector('[name="guests"]').value;
    const message = form.querySelector('[name="message"]').value.trim();

    let isValid = true;

    form.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

    if (!name) {
      setFieldError(form, 'name', 'Name is required');
      isValid = false;
    }
    if (!phone) {
      setFieldError(form, 'phone', 'Phone is required');
      isValid = false;
    }
    if (!checkin) {
      setFieldError(form, 'checkin', 'Check-in date is required');
      isValid = false;
    }
    if (!checkout) {
      setFieldError(form, 'checkout', 'Check-out date is required');
      isValid = false;
    }
    if (!guests) {
      setFieldError(form, 'guests', 'Number of guests is required');
      isValid = false;
    }

    if (isValid) {
      const waMessage = `Hello Hotel Akbari, I want to make an inquiry.\n\nName: ${name}\nPhone: ${phone}\nCheck-in Date: ${checkin}\nCheck-out Date: ${checkout}\nGuests: ${guests}\nMessage: ${message || 'N/A'}\n\nPlease contact me.`;
      openWhatsApp(waMessage);
    }
  });
}

function setFieldError(form, fieldName, msg) {
  const field = form.querySelector(`[name="${fieldName}"]`);
  if (field) {
    const group = field.closest('.form-group');
    if (group) {
      group.classList.add('error');
      const errorEl = group.querySelector('.error-msg');
      if (errorEl) errorEl.textContent = msg;
    }
  }
}

// ---------- Room Book Buttons ----------
function initRoomButtons() {
  document.querySelectorAll('[data-room]').forEach(btn => {
    btn.addEventListener('click', () => {
      const roomName = btn.getAttribute('data-room');
      const message = `Hello Hotel Akbari, I am interested in booking ${roomName}. Please share availability and price.`;
      openWhatsApp(message);
    });
  });
}

// ---------- Lightbox ----------
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('[data-lightbox]').forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-lightbox');
      lightboxImg.src = imgSrc;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// ---------- Gallery Filter ----------
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const items = document.querySelectorAll('.gallery-full-item');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');

      items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ---------- Floating WhatsApp ----------
function initWhatsAppFloat() {
  const floatBtn = document.getElementById('whatsappFloat');
  if (!floatBtn) return;

  floatBtn.addEventListener('click', () => {
    openWhatsApp('Hello Hotel Akbari! I would like to inquire about room availability.');
  });
}

// ---------- Scroll to Top ----------
function initScrollToTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- Page Load Animation ----------
function initPageLoad() {
  document.body.classList.add('page-loaded');
}

// ---------- Initialize Everything ----------
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initActiveNav();
  initScrollReveal();
  initCursorFollow();
  initBookingForm();
  initContactForm();
  initRoomButtons();
  initLightbox();
  initGalleryFilter();
  initWhatsAppFloat();
  initScrollToTop();
  initPageLoad();
});