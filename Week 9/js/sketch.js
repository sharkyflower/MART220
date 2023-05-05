var catChar;

var playerCondition;
var obsRemain = 10;
var collectable = 0;

var addPt = [];
//var subPt = [];
var obstacles = []; 

var gameStatus = "game";

var scribWalls = [];
var scribble; 

const particles = [];

//var bgMusicIntro;
//var bgMusicLoop;
//var bgPlayMode = "Intro";

//var starCollectSound;
//var badStarCollectSound;

function preload(){
    fontForAll = loadFont("./fonts/Yomogi-Regular.ttf");

    idleAnimation = loadStrings("./images/cat/animation/idle.txt");
    walkAnimation = loadStrings("./images/cat/animation/walk.txt");
    attackAnimation = loadStrings("./images/cat/animation/attack.txt");

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
    catChar.loadAnimation("attack", attackAnimation);

    //obstacle
    for(i = 0; i < 10; i++){
        obstacle = new rectMaker((Math.floor(Math.random() * 501) + 100),(Math.floor(Math.random() * 301) + 200), 50, 50, "static");
        obstacle.setHealth(100);
        obstacles.push(obstacle);
    }

    
    //points 
    push();
    for(i = 0; i < 20; i++){
        currPt = new rectMaker((Math.floor(Math.random() * 551) + 100),(Math.floor(Math.random() * 351) + 200), 7, 7, "static")
        currPt.changeColor("green");
        addPt.push(currPt);
    }
    pop();

    /*
    push();
    for(i = 0; i < 10; i++){
        currPt = new rectMaker((Math.floor(Math.random() * 551) + 100),(Math.floor(Math.random() * 451) + 100), 7, 7, "static")
        currPt.changeColor("red");
        subPt.push(currPt);
    }
    pop();
    */

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
    text(`Obstacles remaining: ${obsRemain}`, 515, 70);
    text(`Collectable: ${collectable}`, 515, 90);
    pop();

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
        else if(kb.pressing("j")){
            catChar.drawAnimation("attack");
            for(let i = 0; i < obstacles.length; i++){
                if(dist(catChar.getAnimation().position.x, catChar.getAnimation().position.y, obstacles[i].getShape().position.x, obstacles[i].getShape().position.y) < 58){
                    createParticles(obstacles[i].getShape().position.x, obstacles[i].getShape().position.y);
                    obstacles[i].subHealth(1);
                    if(obstacles[i].getHealth() <= 0){
                        //reduce obsRemain
                        obsRemain -= 1;
                        //remove
                        obstacles[i].getShape().remove();
                        obstacles.splice(i,1);
                    }
                    break;
                }
            }
        }
        else{
            catChar.drawAnimation("idle");
        }

        showParticles();

        
        //collect pts
        for(i=0; i<addPt.length; i++){
            if(catChar.collisionCheck(addPt[i].getShape())){
                collectable += 1;
                addPt[i].getShape().remove();
                addPt.splice(i, 1);
                break;
            }
        }        

        if(collectable >= 10 && obsRemain == 0){
            gameStatus = "win";
            catChar.drawAnimation("idle");
        }

        
        if(gameStatus != "game"){
            addLen = addPt.length;
            for(let i=0; i<addLen; i++){
                poppedShape = addPt.pop();
                poppedShape.getShape().remove();
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

function createParticles(x,y){
    //particles
    for(let i = 0; i < 5; i++){
        let p = new Particle(x,y);
        particles.push(p);
    }
    showParticles();
}

function showParticles(){
    push();
    for(let i = particles.length - 1; i >= 0; i--){
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()){
            particles.splice(i, 1);
        }
    }
    pop();
}

function nameMaker(){
    //name maker
    fill("#DC143C");
    text("Lucy H", width-120, height-15);

    fill(0,0,0);
    text("I can't think of a good name so this ends up being the name", 65, 33);
}
