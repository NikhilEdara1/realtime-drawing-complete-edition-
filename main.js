nosex=0;
nosey=0;
leftwrist=0;
rightwrist=0;
diffrence=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560.150);
    video=createCapture(VIDEO);
    video.size(550,500);
    x=ml5.poseNet(video,modelloaded);
    x.on('pose',gotposes);
}
function modelloaded()
{
    console.log("posenet has been initiated");
}
function gotposes(result)
{
    if(result.length>0)
    {
        console.log(result);
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
        console.log("nosex,nosey"+nosex+nosey);
        leftwrist=result[0].pose.leftWrist.x;
        rightwrist=result[0].pose.rightWrist.x;
    console.log("leftwrist rightwrist"+leftwrist+rightwrist);
    diffrence=floor(leftwrist-rightwrist);
    }
}
function draw(){
    background("lightblue");
    document.getElementById("specs").innerHTML="width and the height of the sqaure will be:"+diffrence+"px";
fill("yellow");
stroke("yellow");
square(nosex,nosey,diffrence);
}