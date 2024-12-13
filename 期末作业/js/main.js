let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

// 初始化显示第一张幻灯片
showSlide(currentSlide);

setInterval(function() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);

document.getElementById('toggle-form').addEventListener('click', function() {
    var loginDiv = document.getElementById('login');
    var registerDiv = document.getElementById('register');
    var toggleButton = document.getElementById('toggle-form');

    if (loginDiv.style.display === 'none') {
        loginDiv.style.display = 'block';
        registerDiv.style.display = 'none';
        toggleButton.textContent = '切换到注册';
    } else {
        loginDiv.style.display = 'none';
        registerDiv.style.display = 'block';
        toggleButton.textContent = '切换到登录';
    }
});