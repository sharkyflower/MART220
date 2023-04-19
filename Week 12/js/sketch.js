// Rat model credit: 
// "Rat 🐀 (Test )Free" (https://skfb.ly/ourOY) by Nyilonelycompany is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

let shapeArray = [];

function preload(){
    fontForAll = loadFont("./fonts/ComicNeueAngular-Regular.ttf");
    transflag = loadImage("./images/transflag.png");
    enbyflag = loadImage("./images/enbyflag.png");
    fluidflag = loadImage("./images/fluidflag.png");
    panflag = loadImage("./images/panflag.png");
    aceflag = loadImage("./images/aceflag.png");

    rat = loadModel("./objects/rats.obj", true);
    ratTexture = loadImage("./images/ratTexture.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);

    //font picker
    textFont(fontForAll);
    textSize(17);

    shapeArray.push(new textureShape(transflag, 300, 300, 0));
    shapeArray.push(new textureShape(fluidflag, -300, 300, 0));
    shapeArray.push(new textureShape(enbyflag, 300, -300, 0));
    shapeArray.push(new textureShape(panflag, -300, -300, 0));
    shapeArray.push(new textureShape(aceflag, 350, 0, 0));

}

function draw()
{
    background(0);

    //name text
    nameText();

    //lights();

    push();

    scale(-2);
    angleMode(DEGREES);
    rotateY(180);
    angleMode(RADIANS);

    normalMaterial();
    texture(ratTexture);
    rotateX(frameCount * 0.019);
    rotateY(frameCount * 0.017);
    model(rat);

    pop();

    for (var i = 0; i < shapeArray.length; i++) {
        shapeArray[i].draw(frameCount);
    } 

    //check location of mousse (x,y)
    //fill(255,255,255);
    //text("X: " + (mouseX-width/2),0,-10);
    //text("Y: " + (mouseY-height/2),0,10);
}

function nameText(){
    //name text
    push();
    fill("#F7A8B8");
    textSize(28);
    text("Lucy H", (width/2)-90, (height/2)-10);
    fill("#55CDFC");
    textSize(32)
    text("One Rat Rotating", (-width/2)+10, (-height/2)+30);
    pop();
}

function mouseClicked(){
    for (var i = 0; i < shapeArray.length; i++) {
        shapeArray[i].changeLocation();
        shapeArray[i].changeRotation();
    } 
}


