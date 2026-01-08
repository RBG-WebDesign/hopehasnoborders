(function () {
    // 1. Load Partials (Nav & Footer)
    async function loadPartials() {
        try {
            // Determine path to partials based on current location
            // Since we are using simple fetch, we need to know where /partials is relative to current page
            // BUT, if we use a web server (localhost:8080), absolute paths /partials/... work.
            // We assume site is served from root.

            const navRes = await fetch('/partials/nav.html');
            if (navRes.ok) {
                const navHtml = await navRes.text();
                const navContainer = document.getElementById('site-nav');
                if (navContainer) {
                    navContainer.innerHTML = navHtml;
                    initNavLogic(); // Re-run logic after injection
                }
            }

            const footerRes = await fetch('/partials/footer.html');
            if (footerRes.ok) {
                const footerHtml = await footerRes.text();
                const footerContainer = document.getElementById('site-footer');
                if (footerContainer) footerContainer.innerHTML = footerHtml;
            }

            // Re-init generic UI stuff
            if (window.lucide && typeof window.lucide.createIcons === "function") {
                window.lucide.createIcons();
            }

        } catch (e) {
            console.error("Error loading partials:", e);
        }
    }

    // 2. Nav Logic (Mobile Menu, Scroll, Active State)
    function initNavLogic() {
        const navbar = document.getElementById('navbar');
        const navDivider = document.getElementById('nav-divider');
        const mobileIcon = document.getElementById('mobile-menu-icon');
        const logo = document.getElementById('nav-logo');

        // Active State Logic
        const currentPath = window.location.pathname; // e.g. "/pages/about.html"
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath || (currentPath === '/' && href === '/index.html') || (currentPath === '/index.html' && href === '/index.html')) {
                link.classList.add('text-orange-600');
            }
        });

        // Scroll Logic
        function handleScroll() {
            if (!navbar) return;
            const isHome = document.body.classList.contains('home-page');
            const scrollY = window.scrollY;

            // If it's NOT home page, it should always be white/visible background
            // If it IS home page, it starts transparent and becomes white

            if (!isHome) {
                // Ensure default state for non-home pages
                return;
            }

            // Home Page Logic
            if (scrollY > 50) {
                navbar.classList.remove('bg-transparent', 'text-white');
                navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'text-black', 'shadow-sm');
                if (navDivider) navDivider.classList.replace('bg-white/30', 'bg-neutral-300');
                if (mobileIcon) mobileIcon.style.color = 'black';
                if (logo) {
                    logo.classList.remove('logo-white-filter');
                    logo.classList.add('logo-normal');
                }
            } else {
                navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'text-black');
                navbar.classList.add('bg-transparent', 'text-white');
                if (navDivider) navDivider.classList.replace('bg-neutral-300', 'bg-white/30');
                if (mobileIcon) mobileIcon.style.color = 'white';
                if (logo) {
                    logo.classList.remove('logo-normal');
                    logo.classList.add('logo-white-filter');
                }
            }
        }

        // Initial generic setup for transparent vs white nav on load
        if (document.body.classList.contains('home-page')) {
            // Start transparent
        } else {
            // For subpages, ensure we are in "scrolled" state style but without the check
            if (navbar) {
                navbar.classList.remove('bg-transparent', 'text-white');
                // Note: The partial has default classes. We might need to override if we want consistency.
                // The partial definition has `bg-white/95 text-black`. 
                // We only need to force transparency on Home Page at top.
            }
        }

        if (document.body.classList.contains('home-page')) {
            // Force transparent start if at top
            if (window.scrollY < 50 && navbar) {
                navbar.classList.remove('bg-white/95', 'text-black', 'shadow-sm');
                navbar.classList.add('bg-transparent', 'text-white');
                if (logo) { logo.classList.add('logo-white-filter'); logo.classList.remove('logo-normal'); }
                if (navDivider) { navDivider.classList.replace('bg-neutral-300', 'bg-white/30'); }
                if (mobileIcon) { mobileIcon.style.color = 'white'; }
            }
            window.addEventListener('scroll', handleScroll);
        }

        // Mobile Menu Toggle Global Function
        window.toggleMobileMenu = function () {
            const menu = document.getElementById("mobile-menu");
            const icon = document.getElementById("mobile-menu-icon");
            const body = document.body;
            if (!menu) return;

            const isHidden = menu.classList.contains("hidden");

            if (isHidden) {
                menu.classList.remove("hidden");
                // Small delay to allow display:block to apply before opacity transition
                requestAnimationFrame(() => {
                    menu.classList.remove("opacity-0");
                    menu.classList.add("opacity-100");
                });
                if (icon) icon.setAttribute("data-lucide", "x");
                // We need to handle icon color if we are on transparent home
                if (document.body.classList.contains('home-page') && window.scrollY < 50) {
                    // Keep white or switch to black? Usually menu overlay is white, so icon should be black
                    if (icon) icon.style.color = 'black';
                }

                body.classList.add("overflow-hidden");
            } else {
                menu.classList.remove("opacity-100");
                menu.classList.add("opacity-0");
                setTimeout(() => menu.classList.add("hidden"), 300);
                if (icon) icon.setAttribute("data-lucide", "menu");

                // Revert icon color for home page transparency
                if (document.body.classList.contains('home-page') && window.scrollY < 50) {
                    if (icon) icon.style.color = 'white';
                }

                body.classList.remove("overflow-hidden");
            }
            if (window.lucide) window.lucide.createIcons();
        };
    }

    // Run
    document.addEventListener("DOMContentLoaded", () => {
        loadPartials();
    });

    // global lucide init in case
    if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
    }

})();
