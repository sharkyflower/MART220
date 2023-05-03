var catChar;

//var rectBorders = [];
//var scribWalls = [];
//var starCollectable = [];
//var badStarCollectable = [];
//var scribble; 

//var bgMusicIntro;
//var bgMusicLoop;
//var bgPlayMode = "Intro";

//var starCollectSound;
//var badStarCollectSound;

function preload(){
    fontForAll = loadFont("./fonts/Yomogi-Regular.ttf");

    idleAnimation = loadStrings("./images/cat/animation/idle.txt");
    walkAnimation = loadStrings("./images/cat/animation/walk.txt");

    //soundFormats("mp3");

    //bgMusicIntro = loadSound("./sounds/musicintro.mp3");
    //bgMusicLoop = loadSound("./sounds/musicloop.mp3");

    //starCollectSound = loadSound("./sounds/itemCollect.mp3");
    //badStarCollectSound = loadSound("./sounds/badItemCollect.mp3");
}

function setup(){
    createCanvas(800, 600);
    angleMode(DEGREES);

    //animation stuff
    catChar = new characterCreator(10, 10, 50, 50);
    catChar.loadAnimation("idle", idleAnimation);
    catChar.loadAnimation("walk", walkAnimation);
    //currAnimationSelect = "idle";

    /*
    //scribble 
    scribble = new Scribble();

    //scribbleWalls
    scribWall = new scribbleRectMaker(125, 300, 50, 425, true, "scribWall");
    scribWall2 = new scribbleRectMaker(675, 300, 50, 425, true, "scribWall2");
    scribWall3 = new scribbleRectMaker(400, 113, 500, 50, true, "scribWall3");
    scribWall4 = new scribbleRectMaker(400, 489, 500, 50, true, "scribWall4");

    scribWalls.push(scribWall, scribWall2, scribWall3, scribWall4);

    //scribble collectables 
    scribStar = new scribbleStarMaker(450, 100, 20, 20, false, "scribStar");
    scribStar2 = new scribbleStarMaker(500, 200, 20, 20, false, "scribStar2");
    scribStar3 = new scribbleStarMaker(550, 300, 20, 20, false, "scribStar3");
    scribStar4 = new scribbleStarMaker(600, 400, 20, 20, false, "scribStar4");
    scribStar5 = new scribbleStarMaker(450, 450, 20, 20, false, "scribStar5");

    starCollectable.push(scribStar, scribStar2, scribStar3, scribStar4, scribStar5)

    //scribble bad collectables
    badScribStar = new scribbleStarMaker(600, 100, 20, 20, false, "badScribStar");
    badScribStar2 = new scribbleStarMaker(630, 250, 20, 20, false, "badScribStar2");

    badStarCollectable.push(badScribStar, badScribStar2);

    //borderMaker 
    topBorderRect = new rectMaker(0,0,width,5,true, "topBorderRect");
    botBorderRect = new rectMaker(0,height,width,-5,true, "botBorderRect");
    leftBorderRect = new rectMaker(0,0,5,height,true, "leftBorderRect");
    rightBorderRect = new rectMaker(width,0,-5,height,true, "rightBorderRect");

    rectBorders.push(topBorderRect, botBorderRect, leftBorderRect, rightBorderRect);

    */

    //font picker
    textFont(fontForAll);
    textSize(17);

}

function draw()
{
    background(255,255,255);

    //name maker
    nameMaker();

    //movement
    if(kb.pressing("d")){
        catChar.updatePosition("Forward");
        catChar.drawAnimation("Walk");
    }
    else if(kb.pressing("a")){
        catChar.updatePosition("Reverse");
        catChar.drawAnimation("Walk");
    }

    //background test

    /*
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

    /*
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

    //star collectables 
    push();
    
    stroke(255,205,60);

    for(var i = 0; i < starCollectable.length; i++){
        starCollectable[i].draw();
        starCollectable[i].rectCollisionCheck(catChar);
    }

    pop();

    for(var i = 0; i < starCollectable.length; i++){
        text(starCollectable[i].getName() + " is colliding? " + starCollectable[i].getCollision(), 350, 350 + i*20);
    }

    //bad star collectables
    push();

    stroke(219,26,26,125);

    for(var i = 0; i < badStarCollectable.length; i++){
        badStarCollectable[i].draw();
        badStarCollectable[i].rectCollisionCheck(catChar);
    }

    pop();

    for(var i = 0; i < badStarCollectable.length; i++){
        text(badStarCollectable[i].getName() + " is colliding? " + badStarCollectable[i].getCollision(), 350, 500 + i*20);
    }

    //text(scribStar.getName() + " is colliding? " + scribStar.getCollision(), 350, 350);

    //update collision checks
    catChar.collisionRefresher();

    text("char collision check: " + catChar.getCollisionMap(), 100, 400);

    text("restrict movement activation check: " + catChar.getRestrictMvtActivation(), 300, 450);

    text("directional collision check: " + catChar.getDirectionalCollision(), 50, 500);

    text("shape collided: " + catChar.getShapeCollided(), 200, 200);


    //score keeping
    catChar.itemCollection(starCollectable, "+", starCollectSound);
    catChar.itemCollection(badStarCollectable, "-", badStarCollectSound);

    text("Stars collected: " + catChar.getItemCollected(), 200, 250);

    */

    //check location of mouse (x,y)
    //fill(0,0,0);
    //text("X: " + mouseX,-350,-250 );
    //text("Y: " + mouseY,-350,-230 );
    //text("Width: " + width, -350, -210);
    //text("Height: " + height, -350, -190);

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

/*

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

    /*
    //music intro plays
    if(bgMusicIntro.isLoaded() && !bgMusicIntro.isPlaying() && bgPlayMode == "Intro"){
        bgMusicIntro.play();
        bgPlayMode = "Loop";
    }
    else if(!bgMusicIntro.isPlaying() && bgPlayMode == "Loop"){
        bgMusicLoop.loop();
        bgPlayMode = "inLoop";
    }    
    */
    /*
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
*/

