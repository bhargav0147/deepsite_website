/**
 * PNG Infotech - Creative Agency
 * JavaScript Interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // ========== ELEMENTS ==========
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const faqItems = document.querySelectorAll('.faq-item');
    const backToTop = document.getElementById('back-to-top');
    const contactForm = document.getElementById('contact-form');
    
    // ========== HEADER SCROLL EFFECT ==========
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top visibility
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // ========== MOBILE MENU TOGGLE ==========
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== ACTIVE NAV LINK ON SCROLL ==========
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // ========== FAQ ACCORDION ==========
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // ========== BACK TO TOP ==========
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ========== CONTACT FORM (Visual Only) ==========
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        
        // Show success message (visual only)
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
        
        // Reset form
        this.reset();
    });
    
    // ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // ========== PORTFOLIO HOVER EFFECT ==========
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.portfolio-overlay').style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.portfolio-overlay').style.opacity = '0';
        });
    });
    
    // ========== STAGGERED ANIMATIONS FOR CARDS ==========
    function addStaggeredDelay(selector, baseDelay = 0.1) {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.style.transitionDelay = `${index * baseDelay}s`;
        });
    }
    
    addStaggeredDelay('.service-card', 0.1);
    addStaggeredDelay('.portfolio-item', 0.08);
    addStaggeredDelay('.testimonial-card', 0.1);
    addStaggeredDelay('.contact-card', 0.1);
    
    // ========== PARALLAX EFFECT FOR HERO SHAPES ==========
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroShapes = document.querySelectorAll('.hero-shape');
        
        heroShapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.05;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // ========== TYPING EFFECT FOR HERO TITLE (Optional Enhancement) ==========
    // Uncomment if you want typing animation
    /*
    const heroTitle = document.querySelector('.hero-title');
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    typeWriter();
    */
    
    // ========== CONSOLE GREETING ==========
    console.log('%c PNG Infotech ', 'background: linear-gradient(135deg, #38bdf8, #0ea5e9); color: white; font-size: 20px; padding: 10px 20px; border-radius: 8px; font-weight: bold;');
    console.log('%c Crafting Digital Excellence ', 'color: #64748b; font-size: 14px;');
});
