sound = [];
counter = 0;
function preload(){
    sound.push(loadSound("SO69.mp3"));
    sound.push(loadSound("music.mp3"));
    sound.push(loadSound("JamesB_UB.mp3"));
    sound.push(loadSound("AOM.mp3"));
    sound.push(loadSound("CGC.mp3"));
    sound.push(loadSound("DSD.mp3"));
    sound.push(loadSound("ETD.mp3"));
    sound.push(loadSound("Heer.mp3"));
    sound.push(loadSound("KahinTo.mp3"));
    sound.push(loadSound("KHNH.mp3"));
    sound.push(loadSound("MH.mp3"));
    sound.push(loadSound("Ranjha.mp3"));
    sound.push(loadSound("SLU.mp3"));
    sound.push(loadSound("THH.mp3"));
    sound.push(loadSound("THR.mp3"));
    sound.push(loadSound("TJNK.mp3"));
    sound.push(loadSound("TKCL.mp3"));
    sound.push(loadSound("tumSe.mp3"));

}

function play(){
    sound[counter].play();
    sound.setVolume(1);
    sound.rate(1);
}

function pause(){
    sound[counter].pause();
}

function stopSound(){
    sound[counter].stop();
}

function setup(){
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function next(){
sound[counter].stop();
    counter+=1;
if (counter==sound.length) {
    counter = 0;
}
play();
}

function prev(){
    sound[counter].stop();
    counter-=1;
    if (counter == -1) {
        counter = 2;
    }
    play();

}