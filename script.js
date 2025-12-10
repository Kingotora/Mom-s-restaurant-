/* === CONFIG === */
const DEFAULT_LANG = 'fr';
const STORAGE_KEY_LANG = 'moms_restaurant_lang';

/* === I18N DICTIONARY === */
const i18n = {
    fr: {
        htmlLang: 'fr',
        // HEADER
        // Filters
        filterAll: 'Tout',
        filterVeggie: 'Végétarien 🌱',
        filterGF: 'Sans Gluten 🌾',
        filterSpicy: 'Épicé 🌶️',

        navHome: 'Accueil',
        navEntrees: 'Entrées',
        navSpec: 'Spécialités',
        navBobuns: 'Bo-Buns',
        navSalades: 'Salades',
        navPlats: 'Plats sautés',
        navGrillades: 'Grillades',
        navSoupes: 'Soupes',
        navDesserts: 'Desserts',
        navBoissons: 'Boissons',
        navMenus: 'Menus',
        backHome: "← Retour à l'accueil",

        // HOME
        badge: 'Cuisine cambodgienne authentique',
        lede: "Mom's Restaurant vous accueille au <strong>3 rue Planchat, 75020 Paris</strong>, pour une cuisine familiale inspirée des marchés de Phnom Penh et des traditions khmères.",
        btnMenu: 'Voir la Carte & Menus',
        btnMap: 'Nous trouver',
        histTitle: "L'histoire de Mom",
        histText: "Dans la tradition khmère, la cuisine est un héritage. Chez Mom's, on retrouve les parfums de la maison : la citronnelle, le galanga, le lait de coco et le poivre de Kampot.",
        infoTitle: 'Informations pratiques',
        lblAddress: 'Adresse :',
        lblMetro: 'Métro :',
        lblPhone: 'Tél :',
        hoursTitle: "Horaires d'ouverture",
        hoursNote: 'Les horaires peuvent varier les jours fériés.',
        reviewsTitle: 'Avis des clients',
        // Reviews (Added missing keys)
        rev1: '« Une excellente découverte ! Les plats sont authentiques et savoureux. »',
        rev2: '« Absolument délicieux, les serveuses sont adorables, le service est rapide et les plats frais ! »',
        rev3: '« Je recommande à 100% ce restaurant ! Tout était parfait : nourriture traditionnelle raffinée. »',
        rev4: '« Une très belle découverte ! Le poisson amok est incroyable. L\'ambiance est calme. »',
        rev5: '« Excellent rapport qualité prix. Les nems sont croustillants et faits maison. »',

        galleryTitle: 'Quelques spécialités',
        footerRights: 'Tous droits réservés.',

        // TITLES SECTIONS
        sEntrees: 'Entrées',
        sSpec: 'Spécialités',
        sBobuns: 'Bo-Buns',
        sSalades: 'Salades',
        sSaute: 'Plats sautés',
        sGrillades: 'Grillades',
        sSoupes: 'Soupes',
        sDesserts: 'Desserts',
        sBoissons: 'Boissons',
        sMenus: 'Menus du Soir',

        // DRINKS TITLES
        drinksCanettes: 'CANETTES',
        drinksExotiques: 'JUS EXOTIQUES',
        drinksChaudes: 'BOISSONS CHAUDES',
        drinksBieres: 'BIÈRES',
        drinksVins: 'VINS EN PICHET',

        // DRINKS ITEMS
        drinkLychee: "Jus de lychee",
        drinkCoconut: "Jus de coco",
        drinkMango: "Jus de mangue",
        drinkEspresso: "Café expresso",
        drinkJasmineTea: "Thé au jasmin",
        drinkGreenTea: "Thé vert",
        drinkMintTea: "Thé vert à la menthe",
        drinkLemonTea: "Thé vert au citron",
        drinkGingerTea: "Thé vert au gingembre",
        beerAngkor: "Bière Angkor (Cambodgienne)",
        beerTsingTao: "Bière Tsing Tao (Chinoise)",
        beerSingha: "Bière Singha (Thaïlandaise)",
        beerSaigon: "Bière Saigon (Vietnam)",
        wineRed: "Rouge",
        wineRose: "Rosé",
        wineWhite: "Blanc",

        // MENUS
        menu17Title: "Menu du soir 17€",
        menu19Title: "Menu du soir 19€",
        menu21Title: "Menu du soir 21€",
        entree: "ENTRÉE (AU CHOIX)",
        plat: "PLAT (AU CHOIX)",
        dessert: "DESSERT (AU CHOIX)",

        // DAYS
        days: [
            ['Lundi', '12:00–15:00, 19:00–23:00'],
            ['Mardi', '12:00–15:00'],
            ['Mercredi', '19:00–23:00'],
            ['Jeudi', '12:00–15:00, 19:00–23:00'],
            ['Vendredi', '12:00–15:00, 19:00–23:00'],
            ['Samedi', '12:00–15:00, 19:00–23:00']
        ]
    },
    en: {
        htmlLang: 'en',
        // HEADER
        // Filters
        filterAll: 'All',
        filterVeggie: 'Vegetarian 🌱',
        filterGF: 'Gluten Free 🌾',
        filterSpicy: 'Spicy 🌶️',

        navHome: 'Home',
        navEntrees: 'Starters',
        navSpec: 'Specialties',
        navBobuns: 'Bo-Buns',
        navSalades: 'Salads',
        navPlats: 'Stir-fried',
        navGrillades: 'Grills',
        navSoupes: 'Soups',
        navDesserts: 'Desserts',
        navBoissons: 'Drinks',
        navMenus: 'Menus',
        menuDropdownTitle: 'THE MENU',
        backHome: "← Back to Home",

        // HOME
        badge: 'Authentic Cambodian cuisine',
        lede: "Mom's Restaurant welcomes you at <strong>3 rue Planchat, 75020 Paris</strong>, offering homestyle recipes inspired by Phnom Penh markets and Khmer traditions.",
        btnMenu: 'View Menu',
        btnMap: 'Find us',
        histTitle: "Mom's Story",
        histText: "In Khmer tradition, cooking is heritage. At Mom's, you'll find the aromas of lemongrass, galangal, coconut milk and Kampot pepper.",
        infoTitle: 'Practical Info',
        lblAddress: 'Address:',
        lblMetro: 'Metro:',
        lblPhone: 'Tel:',
        hoursTitle: 'Opening Hours',
        hoursNote: 'Hours may vary on public holidays.',
        reviewsTitle: 'Customer Reviews',
        galleryTitle: 'Specialties',
        footerRights: 'All rights reserved.',

        // Reviews (Translated)
        rev1: '"Here you will find the best Loc Lac in Paris. I have rarely eaten such tender and well-marinated beef..."',
        rev2: '"Absolutely delicious, the waitresses are adorable, the service is fast and the dishes are fresh and truly tasty!"',
        rev3: '"Small prices for this neighborhood restaurant but very good food and great kindness. Thank you."',
        rev4: '"I recommend this restaurant 100%! Everything was perfect: refined traditional food, generous portions..."',
        rev5: '"The food is divine, pity the place is a bit small! A beautiful address to remember in the Avron district."',

        // TITLES SECTIONS
        sEntrees: 'Starters',
        sSpec: 'Chef\'s Specialties',
        sBobuns: 'Bo-Buns',
        sSalades: 'Salads',
        sSaute: 'Stir-fried Dishes',
        sGrillades: 'Grills',
        sSoupes: 'Soups',
        sDesserts: 'Desserts',
        sBoissons: 'Drinks',
        sMenus: 'Set Menus',

        // DRINKS
        drinksCanettes: 'CANS (€3.50)',
        drinksExotiques: 'EXOTIC JUICES (€3.50)',
        drinksChaudes: 'HOT DRINKS',
        drinksBieres: 'BEERS',
        drinksVins: 'PITCHER WINE',

        drinkLychee: 'Lychee juice (25 cl)',
        drinkCoconut: 'Coconut juice (25 cl)',
        drinkMango: 'Mango juice (25 cl)',
        drinkEspresso: 'Espresso',
        beerAngkor: 'Angkor / Tsing Tao / Saigon / Singha Beer',
        wineRed: "Red",
        wineRose: "Rosé",
        wineWhite: "White",

        // MENUS
        menu17Title: "Dinner Menu 17€",
        menu19Title: "Dinner Menu 19€",
        menu21Title: "Dinner Menu 21€",
        entree: "STARTER (CHOICE)",
        plat: "MAIN COURSE (CHOICE)",
        dessert: "DESSERT (CHOICE)",

        // DAYS
        days: [
            ['Monday', '12:00–15:00, 19:00–23:00'],
            ['Tuesday', '12:00–15:00'],
            ['Wednesday', '19:00–23:00'],
            ['Thursday', '12:00–15:00, 19:00–23:00'],
            ['Friday', '12:00–15:00, 19:00–23:00'],
            ['Saturday', '12:00–15:00, 19:00–23:00'],
            ['Sunday', 'Closed']
        ]
    }
};

/* === CORE FUNCTIONS === */

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initMobileMenu();
    initScrollAnimations();
    initLightbox();
    initFilters();

});



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

function initParallax() {
    // Only on desktop and if enabled
    const banner = document.querySelector('.banner');
    if (!banner || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 900) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        // Simple parallax: move background slower than scroll
        banner.style.backgroundPosition = `center ${40 + (scrolled * 0.05)}%`;
    }, { passive: true });
}
