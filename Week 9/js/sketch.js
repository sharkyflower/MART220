var catChar;
var charColli;
var playerCondition;
var health = 3;
var score = 0;
var addPt = [];
var subPt = [];
var obstacles = []; 
var gameStatus = "game";

//var rectBorders = [];
var scribWalls = [];
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
    catChar = new characterCreator(100, 100, 40, 60);
    catChar.loadAnimation("idle", idleAnimation);
    catChar.loadAnimation("walk", walkAnimation);
    //currAnimationSelect = "idle";
    
    //obstacle
    for(i = 0; i < 3; i++){
        obstacle = new rectMaker((Math.floor(Math.random() * 501) + 100),(Math.floor(Math.random() * 401) + 100), 100, 100, "static");
        obstacles.push(obstacle);
    }

    //points 
    push();
    for(i = 0; i < 20; i++){
        currPt = new rectMaker((Math.floor(Math.random() * 551) + 100),(Math.floor(Math.random() * 451) + 100), 7, 7, "static")
        currPt.changeColor("green");
        addPt.push(currPt);
    }
    pop();

    push();
    for(i = 0; i < 10; i++){
        currPt = new rectMaker((Math.floor(Math.random() * 551) + 100),(Math.floor(Math.random() * 451) + 100), 7, 7, "static")
        currPt.changeColor("red");
        subPt.push(currPt);
    }
    pop();

    //scribble 
    scribble = new Scribble();

    //scribbleWalls
    scribWall = new scribbleRectMaker(30, 300, 50, 600);
    scribWall2 = new scribbleRectMaker(770, 300, 50, 600);
    scribWall3 = new scribbleRectMaker(400, 25, 687, 50);
    scribWall4 = new scribbleRectMaker(400, 575, 687, 50);

    scribWalls.push(scribWall, scribWall2, scribWall3, scribWall4);

    //font picker
    textFont(fontForAll);
    textSize(17);

}

function draw()
{
    clear();
    background(255,255,255);
    //name maker
    nameMaker();

    //status
    push();
    fill(0, 0, 0);
    textSize(20);
    text(`Health: ${health}`, 650, 70);
    text(`Score: ${score}`, 650, 90);
    pop();

    //obstacles
    //testRect.draw();

    //collision
    /*
    catChar.collisionCheck(testRect)
    if(catChar.isColliding()){
        charColli = true;
    }
    else{
        charColli = false;
    }
    */
   //game over
    if(gameStatus == "lose"){
        push();
        textSize(60);
        text("You lose...", width/3, height/2);
        pop();
    }

    if(gameStatus == "win"){
        push();
        textSize(60);
        text("You win!", width/3, height/2);
        pop();
    }

    //ingame
    if(gameStatus == "game"){
        //movement
        if(kb.pressing("d") || kb.pressing("a") || kb.pressing("s") || kb.pressing("w")){
            if(kb.pressing("d")){
                catChar.updateDirection("forward");
                catChar.drawAnimation("walk");
                catChar.updatePosition("right");
            }
            if(kb.pressing("a")){
                catChar.updateDirection("reverse");
                catChar.drawAnimation("walk");
                catChar.updatePosition("left");
            }
            if(kb.pressing("w")){
                catChar.drawAnimation("walk");
                catChar.updatePosition("up");
            }
            if(kb.pressing("s")){
                catChar.drawAnimation("walk");
                catChar.updatePosition("down");
            }
        }
        else{
            catChar.drawAnimation("idle");
        }

        //collect pts
        for(i=0; i<addPt.length; i++){
            if(catChar.collisionCheck(addPt[i].getShape())){
                score += 1;
                addPt[i].getShape().remove();
                addPt.splice(i, 1);
                break;
            }
        }

        //reduce health
        for(i=0; i<subPt.length; i++){
            if(catChar.collisionCheck(subPt[i].getShape())){
                health -= 1;
                subPt[i].getShape().remove();
                subPt.splice(i, 1);
                break;
            }
        }

        if(health == 0){
            gameStatus = "lose";
            catChar.drawAnimation("idle");
        }
        if(score == 10){
            gameStatus = "win";
            catChar.drawAnimation("idle");
        }

        if(gameStatus != "game"){
            addLen = addPt.length;
            for(i=0; i<addLen; i++){
                poppedShape = addPt.pop();
                poppedShape.getShape().remove();
            }
            subLen = subPt.length;
            for(i=0; i<subLen; i++){
                poppedShape = subPt.pop();
                poppedShape.getShape().remove();
            }
            obsLen = obstacles.length;
            for(i=0; i<obsLen; i++){
                poppedObs = obstacles.pop();
                poppedObs.getShape().remove();
            }
        }
    }
    
    //walls 
    push();
    stroke(255,0,0, 127);
    for(var i = 0; i<scribWalls.length; i++){
        scribWalls[i].draw();
    }
    pop();

    //check location of mouse (x,y)
    //fill(0,0,0);
    //text("X: " + mouseX,-350,-250 );
    //text("Y: " + mouseY,-350,-230 );
    //text("Width: " + width, -350, -210);
    //text("Height: " + height, -350, -190);

}

function nameMaker(){
    //name maker
    fill("#DC143C");
    text("Lucy H", width-120, height-15);

    fill(0,0,0);
    text("I can't think of a good name so this ends up being the name", 65, 33);
}
