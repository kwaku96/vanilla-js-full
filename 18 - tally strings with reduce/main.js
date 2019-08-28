const videos = document.querySelectorAll('.videos li');
const vArray = [...videos];

let totalHour = 0;
let totalMin = 0;
let totalSec = 0;


vArray.forEach(video => {
    let tString = video.dataset.time;
    let tArr = tString.split(':');

    totalMin += parseInt(tArr[0]);
    totalSec += parseInt(tArr[1]);

});

totalMin += Math.floor(totalSec/60);
totalSec = totalSec%60;

totalHour += Math.floor(totalMin/60);
totalMin = totalMin%60;

console.log(totalHour,totalMin,totalSec)