export const timer = (deadline) => {
    const timerBloks = document.querySelectorAll('.count-wrap');

    let timerDay;
    let timerHours;
    let timerMinutes;
    let timerSeconds;

    let interval;
    let timeRemaining2;

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const day = Math.floor(timeRemaining / 60 / 60 / 24);
        const hours = Math.floor((timeRemaining / 60 / 60) % 24);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const seconds = Math.floor(timeRemaining % 60);

        return {timeRemaining, day, hours, minutes,seconds};
    };

    const updateClock = () => {
        const getTime = getTimeRemaining();

        if (getTime.day < 10) {
            timerDay.textContent = '0' + getTime.day
        } else {
            timerDay.textContent = getTime.day
        };
        if (getTime.hours < 10) {
            timerHours.textContent = '0' + getTime.hours
        } else {
            timerHours.textContent = getTime.hours
        };
        if (getTime.minutes < 10) {
            timerMinutes.textContent = '0' + getTime.minutes
        } else {
            timerMinutes.textContent = getTime.minutes
        };
        if (getTime.seconds < 10) {
            timerSeconds.textContent = '0' + getTime.seconds
        } else {
            timerSeconds.textContent = getTime.seconds
        };

        timeRemaining2 = getTime.timeRemaining;
    };

    const elemCounts = (blok) => {
        const counts = blok.querySelectorAll('.count');

        counts.forEach(elem => {
            const elemSpan = elem.querySelector('span');
            let number = elem.classList[1].length - 1;
            let indexCount = elem.classList[1][number];
            if (indexCount == 1) {timerDay = elemSpan};
            if (indexCount == 2) {timerHours = elemSpan};
            if (indexCount == 3) {timerMinutes = elemSpan};
            if (indexCount == 4) {timerSeconds = elemSpan};
        });

        updateClock();
    };

    const timerStop = () => {
        timerDay.textContent = '00';
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
    };

    const start = () => {
        timerBloks.forEach(blok => {
            elemCounts(blok);

            if ((timeRemaining2 === 0) || (timeRemaining2 < 0)) {
                clearInterval(interval);
                timerStop()
            };
        })
    };

    start();

    if (timeRemaining2 > 0) {
        interval = setInterval(start, 1000)
    };
}