/* === CONFIG === */
const DEFAULT_LANG = 'fr';
const STORAGE_KEY_LANG = 'moms_restaurant_lang';

/* === I18N DICTIONARY === */
const i18n = {
    fr: {
        htmlLang: 'fr',
        // HEADER
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
        beerSaigon: "Bière Saigon (Vietnamienne)",
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
            ['Samedi', '12:00–15:00, 19:00–23:00'],
            ['Dimanche', 'Fermé']
        ]
    },
    en: {
        htmlLang: 'en',
        // HEADER
        navHome: 'Home',
        navEntrees: 'Starters',
        navSpec: 'Specialties',
        navBobuns: 'Bo-Buns',
        navSalades: 'Salads',
        navPlats: 'Stir-fry',
        navGrillades: 'Grill',
        navSoupes: 'Soups',
        navDesserts: 'Desserts',
        navBoissons: 'Drinks',
        navMenus: 'Set Menus',
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

        // TITLES SECTIONS
        sEntrees: 'Starters',
        sSpec: 'Chef\'s Specialties',
        sBobuns: 'Bo-Buns',
        sSalades: 'Salads',
        sSaute: 'Stir-fried Dishes',
        sGrillades: 'Grilled Dishes',
        sSoupes: 'Soups',
        sDesserts: 'Desserts',
        sBoissons: 'Drinks',
        sMenus: 'Dinner Menus',

        // DRINKS
        drinksCanettes: 'CANS',
        drinksExotiques: 'EXOTIC JUICES',
        drinksChaudes: 'HOT DRINKS',
        drinksBieres: 'BEERS',
        drinksVins: 'PITCHER WINE',

        drinkLychee: "Lychee juice",
        drinkCoconut: "Coconut juice",
        drinkMango: "Mango juice",
        drinkEspresso: "Espresso",
        drinkJasmineTea: "Jasmine tea",
        drinkGreenTea: "Green tea",
        drinkMintTea: "Mint tea",
        drinkLemonTea: "Lemon tea",
        drinkGingerTea: "Ginger tea",
        beerAngkor: "Angkor Beer (Cambodian)",
        beerTsingTao: "Tsing Tao Beer (Chinese)",
        beerSingha: "Singha Beer (Thai)",
        beerSaigon: "Saigon Beer (Vietnamese)",
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
    initSmoothScroll();
    initParallax();
    initScrollAnimations();
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
