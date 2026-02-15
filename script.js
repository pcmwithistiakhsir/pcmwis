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
                name: "Noor Mohammad Siam",
                inst: "IUB (CSE)",
                img: "https://noormohammadsiam.com/me.jpg",
                review: "অষ্টম শ্রেণি থেকে এইচএসসি-২৪—দীর্ঘ এই সাত বছরের পথচলায় আপনি শুধু আমার শিক্ষক ছিলেন না, ছিলেন আমার বড় ভাই এবং সবচেয়ে বিশ্বস্ত পথপ্রদর্শক। আপনার পড়ানোর সেই অসাধারণ জাদুকরী কৌশলই আজকের আমার এই সাফল্যের মূল ভিত্তি। জটিল সব বিষয়কে আপনি যেভাবে সহজ করে আমার সামনে তুলে ধরেছেন, তা এক কথায় অনবদ্য। আমার প্রতিটি পরীক্ষায় ভালো ফলাফলের কারিগর হিসেবে আপনার অবদান আমি সবসময় কৃতজ্ঞচিত্তে স্মরণ করব। আপনার মতো একজন নিবেদিতপ্রাণ শিক্ষকের সান্নিধ্য পাওয়া আমার জীবনের অন্যতম বড় প্রাপ্তি।"
            },
            {
                name: "Sowrob",
                inst: "HSC (Batch 2025)",
                img: "https://i.ibb.co.com/8gfgz6xt/FB-IMG-1771183224611.jpg",
                review: "ইশতিয়াক ভাইয়ার প্রতি কৃতজ্ঞতা প্রকাশ করার ভাষা আমার জানা নেই। আমাদের পরিচয়ের শুরুটা ছিল এসএসসি পরীক্ষার মাত্র ২ মাস আগে। তখন আমার অবস্থা এমন ছিল যে, বইয়ের অর্ধেকও শেষ হয়নি, চারিদিকে শুধু অন্ধকার দেখতাম। ঠিক সেই হতাশাজনক মুহূর্তে ভাইয়া আমার জীবনে আলোর প্রদীপ হয়ে এসেছিলেন। ​আমার কঠোর পরিশ্রম আর ভাইয়ার নিঃস্বার্থ ত্যাগের ফলে আমার জীবনের মোড় ঘুরে যায়। আল্লাহর অশেষ রহমতে আমি ২০২৩ সালের এসএসসি পরীক্ষায় বিজ্ঞান বিভাগ থেকে GPA-5 অর্জন করি (আলহামদুলিল্লাহ) 💙। অল্প সময়ের সেই দিনগুলোতে ভাইয়ার অবদান আমি সারাজীবন মনে রাখবো। দোয়া করি আল্লাহ তায়ালা ভাইয়াকে নেক হায়াত দান করুন এবং সবসময় সুস্থ ও ভালো রাখুন। ভাইয়ার ছায়া আজও আমার মাথার ওপর আছে এবং সামনে এইচএসসি-২৫ (HSC-25) পরীক্ষায় অংশ নিতে যাচ্ছি। আমাদের এই পথচলা যেন সফল হয়, সেজন্য সবার কাছে দোয়া প্রার্থী। ধন্যবাদ ইশতিয়াক ভাইয়া, আপনি শুধু শিক্ষক নন, আমার কাছে এক অনুপ্রেরণার নাম। 💗"
            },
            {
                name: "Kazi Mahmud Rafi",
                inst: "CU (Finance)",
                img: "https://i.ibb.co.com/GDr3gjc/FB-IMG-1771184256206.jpg",
                review: "ইশতিয়াক স্যারের সাথে আমার পরিচয় আজকের না,সে অনেকদিন আগের।অন্যরা আমাকে নিয়ে কেমন ভাবতো জানি না;আমি সবসময় নিজেকে খারাপ ছাত্র হিসেবেই ভাবতাম।কারন ম্যাথ রিলেটেড সাবজেক্টে আমি দুর্বল ছিলাম অনেক।ইশতিয়াক স্যার আসার পর উনি ওই বিষয়টা খুব দ্রুত এড্রেস করেন।যাতে আমি এই সাবজেক্টে সবল হতে পারি,সেজন্যে অনেক এফোর্ট দিয়েছেন।অন্য কেউ হলে তার অর্ধেক সময়টুকুও দিত না।উনার অক্লান্ত পরিশ্রমের ফলস্বরূপ জেএসসি এবং এসএসসিতে এই সাবজেক্টে আমার এ+ ছুটেনি।"
            },
            {
                name: "Sumaiya Ayat",
                inst: "Student",
                img: "",
                review: "আসসালামুয়ালাইকুম স্যার, আপনার প্রতি আমি সবসময় কৃতজ্ঞ থাকব । আমার স্কুল থেকে কলেজ পর্যন্ত dedicated person হিসেবে সবসময় আপনি ছিলেন। আল্লাহর রহমতে এতো কম সময়ে আপনার দেওয়া suggestions follow করে আমি ভালো রেজাল্ট করি। আসলে মানুষের চেষ্টা এবং কঠোর পরিশ্রমের ফলেই সফলতা সম্ভব, যেটা আপনি এক বাস্তব প্রমাণ দিয়েছেন। আল্লাহর রহমতে এবং আপনার দেওয়া time management অনুসরণ করে আজ আমি ভালো রেজাল্ট করেছি । আমি আপনার কৃতজ্ঞতার কথা কখনো ভুলবো না , ইনশাআল্লাহ ।🥰"
            },
            {
                name: "Rahwan Ilahi",
                inst: "HSC (Batch 2026)",
                img: "https://i.ibb.co.com/rR4RXttD/FB-IMG-1771184911723.jpg",
                review: "একজন আদর্শ শিক্ষক তিনিই যিনি তার শিক্ষার্থীদের স্বপ্ন দেখাতে পারেন। প্রিয় ইসতিয়াক আহমেদ, একজন শিক্ষক হওয়ার জন্য আপনাকে ধন্যবাদ যিনি সত্যিই তার ছাত্রদের বিষয়ে যত্নশীল। আপনার শিক্ষা আমাকে প্রতিদিন অনুপ্রাণিত করে এবং আপনি একজন অত্যন্ত নিবেদিতপ্রাণ ব্যক্তি। আপনাকে অনেক ধন্যবাদ💝💝। দোয়া করি আপনি একদিন অনেক দূর এগিয়ে যাবেন । 🤲🤲"
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
            if (window.innerWidth < 600) return 200; 
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
