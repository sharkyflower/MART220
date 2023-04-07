
var animationTxt = [];
var catChar;
var currAnimationSelect;

var rectBorders = [];
var scribWalls = [];
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

    //scribbleWalls
    scribWall = new scribbleRectMaker(150, 250, 100, 500, true, "scribWall");
    scribWall2 = new scribbleRectMaker(350, 350, 100, 500, true, "scribWall2");

    scribWalls.push(scribWall, scribWall2);

    //scribble collectibles 
    scribStar = new scribbleStarMaker(450, 100, 20, 20, false, "scribStar");
    //borderMaker 
    topBorderRect = new rectMaker(0,0,width,5,true, "topBorderRect");
    botBorderRect = new rectMaker(0,height,width,-5,true, "botBorderRect");
    leftBorderRect = new rectMaker(0,0,5,height,true, "leftBorderRect");
    rightBorderRect = new rectMaker(width,0,-5,height,true, "rightBorderRect");

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

    catChar.collideWithBorder(rectBorders)

    /*
    for(var i = 0; i < rectBorders.length; i++){
        catChar.collideWithBorder(rectBorders[i].getCollision(), rectBorders[i]);
        if(catChar.getCollisionBorder() == true){
            break;
        }
    }
    */

    //walls 
    push();

    //scribRect.draw();
    //scribRect.rectCollisionCheck(catChar);
    //catChar.collideWithScribWall(scribRect);
    for(var i = 0; i<scribWalls.length; i++){
        scribWalls[i].draw();
        scribWalls[i].rectCollisionCheck(catChar);
        text(scribWalls[i].getName() + " is colliding? " + scribWalls[i].getCollision(), 200, 200 + i*20)
    }
    
    catChar.collideWithScribWall(scribWalls)

    pop();

    //test
    push();
    
    scribStar.draw();
    scribStar.rectCollisionCheck(catChar);

    pop();

    text(scribStar.getName() + " is colliding? " + scribStar.getCollision(), 350, 350);

    //update collision checks
    catChar.collisionRefresher();

    text("char collision check: " + catChar.getCollisionMap(), 100, 400);

    text("restrict movement activation check: " + catChar.getRestrictMvtActivation(), 300, 450);

    text("directional collision check: " + catChar.getDirectionalCollision(), 50, 500);

    text("shape collided: " + catChar.getShapeCollided(), 200, 200);

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
    text("I can't think of a good name so this ends up being the name", 10, 25);
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

