const form = document.querySelector('.add-items');
const userInput = form.querySelector('[name=item]');

const plates = document.querySelector('.plates');

const platesList = JSON.parse(localStorage.getItem('items')) || [];

function handleFormSubmit(e){
    e.preventDefault();

    const dish = {
        dish:userInput.value,
        confirmed:false
    };

    platesList.push(dish);
    addToHtml(platesList);
    let json = JSON.stringify(platesList);
    localStorage.setItem('items',json);
    form.reset();
}

function addToHtml(itemList=[]){
    const html = itemList.map((item,i)=>{
        return `
            <li>
                <input type="checkbox" name="item${i}" id="item${i}" data-index=${i} ${item.confirmed ? 'checked':''}>
                <label for="item${i}">${item.dish}</label>
            </li>
        `;
    }).join('');

    plates.innerHTML = html;
}

function toggleConfirm(e){
    if(!e.target.matches('input')) return;
    
    let el = e.target;
    let index = el.dataset.index;

    platesList[index].confirmed = !platesList[index].confirmed;
    let json = JSON.stringify(platesList);
    localStorage.setItem('items',json);
    addToHtml(platesList);
}

addToHtml(platesList);

form.addEventListener('submit',handleFormSubmit);

plates.addEventListener('click',toggleConfirm);