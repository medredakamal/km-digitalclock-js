// Let's get the clock DOM
const getKamClock = document.getElementById('kamclock');

// Clock Function (Arrow Function ES6)
const initClock = () => {
    let mytime = '00:00:00 -';
    let mydate = new Date();

    let hours = mydate.getHours();
    let minutes = mydate.getMinutes();
    let seconds = mydate.getSeconds();
    let timeConvention = 'AM';

    if (hours == 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        timeConvention = 'PM';
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    mytime = `${hours}:${minutes}:${seconds} ${timeConvention}`;
    getKamClock.innerContent = mytime;
    getKamClock.textContent = mytime;

    setTimeout(initClock, 1000);
};

initClock();
