const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

console.log(topOfNav);

function fixNav(e){
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixedNav');
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixedNav');
    }
}

window.addEventListener('scroll',fixNav);