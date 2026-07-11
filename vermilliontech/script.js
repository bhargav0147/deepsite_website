/* ============================================
   VERMILLION TECH - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Page Progress Line ---
  const progressBar = document.createElement('div');
  progressBar.className = 'page-progress';
  progressBar.style.width = '0%';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });

  // --- Navbar Scroll Effect ---
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Active Link Highlight ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu-panel a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Mobile Menu ---
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Close menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Stagger reveal for grid children ---
  const staggerContainers = document.querySelectorAll('.stagger-reveal');
  staggerContainers.forEach(container => {
    const children = container.children;
    Array.from(children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
      child.classList.add('reveal');
      revealObserver.observe(child);
    });
  });

  // --- Cursor Follow Effect ---
  const cursorFollower = document.createElement('div');
  cursorFollower.className = 'cursor-follower';
  document.body.prepend(cursorFollower);

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    followerX += (mouseX - followerX) * 0.08;
    followerY += (mouseY - followerY) * 0.08;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hide on mobile
  if (window.innerWidth < 768) {
    cursorFollower.style.display = 'none';
  }

  // --- Back to Top Button ---
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Portfolio Filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;

      portfolioCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- Contact Form Validation & WhatsApp ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate fields
      const fields = contactForm.querySelectorAll('[required]');
      fields.forEach(field => {
        const formGroup = field.closest('.form-group');
        if (!field.value.trim()) {
          formGroup.classList.add('error');
          isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
          formGroup.classList.add('error');
          isValid = false;
        } else {
          formGroup.classList.remove('error');
        }
      });

      if (isValid) {
        const name = contactForm.querySelector('[name="name"]')?.value || '';
        const phone = contactForm.querySelector('[name="phone"]')?.value || '';
        const email = contactForm.querySelector('[name="email"]')?.value || '';
        const service = contactForm.querySelector('[name="service"]')?.value || '';
        const budget = contactForm.querySelector('[name="budget"]')?.value || '';
        const message = contactForm.querySelector('[name="message"]')?.value || '';

        const whatsappMsg = `Hello Vermillion Tech!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email)}%0A*Service:* ${encodeURIComponent(service)}%0A${budget ? '*Budget:* ' + encodeURIComponent(budget) + '%0A' : ''}*Message:* ${encodeURIComponent(message)}`;
        
        window.open(`https://wa.me/917043123536?text=${whatsappMsg}`, '_blank');
      }
    });

    // Remove error on input
    contactForm.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.closest('.form-group').classList.remove('error');
      });
    });
  }

  // --- Lead Magnet Form (Home page) ---
  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = leadForm.querySelector('[name="name"]')?.value || '';
      const phone = leadForm.querySelector('[name="phone"]')?.value || '';
      const service = leadForm.querySelector('[name="service"]')?.value || '';
      const message = leadForm.querySelector('[name="message"]')?.value || '';

      const whatsappMsg = `Hello! I'd like a Free Digital Growth Consultation.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service Interest:* ${encodeURIComponent(service)}%0A*Message:* ${encodeURIComponent(message)}`;
      
      window.open(`https://wa.me/917043123536?text=${whatsappMsg}`, '_blank');
    });
  }

  // --- Counter Animation ---
  const statNumbers = document.querySelectorAll('.stat-number');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const increment = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current + suffix;
        }, 30);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Initialize Lucide Icons ---
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // --- FAQ Accordion (if exists) ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = null;
        }
      });
    }
  });
});

// --- Utility: Email validation ---
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}