import Swiper from 'swiper/js/swiper.js';
import { isNull } from 'util';

class Slider {
    constructor() {
        this.testimonialContainer = document.querySelector(".testimonials__wrapper");
        if (!(isNull(this.testimonialContainer))) {
            this.startLider();
        }
    }

    startLider() {
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

}


export default Slider;