const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(){
    this.classList.add('trigger-enter');
    background.classList.add('open');
    setTimeout(()=>{
        this.classList.add('trigger-enter-active');
    },150)

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect(); 

    const coords = {
        height:dropdownCoords.height,
        width:dropdownCoords.width,
        top:dropdownCoords.top - navCoords.top,
        left:dropdownCoords.left - navCoords.left
    }
    background.style.setProperty('width',`${coords.width}px`);
    background.style.setProperty('height',`${coords.height}px`);
    background.style.setProperty('top',`${coords.top}px`);
    background.style.setProperty('left',`${coords.left}px`);
    console.log(dropdownCoords);
}

function handleLeave(){
    this.classList.remove('trigger-enter','trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter',handleEnter);    
});

triggers.forEach(trigger => {
    trigger.addEventListener('mouseleave',handleLeave);    
});