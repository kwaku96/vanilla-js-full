const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');

const currentColor = document.querySelector('#base');
const currentLineWidth = document.querySelector('#lineWidth');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

context.strokeStyle = currentColor.value;
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = currentLineWidth.value;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
    if(!isDrawing) return;
    context.beginPath();
    context.moveTo(lastX,lastY);
    context.lineTo(e.offsetX,e.offsetY);
    context.stroke();
    

    lastX = e.offsetX;
    lastY = e.offsetY;
}

function changeLineColor(e){
    context.strokeStyle = this.value;
}

function changeLineWidth(e){
    context.lineWidth = this.value;
}

canvas.addEventListener('mousemove',draw);


canvas.addEventListener('mousedown',(e)=> {
    lastX = e.offsetX;
    lastY = e.offsetY;
    isDrawing = true;
});

canvas.addEventListener('mouseup',(e)=>{isDrawing = false; });

canvas.addEventListener('mouseout',(e)=> isDrawing = false);

currentColor.addEventListener('change',changeLineColor);

currentLineWidth.addEventListener('change',changeLineWidth);