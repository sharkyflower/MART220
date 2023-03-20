
var animationTxt = [];
var catChar;
var currAnimationSelect;

var rectBorders = [];
var scribble; 

function preload(){
    fontForAll = loadFont("./fonts/Yomogi-Regular.ttf");

    idleAnimation = loadStrings("./images/cat/animation/idle.txt");
    walkAnimation = loadStrings("./images/cat/animation/walk.txt");
}

function setup(){
    createCanvas(800, 600);
    angleMode(DEGREES);

    //animation stuff
    animationTxt.push(idleAnimation, walkAnimation);
    catChar = new characterCreator(animationTxt, 10, 10, 50, 50);
    currAnimationSelect = "idle";

    //scribble 
    scribble = new Scribble();

    //borderMaker 
    topBorderRect = new rectMaker(0,0,width,5);
    botBorderRect = new rectMaker(0,height,width,-5);
    leftBorderRect = new rectMaker(0,0,5,height);
    rightBorderRect = new rectMaker(width,0,-5,height);

    rectBorders.push(topBorderRect, botBorderRect, leftBorderRect, rightBorderRect);

    //font picker
    textFont(fontForAll);
    textSize(17);
}

function draw()
{
    background(255,255,255);

    //name maker
    nameMaker();

    //background test

    //edge borders
    for(var i = 0; i < rectBorders.length; i++){
        rectBorders[i].draw();
        rectBorders[i].rectCollisionCheck(catChar);
        text("is colliding? " + rectBorders[i].getCollision(), 100 + i*20, 100 + i*20);
    }

    for(var i = 0; i < rectBorders.length; i++){
        catChar.collideWithBorder(rectBorders[i].getCollision());
        if(catChar.getCollisionBorder() == true){
            break;
        }
    }

    text("char collision check: " + catChar.getCollisionMap(), 400, 400);

    //test
    push();
    scribble.scribbleRect( 100, 100, 100, 100 );
    scribble.scribbleRect( 200, 200, 200, 200 );
    pop();

    //check location of mouse (x,y)
    fill(0,0,0);
    text("X: " + mouseX,-350,-250 );
    text("Y: " + mouseY,-350,-230 );
    text("Width: " + width, -350, -210);
    text("Height: " + height, -350, -190);

    //animation movement
    if(keyIsPressed){
        if(currAnimationSelect == "idle"){
            currAnimationSelect = "walk";
        }
    }

    if(!keyIsPressed){
        if(currAnimationSelect == "walk"){
            currAnimationSelect = "idle";
        }
    }

    catChar.animationSelect(currAnimationSelect);

    //animation
    catChar.draw();

}

function nameMaker(){
    //name maker
    fill("#DC143C");
    text("Lucy H", width-62, height-10);

    fill(0,0,0);
    text("Sushi Maker", 10, 25);
}

function keyPressed(){
    if (key == 'w') {
        catChar.isMoving("w");
    }
    if (key == 'a') {
        catChar.isMoving("a");
    }
    if (key == 's') {
        catChar.isMoving("s");
    }
    if (key == 'd') {
        catChar.isMoving("d");
    }
}


function keyReleased() {
    if (key == 'w') {
        catChar.isNotMoving("w");
    }
    if (key == 'a') {
        catChar.isNotMoving("a");
    }
    if (key == 's') {
        catChar.isNotMoving("s");
    }
    if (key == 'd') {
        catChar.isNotMoving("d");
    }
  }

function mouseClicked(){
    
}

