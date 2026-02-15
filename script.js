        // Auto-update copyright year
        document.getElementById("copyright-year").textContent = new Date().getFullYear();

        // 1. Initialize Animation Library (AOS)
        AOS.init({
            offset: 60,
            duration: 800,
            easing: 'ease-in-out',
            once: false
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

                // ==========================================
        // REVIEW SECTION SCRIPTS
        // ==========================================
        
        const reviewData = [
            {
                name: "Habibullah Khan",
                inst: "BUET (CSE)",
                img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
                review: "আলহামদুলিল্লাহ, এই কোর্সের গাইডলাইন আমাকে অনেক সাহায্য করেছে। বিশেষ করে মেন্টরদের সাপোর্ট ছিল অসাধারণ। আমি মনে করি সঠিক গাইডলাইন পেলে যে কেউ ভালো করতে পারে। বুয়েটে চান্স পাওয়া আমার স্বপ্ন ছিল এবং সেটা পূরণ হয়েছে।"
            },
            {
                name: "Muhtasim Sadik",
                inst: "DMC (MBBS)",
                img: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
                review: "বায়োলজি এবং কেমিস্ট্রি নিয়ে আমার অনেক ভয় ছিল। এখানকার ক্লাসগুলো এত ডিটেইলস ছিল যে আমার কনসেপ্ট পুরো ক্লিয়ার হয়ে গেছে। নিয়মিত এক্সাম দেওয়ার কারণে আমার কনফিডেন্স অনেক বেড়ে গিয়েছিল। সবাইকে রেকমেন্ড করব।"
            },
            {
                name: "Sumaiya Akter",
                inst: "DU (Law)",
                img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
                review: "ভর্তি পরীক্ষার জার্নিটা মোটেও সহজ ছিল না। অনেক সময় হতাশা কাজ করত। কিন্তু ভাইয়াদের মোটিভেশনাল সেশনগুলো আমাকে ট্র্যাকে রাখতে সাহায্য করেছে। জিকে এবং ইংরেজি অংশের ক্লাসগুলো ছিল দুর্দান্ত।"
            }
        ];
        
        let revCurrentIndex = 0;
        let revAutoSlideInterval;
        
        const leftContent = document.getElementById('leftInfo');
        const rightContent = document.getElementById('rightReview');
        
        const sImg = document.getElementById('sImg');
        const sName = document.getElementById('sName');
        const sInst = document.getElementById('sInst');
        const sReview = document.getElementById('sReview');
        
        const reviewModalOverlay = document.getElementById('reviewModalOverlay');
        const mName = document.getElementById('mName');
        const mInst = document.getElementById('mInst');
        const mText = document.getElementById('mText');
        const mImg = document.getElementById('mImg');
        
        function getReviewTextLimit() {
            if (window.innerWidth < 600) return 130; 
            return 300; 
        }
        
        function getTruncatedHtml(text, limit) {
            if (text.length <= limit) return text;
            return `${text.substring(0, limit)}... <button class="read-more-link" onclick="openReviewModal(${revCurrentIndex})">আরও পড়ুন <i class="fas fa-chevron-right" style="font-size:0.8em;"></i></button>`;
        }
        
        function loadReviewData(index) {
            const student = reviewData[index];
            if(sImg) sImg.src = student.img;
            if(sName) sName.textContent = student.name;
            if(sInst) sInst.textContent = student.inst;
            if(sReview) sReview.innerHTML = getTruncatedHtml(student.review, getReviewTextLimit());
        }
        
        function changeSlide(index) {
            if(!leftContent || !rightContent) return;
            leftContent.classList.remove('active');
            rightContent.classList.remove('active');
        
            setTimeout(() => {
                loadReviewData(index);
                leftContent.classList.add('active');
                rightContent.classList.add('active');
            }, 600);
        }
        
        function nextSlide() {
            revCurrentIndex = (revCurrentIndex + 1) % reviewData.length;
            changeSlide(revCurrentIndex);
            resetReviewTimer(); 
        }
        
        function prevSlide() {
            revCurrentIndex = (revCurrentIndex - 1 + reviewData.length) % reviewData.length;
            changeSlide(revCurrentIndex);
            resetReviewTimer();
        }
        
        function startReviewTimer() {
            revAutoSlideInterval = setInterval(() => {
                revCurrentIndex = (revCurrentIndex + 1) % reviewData.length;
                changeSlide(revCurrentIndex);
            }, 7000); 
        }
        
        function resetReviewTimer() {
            clearInterval(revAutoSlideInterval);
            startReviewTimer();
        }
        
        // Review Modal Logic
        window.openReviewModal = function(index) {
            clearInterval(revAutoSlideInterval);
            const student = reviewData[index];
            mName.textContent = student.name;
            mInst.textContent = student.inst;
            mText.textContent = student.review;
            mImg.src = student.img;
            reviewModalOverlay.classList.add('open');
        }
        
        window.closeReviewModal = function() {
            reviewModalOverlay.classList.remove('open');
            startReviewTimer();
        }
        
        if(reviewModalOverlay) {
            reviewModalOverlay.addEventListener('click', (e) => {
                if(e.target === reviewModalOverlay) closeReviewModal();
            });
        }
        
        // Init Review Section if exists
        if(document.getElementById('review')) {
            loadReviewData(0);
            startReviewTimer();
        
            window.addEventListener('resize', () => {
                loadReviewData(revCurrentIndex);
            });
        }
