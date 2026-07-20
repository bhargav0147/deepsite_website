/* ============================================
   THE CADSTUDIO — MAIN SCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Navbar Scroll Effect ---
  const navbar = document.querySelector('.navbar');
  const handleNavScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();

  // --- Mobile Menu ---
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Gallery Filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.filter;

      galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // --- Lightbox ---
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Testimonial Slider ---
  const slider = document.querySelector('.testimonial-slider');
  if (slider) {
    const track = slider.querySelector('.testimonial-track');
    const cards = slider.querySelectorAll('.testimonial-card');
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');
    const dotsContainer = slider.querySelector('.slider-dots');
    let currentSlide = 0;
    const totalSlides = cards.length;
    let autoPlayInterval;

    // Create dots
    if (dotsContainer) {
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    }

    const dots = dotsContainer ? dotsContainer.querySelectorAll('.slider-dot') : [];

    function goToSlide(index) {
      currentSlide = index;
      if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
        resetAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
        resetAutoPlay();
      });
    }

    function startAutoPlay() {
      autoPlayInterval = setInterval(() => {
        goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
      }, 5000);
    }

    function resetAutoPlay() {
      clearInterval(autoPlayInterval);
      startAutoPlay();
    }

    startAutoPlay();
  }

  // --- Form Validation ---
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Clear previous errors
      form.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
      });

      // Validate required fields
      form.querySelectorAll('[required]').forEach(field => {
        const group = field.closest('.form-group');
        const errorMsg = group ? group.querySelector('.error-msg') : null;

        if (!field.value.trim()) {
          isValid = false;
          if (group) group.classList.add('error');
          if (errorMsg) errorMsg.textContent = 'This field is required';
        }

        // Email validation
        if (field.type === 'email' && field.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            isValid = false;
            if (group) group.classList.add('error');
            if (errorMsg) errorMsg.textContent = 'Please enter a valid email';
          }
        }

        // Phone validation
        if (field.type === 'tel' && field.value.trim()) {
          const phoneRegex = /^[\d\s+\-()]{7,15}$/;
          if (!phoneRegex.test(field.value)) {
            isValid = false;
            if (group) group.classList.add('error');
            if (errorMsg) errorMsg.textContent = 'Please enter a valid phone number';
          }
        }
      });

      if (isValid) {
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const phone = form.querySelector('input[type="tel"]').value;
        const project = form.querySelector('select').value;
        const details = form.querySelector('textarea').value;

        const message = `*New Project Inquiry*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Project Type:* ${project}

*Project Details:*
${details}`;

        const whatsappNumber = "919722677878";

        const whatsappURL =
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

        form.reset();
      }
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Counter Animation ---
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = Math.floor(current) + (entry.target.dataset.suffix || '');
        }, 25);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // --- Active nav link based on current page ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

const galleryImages = [
  "./assets/00 drone view.png",
  "./assets/00 Elevation.png",
  "./assets/01. Parking.jpg",
  "./assets/02. Home theater room.png",
  "./assets/03. 1st floor entrance.png",
  "./assets/04. living room view 1.jpg",
  "./assets/05. living room view 2.jpeg",
  "./assets/06. living room tv unit.png",
  "./assets/07. kitchen.png",
  "./assets/08. 1st floor bedroom bed.jpg",
  "./assets/09. 1st floor bedroom wardrobe.png",
  "./assets/10. 2nd floor passage.jpg",
  "./assets/11. 2nd floor bed.jpeg",
  "./assets/12. 2nd floor fist bedroom wardrobe.png",
  "./assets/13. 2nd floor second bedroom bed.png",
  "./assets/14. 2nd floor second bedroom wardrobe.png",
  "./assets/15. tarrace room.png",

  "./assets/bedroom_CTexmap.jpg",

  "./assets/diskk 730.jpg",
  "./assets/diskk 731.jpg",
  "./assets/diskk 732.jpg",
  "./assets/diskk 733.jpg",
  "./assets/diskk 734.jpg",
  "./assets/diskk 735.jpg",
  "./assets/diskk 736.jpg",
  "./assets/diskk 737.jpg",
  "./assets/diskk 738.jpg",
  "./assets/diskk 739.jpg",
  "./assets/diskk 740.jpg",
  "./assets/diskk 741.jpg",
  "./assets/diskk 742.jpg",
  "./assets/diskk 743.jpg",
  "./assets/diskk 744.jpg",
  "./assets/diskk 745.jpg",
  "./assets/diskk 746.jpg",
  "./assets/diskk 747.jpg",
  "./assets/diskk 748.jpg",
  "./assets/diskk 749.jpg",
  "./assets/diskk 750.jpg",
  "./assets/diskk 751.jpg",
  "./assets/diskk 752.jpg",
  "./assets/diskk 753.jpg",
  "./assets/diskk 754.jpg",
  "./assets/diskk 2440.jpg",
  "./assets/diskk 2441.jpg",
  "./assets/diskk 2442.jpg",
  "./assets/diskk 2443.jpg",
  "./assets/diskk 2444.jpg",
  "./assets/diskk 2445.jpg",
  "./assets/diskk 2446.jpg",
  "./assets/diskk 2447.jpg",
  "./assets/diskk 2448.jpg",
  "./assets/diskk 3139.jpg",
  "./assets/diskk 3140.jpg",
  "./assets/diskk 3141.jpg",
  "./assets/diskk 3142.jpg",
  "./assets/diskk 3143.jpg",
  "./assets/diskk 3144.jpg",
  "./assets/diskk 3145.jpg",
  "./assets/diskk 3147.jpg",
  "./assets/diskk 3148.jpg",
  "./assets/diskk 3149.jpg",
  "./assets/diskk 3150.jpg",
  "./assets/diskk 3151.jpg",
  "./assets/diskk 3152.jpg",
  "./assets/diskk 3153.jpg",
  "./assets/diskk 3154.jpg",
  "./assets/diskk 3155.jpg",
  "./assets/diskk 3156.jpg",
  "./assets/diskk 3157.jpg",
  "./assets/diskk 3158.jpg",
  "./assets/diskk 3159.jpg",
  "./assets/diskk 3160.jpg",
  "./assets/diskk 3162.jpg",
  "./assets/diskk 3163.jpg",
  "./assets/diskk 3164.jpg",
  "./assets/diskk 3165.jpg",
  "./assets/diskk 3166.jpg",
  "./assets/diskk 3167.jpg",
  "./assets/diskk 3168.jpg",
  "./assets/diskk 3169.jpg",

  "./assets/diskk 4440.png",
  "./assets/diskk 4441.png",
  "./assets/diskk 4442.png",
  "./assets/diskk 4443.png",
  "./assets/diskk 4444.png",
  "./assets/diskk 4445.png",

  "./assets/diskk 4525.jpg",
  "./assets/diskk 4526.jpg"
];

// Gallery page
const gallery = document.getElementById("galleryGrid");

if (gallery) {
    gallery.innerHTML = galleryImages.map(path => `
        <div class="gallery-item">
            <img src="${path}" alt="" loading="lazy">
        </div>
    `).join("");
}

// Home page
const homeGallery = document.getElementById("homeGallery");

if (homeGallery) {
    homeGallery.innerHTML = galleryImages
        .slice(0, 6)
        .map(path => `
            <div class="gallery-item">
                <img src="${path}" alt="" loading="lazy">
            </div>
        `)
        .join("");
}