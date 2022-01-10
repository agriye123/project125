noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

colour = document.getElementById("color_font").value;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,160);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{

    background('#D22B2B');
    textSize(difference);
    fill('white');
    text("agriye" ,noseX,noseY)
   
}
function modelLoaded()
{
    console.log("Posenet is initialised");
}
function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("Nose x is "+ noseX + " y is " + noseY);
    
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("Left wrist X = "+ leftWristX +" , right wrist x = "+ rightWristX + " , difference = " + difference);
}
}