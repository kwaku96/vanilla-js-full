const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const users = [];

const endpoint = "https://jsonplaceholder.typicode.com/users";

fetch(endpoint).then((res)=>{
    res.json().then((data)=>{
        users.push(...data);
    });
}).catch((err)=>{
    console.log(err);
});


function findUsers(searchWord,users){
    const regex = new RegExp(searchWord,'gi');

    return users.filter((user)=>{
        return user.username.match(regex) || user.name.match(regex);
    });

}

function handleSearch(value){
    const matchedUsers = findUsers(this.value,users);
    const regex = new RegExp(this.value,'gi');

    const html = matchedUsers.map((user)=>{
        const name = user.name.replace(regex,`<span class="hl">${this.value}</span>`);
        const username = user.username.replace(regex,`<span class="hl">${this.value}</span>`);
    return `
    <li>
        <span class="name" data-id="${user.id}">${name} ${username}</span>
    </li>
    `;
    }).join('');

    suggestions.innerHTML = html;
}

search.addEventListener('change',handleSearch);

search.addEventListener('keyup',handleSearch);