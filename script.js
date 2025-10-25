// ===== WEDDING INVITATION JAVASCRIPT =====

// ===== LANGUAGE SYSTEM =====
const translations = {
    vi: {
        'save-the-date': 'Save The Date',
        'invitation-text': 'Trân trọng kính mời bạn đến chung vui cùng chúng tôi',
        'section-intro': 'Giới Thiệu',
        'section-couple': 'Cô Dâu & Chú Rể',
        'countdown-label': 'CÙNG ĐẾM NGƯỢC THỜI GIAN',
        'countdown-title': 'Save The Date',
        'days': 'Ngày',
        'hours': 'Giờ',
        'minutes': 'Phút',
        'seconds': 'Giây',
        'event-title': 'Trân trọng kính mời',
        'event-subtitle': 'Anh, Chị và người thương',
        'event-text': 'Tham dự lễ cưới của chúng tôi',
        'event-type': 'TIỆC CƯỚI',
        'event-time': 'Vào lúc:',
        'date-day': 'Thứ Sáu',
        'date-month': '11 - 2025',
        'love-story': 'LOVE STORY',
        'story1': 'Lần đầu đi chơi với nhau',
        'story2': 'Cùng nhau du lịch và mặc kimono',
        'story3': 'Gia đình 2 bên gặp gỡ',
        'story4': 'Cùng nhau về Việt Nam',
        'story5': 'Cầu hôn',
        'gallery': 'ALBUM ẢNH',
        'guestbook-title': 'Gửi Lời Chúc Mừng',
        'guestbook-subtitle': 'Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!',
        'guestbook-name': 'Tên bạn',
        'guestbook-message': 'Nhập lời chúc của bạn...',
        'guestbook-submit': 'Gửi lời chúc',
        'rsvp-title': 'Xác Nhận Tham Dự',
        'rsvp-subtitle': 'Xin vui lòng thông báo cho chúng tôi biết bạn sẽ đến tham dự',
        'rsvp-yes': 'Xác nhận tham dự',
        'rsvp-no': 'Xin phép vắng mặt',
        'rsvp-name': 'Họ và tên',
        'rsvp-phone': 'Số điện thoại',
        'rsvp-guests': 'Số người tham dự',
        'rsvp-wishes': 'Lời chúc của bạn',
        'rsvp-submit': 'Xác nhận',
        'gift-title': 'Mừng Cưới',
        'gift-subtitle': 'Thật vui mừng được chúng với bạn đến với hành trình yêu thương của chúng tôi. Sự hiện diện của bạn là quà tặng quan trọng nhất. Nếu bạn vẫn muốn gửi một món quà, chúng tôi xin trân trọng nhận để thêm ý nghĩa cho ngày trọng đại.',
        'gift-groom': 'Chú Rể',
        'gift-bride': 'Cô Dâu',
        'gift-copy': 'Copy STK',
        'gift-note': '** Điểm tâm 57% của Google hoặc bấm vào QR để tải',
        'thankyou-title': 'Thank you!',
        'thankyou-text': 'Hạnh phúc khi có bạn bên cạnh trong ngày vui của chúng tôi!',
        'footer-text': 'Happy Wedding Hoàng Hiệp & Kazua • 21.11.2025',
        'rsvp-success': 'Cảm ơn bạn! RSVP của bạn đã được gửi thành công.',
        'rsvp-error': 'Có lỗi xảy ra. Vui lòng thử lại.',
        'rsvp-validation': 'Vui lòng điền đầy đủ thông tin (Họ tên, Số điện thoại và Số người)!',
        'guestbook-success': 'Cảm ơn lời chúc của bạn!',
        'copy-success': 'Đã copy!',
        'location-parking': 'Nơi để xe',
        'location-parking-note': 'Bãi đỗ xe miễn phí',
        'location-venue': 'Nơi diễn ra tiệc cưới',
        'location-venue-note': 'Trung tâm tiệc cưới Thu Hằng',
    },
    ja: {
        'save-the-date': 'Save The Date',
        'invitation-text': '皆様のご参加お待ちしております',
        'section-intro': 'ご紹介',
        'section-couple': '新婦と新郎',
        'countdown-label': 'カウントダウン',
        'countdown-title': 'Save The Date',
        'days': '日',
        'hours': '時間',
        'minutes': '分',
        'seconds': '秒',
        'event-title': 'ご参加お待ちしております',
        'event-subtitle': '',
        'event-text': '',
        'event-type': 'ご結婚式',
        'event-time': '開式時刻:',
        'date-day': '金曜日',
        'date-month': '2025年11月21日',
        'love-story': 'ラブストーリー',
        'story1': '初めてのデート',
        'story2': '一緒に旅行に行って着物👘着た',
        'story3': '顔合わせ',
        'story4': 'ベトナムへ',
        'story5': 'プロポーズ',
        'gallery': 'フォトギャラリー',
        'guestbook-title': 'ゲストブック',
        'guestbook-subtitle': '素敵なお祝いのメッセージをありがとうございます！',
        'guestbook-name': 'お名前',
        'guestbook-message': 'メッセージをご入力ください...',
        'guestbook-submit': 'メッセージ送信',
        'rsvp-title': '出欠確認',
        'rsvp-subtitle': 'ご出席の確認をお願いいたします',
        'rsvp-yes': 'ご出席',
        'rsvp-no': 'ご欠席',
        'rsvp-name': 'お名前',
        'rsvp-phone': '電話番号',
        'rsvp-guests': 'ゲスト数',
        'rsvp-wishes': 'メッセージ',
        'rsvp-submit': '確認',
        'gift-title': 'ご祝儀',
        'gift-subtitle': 'ご結婚式にご列席いただき、ありがとうございます。皆様のご列席が最高のご祝儀です。もしご祝儀をご用意いただける場合は、大切にお受けさせていただきます。',
        'gift-groom': '新郎',
        'gift-bride': '新婦',
        'gift-copy': 'コピー',
        'gift-note': '**QRコードをスキャンするか、クリックしてダウンロードしてください',
        'thankyou-title': 'ありがとうございました!',
        'thankyou-text': '皆様とこの素敵な日を過ごせて幸せです!',
        'footer-text': 'Happy Wedding 新郎新婦 • 2025年11月21日',
        'rsvp-success': 'ありがとうございます。出欠確認をお受けいたしました。',
        'rsvp-error': 'エラーが発生しました。もう一度お試しください。',
        'rsvp-validation': '必要な情報をすべてご入力ください（お名前、電話番号、ゲスト数）',
        'guestbook-success': 'メッセージをありがとうございます！',
        'copy-success': 'コピーしました',
        'location-parking': '駐車場',
        'location-parking-note': '無料駐車場',
        'location-venue': '結婚式会場',
        'location-venue-note': 'Thu Hằng ウェディングセンター',
    }
};

let currentLanguage = 'vi';

// ===== LANGUAGE SELECTOR =====
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentLanguage = btn.dataset.lang;
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateLanguage();
    });
});

function updateLanguage() {
    // Update text content
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;

        // Kiểm tra xem có text hay không
        if (translations[currentLanguage][key] !== undefined) {
            if (translations[currentLanguage][key] === '') {
                // Nếu text rỗng → ẩn element
                el.style.display = 'none';
            } else {
                // Nếu có text → hiện element và update text
                el.style.display = '';
                el.textContent = translations[currentLanguage][key];
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.dataset.placeholder;
        if (translations[currentLanguage][key]) {
            el.placeholder = translations[currentLanguage][key];
        }
    });

    // Update button text
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.textContent = translations[currentLanguage]['gift-copy'];
    });
}

// ===== CONFIGURATION =====
const CONFIG = {
    weddingDate: new Date('2025-11-21T11:00:00'),
    googleSheetURL: 'https://script.google.com/macros/s/AKfycbyGH6GQdcMPTtXhYucSKy1K0ZGIN94N8WFuO1_TDJ_mboNvUQToxciu-s8iftv68rc/exec',
    galleryAutoPlay: false,
    galleryInterval: 3000,
    heartsInterval: 2000
};

// ===== MUSIC CONTROL =====
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

// Auto play music khi load trang
window.addEventListener('load', () => {
    bgMusic.play().catch(err => console.log('Autoplay blocked:', err));
    musicToggle.classList.add('playing');
    isPlaying = true;
});

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
    } else {
        bgMusic.play().catch(err => console.log('Autoplay blocked:', err));
        musicToggle.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

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

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== PHOTO GALLERY SLIDER =====
const galleryTrack = document.getElementById('galleryTrack');
const galleryWrapper = document.querySelector('.gallery-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide');
const totalSlides = slides.length;

// Touch/Swipe variables
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

function updateGallery() {
    const offset = -currentSlide * 100;
    galleryTrack.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateGallery();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateGallery();
}

// Button controls
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Touch/Swipe controls
galleryWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

galleryWrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

// Mouse drag controls (for desktop)
let mouseDown = false;
let startX = 0;

galleryWrapper.addEventListener('mousedown', (e) => {
    mouseDown = true;
    startX = e.pageX;
    galleryWrapper.style.cursor = 'grabbing';
});

galleryWrapper.addEventListener('mousemove', (e) => {
    if (!mouseDown) return;
    e.preventDefault();
});

galleryWrapper.addEventListener('mouseup', (e) => {
    if (!mouseDown) return;
    mouseDown = false;
    galleryWrapper.style.cursor = 'grab';

    const endX = e.pageX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
});

galleryWrapper.addEventListener('mouseleave', () => {
    mouseDown = false;
    galleryWrapper.style.cursor = 'grab';
});

function handleSwipe() {
    const diffX = touchStartX - touchEndX;
    const diffY = Math.abs(touchStartY - touchEndY);

    // Chỉ swipe ngang nếu movement ngang > dọc (tránh conflict với scroll)
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > diffY) {
        if (diffX > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - prev slide
            prevSlide();
        }
    }
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

if (CONFIG.galleryAutoPlay) {
    setInterval(() => {
        nextSlide();
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

// ===== ATTENDANCE BUTTONS =====
const attendanceButtons = document.querySelectorAll('.attendance-btn');
const attendanceInput = document.getElementById('rsvpAttendance');

attendanceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        attendanceButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        attendanceInput.value = btn.dataset.attendance;
    });
});

// ===== RSVP FORM SUBMISSION =====
const rsvpForm = document.getElementById('rsvpForm');
const rsvpMessage = document.getElementById('rsvpMessage');

rsvpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const guests = document.querySelector('input[name="guests"]').value.trim();
    const wishes = document.querySelector('textarea[name="wishes"]').value.trim();
    const attendance = document.getElementById('rsvpAttendance').value;

    if (!name || !phone || !guests) {
        showMessage(translations[currentLanguage]['rsvp-validation'], 'error');
        return;
    }

    const formData = {
        name: name,
        phone: phone,
        guests: guests,
        wishes: wishes,
        attendance: attendance,
        timestamp: new Date().toLocaleString('vi-VN')
    };

    try {
        await fetch(CONFIG.googleSheetURL, {
            method: 'POST',
            body: JSON.stringify(formData),
            mode: 'no-cors'
        });

        showMessage(translations[currentLanguage]['rsvp-success'], 'success');
        rsvpForm.reset();
        attendanceButtons[0].classList.add('active');
        attendanceButtons[1].classList.remove('active');
        attendanceInput.value = 'yes';
    } catch (error) {
        console.error('Error:', error);
        showMessage(translations[currentLanguage]['rsvp-error'], 'error');
    }
});

function showMessage(text, type) {
    rsvpMessage.textContent = text;
    rsvpMessage.className = 'rsvp-message ' + type;
    rsvpMessage.style.display = 'block';

    setTimeout(() => {
        rsvpMessage.style.display = 'none';
    }, 5000);
}

// ===== GUESTBOOK FORM SUBMISSION =====
const guestbookForm = document.getElementById('guestbookForm');

guestbookForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const guestName = document.querySelector('input[name="guestName"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (!guestName || !message) {
        alert(translations[currentLanguage]['rsvp-validation']);
        return;
    }

    const formData = {
        guestName: guestName,
        message: message,
        timestamp: new Date().toLocaleString('vi-VN')
    };

    try {
        await fetch(CONFIG.googleSheetURL, {
            method: 'POST',
            body: JSON.stringify(formData),
            mode: 'no-cors'
        });

        alert(translations[currentLanguage]['guestbook-success']);
        guestbookForm.reset();
    } catch (error) {
        console.error('Error:', error);
        alert(translations[currentLanguage]['rsvp-error']);
    }
});

// ===== COPY BANK ACCOUNT =====
const copyBtns = document.querySelectorAll('.copy-btn');

copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const account = btn.dataset.account;
        navigator.clipboard.writeText(account).then(() => {
            const originalText = btn.textContent;
            btn.textContent = translations[currentLanguage]['copy-success'];
            btn.style.background = '#4CAF50';

            setTimeout(() => {
                btn.textContent = translations[currentLanguage]['gift-copy'];
                btn.style.background = '';
            }, 2000);
        });
    });
});

// ===== SMOOTH SCROLL =====
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

// ===== PAGE LOAD =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0.95';