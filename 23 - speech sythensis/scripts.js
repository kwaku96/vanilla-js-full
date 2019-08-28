const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const voiceRecognition = new SpeechRecognition();

msg.text = document.querySelector('[name=text]').value;

function populateVoices(){
    voices = this.getVoices();

    voiceOptions = voices.map((voice)=>{
        return `
            <option value="${voice.name}">${voice.name} (${voice.lang})</option>
        `;
    }).join('');

    voicesDropdown.innerHTML = voiceOptions;
}

function setVoice(){
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(){
    speechSynthesis.cancel(); // to stop nigga from speaking
    speechSynthesis.speak(msg); // to tell it to speak
}

function handleSpeech(e){
    transcript = Array.of(e.results)
        .map(result=>result[0])
        .map(result => console.log(result.transcript));
    

    //console.log(transcript)
}

speechSynthesis.addEventListener('voiceschanged',populateVoices);

voicesDropdown.addEventListener('change',setVoice);

voiceRecognition.addEventListener('result',handleSpeech);

voiceRecognition.addEventListener('end',voiceRecognition.start);

voiceRecognition.start();