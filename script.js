// Hiệu ứng fade-in khi cuộn
const elements = document.querySelectorAll('.fade-in');
function handleScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// Bắt đầu phát nhạc khi người dùng tương tác
const bgMusic = document.getElementById('bg-music');
document.body.addEventListener('click', () => {
    if (bgMusic.paused) bgMusic.play();
});
