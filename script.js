// ===== WEDDING INVITATION JAVASCRIPT =====

// ===== CONFIGURATION =====
const CONFIG = {
    weddingDate: new Date('2025-11-21T11:00:00'), // Ngày giờ đám cưới
    googleSheetURL: 'https://script.google.com/macros/s/AKfycbyGH6GQdcMPTtXhYucSKy1K0ZGIN94N8WFuO1_TDJ_mboNvUQToxciu-s8iftv68rc/exec', // Thay bằng URL Google Apps Script
    galleryAutoPlay: false, // Auto play gallery
    galleryInterval: 3000, // 3 seconds
    heartsInterval: 2000 // Tạo trái tim mỗi 2 giây
};

// ===== MUSIC CONTROL =====
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
    } else {
        bgMusic.play();
        musicToggle.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// Auto play music on first user interaction
document.addEventListener('click', () => {
    if (!isPlaying) {
        bgMusic.play().catch(err => console.log('Autoplay blocked:', err));
        musicToggle.classList.add('playing');
        isPlaying = true;
    }
}, { once: true });

// ===== FLOATING HEARTS ANIMATION =====
const heartsContainer = document.getElementById('heartsContainer');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create hearts periodically
setInterval(createHeart, CONFIG.heartsInterval);

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    const now = new Date().getTime();
    const distance = CONFIG.weddingDate - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ===== PHOTO GALLERY SLIDER =====
const galleryTrack = document.getElementById('galleryTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide');
const totalSlides = slides.length;

function updateGallery() {
    const offset = -currentSlide * 100;
    galleryTrack.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateGallery();
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateGallery();
});

// Auto play gallery (optional)
if (CONFIG.galleryAutoPlay) {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateGallery();
    }, CONFIG.galleryInterval);
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// ===== RSVP FORM SUBMISSION =====
const rsvpForm = document.getElementById('rsvpForm');
const rsvpHearts = document.querySelectorAll('.rsvp-heart');
let selectedAttendance = 'yes';

rsvpHearts.forEach(heart => {
    heart.addEventListener('click', () => {
        rsvpHearts.forEach(h => h.classList.remove('active'));
        heart.classList.add('active');
        selectedAttendance = heart.dataset.attendance || 'yes';
    });
});

rsvpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.querySelector('input[name="name"]').value,
        phone: document.querySelector('input[name="phone"]').value,
        attendance: document.querySelector('select[name="attendance"]').value,
        guests: document.querySelector('input[name="guests"]').value,
        wishes: document.querySelector('textarea[name="wishes"]').value,
        timestamp: new Date().toLocaleString('vi-VN')
    };

    try {
        // Gửi đến Google Apps Script
        await fetch(CONFIG.googleSheetURL, {
            method: 'POST',
            body: JSON.stringify(formData),
            mode: 'no-cors'
        });

        alert('Cảm ơn bạn! RSVP của bạn đã được gửi thành công.');
        rsvpForm.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Có lỗi xảy ra. Vui lòng thử lại.');
    }
});

// ===== GUESTBOOK FORM SUBMISSION =====
const guestbookForm = document.getElementById('guestbookForm');

guestbookForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        guestName: document.querySelector('input[name="guestName"]').value,
        message: document.querySelector('textarea[name="message"]').value,
        timestamp: new Date().toLocaleString('vi-VN')
    };

    try {
        // Gửi đến Google Apps Script (cùng URL hoặc URL khác)
        await fetch(CONFIG.googleSheetURL, {
            method: 'POST',
            body: JSON.stringify(formData),
            mode: 'no-cors'
        });

        alert('Cảm ơn lời chúc của bạn!');
        guestbookForm.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Có lỗi xảy ra. Vui lòng thử lại.');
    }
});

// ===== COPY BANK ACCOUNT TO CLIPBOARD =====
const copyBtns = document.querySelectorAll('.copy-btn');

copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const account = btn.dataset.account;
        navigator.clipboard.writeText(account).then(() => {
            const originalText = btn.textContent;
            btn.textContent = 'Đã copy!';
            btn.style.background = '#4CAF50';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 2000);
        });
    });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Set initial opacity
document.body.style.opacity = '0.95';