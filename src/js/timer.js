export const timer = (deadline) => {
   const timerDay = document.querySelector('.count_1 span');
   const timerHours = document.querySelector('.count_2 span');
   const timerMinutes = document.querySelector('.count_3 span');
   const timerSeconds = document.querySelector('.count_4 span');

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
    
    return {timeRemaining, day, hours, minutes, seconds};
};

const updateClock = () => {
    const getTime = getTimeRemaining();

    if (getTime.day < 10) {timerDay.textContent = '0' + getTime.day}
    else {timerDay.textContent = getTime.day};
    if (getTime.hours < 10) {timerHours.textContent = '0' + getTime.hours}
    else {timerHours.textContent = getTime.hours};
    if (getTime.minutes < 10) {timerMinutes.textContent = '0' + getTime.minutes}
    else {timerMinutes.textContent = getTime.minutes};
    if (getTime.seconds < 10) {timerSeconds.textContent = '0' + getTime.seconds}
    else {timerSeconds.textContent = getTime.seconds};

    timeRemaining2 = getTime.timeRemaining;
};


const timerStop = () => {
    timerDay.textContent = '00';
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
};

updateClock();

if (timeRemaining2 > 0) {interval = setInterval(updateClock, 1000)}; 
    if ((timeRemaining2 === 0) || (timeRemaining2 < 0)) {
        clearInterval(interval);
        timerStop()
    };

}