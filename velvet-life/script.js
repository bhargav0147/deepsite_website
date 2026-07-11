// Velvet Life Insurance - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'menu');
        } else {
            icon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons();
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolling
        if (currentScroll > 10) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
        
        lastScroll = currentScroll;
    });
    
    // Scroll Reveal Animation using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add reveal class to sections dynamically
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const elements = section.querySelectorAll('h2, h3, p, .group, .bg-white, .bg-gray-50');
        elements.forEach((el, i) => {
            el.classList.add('reveal');
            el.classList.add(`stagger-${(i % 4) + 1}`);
        });
    });
    // Observe all elements with 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    
    // Form Handling
    const leadForm = document.getElementById('leadForm');
    const successMessage = document.getElementById('successMessage');
    
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = leadForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Hide form and show success message
            leadForm.style.display = 'none';
            successMessage.classList.remove('hidden');
            successMessage.classList.add('flex');
            
            // Re-initialize icons for success message
            lucide.createIcons();
            
            // Reset button for future use
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    // Phone Input Validation
    const phoneInput = document.querySelector('input[type="tel"]');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Remove non-numeric characters
            this.value = this.value.replace(/\D/g, '');
            
            // Limit to 10 digits
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
        });
    }
    
    // Parallax Effect for Hero Background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroPattern = document.querySelector('.absolute svg');
        if (heroPattern && scrolled < window.innerHeight) {
            heroPattern.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add active state to nav links based on scroll position
    const sectionsList = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sectionsList.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('text-velvet-700');
            link.classList.add('text-gray-600');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.remove('text-gray-600');
                link.classList.add('text-velvet-700');
            }
        });
    });
});