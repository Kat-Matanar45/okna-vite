export const modalTel = () => {
    const btnTel = document.querySelector('.btn-md');
    const modalWindow = document.querySelector('.header-modal');
    const substrate = document.querySelector('.overlay');


    btnTel.addEventListener('click', () => {
        modalWindow.style.display = 'block';
        substrate.style.display = 'block';
    })
}