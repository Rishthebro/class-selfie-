var SpeechRecognition = window.webkitSpeechRecognition ;
var recognition = new SpeechRecognition() ;

function start() {
    document.getElementById("textBox").innerHTML = "" ; 
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

var Content = event.results[0][0].transcript ; 
console.log(Content);

if(Content == "take my selfie") {

console.log("takingSelfie --- ");

speak();

}

document.getElementById("textBox").value ;
}

function speak() {
    var synth = window.speechSynthesis ;
    speech_data = "Taking Your Selfie In 5 seconds" ;
    var utter_this = new SpeechSynthesisUtterance(speech_data) ;

    synth.speak(utter_this) ;

    Webcam.attach(camera);
}

Webcam.set({
    width : 360 ,
    height : 250 ,
    image_format : 'png' ,
    png_quality : 90 
}) ;

camera = document.getElementById("camera");

function take_snapshot() {

Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_image" src=" '+ data_uri +' " > ' ;
}) ;

}

function save() {

    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image ;
    link.click() ;

}

setTimeout(function(){
    take_snapshot() ;
    save() ;
}, 5000) ;


 
