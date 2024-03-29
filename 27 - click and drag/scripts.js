const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown',(e)=>{
    isDown =true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX)
})

slider.addEventListener('mouseleave',(e)=>{
    isDown=false;
    slider.classList.remove('active');
})

slider.addEventListener('mouseup',(e)=>{
    isDown=false;
    slider.classList.remove('active');
})

slider.addEventListener('mousemove',(e)=>{
    if(!isDown) return;
    slider.classList.add('active');
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    //console.log({x,startX});
    const walk = x - startX;
    slider.scrollLeft = (scrollLeft - walk);
})