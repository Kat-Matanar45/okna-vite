import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const sliderCarousel = () => {
    const swiper = new Swiper('.mySwiper', {
        modules: [Navigation],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
            576: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}