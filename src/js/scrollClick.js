export const scrollClick = () => {
    const btnScroll = document.querySelector('.smooth-scroll');
    const blokOffer = document.querySelector('#offer');

    btnScroll.addEventListener('click', (e) => {
            e.preventDefault();

            blokOffer.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "start"
            })
      });
}