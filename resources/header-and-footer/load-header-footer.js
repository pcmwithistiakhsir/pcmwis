        document.addEventListener("DOMContentLoaded", function () {
            // আপনার এক্সটার্নাল লিংকসমূহ
            const headerUrl = 'https://nmsiam.pages.dev/header'; 
            const footerUrl = 'https://nmsiam.pages.dev/footer'; 
        
            // ১. হেডার লোড করা
            fetch(headerUrl)
                .then(response => {
                    if (!response.ok) throw new Error("Header not found");
                    return response.text();
                })
                .then(data => {
                    document.getElementById('header-placeholder').innerHTML = data;
                    // HTML আসার পর স্ক্রিপ্ট ইনিশিয়ালইজ করুন
                    initializeHeaderLogic();
                })
                .catch(error => console.error('Error loading header:', error));
        
            // ২. ফুটার লোড করা
            fetch(footerUrl)
                .then(response => {
                    if (!response.ok) throw new Error("Footer not found");
                    return response.text();
                })
                .then(data => {
                    document.getElementById('footer-placeholder').innerHTML = data;
                    // HTML আসার পর স্ক্রিপ্ট ইনিশিয়ালইজ করুন
                    initializeFooterLogic();
                })
                .catch(error => console.error('Error loading footer:', error));
        });
        
        // === Header Logic (Global Functions) ===
        
        // এই ফাংশনটি হেডার লোড হওয়ার পর কল হবে
        function initializeHeaderLogic() {
            // Sticky Navbar Logic
            const navbar = document.getElementById('mainNavbar');
            window.addEventListener('scroll', () => {
                if (navbar) {
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                }
            });
        
            // Mobile Menu Toggle Logic
            // এই ফাংশনগুলো window অবজেক্টে সেট করা হচ্ছে যাতে HTML এর onclick="func()" কাজ করে
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
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            };
        }
        
        // === Footer Logic ===
        
        function initializeFooterLogic() {
            // 1. Auto Update Year
            const yearSpan = document.getElementById("copyright-year");
            if(yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }
        
            // 2. Back to Top Button Logic
            const backBtn = document.getElementById('backToTop');
            
            // Scroll Event for Back to Top
            window.addEventListener('scroll', () => {
                if (backBtn) {
                    if (window.scrollY > 300) {
                        backBtn.style.display = 'flex';
                    } else {
                        backBtn.style.display = 'none';
                    }
                }
            });
        
            // Click Function for Back to Top
            window.scrollToTop = function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
        }
