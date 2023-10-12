let slideToShow = 0;

const modalBtns = document.querySelectorAll('.gallery-modal-btn');

modalBtns.forEach(function (button) { 
    button.addEventListener('click', function () {
        const slideNumbeToShow = button.getAttribute('data-index');

        slideToShow = Number(slideNumbeToShow);

        console.log(slideToShow);
    });
});

// Запуск бібліотеки модального вікна
MicroModal.init({
    onShow: function () {
        slider.go(slideToShow);
    }
});


// Запуск бібліотеки слайдеру

const sliderContainer = document.querySelector('.splide');

const slider = new Splide(sliderContainer).mount();
