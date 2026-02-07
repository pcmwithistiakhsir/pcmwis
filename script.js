
        // 1. Initialize Animation Library (AOS)
        AOS.init({
            offset: 60,
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });

        // 2. Custom Zoom Functionality Scripts
        function openZoom(imgSrc, captionText) {
            var modal = document.getElementById("zoomModal");
            var modalImg = document.getElementById("zoomImg");
            var captionBox = document.getElementById("zoomCaption");
            
            modal.classList.add('show');
            modalImg.src = imgSrc;
            captionBox.innerText = captionText; 
        }

        function closeZoom(e) {
            if (e.target.id === "zoomModal") {
                document.getElementById("zoomModal").classList.remove('show');
            }
        }
        
        function closeZoomForce() {
            document.getElementById("zoomModal").classList.remove('show');
        }

        // ==========================================
        // 3. CUSTOM NAVBAR JS (Vanilla JS)
        // ==========================================
        
        // Sticky Logic
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('mainNavbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Back to Top Button Logic
            const backBtn = document.getElementById('backToTop');
            if (window.scrollY > 300) {
                backBtn.style.display = 'flex';
            } else {
                backBtn.style.display = 'none';
            }
        });

        // Mobile Menu Toggle Logic
        function toggleMobileMenu() {
            const navMenu = document.getElementById('navMenu');
            const overlay = document.getElementById('navOverlay');
            const icon = document.getElementById('togglerIcon');
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

        // Close menu when a link is clicked
        function closeMenu() {
            const isMobile = window.innerWidth <= 991;
            if(isMobile) {
                const navMenu = document.getElementById('navMenu');
                const overlay = document.getElementById('navOverlay');
                const icon = document.getElementById('togglerIcon');
                
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
                
                // Reset icon
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
        // ==========================================

        // 4. Scroll to Top Function
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // 5. Stats Counter Animation
        const counters = document.querySelectorAll('.counter');
        const speed = 200; 

        const animateCounters = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target + "+";
                    }
                };
                updateCount();
            });
        };

        let counted = false;
        const statsSection = document.getElementById('stats');
        
        if(statsSection) {
            window.addEventListener('scroll', () => {
                const sectionPos = statsSection.getBoundingClientRect().top;
                const screenPos = window.innerHeight / 1.3;

                if(!counted && sectionPos < screenPos) {
                    animateCounters();
                    counted = true;
                }
            });
        }
