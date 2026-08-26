/**
 * ANGULER INNOVATION - 2026 INTERACTIVITY ENGINE
 * Pure Vanilla JavaScript Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initHeaderScroll();
  initMobileDrawer();
  initScrollObserver();
  initSpotlightEffect();
  initAccordions();
  initFilterPills();
  initContactForm();
  initReadingProgress();
  initCounterStats();
  initWhatsAppFloatingBtn();
});

/* --------------------------------------------------------------------------
   1. CUSTOM MAGNETIC CURSOR SYSTEM
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    return; // Skip on touch / mobile devices
  }

  let cursorDot = document.querySelector('.cursor-dot');
  let cursorRing = document.querySelector('.cursor-ring');

  if (!cursorDot) {
    cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
  }

  if (!cursorRing) {
    cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    document.body.appendChild(cursorRing);
  }

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Hover States
  const hoverElements = document.querySelectorAll('a, button, .bento-card, .faq-header, .filter-pill, .btn');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
      if (el.classList.contains('btn') || el.classList.contains('magnetic')) {
        document.body.classList.add('cursor-magnetic');
      }
    });

    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover', 'cursor-magnetic');
    });
  });
}

/* --------------------------------------------------------------------------
   2. HEADER SCROLL COMPACTNESS
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   3. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.mobile-drawer-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-sublink');

  if (!drawer) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    if (toggleBtn) toggleBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    if (toggleBtn) toggleBtn.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (drawer.classList.contains('active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   4. SCROLL REVEAL OBSERVER (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollObserver() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px 50px 0px',
    threshold: 0.02
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));

  // Immediate check for elements in initial viewport on page load (mobile fix)
  const checkInitialViewport = () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80 && rect.bottom > -50) {
        el.classList.add('active');
      }
    });
  };

  checkInitialViewport();
  setTimeout(checkInitialViewport, 100);
  setTimeout(checkInitialViewport, 300);
  window.addEventListener('load', checkInitialViewport);
}

/* --------------------------------------------------------------------------
   5. BENTO SPOTLIGHT EFFECT
   -------------------------------------------------------------------------- */
function initSpotlightEffect() {
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });
}

/* --------------------------------------------------------------------------
   6. ACCORDIONS (FAQ)
   -------------------------------------------------------------------------- */
function initAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isCurrentlyActive = item.classList.contains('active');

      // Close other accordions in same container if desired
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.faq-item').forEach(sibling => {
          sibling.classList.remove('active');
        });
      }

      if (!isCurrentlyActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. CATEGORY FILTER PILLS
   -------------------------------------------------------------------------- */
function initFilterPills() {
  const filterPills = document.querySelectorAll('.filter-pill');
  if (!filterPills.length) return;

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');
      const itemsToFilter = document.querySelectorAll('[data-category]');

      itemsToFilter.forEach(item => {
        const itemCategories = item.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || itemCategories.includes(filterValue)) {
          item.style.display = '';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(15px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   8. CONTACT FORM VALIDATION & WHATSAPP REDIRECT
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Fields to validate
    const nameInput = contactForm.querySelector('#fullName');
    const emailInput = contactForm.querySelector('#emailAddress');
    const phoneInput = contactForm.querySelector('#phoneNumber');
    const companyInput = contactForm.querySelector('#companyName');
    const serviceSelect = contactForm.querySelector('#serviceInterest');
    const budgetInput = contactForm.querySelector('input[name="budget"]:checked');
    const messageInput = contactForm.querySelector('#projectDetails');

    // Reset error states
    contactForm.querySelectorAll('.form-control').forEach(input => {
      input.classList.remove('has-error');
    });

    if (nameInput && nameInput.value.trim() === '') {
      nameInput.classList.add('has-error');
      isValid = false;
    }

    if (emailInput) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('has-error');
        isValid = false;
      }
    }

    if (messageInput && messageInput.value.trim() === '') {
      messageInput.classList.add('has-error');
      isValid = false;
    }

    if (isValid) {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg> Opening WhatsApp...
      `;

      const name = nameInput ? nameInput.value.trim() : 'N/A';
      const email = emailInput ? emailInput.value.trim() : 'N/A';
      const phone = phoneInput && phoneInput.value.trim() !== '' ? phoneInput.value.trim() : 'N/A';
      const company = companyInput && companyInput.value.trim() !== '' ? companyInput.value.trim() : 'N/A';
      const service = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : 'General Inquiry';
      const budget = budgetInput ? (budgetInput.nextElementSibling ? budgetInput.nextElementSibling.innerText.trim() : budgetInput.value) : 'Flexible';
      const message = messageInput ? messageInput.value.trim() : 'N/A';

      const waText = 
        `Hello Anguler Innovation,\n\n` +
        `I have submitted a new project inquiry from your website:\n\n` +
        `*Name:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Phone:* ${phone}\n` +
        `*Company:* ${company}\n` +
        `*Service:* ${service}\n` +
        `*Budget:* ${budget}\n` +
        `*Project Overview:* ${message}`;

      const waUrl = `https://wa.me/919274520512?text=${encodeURIComponent(waText)}`;

      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        const successNotice = document.getElementById('formSuccessNotice');
        if (successNotice) {
          successNotice.style.display = 'block';
          successNotice.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Open WhatsApp web / app with formatted message details
        window.open(waUrl, '_blank');
      }, 1000);
    }
  });
}

/* --------------------------------------------------------------------------
   9. BLOG READING PROGRESS BAR
   -------------------------------------------------------------------------- */
function initReadingProgress() {
  const progressBar = document.querySelector('.reading-progress-bar');
  const article = document.querySelector('article.blog-article');

  if (!progressBar || !article) return;

  window.addEventListener('scroll', () => {
    const articleBox = article.getBoundingClientRect();
    const articleHeight = articleBox.height;
    const windowHeight = window.innerHeight;

    let progress = 0;
    if (articleBox.top < 0) {
      progress = (Math.abs(articleBox.top) / (articleHeight - windowHeight)) * 100;
    }

    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   10. STATS COUNTER ANIMATION
   -------------------------------------------------------------------------- */
function initCounterStats() {
  const statNumbers = document.querySelectorAll('.stat-counter');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-target'), 10);
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = countTo / steps;

        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= countTo) {
            target.textContent = countTo + (target.getAttribute('data-suffix') || '');
            clearInterval(timer);
          } else {
            target.textContent = Math.floor(current) + (target.getAttribute('data-suffix') || '');
          }
        }, stepTime);

        obs.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => observer.observe(stat));
}

/* --------------------------------------------------------------------------
   11. FLOATING WHATSAPP BUTTON SYSTEM
   -------------------------------------------------------------------------- */
function initWhatsAppFloatingBtn() {
  if (document.querySelector('.whatsapp-float')) return;

  const waBtn = document.createElement('a');
  waBtn.className = 'whatsapp-float magnetic';
  waBtn.href = 'https://wa.me/919274520512?text=' + encodeURIComponent('Hello Anguler Innovation, I would like to inquire about your services.');
  waBtn.target = '_blank';
  waBtn.rel = 'noopener noreferrer';
  waBtn.setAttribute('aria-label', 'Chat on WhatsApp');
  waBtn.title = 'Chat with us on WhatsApp';
  waBtn.innerHTML = `<img src="assets/whatsapp.png" alt="WhatsApp Chat">`;

  document.body.appendChild(waBtn);
}
