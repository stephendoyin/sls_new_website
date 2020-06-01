import Swiper from 'swiper/js/swiper';
import Siema from 'siema/dist/siema.min';
import { isNull } from 'util';

class Slider {
    constructor() {
        this.testimonialContainer = document.querySelector(".testimonials__wrapper");
        this.siema = document.querySelector('.siema');
        this.prev = document.querySelector('.prev');
        this.next = document.querySelector('.next');
        this.dot = document.querySelectorAll('.dot');

        if (!(isNull(this.testimonialContainer))) {
            this.startsLider();
            this.swipefunction();
        }

        if (!(isNull(this.siema))) {
            this.startsLiderTwo();
            this.makeTEqualHeight();
        }

        this.tlh = document.querySelector(".testimonials__left-handle")
    }

    startsLider() {

        this.swiper = new Swiper(this.testimonialContainer, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            autoHeight: false,
            breakpoints: {
                720: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1100: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },
            navigation: {
                trh: '.swiper-button-next',
                tlh: '.swiper-button-prev',
            },
        })

    }

    swipefunction() {
        this.swipe = this.testimonialContainer.swiper
        document.querySelector(".testimonials__right-handle").addEventListener('click', () => {
            this.swipe.slideNext();
        })
        document.querySelector(".testimonials__left-handle").addEventListener('click', () => {
            this.swipe.slidePrev();
        })
    }



    startsLiderTwo() {
        const si = new Siema({
            selector: '.siema',
            perPage: 1,
            loop: true,
            duration: 500,

            onInit() {
                const dot = document.querySelectorAll('.dot');
                dot.forEach((element, i) => {
                    element.classList.remove('active');
                    element.addEventListener('click', function() {
                        si.goTo(i);
                    })
                });
                setInterval(() => {
                    this.next();

                }, 12000)
                dot[this.currentSlide].classList.add('active');


            },

            onChange() {
                const dot = document.querySelectorAll('.dot');
                dot.forEach(element => {
                    element.classList.remove('active');
                });
                dot[this.currentSlide].classList.add('active');

            },
        });






    }

    makeTEqualHeight() {
        window.addEventListener('resize', () => {
            setTimeout(() => {
                this.changeTestHeight();
            }, 700)
        })

        window.addEventListener('load', this.changeTestHeight)

    }

    changeTestHeight() {
        let test = document.querySelector(".test__js");
        // console.log(test.clientHeight)
        let testimonials = document.querySelectorAll(".no-test__js");
        testimonials.forEach((el) => {
            el.style.height = `${test.clientHeight}px`;
        })
    }
}


export default Slider;