const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 'Say Anything', 
    'The Midway State', 'We Came as Romans', 
    'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

const bandList = document.querySelector('#bands');


function stripWithoutRegex(data = ""){
    let res = data.split(' ');
    if(res[0].toLowerCase() === "the" ||
     res[0].toLowerCase() === "an" || 
     res[0].toLowerCase() === "a"){
        res.splice(0,1);
        return res.join(' ');
     }
        
    return res.join(' ');
}

function stripWithRegex(bandName = ""){
    return bandName.replace(/^(a |the |an )/i,'').trim();
}

const sortResult = bands.sort((first,second)=>{
    const tempF = stripWithRegex(first);
    const tempS = stripWithRegex(second);

    if (tempF > tempS){
        return 1;
    }
    return -1;
});

bandList.innerHTML = sortResult.map((bName)=>{
    return `
    <li>${bName}</li>
    `;
}).join('');
