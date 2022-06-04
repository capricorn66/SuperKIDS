import Swiper, { Pagination } from 'swiper';
import NavToggle from './class/NavToggle'

document.addEventListener('DOMContentLoaded', function(){

    new NavToggle();
    new Swiper('.swiper', {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
            // when window width is >= 640px
            768: {
                slidesPerView: 2
            }
        },
        pagination: {
            el: '.swiper .swiper-pagination',
        },
    });

}, false);

