const divs = document.querySelectorAll('div');
const btn = document.querySelector('button');
console.log(btn);
function handleClick(e){
    console.log(this.classList.value);
    e.stopPropagation();
}

divs.forEach(div => {
    div.addEventListener('click',handleClick);    
});
btn.addEventListener('click',(e)=>{
    alert('hello bitches');
},{once:true})