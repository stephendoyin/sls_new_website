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
        }

        if (!(isNull(this.siema))) {
            this.startsLiderTwo();
        }

    }

    startsLider() {
        let swiper = new Swiper(this.testimonialContainer, {
            slidesPerView: 3,
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            // },
            grabCursor: true,
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }

    startsLiderTwo() {
        const si = new Siema({
            selector: '.siema',
            perPage: 1,
            loop: true,
            duration: 200,
            onInit() {
                const dot = document.querySelectorAll('.dot');
                dot.forEach((element, i) => {
                    element.classList.remove('active');
                    element.addEventListener('click', function() {
                        si.goTo(i);
                    })
                });
                console.log(this)
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




}


export default Slider;