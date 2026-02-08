document.addEventListener('DOMContentLoaded', function() {

    // ১. আপনার লিংকগুলো এখানে দিন (Cloudflare এ CORS enabled থাকতে হবে)
    const headerUrl = '/resources/header-and-footer/header.html'; 
    const footerUrl = /resources/header-and-footer/footer.html';

    // ২. হেডার লোড করা
    fetch(headerUrl)
        .then(response => {
            if (!response.ok) throw new Error("Header not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // হেডার লোড হওয়ার পর মেনু ফাংশন চালু করা
            initHeaderFunctions();
        })
        .catch(error => console.error(error));
    
    // ৩. ফুটার লোড করা
    fetch(footerUrl)
        .then(response => {
            if (!response.ok) throw new Error("Footer not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            // ফুটার লোড হওয়ার পর সাল আপডেট ও ব্যাক টু টপ বাটন চালু করা
            initFooterFunctions();
        })
        .catch(error => console.error(error));
});

// === হেডারের ফাংশনসমূহ ===
function initHeaderFunctions() {
    const navbar = document.getElementById('mainNavbar');
    const togglerBtn = document.getElementById('navTogglerBtn');
    const overlay = document.getElementById('navOverlay');
    const navMenu = document.getElementById('navMenu');
    const togglerIcon = document.getElementById('togglerIcon');
    const navLinks = document.querySelectorAll('.nav-link-click');

    // 1. Sticky Navbar Logic
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // 2. Mobile Menu Toggle Logic
    if (togglerBtn && navMenu) {
        togglerBtn.addEventListener('click', () => {
            toggleMenuState();
        });

        // Overlay তে ক্লিক করলে মেনু বন্ধ হবে
        if (overlay) {
            overlay.addEventListener('click', () => {
                closeMenuState();
            });
        }

        // লিংকে ক্লিক করলে মেনু বন্ধ হবে
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenuState();
            });
        });
    }

    // Helper Functions
    function toggleMenuState() {
        const isMobile = window.innerWidth <= 991;
        if (isMobile) {
            navMenu.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
            
            // Icon Animation
            if (navMenu.classList.contains('active')) {
                togglerIcon.classList.remove('fa-bars');
                togglerIcon.classList.add('fa-times');
            } else {
                togglerIcon.classList.remove('fa-times');
                togglerIcon.classList.add('fa-bars');
            }
        }
    }

    function closeMenuState() {
        const isMobile = window.innerWidth <= 991;
        if (isMobile) {
            navMenu.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            togglerIcon.classList.remove('fa-times');
            togglerIcon.classList.add('fa-bars');
        }
    }
}

// === ফুটারের ফাংশনসমূহ ===
function initFooterFunctions() {
    // 1. Auto Update Year
    const yearSpan = document.getElementById("copyright-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Back to Top Button Logic
    const backBtn = document.getElementById('backToTop');
    
    if (backBtn) {
        // Scroll Logic
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backBtn.style.display = 'flex';
            } else {
                backBtn.style.display = 'none';
            }
        });

        // Click Logic
        backBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
