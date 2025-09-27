// Vision Clixx Website JavaScript

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    setTimeout(() => {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('preloader').style.display = 'none';
        }, 500);
    }, 1500);

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });
    });

    // Search Toggle
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');

    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.remove('opacity-0', 'invisible');
        searchOverlay.classList.add('opacity-100', 'visible');
        searchOverlay.querySelector('input').focus();
    });

    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.add('opacity-0', 'invisible');
            searchOverlay.classList.remove('opacity-100', 'visible');
        }
    });

    // ESC key to close search
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchOverlay.classList.add('opacity-0', 'invisible');
            searchOverlay.classList.remove('opacity-100', 'visible');
        }
    });

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.remove('opacity-0', 'invisible');
            backToTop.classList.add('opacity-100', 'visible');
        } else {
            backToTop.classList.add('opacity-0', 'invisible');
            backToTop.classList.remove('opacity-100', 'visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Fade in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Video slideshow
    const videos = document.querySelectorAll('.hero-video');
    let currentVideo = 0;

    function switchVideo() {
        videos[currentVideo].classList.remove('active');
        currentVideo = (currentVideo + 1) % videos.length;
        videos[currentVideo].classList.add('active');
    }

    // Switch video every 8 seconds
    setInterval(switchVideo, 8000);

    // Gmail compose function
    window.openGmailCompose = function () {
        const email = 'visionclixx@gmail.com';
        const subject = 'Photography & Videography Inquiry - Vision Clixx';
        const body = 'Hi Vision Clixx Team,%0D%0A%0D%0AI am interested in your photography and videography services.%0D%0A%0D%0APlease provide more details about:%0D%0A- Available packages%0D%0A- Pricing%0D%0A- Booking process%0D%0A%0D%0AThank you!';

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${body}`;
        window.open(gmailUrl, '_blank');
    };

    // Social Media Functions
    window.openWhatsApp = function () {
        const message = 'Hi Vision Clixx! I am interested in your photography and videography services. Please share more details.';
        const whatsappUrl = `https://wa.me/916375519889?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    window.openYouTube = function () {
        window.open('https://youtube.com/@visionclixx', '_blank');
    };

    window.openInstagram = function () {
        window.open('https://instagram.com/visionclixx', '_blank');
    };

    window.openFacebook = function () {
        window.open('https://facebook.com/visionclixx', '_blank');
    };

    window.openPinterest = function () {
        window.open('https://pinterest.com/visionclixx', '_blank');
    };

    window.openLinkedIn = function () {
        window.open('https://linkedin.com/company/visionclixx', '_blank');
    };

    // Reviews scroll functionality
    window.scrollReviews = function (direction) {
        const container = document.getElementById('reviewsContainer');
        const scrollAmount = 320;

        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Auto-scroll reviews every 5 seconds
    setInterval(function () {
        const container = document.getElementById('reviewsContainer');
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: 320, behavior: 'smooth' });
        }
    }, 5000);

    // Portfolio Filter Functionality
    let itemsLoaded = 8;

    window.filterPortfolio = function (category) {
        const items = document.querySelectorAll('.portfolio-item');
        const buttons = document.querySelectorAll('.filter-btn');

        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        itemsLoaded = 8;

        let visibleCount = 0;
        items.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                if (visibleCount < itemsLoaded) {
                    item.style.display = 'block';
                    item.classList.remove('hidden');
                    item.classList.add('visible');
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            } else {
                item.style.display = 'none';
                item.classList.add('hidden');
                item.classList.remove('visible');
            }
        });

        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (category === 'all') {
            loadMoreBtn.style.display = items.length > itemsLoaded ? 'inline-block' : 'none';
        } else {
            const categoryItems = document.querySelectorAll(`[data-category="${category}"]`);
            loadMoreBtn.style.display = categoryItems.length > itemsLoaded ? 'inline-block' : 'none';
        }
    };

    // Gallery popup
    window.openGallery = function (coupleId) {
        const galleries = {
            'priya-arjun': {
                title: 'Priya & Arjun - Royal Wedding',
                photos: ['photo/photo2.jpeg', 'photo/photo5.jpeg', 'photo/photo6.jpeg', 'photo/photo7.jpeg', 'photo/photo3.jpeg'],
                videos: ['vedio/video1.mp4', 'vedio/video2.mp4']
            },
            'rahul-sneha': {
                title: 'Rahul & Sneha - Traditional Wedding',
                photos: ['photo/photo3.jpeg', 'photo/photo2.jpeg', 'photo/photo4.jpeg', 'photo/photo6.jpeg'],
                videos: ['vedio/video3.mp4']
            },
            'amit-kavya': {
                title: 'Amit & Kavya - Destination Wedding',
                photos: ['photo/photo4.jpeg', 'photo/photo5.jpeg', 'photo/photo6.jpeg', 'photo/photo7.jpeg'],
                videos: ['vedio/video4.mp4']
            },
            'prewedding-1': {
                title: 'Romantic Pre-Wedding Shoot',
                photos: ['photo/photo5.jpeg', 'photo/photo2.jpeg', 'photo/photo3.jpeg'],
                videos: ['vedio/video1.mp4']
            },
            'model-1': {
                title: 'Fashion Model Photography',
                photos: ['photo/photo6.jpeg', 'photo/photo7.jpeg', 'photo/photo5.jpeg', 'photo/photo4.jpeg'],
                videos: []
            },
            'product-1': {
                title: 'Commercial Product Photography',
                photos: ['photo/photo7.jpeg', 'photo/photo6.jpeg', 'photo/photo5.jpeg'],
                videos: []
            },
            'birthday-1': {
                title: 'Birthday Celebration Photography',
                photos: ['photo/photo1.png', 'photo/photo2.jpeg', 'photo/photo3.jpeg'],
                videos: ['vedio/video2.mp4', 'vedio/video3.mp4']
            }
        };

        const gallery = galleries[coupleId];
        if (!gallery) return;

        let modalContent = `
            <div class="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4" onclick="closeGallery(event)">
                <div class="bg-white rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col" onclick="event.stopPropagation()">
                    <div class="flex-shrink-0 p-6 border-b border-gray-200">
                        <div class="flex justify-between items-center">
                            <h2 class="text-xl font-bold text-gray-900">${gallery.title}</h2>
                            <button onclick="closeGallery()" class="text-gray-500 hover:text-gray-700 text-2xl">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto p-6">
                        <div class="mb-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-camera mr-2"></i>Photos (${gallery.photos.length})
                            </h3>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        `;

        gallery.photos.forEach((photo, index) => {
            modalContent += `
                <img src="${photo}" alt="Photo ${index + 1}" 
                     class="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                     onclick="openPhotoSlider('${coupleId}', ${index})">
            `;
        });

        if (gallery.videos.length > 0) {
            modalContent += `
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-video mr-2"></i>Videos (${gallery.videos.length})
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            `;

            gallery.videos.forEach((video, index) => {
                modalContent += `
                    <div class="relative cursor-pointer" onclick="openVideoSlider('${coupleId}', ${index})">
                        <video class="w-full h-40 object-cover rounded-lg">
                            <source src="${video}" type="video/mp4">
                        </video>
                        <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg hover:bg-opacity-50 transition">
                            <i class="fas fa-play text-white text-3xl"></i>
                        </div>
                    </div>
                `;
            });
        } else {
            modalContent += `
                            </div>
                        </div>
            `;
        }

        modalContent += `
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalContent);
        document.body.style.overflow = 'hidden';
    };

    // Photo slider
    window.openPhotoSlider = function (coupleId, startIndex) {
        const galleries = {
            'priya-arjun': { photos: ['photo/photo2.jpeg', 'photo/photo5.jpeg', 'photo/photo6.jpeg', 'photo/photo7.jpeg', 'photo/photo3.jpeg'] },
            'rahul-sneha': { photos: ['photo/photo3.jpeg', 'photo/photo2.jpeg', 'photo/photo4.jpeg', 'photo/photo6.jpeg'] },
            'amit-kavya': { photos: ['photo/photo4.jpeg', 'photo/photo5.jpeg', 'photo/photo6.jpeg', 'photo/photo7.jpeg'] },
            'prewedding-1': { photos: ['photo/photo5.jpeg', 'photo/photo2.jpeg', 'photo/photo3.jpeg'] },
            'model-1': { photos: ['photo/photo6.jpeg', 'photo/photo7.jpeg', 'photo/photo5.jpeg', 'photo/photo4.jpeg'] },
            'product-1': { photos: ['photo/photo7.jpeg', 'photo/photo6.jpeg', 'photo/photo5.jpeg'] },
            'birthday-1': { photos: ['photo/photo1.png', 'photo/photo2.jpeg', 'photo/photo3.jpeg'] }
        };

        const photos = galleries[coupleId].photos;
        window.currentPhotoIndex = startIndex;
        window.totalPhotos = photos.length;

        let sliderContent = `
            <div class="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50" onclick="closeSlider(event)">
                <button onclick="closeSlider()" class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10">
                    <i class="fas fa-times"></i>
                </button>
                <div class="absolute top-4 left-4 text-white z-10">
                    <p class="text-lg">Photos <span id="photoIndex">${startIndex + 1}</span> / ${photos.length}</p>
                </div>
                <button onclick="prevPhoto()" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button onclick="nextPhoto()" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="w-full h-full flex items-center justify-center p-16">
        `;

        photos.forEach((photo, index) => {
            sliderContent += `
                <img src="${photo}" alt="Photo ${index + 1}" 
                     class="photo-item max-w-full max-h-full object-contain ${index === startIndex ? 'block' : 'hidden'}" 
                     data-index="${index}">
            `;
        });

        sliderContent += `
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', sliderContent);
    };

    // Navigation functions
    window.nextPhoto = function () {
        const items = document.querySelectorAll('.photo-item');
        items[window.currentPhotoIndex].classList.add('hidden');
        items[window.currentPhotoIndex].classList.remove('block');
        window.currentPhotoIndex = (window.currentPhotoIndex + 1) % window.totalPhotos;
        items[window.currentPhotoIndex].classList.remove('hidden');
        items[window.currentPhotoIndex].classList.add('block');
        document.getElementById('photoIndex').textContent = window.currentPhotoIndex + 1;
    };

    window.prevPhoto = function () {
        const items = document.querySelectorAll('.photo-item');
        items[window.currentPhotoIndex].classList.add('hidden');
        items[window.currentPhotoIndex].classList.remove('block');
        window.currentPhotoIndex = window.currentPhotoIndex === 0 ? window.totalPhotos - 1 : window.currentPhotoIndex - 1;
        items[window.currentPhotoIndex].classList.remove('hidden');
        items[window.currentPhotoIndex].classList.add('block');
        document.getElementById('photoIndex').textContent = window.currentPhotoIndex + 1;
    };

    window.closeSlider = function (event) {
        if (event && event.target !== event.currentTarget) return;
        const slider = document.querySelector('.fixed.inset-0.bg-black.bg-opacity-95');
        if (slider) {
            slider.remove();
            document.body.style.overflow = 'auto';
        }
    };

    window.closeGallery = function (event) {
        if (event && event.target !== event.currentTarget) return;
        const modal = document.querySelector('.fixed.inset-0.bg-black.bg-opacity-95');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    };

    // Load More functionality
    window.loadMoreItems = function () {
        const items = document.querySelectorAll('.portfolio-item');
        const activeFilter = document.querySelector('.filter-btn.active').textContent.toLowerCase().replace('-', '');
        let visibleCount = 0;
        let newItemsShown = 0;

        items.forEach(item => {
            const category = item.dataset.category;
            const shouldShow = activeFilter === 'all' || category === activeFilter ||
                (activeFilter === 'prewedding' && category === 'prewedding');

            if (shouldShow) {
                if (item.style.display !== 'none') {
                    visibleCount++;
                } else if (newItemsShown < 8) {
                    item.style.display = 'block';
                    item.classList.remove('hidden');
                    item.classList.add('visible');
                    newItemsShown++;
                    visibleCount++;
                }
            }
        });

        itemsLoaded += 8;

        const totalItems = activeFilter === 'all' ? items.length :
            document.querySelectorAll(`[data-category="${activeFilter}"]`).length;
        if (visibleCount >= totalItems) {
            document.getElementById('loadMoreBtn').style.display = 'none';
        }
    };

    // Initialize portfolio items
    const allItems = document.querySelectorAll('.portfolio-item');
    allItems.forEach((item, index) => {
        if (index < 8) {
            item.style.display = 'block';
            item.classList.add('visible');
        } else {
            item.style.display = 'none';
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});