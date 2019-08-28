//get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

console.log(fullscreen)

//create our function
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]()
}

function updateButton(e){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon
}

function skip(e){
    //console.log(e);
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(e){
    console.log(this.name,this.value)
    video[this.name] = this.value
}

function handleProgress(e){
    const percent = 100 * video.currentTime/video.duration;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
    console.log('scrub me')
    const scrubTime = video.duration * (e.offsetX/progress.offsetWidth);
    video.currentTime = scrubTime
}

//add event listener
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

toggle.addEventListener('click',togglePlay);

skipButtons.forEach((skipBtn)=>{
    skipBtn.addEventListener('click',skip);
});

ranges.forEach((range)=>{
    range.addEventListener('change',handleRangeUpdate);
})

ranges.forEach((range)=>{
    range.addEventListener('mousemove',handleRangeUpdate);
})

progress.addEventListener('click',scrub);

let mousedown = false;

progress.addEventListener('mousedown',(e)=>{mousedown = true;});
progress.addEventListener('mouseup',(e)=>{mousedown = false;})

progress.addEventListener('mousemove',(e)=> {
    if (mousedown) scrub(e);
    return;
});

fullscreen.addEventListener('click',(e)=>{ video.requestFullscreen(); });

