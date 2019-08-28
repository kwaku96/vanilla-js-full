const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const searchBar = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


fetch(endpoint).then((val)=>{
    val.json().then((res)=>{
        cities.push(...res);
        let serachResult = filterCities('bos',cities);
        console.log(serachResult);
    });
}).catch((err)=>{
    console.log(err);
})

function filterCities(searchKey,cities){
    
    return cities.filter((currentCity)=>{
        const regex = new RegExp(searchKey,'gi');
        return currentCity.city.match(regex) || currentCity.state.match(regex);
    });

}

function findMatches(value){
    const matchArray = filterCities(this.value,cities);
    const regex = new RegExp(this.value,'gi');
    
    const html =  matchArray.map((place) => {
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
       return  `
        <li>
            <span class="name">${cityName} ${stateName}</span>
            <span class="population">${place.population}</span>
        </li>
        `;
    }).join('');

    suggestions.innerHTML = html;
}


searchBar.addEventListener('change',findMatches);
searchBar.addEventListener('keyup',findMatches);
