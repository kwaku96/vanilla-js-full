const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false;
let score = 0;

function startGame(){
    score = 0;
    scoreBoard.textContent = '0';
    timeUp = false;
    peep();
    setTimeout(()=>{
        timeUp = true;
    },10000);
    console.log('start');
}

function randTime(begin,end) {
    return Math.round(Math.random()*(end-begin) + begin);
}

function randHole(holes=[]){
    let index = Math.floor(Math.random()* (holes.length) + 0);
    let hole = holes[index];

    if(lastHole === hole){
        return randHole(holes);
    }

    lastHole = hole;
    return holes[index];
}

function peep(){
    const time = randTime(200,1000);
    const hole = randHole(holes);
    hole.classList.add('up');

    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp)
            peep();
    },time)
    //console.log(time,hole);
}

moles.forEach(mole=>{
    mole.addEventListener('click',(e)=>{
        score += 1;
        scoreBoard.textContent = score;
    });
});