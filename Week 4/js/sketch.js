var riceX1 = 215;
var riceX2 = 285; 
var riceY1 = 385;
var riceY2 = 400;
var riceWidth = 10;
var riceHeight = 5;

var riceRandomizerAmount = 154;

var riceFlipped = 0;

var riceRandomX = [];
var riceRandomY = [];

var riceFlippedRandomX = [];
var riceFlippedRandomY = [];

var fishList = ["Salmon", "Tuna"];
var fishPicked;
var fishSwitchCooldown = false;
var fishTimer = 0;

var animationTxt = [];
var catChar;
var currAnimationSelect;

var randomSushiList = [];
var randSushi;

function preload(){
    salmonReal = loadImage("./images/salmon_sushi_transparent.png");
    salmonMS = loadImage("./images/salmon_sushi_ms_paint.png");

    tunaReal = loadImage("./images/tuna_sushi_transparent.png");
    tunaMS = loadImage("./images/tuna_sushi_ms_paint.png");

    fontForAll = loadFont("./fonts/Yomogi-Regular.ttf");

    idleAnimation = loadStrings("./images/cat/animation/idle.txt");
    walkAnimation = loadStrings("./images/cat/animation/walk.txt");
}

function setup(){
    createCanvas(500,600);

    //animation stuff
    animationTxt.push(idleAnimation, walkAnimation);
    catChar = new characterCreator(animationTxt);
    currAnimationSelect = "idle";

    //rice randomizer
    riceRandomizer(riceRandomizerAmount);

    //fish randomizer
    fishPicked = fishList[Math.floor(Math.random()*fishList.length)];

    //font picker
    textFont(fontForAll);
    textSize(17);
}

function draw()
{
    background(255,255,255);

    //bg image maker
    fishImageMaker();

    //name maker
    nameMaker();

    //Fish maker 
    fishMaker();

    //Salmon maker
    //salmonMaker();

    //Tuna maker
    //tunaMaker();

    //plate
    plateMaker();

    //Sushi's rice
    riceMaker();

    //check location of mouse (x,y)
    //fill(0,0,0);
    //text("X: " + mouseX,50,500 );
    //text("Y: " + mouseY,50,520 );

    //watch what happens when i pressed a button i don't even know about
    riceFlipper();

    //fish cooldown
    fishCoolDown();

    //animation movement
    if(keyIsPressed){
        if(currAnimationSelect == "idle"){
            currAnimationSelect = "walk";
        }
        if(key == 'a'){
            catChar.movement("a")
        }
        if(key == 'd'){
            catChar.movement("d")
        }
        if(key == 'w'){
            catChar.movement("w")
        }
        if(key == 's'){
            catChar.movement("s")
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

function plateMaker(){
    fill("#FFFFFF");
    strokeWeight(1);
    stroke("#000000");
    ellipse(250,403,200,30);
    ellipse(250,403,180,20);
    //ellipse(250,430,100,20);
    arc(250,432,100,20,0,PI,OPEN);
    arc(250,430,100,20,0,PI,OPEN);
    line(165,411,201,432);
    line(299,432,332,412);
}

function riceMaker(){
    fill("#F6F8ED");
    stroke("#999999");

    for(i=0; i<riceRandomX.length; i++){
        ellipse(riceRandomX[i], riceRandomY[i], riceWidth, riceHeight);
    }
}

function riceRandomizer(i){
    for(i=0; i<150; i++){
        riceRandomX[i] = ((Math.floor(Math.random() * ((riceX2-riceX1)+1))) + riceX1-1);
        riceRandomY[i] = ((Math.floor(Math.random() * ((riceY2-riceY1)+1))) + riceY1-1);
    }
}

function fishImageMaker(){
    if(fishPicked == "Salmon"){
        tint(255,127);
        image(salmonMS, 20, -20, 500, 500);

        tint(255,255);
        image(salmonReal, mouseX, mouseY, 30, 30);
        
    }
    else if(fishPicked == "Tuna"){
        tint(255,127);
        image(tunaMS, 70, 0, 400, 400);

        tint(255,255);
        image(tunaReal, mouseX, mouseY, 40, 30);
    }
}

function fishMaker(){
    //fish maker
    
    if(fishPicked == "Salmon"){
        salmonMaker();
        fill(0,0,0);
        text("Click to switch to Tuna", 150,205);
    }
    else if(fishPicked == "Tuna"){
        tunaMaker();
        fill(0,0,0);
        text("Click to switch to Salmon", 140,205);
    }
}

function salmonMaker(){
    //salmon maker
    fill("#FA8072");
    stroke("rgba(0,0,0,0)");
    rect(200,370,100,20);
    fill("#FFFFFF");
    stroke("#000000");
    arc(250,390,100,20,PI,2*PI,OPEN);
    fill("#FA8072");
    stroke("#000000");
    arc(250,370,100,20,PI,2*PI,OPEN);
    line(200,370,200,390);
    line(300,370,300,390);

    //salmon line

    //x - > 16

    stroke("#ff91a4");
    strokeWeight(2);
    line(218,364,210,374);
    line(210,374,218,381);

    line(234,362,224,372);
    line(224,372,234,379);

    line(250,361.5,240,371);
    line(240,371,250,378.5);

    line(266,362,256,371);
    line(256,371,266,379);

    line(284,364,274,372);
    line(274,372,284,381);
}

function tunaMaker(){
    //salmon maker
    fill("#cf6275");
    stroke("rgba(0,0,0,0)");
    rect(200,370,100,20);
    fill("#FFFFFF");
    stroke("#000000");
    arc(250,390,100,20,PI,2*PI,OPEN);
    fill("#cf6275");
    stroke("#000000");
    arc(250,370,100,20,PI,2*PI,OPEN);
    line(200,370,200,390);
    line(300,370,300,390);

    //tuna line

    //x - > 16

    stroke("#df7285");
    strokeWeight(1);
    line(218,364,210,374);
    line(210,374,218,381);

    line(234,362,224,372);
    line(224,372,234,379);

    line(250,361.5,240,371);
    line(240,371,250,378.5);

    line(266,362,256,371);
    line(256,371,266,379);

    line(284,364,274,372);
    line(274,372,284,381);
}

function nameMaker(){
    //name maker
    fill("#DC143C");
    text("Lucy H", 425, 500);

    fill(0,0,0);
    text("Sushi Maker", 10,25);
}

function riceFlipper(){
    if(riceFlipped == 0){
        fill(0,0,0);
        text("Cause Chaos: Press F", 165, 250);
    }
    if(riceFlipped == 1){
        fill(0,0,0);
        text("Reset: Press F", 187, 250);
        if(! (riceFlippedRandomX.length == riceRandomX.length)){
            for(i=0; i<riceRandomX.length; i++){
                riceFlippedRandomX[i] = ((Math.random() * 2 - 1));
                riceFlippedRandomY[i] = ((Math.random() * -2 - 1));
            }
        }

        for(i=0; i<riceRandomX.length; i++){
            riceRandomX[i] += riceFlippedRandomX[i];
            riceRandomY[i] += riceFlippedRandomY[i];
        }
    }
    if(riceFlipped == 2){
        riceFlippedRandomX = [];
        riceFlippedRandomY = [];
        riceRandomizer(riceRandomizerAmount);
        riceFlipped = 0;
    }
}

function keyPressed(){
    if(key == "f"){
        if(riceFlipped == 0 || riceFlipped == 2){
            riceFlipped = 1;
        }
        else if(riceFlipped == 1){
            riceFlipped = 2;
        }
    }
    
    if(keyCode == 32){
        
    }

}

function mouseClicked(){
    if (!fishSwitchCooldown){
        if(fishPicked == "Salmon"){
            fishPicked = fishList[1];
        }
        else if(fishPicked == "Tuna"){
            fishPicked = fishList[0];
        }
        fishAddTimer(2);
    }
}

function fishCoolDown(){
    //text(fishSwitchCooldown, 50,50);
    //text(fishTimer, 50, 80);
    if(frameCount % 60 == 0 && fishTimer > 0 && fishSwitchCooldown == true){
        fishTimer --;
    }
    if(fishTimer <= 0){
        fishSwitchCooldown = false;
    }
    if(fishSwitchCooldown){
        text(`Fish on cooldown for ${fishTimer} seconds...`, 110, 175);
    }
}

function fishAddTimer(timeInput){
    fishSwitchCooldown = true;
    fishTimer = timeInput;
}

