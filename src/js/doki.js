import { animate } from "./helpers";

export const doki = () => {
    const container = document.querySelectorAll('.container')[9];
    const elemContainer = container.querySelectorAll('.sertificate-document');
    const overlay = document.querySelector('.overlay');

    const addModal = () => {
        const newModal = document.createElement('div');
        newModal.classList.add('modal_document');
        container.insertAdjacentElement('afterend', newModal);

        const modalImg = document.createElement('img');
        modalImg.setAttribute('src', './images/documents/original/document4.jpg');
        newModal.append(modalImg);
    }

    addModal();

    elemContainer.forEach((elem) => {
        elem.addEventListener('mouseover', (e) => {
            elem.classList.add('document-inner')
        });
        elem.addEventListener('mouseout', (e) => {
            elem.classList.remove('document-inner')
        });
        elem.addEventListener('click', (e) => {
             e.preventDefault(); 
             const modalDocument = document.querySelector('.modal_document');
             modalDocument.style.display = 'flex';
             overlay.style.display = 'block';
             document.body.style.overflow = 'hidden';

             animate({
                duration: 1000,
                timing(timeFraction) {
                  return Math.pow(timeFraction, 2);
                },
                draw(progress) {
                    modalDocument.style.opacity = 3 * progress;
                }
              });
        })
    });

    const modalDocument = document.querySelector('.modal_document');

    modalDocument.addEventListener('click', (e) => { 
        if (!e.target.closest('.modal_document img')) {
            modalDocument.style.display = 'none';
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}