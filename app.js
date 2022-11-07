const btn = document.querySelector(".talk")
const content = document.querySelector(".content")

const greetings = [
    'How you doing?',
    'Joey doesnt share food',
    'I wish i could but i dont want to'
];

const weather =['Vizag is cool!'];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart= function(){
    console.log("You can speak to the microphone");
};

recognition.onresult = function(event){
const current = event.resultIndex;

const transcript = event.results[current][o].transcript;
content.textContent= transcript;
readOutLoud(transcript)
};

speech.text='I know!';

//add the listener to the button

btn.addEventListener('click', ()=>{
    recognition.start();
});


if(message.includes('how are you')){
    greetings[Math.floor(Math.random()*greetings,length)];
    speech.text= finalText;
}

function readOutLoud (message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume =1 ;
    speech.rate = 1;
    speech.pitch =1 ;

    window.speechSynthesis.speak(speech);

}