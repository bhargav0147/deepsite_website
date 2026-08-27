/**
 * Harsh Savaliya - Personal Brand Website Core Scripts
 * Pure Vanilla JavaScript (No Framework Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  setActiveNavLink();
  initScrollAnimations();
  initRotatingBadge();
  initContactForm();
  initCustomCursor();
});

/**
 * Custom Cursor Follower Controller
 */
function initCustomCursor() {
  if (window.innerWidth < 900) return;

  let dot = document.querySelector('.cursor-dot');
  let follower = document.querySelector('.cursor-follower');

  if (!dot) {
    dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);
  }
  if (!follower) {
    follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(follower);
  }

  let mouseX = -100, mouseY = -100;
  let followerX = -100, followerY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }, { passive: true });

  function animate() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, .pillar-card, .role-box, .expertise-card, .insight-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering-link'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering-link'));
  });
}

/**
 * Header Scroll State Controller
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * Mobile Navigation Overlay Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '&#9776;';
      document.body.style.overflow = '';
    } else {
      navMenu.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = '&times;';
      document.body.style.overflow = 'hidden';
    }
  });

  // Close nav on link click
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '&#9776;';
        document.body.style.overflow = '';
      }
    });
  });
}

/**
 * Highlight Current Page Link in Header & Footer
 */
function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * IntersectionObserver for Smooth Scroll Reveal Animations
 */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-up, .pillar-card, .role-box, .expertise-card, .insight-card');
  
  if (!('IntersectionObserver' in window)) {
    fadeElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach((el, index) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${(index % 4) * 0.1}s`;
    observer.observe(el);
  });
}

/**
 * Dynamic SVG Circular Text Badge Generator
 */
function initRotatingBadge() {
  const badgeWrapper = document.querySelector('.badge-wrapper');
  if (!badgeWrapper) return;

  const text = "PR STRATEGIST • ENTREPRENEUR • ANGEL INVESTOR • ";
  const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 160 160");
  svg.setAttribute("class", "rotating-badge-svg");

  const defs = document.createElementNS(svgNS, "defs");
  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("id", "textCirclePath");
  path.setAttribute("d", "M 80, 80 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0");

  defs.appendChild(path);
  svg.appendChild(defs);

  const textNode = document.createElementNS(svgNS, "text");
  const textPath = document.createElementNS(svgNS, "textPath");
  textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#textCirclePath");
  textPath.setAttribute("class", "rotating-badge-text");
  textPath.textContent = text;

  textNode.appendChild(textPath);
  svg.appendChild(textNode);

  const existingSvg = badgeWrapper.querySelector('svg');
  if (existingSvg) existingSvg.remove();

  badgeWrapper.prepend(svg);
}

/**
 * Interactive Contact Form Controller with WhatsApp Message Trigger
 */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const toastMsg = document.getElementById('toastMsg');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName')?.value.trim() || '';
    const email = document.getElementById('formEmail')?.value.trim() || '';
    const phone = document.getElementById('formPhone')?.value.trim() || '';
    const company = document.getElementById('formCompany')?.value.trim() || '';
    const inquiryType = document.getElementById('formType')?.value || 'General Inquiry';
    const message = document.getElementById('formMessage')?.value.trim() || '';

    if (!name || !email || !message) {
      alert('Please complete all required fields.');
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Submit Inquiry';
    
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Opening Message...';
    }

    // Format text string without emojis
    const formattedText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCompany: ${company || 'N/A'}\nInquiry Type: ${inquiryType}\nMessage: ${message}`;
    
    const waUrl = `https://wa.me/919274520512?text=${encodeURIComponent(formattedText)}`;

    if (toastMsg) {
      toastMsg.style.display = 'block';
      toastMsg.textContent = 'Thank you! Your inquiry has been submitted. Opening WhatsApp message with your details...';
      toastMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    setTimeout(() => {
      window.open(waUrl, '_blank');
      contactForm.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }

      setTimeout(() => {
        if (toastMsg) toastMsg.style.display = 'none';
      }, 7000);
    }, 800);
  });
}
