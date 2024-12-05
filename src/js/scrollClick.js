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

            btnScroll.style.display = 'none'
      });

      window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const clientWidth = document.documentElement.clientWidth;

        if (clientWidth >= 576) {
            if (scrollTop < 700) {
                btnScroll.style.display = 'none'
            } else {
                btnScroll.style.display = 'block'
            }
        };
        if (clientWidth < 576) {
            if (scrollTop < 370) {
                btnScroll.style.display = 'none'
            } else {
                btnScroll.style.display = 'block'
            }
        }   
      })
}