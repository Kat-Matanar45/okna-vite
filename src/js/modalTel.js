import { animate } from "./helpers";

export const modalTel = () => {
    const btnTel = document.querySelectorAll('.button')[0];
    const modalWindow = document.querySelector('.header-modal');
    const substrate = document.querySelector('.overlay');
    const btnClose = document.querySelector('.header-modal__close');

    btnTel.addEventListener('click', () => {
        modalWindow.style.display = 'block';
        substrate.style.display = 'block';

        animate({
            duration: 1000,
            timing(timeFraction) {
              return Math.pow(timeFraction, 2);
            },
            draw(progress) {
                modalWindow.style.opacity = 5 * progress;
            }
          });
    });
    
    btnClose.addEventListener('click', () => {
        modalWindow.style.display = 'none';
        substrate.style.display = 'none';
    });

    substrate.addEventListener('click', (e) => {
        if (!e.target.closest('.header-modal')) {
            modalWindow.style.display = 'none';
            substrate.style.display = 'none';
        }
    })
}