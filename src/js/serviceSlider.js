export const serviceSlider = () => {
    const serviceBloks = document.querySelectorAll('.service-block');
    const arrowPrevSlide = document.querySelector('.services__arrow--left');
    const arrowNextSlide = document.querySelector('.services__arrow--right');

    let currentSlide = 0;

    const one = () => {

        const prevSlide = (elems, index, strClass) => {
            elems[index].classList.remove(strClass);
        };

        const nextSlide = (elems, index, strClass) => {
            elems[index].classList.add(strClass)
        };

        const classАvail = () => {
            serviceBloks.forEach(elem => {
                if(elem.matches('.active')) {
                    elem.style.display = 'block'
                } else {
                    elem.style.display = 'none'
                }
            })
        };

        serviceBloks.forEach((blok, index) => {
            if ((index === 0)) {
                blok.classList.add('active')
            }
            if ((index === 1) || (index === 2) || (index === 3)) {
                blok.style.display = 'none'
            }
        });

        arrowNextSlide.addEventListener('click', () => {
            prevSlide(serviceBloks, currentSlide, 'active');

            currentSlide++; 
            
            if (currentSlide >= serviceBloks.length) {
                currentSlide = 0;
            };

            nextSlide(serviceBloks, currentSlide, 'active');

            classАvail();

        });

        arrowPrevSlide.addEventListener('click', () => {
            prevSlide(serviceBloks, currentSlide, 'active');
            
            currentSlide--

            if (currentSlide < 0) {
                currentSlide = serviceBloks.length - 1;
            };

            nextSlide(serviceBloks, currentSlide, 'active');

            classАvail();
    
        });
    };

    const two = () => {
        const updateSlides = () => {
            serviceBloks.forEach((block, index) => {
                    if (index === currentSlide || index === (currentSlide + 1) % serviceBloks.length) {
                        block.style.display = 'block';
                    } else {
                        block.style.display = 'none';
                    }
                });
            };
            
            updateSlides();
            
            arrowNextSlide.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % serviceBloks.length;
                updateSlides();
            });
            
            arrowPrevSlide.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + serviceBloks.length) % serviceBloks.length;
                updateSlides();
            });
    };

    const start = () => {
        if (window.innerWidth < 576) {
            one()
        } else {
            two()
        }
    };

    start();
}