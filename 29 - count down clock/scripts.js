let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const timeBtns = document.querySelectorAll('[data-time]');
const form = document.querySelector('#custom');
const formMinute = form.querySelector('[name=minutes]');

console.log(formMinute);

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(seconds);

    countDown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now())/1000);
        displayTimeLeft(secondsLeft);
        if(secondsLeft <= 0){
            clearInterval(countDown);
        }
    },1000);
}


function displayTimeLeft(seconds){
    const sec = seconds % 60;
    const mins = Math.floor(seconds/60) % 60;
    const hr = Math.floor(seconds/60/60) % 24;
    const timeText = `${hr < 10 ? '0':''}${hr} : ${mins < 10 ? '0' : ''}${mins} : ${sec < 10 ? '0' : ''}${sec}`;
    timerDisplay.textContent = timeText;
}

function displayEndTime(timeStap){

}

function handleTimeButtons(e){
    clearInterval(countDown);
    timer(this.dataset.time);
}

timeBtns.forEach(btn => {
    btn.addEventListener('click',handleTimeButtons);
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    clearInterval(countDown);
    let secs = parseInt(formMinute.value) * 60;
    timer(secs);
});