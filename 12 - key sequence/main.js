const secretWord = "gob3"
const keySequence = []

window.addEventListener('keyup',(e)=>{
    keySequence.push(e.key)
    keySequence.splice(-secretWord.length-1,keySequence.length - secretWord.length)
    if(keySequence.join('').includes(secretWord)){
        cornify_add();
    }
    console.log(keySequence.join(''))
});