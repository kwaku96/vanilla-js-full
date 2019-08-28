const links = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');

document.body.append(highlight);

function hightlightLink(e){
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY
    };
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

links.forEach(link => {
    link.addEventListener('mouseover',hightlightLink);
});