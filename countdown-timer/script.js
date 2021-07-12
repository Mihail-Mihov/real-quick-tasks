const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

let myBirth = '3 June 2021';

const dateForm = document.getElementById('currentDate');


function countdown(){
    const currentDate  = new Date();
    const birthDate = new Date(myBirth);

    const totalSeconds = (birthDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = fortmatTime(hours);
    minsEl.innerHTML = fortmatTime(minutes);
    secondsEl.innerHTML = fortmatTime(seconds);

}

function fortmatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

document.getElementById('btn').addEventListener('click', ()=>{
    const input = new Date(dateForm.value);

    myBirth = `${input.getMonth()+1}/${input.getDate()}/${input.getUTCFullYear()}`


})

countdown();
setInterval(countdown, 1000);

