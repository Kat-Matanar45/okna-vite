import { animate } from "./helpers";

export const modalService = () => {
    const btns = document.querySelectorAll('.service-button');
    const modalService = document.querySelector('.services-modal');
    const substrate = document.querySelector('.overlay');
    const btnClose = document.querySelector('.services-modal__close');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalService.style.display = 'block';
            substrate.style.display = 'block';

            animate({
                duration: 1000,
                timing(timeFraction) {
                  return Math.pow(timeFraction, 2);
                },
                draw(progress) {
                    modalService.style.opacity = 5 * progress;
                }
              });
        })
    });

    btnClose.addEventListener('click', () => {
        modalService.style.display = 'none';
        substrate.style.display = 'none';
    });

    substrate.addEventListener('click', (e) => {
        if (!e.target.closest('.services-modal')) {
            modalService.style.display = 'none';
            substrate.style.display = 'none';
        }
    })
}
