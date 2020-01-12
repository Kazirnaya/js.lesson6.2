// JavaScript source code
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const pictures = {
    slides: [],

    currentIdx: 0,

    init() {
        this.slides = document.getElementsByClassName('img');
        this.showImagesWithCurrentIdx();
    },

    showImagesWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden');
    },

    replacePictureWithLeft() {
        this.slides[this.currentIdx].classList.add('hidden');
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slider-rightToLeftAnimation');
        currentSlide.classList.remove('hidden-slide');
        setTimeout(() => {
            currentSlide.classList.remove('slider-rightToLeftAnimation');
        }, 500);
        this.showImagesWithCurrentIdx();

    },

    replacePictureWithRight() {
        this.slides[this.currentIdx].classList.add('hidden');
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slider-leftToRightAnimation');
        currentSlide.classList.remove('hidden-slide');
        setTimeout(() => {
            currentSlide.classList.remove('slider-leftToRightAnimation');
        }, 500);
        this.showImagesWithCurrentIdx();
    }
}



window.addEventListener('load', function () {
    pictures.init();

})

leftArrow.addEventListener('click', function () {
    pictures.replacePictureWithLeft();
});

rightArrow.addEventListener('click', function () {
    pictures.replacePictureWithRight();
});