pic=""
status=""
function preload(){
    pict=loadImage("bottle.jpeg");
}

function setup(){
    canvas= createCanvas(650,450);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Status: Detecting Objects"
}

function modelLoaded(){
    console.log('Model Loaded!!!');
    status=true;
    objectDetector.detect(pict,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
}

function draw(){
    //dog
    image(pict,0,0,650,450 );
    fill("#ff0000");
    stroke("green");
    text("Bottle",100,90);
    noFill();
    rect(36,72,447,366)
    
}