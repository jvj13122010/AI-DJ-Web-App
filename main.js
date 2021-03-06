sound = [];
counter = 0;
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
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
    counter = 0;
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
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
        counter = 0;
    }
    play();

}

function modelLoaded(){
    console.log("model is loaded");
}


function draw() {
    image(video, 0, 0, 600, 600);
    fill("teal");
    stroke("teal");
    circle(rightWristX, rightWristY, 20);
    if (scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20)
        tempLeftY = 500 - leftWristY
        volume = floor(Number(tempLeftY)) / 500;
        document.getElementById("vol").innerHTML = "Volume : " + volume;
        sound.setVolume(volume);
    }
    if (rightWristY > 0 && rightWristY <= 100) {
        document.getElementById("speed").innerHTML = "Speed = 0.5x"
        sound.rate(0.5);
    } else if (rightWristY > 100 && rightWristY <= 200) {
        document.getElementById("speed").innerHTML = "Speed = 1.0x"
        sound.rate(1)
    } else if (rightWristY > 200 && rightWristY <= 300) {
        document.getElementById("speed").innerHTML = "Speed = 1.5x"
        sound.rate(1.5)
    } else if (rightWristY > 300 && rightWristY <= 400) {
        document.getElementById("speed").innerHTML = "Speed = 1.5x"
        sound.rate(2.0)
    }


}

function modelLoaded() {
    console.log("model is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftX" + leftWristX);
        console.log("LeftY" + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightX" + rightWristX);
        console.log("RightY" + rightWristY);

    }
}