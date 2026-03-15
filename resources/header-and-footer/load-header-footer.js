// Function to load external HTML files
async function loadComponent(elementId, filePath, callback) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(elementId).innerHTML = content;
            if (callback) callback();
        } else {
            console.error(`Error loading ${filePath}:`, response.statusText);
        }
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

// 1. Initialize Header Logic
function initHeader() {
    // --- Sticky Navbar Logic ---
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('mainNavbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // --- Mobile Menu Toggle Logic ---
    const togglerBtn = document.getElementById('navTogglerBtn');
    const overlay = document.getElementById('navOverlay');
    const navMenu = document.getElementById('navMenu');
    const icon = document.getElementById('togglerIcon');
    const navLinks = document.querySelectorAll('.nav-link-custom');

    // Toggle Function
    function toggleMobileMenu() {
        const isMobile = window.innerWidth <= 991;
        if (isMobile) {
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');

            // Icon Animation
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }

    // Close Menu Function
    function closeMenu() {
        const isMobile = window.innerWidth <= 991;
        if(isMobile && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            
            // Reset icon
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Event Listeners
    if (togglerBtn) {
        togglerBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', toggleMobileMenu);
    }

    // Close menu when a link is clicked
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
}

// 2. Initialize Footer Logic
function initFooter() {
    // Auto-update copyright year
    const yearSpan = document.getElementById("copyright-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Load Header and Footer when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    // Load Header
    loadComponent("header-placeholder", "/resources/header-and-footer/header.html", initHeader);
    
    // Load Footer
    loadComponent("footer-placeholder", "/resources/header-and-footer/footer.html", initFooter);
});
