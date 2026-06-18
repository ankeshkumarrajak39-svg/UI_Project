let text = document.querySelector("#text1");
let mic = document.querySelector(".mic");

function speechtext (text){
 const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "hi-IN";
  window.speechSynthesis.speak(speech);

}

mic.addEventListener("click",()=>{
speechtext(text.value);
})


