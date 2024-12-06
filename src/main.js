import './css/animate.css';
import './css/bootstrap.min.css';
import './css/font.css';
import './css/style.css';
import 'swiper/css';

import { modalTel } from './js/modalTel';
import { sliderCarousel } from './js/sliderCarousel';
import { serviceSlider } from './js/serviceSlider';
import { modalService } from './js/modalService';
import { timer } from './js/timer';
import { inputBan } from './js/inputBan';
import { formFetch } from './js/formFetch';
import { doki } from './js/doki';
import { scrollClick } from './js/scrollClick';
import { calc } from './js/calc';
import { comments } from './js/comments';

modalTel();
sliderCarousel();
serviceSlider();
modalService();
timer('09 december 2024');
inputBan();
formFetch();
doki();
scrollClick();
calc(100);
comments();
