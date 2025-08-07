const sliderInner = document.querySelector('.explore_container--slider--slides');
const allSlides = document.querySelectorAll('.explore_container--slider--slides--slide');
const prevBtn = document.querySelector('.explore_container--previous');
const nextBtn = document.querySelector('.explore_container--next');
const dots = document.querySelectorAll('.explore_container--slider--dots--dot');

let currentIndex = 0;
const slideGap = 31;

function getSlideConfig() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1200) {
        return { slideWidth: 314, visibleSlides: 2, totalSlides: allSlides.length };
    } else if (screenWidth <= 1500) {
        return { slideWidth: 314, visibleSlides: 3, totalSlides: allSlides.length };
    } else {
        return { slideWidth: 405, visibleSlides: 3, totalSlides: allSlides.length };
    }
}

function updateSlider() {
    const config = getSlideConfig();
    const { slideWidth, visibleSlides, totalSlides } = config;
    
    // Нова логіка для maxIndex, щоб він завжди базувався на 5 точках
    // Загальна кількість слайдів (allSlides.length) мінус 1 видимий слайд, оскільки точки показують по одному
    const maxIndex = 4; // Завжди 5 точок, отже максимальний індекс - 4

    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    
    const offset = currentIndex * (slideWidth + slideGap);
    sliderInner.style.transform = `translateX(-${offset}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    
    // Перевіряємо, чи існує точка з поточним індексом
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
    }
}

nextBtn.addEventListener('click', () => {
    // maxIndex завжди буде 4 (для 5 точок)
    const maxIndex = 4;
    
    if (currentIndex === maxIndex) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    // maxIndex завжди буде 4 (для 5 точок)
    const maxIndex = 4;
    
    if (currentIndex === 0) {
        currentIndex = maxIndex;
    } else {
        currentIndex -= 1;
    }
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

window.addEventListener('resize', updateSlider);
updateSlider();