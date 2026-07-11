/* ============================================
   CARNIVAL ASSURANCE — JAVASCRIPT
   Pure Vanilla JS
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Scroll Progress Bar ---
  const scrollProgress = document.querySelector('.scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', function () {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + '%';
    });
  }

  // --- Sticky Navbar ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const isOnHero = document.querySelector('.hero') || document.querySelector('.page-hero');
    if (isOnHero) {
      // Start transparent on hero pages
    }
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    // Trigger on load
    if (window.scrollY > 80) navbar.classList.add('scrolled');
  }

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
      mobileToggle.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      if (mobileOverlay) mobileOverlay.classList.toggle('visible');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', function () {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
        mobileOverlay.classList.remove('visible');
        document.body.style.overflow = '';
      });
    }

    // Close menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
        if (mobileOverlay) mobileOverlay.classList.remove('visible');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Counter Animation ---
  const counters = document.querySelectorAll('.trust-number');
  let counterAnimated = false;

  function animateCounters() {
    counters.forEach(function (counter) {
      const target = parseInt(counter.getAttribute('data-count'));
      const suffix = counter.getAttribute('data-suffix') || '';
      const prefix = counter.getAttribute('data-prefix') || '';
      let current = 0;
      const increment = Math.ceil(target / 60);
      const duration = 2000;
      const stepTime = duration / (target / increment);

      function updateCounter() {
        current += increment;
        if (current >= target) {
          counter.textContent = prefix + target + suffix;
          return;
        }
        counter.textContent = prefix + current + suffix;
        requestAnimationFrame(updateCounter);
      }
      updateCounter();
    });
  }

  if (counters.length > 0) {
    const trustSection = document.querySelector('.trust-section');
    if (trustSection) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !counterAnimated) {
            counterAnimated = true;
            animateCounters();
          }
        });
      }, { threshold: 0.3 });
      observer.observe(trustSection);
    }
  }

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const answerInner = item.querySelector('.faq-answer-inner');

    if (question && answer) {
      question.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach(function (otherItem) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        });

        // Open clicked if wasn't active
        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answerInner.scrollHeight + 'px';
        }
      });
    }
  });

  // --- Gallery Lightbox ---
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  if (galleryItems.length > 0 && lightbox && lightboxImg) {
    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        const img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || '';
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --- Testimonial Slider ---
  const sliderTrack = document.querySelector('.slider-track');
  const sliderPrev = document.querySelector('.slider-prev');
  const sliderNext = document.querySelector('.slider-next');
  let sliderIndex = 0;

  if (sliderTrack && sliderPrev && sliderNext) {
    const slides = sliderTrack.querySelectorAll('.testimonial-card');
    let slidesPerView = 3;

    function updateSlidesPerView() {
      if (window.innerWidth < 768) {
        slidesPerView = 1;
      } else if (window.innerWidth < 1024) {
        slidesPerView = 2;
      } else {
        slidesPerView = 3;
      }
    }

    function slideTo(index) {
      updateSlidesPerView();
      const maxIndex = Math.max(0, slides.length - slidesPerView);
      sliderIndex = Math.max(0, Math.min(index, maxIndex));
      const cardWidth = slides[0].offsetWidth + 16; // margin
      sliderTrack.style.transform = 'translateX(' + (-sliderIndex * cardWidth) + 'px)';
    }

    sliderNext.addEventListener('click', function () {
      slideTo(sliderIndex + 1);
    });

    sliderPrev.addEventListener('click', function () {
      slideTo(sliderIndex - 1);
    });

    window.addEventListener('resize', function () {
      slideTo(sliderIndex);
    });
  }

  // --- Form Validation ---
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach(function (field) {
        const errorEl = field.parentElement.querySelector('.form-error');
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#e74c3c';
          if (errorEl) errorEl.style.display = 'block';
        } else {
          field.style.borderColor = '';
          if (errorEl) errorEl.style.display = 'none';
        }

        // Validate mobile
        if (field.type === 'tel' && field.value.trim()) {
          const phoneRegex = /^[6-9]\d{9}$/;
          if (!phoneRegex.test(field.value.trim())) {
            isValid = false;
            field.style.borderColor = '#e74c3c';
            if (errorEl) {
              errorEl.textContent = 'Please enter a valid 10-digit mobile number';
              errorEl.style.display = 'block';
            }
          }
        }

        // Validate email
        if (field.type === 'email' && field.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value.trim())) {
            isValid = false;
            field.style.borderColor = '#e74c3c';
            if (errorEl) {
              errorEl.textContent = 'Please enter a valid email';
              errorEl.style.display = 'block';
            }
          }
        }
      });
    });
  });

  // --- Back to Top ---
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});