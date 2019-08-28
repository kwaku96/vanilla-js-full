const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

console.log(secondHand);


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((360/60) * seconds)+90;
    
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = ((360/60) * minutes)+90;

    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((360/12) * hours) + 90;

    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    console.log(hoursDegree);
    
}


setInterval(setDate,1000);