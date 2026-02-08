    document.addEventListener("DOMContentLoaded", function () {
        // 1. URLs define
        const headerUrl = '/resources/header-and-footer/header.html'; // অথবা '/header.html' আপনার ডিরেক্টরি অনুযায়ী
        const footerUrl = '/resources/header-and-footer/footer.html'; // অথবা '/footer.html'
    
        // 2. Load Header
        fetch(headerUrl)
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-placeholder').innerHTML = data;
                initializeHeaderScripts(); // হেডার লোড হওয়ার পর স্ক্রিপ্ট রান হবে
            })
            .catch(error => console.error('Error loading header:', error));
    
        // 3. Load Footer
        fetch(footerUrl)
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-placeholder').innerHTML = data;
                initializeFooterScripts(); // ফুটার লোড হওয়ার পর স্ক্রিপ্ট রান হবে
            })
            .catch(error => console.error('Error loading footer:', error));
    });
    
    
    // === Header Functionality (Global Functions) ===
    window.toggleMobileMenu = function() {
        const navMenu = document.getElementById('navMenu');
        const overlay = document.getElementById('navOverlay');
        const icon = document.getElementById('togglerIcon');
        const isMobile = window.innerWidth <= 991;
    
        if (isMobile && navMenu) {
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
    };
    
    window.closeMenu = function() {
        const isMobile = window.innerWidth <= 991;
        if(isMobile) {
            const navMenu = document.getElementById('navMenu');
            const overlay = document.getElementById('navOverlay');
            const icon = document.getElementById('togglerIcon');
            
            if (navMenu) {
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
                
                // Reset icon
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    };
    
    function initializeHeaderScripts() {
        // Sticky Navbar Logic
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
    }
    
    // === Footer Functionality ===
    window.scrollToTop = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    function initializeFooterScripts() {
        // Auto Update Year
        const yearSpan = document.getElementById("copyright-year");
        if(yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    
        // Back to Top Button Visibility Logic
        const backBtn = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (backBtn) {
                if (window.scrollY > 300) {
                    backBtn.style.display = 'flex';
                } else {
                    backBtn.style.display = 'none';
                }
            }
        });
    }
