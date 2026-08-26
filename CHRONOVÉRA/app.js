/* ==========================================================================
   NEPTUNE TIMES - ULTRA-PREMIUM LUXURY WATCH SHOWCASE APPLICATION LOGIC
   Vanilla JavaScript (ES6+) | Zero Libraries
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. INITIAL STATE & ELEMENT REFERENCES
    // ----------------------------------------------------------------------
    const state = {
        activeView: 'home',
        selectedBrand: 'all',
        selectedCategory: 'all',
        searchQuery: '',
        activeWatchModal: null,
        cursor: {
            targetX: 0,
            targetY: 0,
            currentX: 0,
            currentY: 0,
            isHovering: false,
            text: ''
        }
    };

    // DOM Elements
    const preloader = document.getElementById('preloader');
    const preloaderProgress = document.getElementById('preloader-fill');
    const preloaderNumber = document.getElementById('preloader-num');
    
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');

    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    const cursorText = document.getElementById('cursor-text');

    const watchesGrid = document.getElementById('watches-grid');
    const brandsGrid = document.getElementById('brands-grid');
    const brandsPageGrid = document.getElementById('brands-page-grid');

    const brandFilterSelect = document.getElementById('brand-filter-select');
    const searchInput = document.getElementById('search-input');

    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // ----------------------------------------------------------------------
    // 2. APPLE-INSPIRED PRELOADER LOGIC
    // ----------------------------------------------------------------------
    function initPreloader() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 15) + 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                if (preloaderProgress) preloaderProgress.style.width = '100%';
                if (preloaderNumber) preloaderNumber.textContent = '100%';

                setTimeout(() => {
                    if (preloader) preloader.classList.add('fade-out');
                    initScrollAnimations();
                }, 400);
            } else {
                if (preloaderProgress) preloaderProgress.style.width = `${progress}%`;
                if (preloaderNumber) preloaderNumber.textContent = `${progress}%`;
            }
        }, 60);
    }

    // ----------------------------------------------------------------------
    // 3. DUAL-ELEMENT LERP CUSTOM CURSOR ENGINE (FINE POINTER ONLY)
    // ----------------------------------------------------------------------
    function initCustomCursor() {
        if (!cursorDot || !cursorRing || window.matchMedia('(hover: none), (pointer: coarse)').matches) {
            return;
        }

        document.body.classList.add('custom-cursor-enabled');

        let isInitialized = false;

        window.addEventListener('mousemove', (e) => {
            state.cursor.targetX = e.clientX;
            state.cursor.targetY = e.clientY;

            if (!isInitialized) {
                state.cursor.currentX = e.clientX;
                state.cursor.currentY = e.clientY;
                isInitialized = true;
            }

            // Instantly update primary dot (GPU accelerated 3D transform)
            cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        }, { passive: true });

        // Ultra-snappy Lerp loop for ring matching physical mouse speed
        function renderCursorRing() {
            state.cursor.currentX += (state.cursor.targetX - state.cursor.currentX) * 0.45;
            state.cursor.currentY += (state.cursor.targetY - state.cursor.currentY) * 0.45;

            cursorRing.style.transform = `translate3d(${state.cursor.currentX}px, ${state.cursor.currentY}px, 0) translate(-50%, -50%)`;

            requestAnimationFrame(renderCursorRing);
        }
        requestAnimationFrame(renderCursorRing);

        // Bind Hover Magnetics & Text Labels
        document.addEventListener('mouseover', (e) => {
            const target = e.target.closest('[data-cursor], a, button, .watch-card, .brand-card, select, input');
            if (target) {
                cursorRing.classList.add('is-hovering');
                cursorDot.classList.add('is-hovering');

                const cursorLabel = target.getAttribute('data-cursor') || 
                                   (target.tagName === 'A' ? 'OPEN' : 
                                   target.tagName === 'BUTTON' ? 'CLICK' : 
                                   target.classList.contains('watch-card') ? 'VIEW' : 
                                   target.classList.contains('brand-card') ? 'EXPLORE' : 'INTERACT');
                
                if (cursorText) cursorText.textContent = cursorLabel;
            }
        });

        document.addEventListener('mouseout', (e) => {
            const target = e.target.closest('[data-cursor], a, button, .watch-card, .brand-card, select, input');
            if (target) {
                cursorRing.classList.remove('is-hovering');
                cursorDot.classList.remove('is-hovering');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 4. NAVIGATION, STICKY HEADER, MOBILE DRAWER & SECTION SCROLL SPY
    // ----------------------------------------------------------------------
    function initNavigation() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        if (mobileToggle && mobileDrawer) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('is-open');
                mobileDrawer.classList.toggle('is-open');
            });
        }

        // Smooth Scroll & View Switcher for Header Nav Links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);

                    if (state.activeView !== 'home') {
                        switchView('home');
                        setTimeout(() => {
                            const targetEl = document.getElementById(targetId);
                            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
                        }, 120);
                    } else {
                        const targetEl = document.getElementById(targetId);
                        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // Close Mobile Drawer on link click
        document.querySelectorAll('.mobile-drawer a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
                    mobileToggle.classList.remove('is-open');
                    mobileDrawer.classList.remove('is-open');
                }
            });
        });

        initSectionScrollSpy();
    }

    function initSectionScrollSpy() {
        const sections = [
            { id: 'hero', navId: 'nav-home' },
            { id: 'brands-section', navId: 'nav-brands' },
            { id: 'collection-section', navId: 'nav-collection' },
            { id: 'why-us', navId: 'nav-about' },
            { id: 'final-cta', navId: 'nav-contact' }
        ];

        function updateActiveNav() {
            // Only highlight section active bar when on the Home view
            if (state.activeView !== 'home') {
                sections.forEach(sec => {
                    const navEl = document.getElementById(sec.navId);
                    if (navEl) navEl.classList.remove('active');
                });
                return;
            }

            const scrollPosition = window.scrollY + 200;
            let currentSectionId = 'hero';

            sections.forEach(sec => {
                const el = document.getElementById(sec.id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        currentSectionId = sec.id;
                    }
                }
            });

            // Special check: near bottom of page highlights Contact
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 90) {
                currentSectionId = 'final-cta';
            }

            sections.forEach(sec => {
                const navEl = document.getElementById(sec.navId);
                if (navEl) {
                    if (sec.id === currentSectionId) {
                        navEl.classList.add('active');
                    } else {
                        navEl.classList.remove('active');
                    }
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
    }

    function switchView(viewName) {
        const homeView = document.getElementById('home-view');
        const brandsPageView = document.getElementById('brands-page-view');

        if (viewName === 'brands') {
            if (homeView) homeView.style.display = 'none';
            if (brandsPageView) {
                brandsPageView.classList.add('active');
                renderBrandsPage();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            if (brandsPageView) brandsPageView.classList.remove('active');
            if (homeView) homeView.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        state.activeView = viewName;

        // Re-evaluate scroll spy active link state
        const homeNavEl = document.getElementById('nav-home');
        if (viewName !== 'home') {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        }
    }

    // ----------------------------------------------------------------------
    // 5. HERO PARALLAX & ATMOSPHERIC PARTICLE CANVAS
    // ----------------------------------------------------------------------
    function initHeroEffects() {
        const heroStage = document.getElementById('hero-watch-stage');
        const heroSection = document.getElementById('hero');

        if (heroStage && heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                const rotateX = (-y / rect.height) * 16;
                const rotateY = (x / rect.width) * 16;

                heroStage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            heroSection.addEventListener('mouseleave', () => {
                heroStage.style.transform = `rotateX(0deg) rotateY(0deg)`;
            });
        }

        // Ambient Floating Particle Motes
        const canvas = document.getElementById('particles-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = Array.from({ length: 35 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 1,
            speedY: -Math.random() * 0.4 - 0.1,
            opacity: Math.random() * 0.5 + 0.2
        }));

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(142, 160, 181, ${p.opacity})`;
                ctx.fill();

                p.y += p.speedY;
                if (p.y < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }
            });

            requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }

    // ----------------------------------------------------------------------
    // 6. BRAND MARQUEE & STATS COUNTER
    // ----------------------------------------------------------------------
    function initMarquee() {
        const track = document.getElementById('marquee-track');
        if (!track) return;

        // Duplicate marquee content for seamless infinite scroll
        const brands = BRANDS_DATA.concat(BRANDS_DATA);
        track.innerHTML = brands.map(b => `
            <div class="marquee-item">
                <span class="marquee-brand">${b.name}</span>
                <span class="marquee-dot"></span>
            </div>
        `).join('');
    }

    function initScrollAnimations() {
        // IntersectionObserver for Stats Number Counter
        const statCards = document.querySelectorAll('.stat-number');
        const observerOptions = { threshold: 0.5 };

        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const targetVal = parseInt(el.getAttribute('data-target') || '0', 10);
                    animateCounter(el, targetVal);
                    observer.unobserve(el);
                }
            });
        }, observerOptions);

        statCards.forEach(card => statsObserver.observe(card));

        // Live Urgency Countdown Timer
        initCountdownTimer();
    }

    function animateCounter(element, target) {
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target.toLocaleString() + (element.getAttribute('data-suffix') || '');
                clearInterval(timer);
            } else {
                element.textContent = current.toLocaleString() + (element.getAttribute('data-suffix') || '');
            }
        }, 30);
    }

    function initCountdownTimer() {
        let secondsLeft = 14 * 3600 + 32 * 60 + 18;

        const hoursEl = document.getElementById('timer-hours');
        const minsEl = document.getElementById('timer-mins');
        const secsEl = document.getElementById('timer-secs');

        setInterval(() => {
            if (secondsLeft <= 0) return;
            secondsLeft--;

            const h = Math.floor(secondsLeft / 3600);
            const m = Math.floor((secondsLeft % 3600) / 60);
            const s = secondsLeft % 60;

            if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
            if (minsEl) minsEl.textContent = String(m).padStart(2, '0');
            if (secsEl) secsEl.textContent = String(s).padStart(2, '0');
        }, 1000);
    }

    // ----------------------------------------------------------------------
    // 7. DYNAMIC RENDERING: BRANDS & WATCH CATALOG
    // ----------------------------------------------------------------------
    function renderBrandsHomepage() {
        if (!brandsGrid) return;

        brandsGrid.innerHTML = BRANDS_DATA.map(brand => `
            <div class="brand-card" data-cursor="EXPLORE">
                <div class="brand-card-top">
                    <div class="brand-card-top-row">
                        <img src="${brand.logo}" alt="${brand.name} emblem" class="brand-card-logo-lg">
                        <span class="brand-card-count">${brand.watchCount} Models</span>
                    </div>
                    <h3 class="brand-card-name">${brand.name}</h3>
                </div>
                <p class="brand-card-desc">${brand.description}</p>
                <div class="brand-card-footer">
                    <span class="brand-card-origin">${brand.origin}</span>
                    <a href="#collection-section" class="brand-card-link" onclick="filterByBrand('${brand.id}')">
                        Catalog <span>&rarr;</span>
                    </a>
                </div>
            </div>
        `).join('');
    }

    function renderBrandsPage() {
        if (!brandsPageGrid) return;

        brandsPageGrid.innerHTML = BRANDS_DATA.map(brand => `
            <div class="brand-card" data-cursor="VIEW">
                <div class="brand-card-top">
                    <div class="brand-card-top-row">
                        <img src="${brand.logo}" alt="${brand.name} emblem" class="brand-card-logo-lg">
                        <span class="brand-card-count">${brand.watchCount} Pieces</span>
                    </div>
                    <h3 class="brand-card-name">${brand.name}</h3>
                </div>
                <p class="brand-card-desc">${brand.description}</p>
                <div style="font-style: italic; font-size: 0.85rem; color: var(--color-navy-muted); margin-bottom: 1.5rem;">
                    "${brand.tagline}"
                </div>
                <div class="brand-card-footer">
                    <span class="brand-card-origin">Est. ${brand.established} &bull; ${brand.origin}</span>
                    <button class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.75rem;" onclick="filterByBrandAndSwitchHome('${brand.id}')">
                        View Models
                    </button>
                </div>
            </div>
        `).join('');
    }

    window.filterByBrand = function(brandId) {
        if (brandFilterSelect) {
            brandFilterSelect.value = brandId;
            state.selectedBrand = brandId;
            renderWatchesGrid();
        }
    };

    window.filterByBrandAndSwitchHome = function(brandId) {
        switchView('home');
        setTimeout(() => {
            window.filterByBrand(brandId);
            const collSection = document.getElementById('collection-section');
            if (collSection) collSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    function renderWatchesGrid() {
        if (!watchesGrid) return;

        const filtered = WATCHES_DATA.filter(watch => {
            const matchesBrand = state.selectedBrand === 'all' || watch.brandId === state.selectedBrand;
            const matchesQuery = !state.searchQuery || 
                watch.model.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                watch.brandName.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                watch.reference.toLowerCase().includes(state.searchQuery.toLowerCase());

            return matchesBrand && matchesQuery;
        });

        if (filtered.length === 0) {
            watchesGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border-radius: 24px; border: var(--glass-border);">
                    <h3 style="font-family: var(--font-serif); font-size: 1.75rem; color: var(--color-primary-navy); margin-bottom: 0.5rem;">No Timepieces Match Your Search</h3>
                    <p style="color: var(--color-navy-muted); font-size: 0.95rem;">Please adjust your brand or search filters.</p>
                </div>
            `;
            return;
        }

        watchesGrid.innerHTML = filtered.map(watch => `
            <div class="watch-card" data-watch-id="${watch.id}" data-cursor="VIEW" onclick="openWatchModal('${watch.id}')">
                <div class="watch-card-image-wrapper">
                    <span class="watch-badge">${watch.badge || watch.category}</span>
                    <span class="watch-availability-dot">
                        <span class="dot-indicator"></span> ${watch.availability}
                    </span>
                    <img src="${watch.image}" alt="${watch.brandName} ${watch.model}" class="watch-card-img" loading="lazy">
                    <div class="watch-card-sheen"></div>
                </div>
                <div class="watch-card-body">
                    <div class="watch-card-brand">${watch.brandName}</div>
                    <h3 class="watch-card-title">${watch.model}</h3>
                    <div class="watch-card-ref">${watch.reference}</div>
                    <div class="watch-card-specs-brief">
                        <span>${watch.specs.caseSize}</span> &bull; 
                        <span>${watch.specs.movement.split(' ')[0]}</span> &bull; 
                        <span>${watch.specs.caseMaterial.split('&')[0]}</span>
                    </div>
                    <div class="watch-card-footer">
                        <div class="watch-price-group">
                            <span class="watch-price-label">Pricing</span>
                            <span class="watch-price-ask">Ask Price</span>
                        </div>
                        <button class="btn-view-watch">View Watch</button>
                    </div>
                </div>
            </div>
        `).join('');

        initWatchCard3DTilt();
    }

    // ----------------------------------------------------------------------
    // 8. 3D CARD PERSPECTIVE TILT EFFECT
    // ----------------------------------------------------------------------
    function initWatchCard3DTilt() {
        document.querySelectorAll('.watch-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                const rotateX = (-y / rect.height) * 10;
                const rotateY = (x / rect.width) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
            });
        });
    }

    // ----------------------------------------------------------------------
    // 9. FILTER CONTROLS LISTENERS
    // ----------------------------------------------------------------------
    function initFilters() {
        // Populate Brands Select Dropdown
        if (brandFilterSelect) {
            brandFilterSelect.innerHTML = `<option value="all">All Brands</option>` + 
                BRANDS_DATA.map(b => `<option value="${b.id}">${b.name}</option>`).join('');

            brandFilterSelect.addEventListener('change', (e) => {
                state.selectedBrand = e.target.value;
                renderWatchesGrid();
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                state.searchQuery = e.target.value.trim();
                renderWatchesGrid();
            });
        }

        const resetFiltersBtn = document.getElementById('reset-filters-btn');
        if (resetFiltersBtn) {
            resetFiltersBtn.addEventListener('click', () => {
                state.selectedBrand = 'all';
                state.searchQuery = '';
                if (brandFilterSelect) brandFilterSelect.value = 'all';
                if (searchInput) searchInput.value = '';
                renderWatchesGrid();
            });
        }
    }

    // ----------------------------------------------------------------------
    // 10. WATCH DETAIL MODAL & WHATSAPP INTEGRATION
    // ----------------------------------------------------------------------
    window.openWatchModal = function(watchId) {
        const watch = WATCHES_DATA.find(w => w.id === watchId);
        if (!watch || !modalOverlay) return;

        state.activeWatchModal = watch;

        const mainImg = document.getElementById('modal-main-img');
        const thumbsBox = document.getElementById('modal-thumbs');
        const brandEl = document.getElementById('modal-brand');
        const titleEl = document.getElementById('modal-title');
        const refEl = document.getElementById('modal-ref');
        const priceEl = document.getElementById('modal-price');
        const descEl = document.getElementById('modal-desc');
        const specsTbody = document.getElementById('modal-specs-tbody');
        const whatsappBtn = document.getElementById('modal-whatsapp-btn');

        if (mainImg) {
            mainImg.src = watch.image;
            mainImg.style.transformOrigin = 'center center';
            mainImg.style.transform = 'scale(1)';
        }
        if (brandEl) brandEl.textContent = watch.brandName;
        if (titleEl) titleEl.textContent = watch.model;
        if (refEl) refEl.textContent = watch.reference;
        if (descEl) descEl.textContent = watch.description;

        if (thumbsBox) {
            thumbsBox.innerHTML = (watch.gallery || [watch.image]).map((img, i) => `
                <div class="modal-thumb ${i === 0 ? 'active' : ''}" onclick="changeModalImage(this, '${img}')">
                    <img src="${img}" alt="${watch.model}">
                </div>
            `).join('');
        }

        if (specsTbody) {
            specsTbody.innerHTML = `
                <tr><td class="specs-label-td">Movement</td><td class="specs-val-td">${watch.specs.movement}</td></tr>
                <tr><td class="specs-label-td">Power Reserve</td><td class="specs-val-td">${watch.specs.powerReserve}</td></tr>
                <tr><td class="specs-label-td">Case Size</td><td class="specs-val-td">${watch.specs.caseSize}</td></tr>
                <tr><td class="specs-label-td">Case Material</td><td class="specs-val-td">${watch.specs.caseMaterial}</td></tr>
                <tr><td class="specs-label-td">Water Resistance</td><td class="specs-val-td">${watch.specs.waterResistance}</td></tr>
                <tr><td class="specs-label-td">Dial Color</td><td class="specs-val-td">${watch.specs.dialColor}</td></tr>
                <tr><td class="specs-label-td">Strap / Bracelet</td><td class="specs-val-td">${watch.specs.strap}</td></tr>
            `;
        }

        // Setup Prefilled WhatsApp URL for exact watch
        if (whatsappBtn) {
            const waUrl = generateWhatsAppWatchUrl(watch.brandName, watch.model);
            whatsappBtn.href = waUrl;
        }

        modalOverlay.classList.add('is-active');
        document.body.style.overflow = 'hidden';
    };

    window.changeModalImage = function(thumbEl, imgSrc) {
        document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        thumbEl.classList.add('active');
        const mainImg = document.getElementById('modal-main-img');
        if (mainImg) {
            mainImg.src = imgSrc;
            mainImg.style.transformOrigin = 'center center';
            mainImg.style.transform = 'scale(1)';
        }
    };

    function closeWatchModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('is-active');
            document.body.style.overflow = '';
        }
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeWatchModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeWatchModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('is-active')) {
            closeWatchModal();
        }
    });

    // Amazon & Flipkart Style Interactive Image Hover Zoom
    function initWatchImageZoom() {
        const imgBox = document.getElementById('modal-main-img-box');
        const mainImg = document.getElementById('modal-main-img');

        if (!imgBox || !mainImg) return;

        imgBox.addEventListener('mousemove', (e) => {
            const rect = imgBox.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            mainImg.style.transformOrigin = `${x}% ${y}%`;
            mainImg.style.transform = 'scale(2.4)';
        });

        imgBox.addEventListener('mouseleave', () => {
            mainImg.style.transformOrigin = 'center center';
            mainImg.style.transform = 'scale(1)';
        });
    }

    // WhatsApp Deep Link Helpers
    function generateWhatsAppWatchUrl(brand, model) {
        const text = `Hi, I would like to ask for the price of the ${brand} ${model}. Please share details, live pictures, and availability. Thank you.`;
        return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(text)}`;
    }

    // ----------------------------------------------------------------------
    // 11. INITIALIZATION EXECUTION
    // ----------------------------------------------------------------------
    initPreloader();
    initCustomCursor();
    initNavigation();
    initHeroEffects();
    initMarquee();
    initFilters();
    renderBrandsHomepage();
    renderWatchesGrid();
    initWatchImageZoom();
});
