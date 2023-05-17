var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie");
        speak();
    }
};
}

function speak() {
    var synth = window.speechSynthesis;
    

    synth.speak(UtterThis);
    webcam.attach(camera);

    setTimeout(function() 
    {
        img_id = "selfie1";
        take_snapshot();
        speak_data = " Taking your Selfie is 5 Seconds ";
        var UtterThis = new SpeechSynthesisUtterance(speak_data);

    }, 5000);
    setTimeout(function() 
    {
        img_id = "selfie2";
        take_snapshot();
        speak_data = " Taking your 2 Selfie is 5 Seconds ";
        var UtterThis = new SpeechSynthesisUtterance(speak_data);

    }, 10000);
    setTimeout(function() 
    {
        img_id = "selfie3";
        take_snapshot();
        speak_data = " Taking your 3 Selfie is 5 Seconds ";
        var UtterThis = new SpeechSynthesisUtterance(speak_data);

    }, 15000);

    save();
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

function take_snapshot() 
{
    console.log(img_id);

    webcam.snap(function(data_Uri) {
        if(img_id=="selfie1") {
        document.getElementById("result").innerHTML = '<img id="selfie_image1" src="'+data_Uri+'" >';
        }
        if(img_id=="selfie2") {
        document.getElementById("result").innerHTML = '<img id="selfie_image2" src="'+data_Uri+'" >';
        }
        if(img_id=="selfie3") {
        document.getElementById("result").innerHTML = '<img id="selfie_image3" src="'+data_Uri+'" >';
        }
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}