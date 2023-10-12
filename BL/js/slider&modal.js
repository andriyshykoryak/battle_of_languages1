let slideToShow = 0;

const modalBtns = document.querySelectorAll('.gallery-modal-btn');

modalBtns.forEach(function(button){
    button.addEventListener('click',function(){

        const slideNumberToshow = button.getAttribute('data-index');
        slideToShow = Number(slideNumberToshow);
        

    })

});


//Запуск бібілотеки модального вікна

MicroModal.init({
    onShow: function(){
        slider.go(slideToShow);
    }
});


//run slider library


const sliderContainer = document.querySelector('.splide');
const slider=new Splide(sliderContainer).mount();



