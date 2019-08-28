const checkboxes = document.querySelectorAll('.item input');

checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener('click',handleCheck);
})

let lastChecked;

function handleCheck(e){
    
    let inBetween = false;

    if(e.shiftKey && this.checked){
        checkboxes.forEach((checkBox)=>{
            
            if(checkBox === this || checkBox === lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween){
                checkBox.checked = true
            }

        });

        
    }
    lastChecked = this;
}