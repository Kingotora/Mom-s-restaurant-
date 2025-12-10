/* === CONFIG === */
const DEFAULT_LANG = 'fr';
const STORAGE_KEY_LANG = 'moms_restaurant_lang';

/* === I18N DICTIONARY === */
// i18n object is now loaded from translations.js as 'i18nData'
// We will assign it to 'i18n' for compatibility
const i18n = i18nData;

// Add Days (complex object kept here)
i18n.fr.days = [
    ['Lundi', '12:00–15:00, 19:00–23:00'],
    ['Mardi', '12:00–15:00'],
    ['Mercredi', '19:00–23:00'],
    ['Jeudi', '12:00–15:00, 19:00–23:00'],
    ['Vendredi', '12:00–15:00, 19:00–23:00'],
    ['Samedi', '12:00–15:00, 19:00–23:00']
];

i18n.en.days = [
    ['Monday', '12:00–15:00, 19:00–23:00'],
    ['Tuesday', '12:00–15:00'],
    ['Wednesday', '19:00–23:00'],
    ['Thursday', '12:00–15:00, 19:00–23:00'],
    ['Friday', '12:00–15:00, 19:00–23:00'],
    ['Saturday', '12:00–15:00, 19:00–23:00'],
    ['Sunday', 'Closed']
];

/* === CORE FUNCTIONS === */

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initMobileMenu();
    initScrollAnimations();
    initLightbox();
    initFilters();

    initBackToTop();
    initCarousel();
});

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');

    if (!carouselInner || items.length === 0) return;

    let currentIndex = 0;
    const totalItems = items.length;
    let autoPlayInterval;

    function updateCarousel() {
        // Move inner using transform translate
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
    }

    // Event Listeners
    nextBtn?.addEventListener('click', () => {
        nextSlide();
        startAutoPlay(); // Reset timer
    });

    prevBtn?.addEventListener('click', () => {
        prevSlide();
        startAutoPlay();
    });

    // Start
    startAutoPlay();

    // Pause on hover
    const carouselContainer = document.querySelector('.carousel');
    carouselContainer?.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer?.addEventListener('mouseleave', startAutoPlay);

    // Keyboard Navigation
    carouselContainer?.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            startAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            startAutoPlay();
        }
    });

    // Make carousel focusable for keyboard events
    if (carouselContainer) {
        carouselContainer.setAttribute('tabindex', '0');
    }
}



function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initLightbox() {
    // Create Lightbox DOM
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <img src="" alt="Full view">
    `;
    document.body.appendChild(lightbox);

    const imgEl = lightbox.querySelector('img');

    // Add Click Listeners to all gallery/menu images
    function openLightbox(src) {
        imgEl.src = src;
        lightbox.classList.add('active');
    }

    document.querySelectorAll('.gallery-item img, .card img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openLightbox(img.src));
    });

    // Close Logic
    lightbox.addEventListener('click', (e) => {
        if (e.target !== imgEl) lightbox.classList.remove('active');
    });
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Handle "All" Logic
            if (filter === 'all') {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            } else {
                // Remove "active" from 'all' if another filter is clicked
                const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
                if (allBtn) allBtn.classList.remove('active');

                // Toggle click
                btn.classList.toggle('active');

                // If no filters left active, re-activate "All"
                const activeBtns = document.querySelectorAll('.filter-btn.active');
                if (activeBtns.length === 0 && allBtn) {
                    allBtn.classList.add('active');
                }
            }

            // Apply Filters
            applyFilters();
        });
    });
}

function applyFilters() {
    const activeBtns = Array.from(document.querySelectorAll('.filter-btn.active'));
    // Extract active filters (excluding 'all')
    const filters = activeBtns
        .map(b => b.getAttribute('data-filter'))
        .filter(f => f !== 'all');

    document.querySelectorAll('.grid article').forEach(card => {
        if (filters.length === 0) {
            // Show all if no specific filters
            card.style.display = '';
            card.classList.add('reveal', 'active'); // Ensure animation state
        } else {
            const tags = (card.getAttribute('data-tags') || '').split(',');
            // Check if card has ALL selected filters
            const isMatch = filters.every(f => tags.includes(f));

            if (isMatch) {
                card.style.display = '';
                card.classList.add('reveal', 'active');
            } else {
                card.style.display = 'none';
            }
        }
    });
}

function initLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY_LANG) || DEFAULT_LANG;
    setLang(saved);

    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.addEventListener('click', () => {
            const current = document.documentElement.lang;
            const next = current === 'fr' ? 'en' : 'fr';
            setLang(next);
        });
    }
}

function setLang(lang) {
    const t = i18n[lang] || i18n.fr;
    document.documentElement.lang = t.htmlLang;
    localStorage.setItem(STORAGE_KEY_LANG, lang);

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && t[key]) {
            if (el.tagName.toLowerCase() === 'p' || el.tagName.toLowerCase() === 'span') {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update Hours List (if present)
    const hoursList = document.getElementById('hoursList');
    if (hoursList) {
        hoursList.innerHTML = '';
        t.days.forEach(([label, time]) => {
            const li = document.createElement('li');
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.marginBottom = '6px';
            li.innerHTML = `<strong>${label}</strong> <span>${time.replace('–', '-')}</span>`;
            hoursList.appendChild(li);
        });
    }

    // Update Toggle Button Text
    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.textContent = (lang === 'fr') ? 'EN' : 'FR';
    }

    // Update Copyright Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initMobileMenu() {
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('mobileNav');

    if (btn && nav) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = nav.classList.contains('open');
            if (isOpen) {
                nav.classList.remove('open');
                btn.textContent = '☰';
            } else {
                nav.classList.add('open');
                btn.textContent = '✕';
            }
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn) {
                nav.classList.remove('open');
                btn.textContent = '☰';
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('open')) {
                nav.classList.remove('open');
                btn.textContent = '☰';
                btn.focus(); // Return focus to button
            }
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const nav = document.getElementById('mobileNav');
                const btn = document.getElementById('menuBtn');
                if (nav && nav.classList.contains('open')) {
                    nav.classList.remove('open');
                    if (btn) btn.textContent = '☰';
                }
            }
        });
    });
}
