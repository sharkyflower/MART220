var riceX1 = 215;
var riceX2 = 285; 
var riceY1 = 385;
var riceY2 = 400;
var riceWidth = 10;
var riceHeight = 5;

var riceRandomX;
var riceRandomY;

function setup(){
    createCanvas(500,600);
    background(255,255,255);

    //Salmon maker
    salmonMaker();

    //plate
    plateMaker();

    //Sushi's rice
    riceMaker();
    
}

function draw()
{
    //background(255,255,255);

    //check location of mouse (x,y)
    //fill(0,0,0);
    //text("X: " + mouseX,50,500 );
    //text("Y: " + mouseY,50,520 );
    //text(riceRandomX, 100, 500);
    //text(riceRandomY, 100, 520);
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

    for(i=0; i<150; i++){
        riceRandomX = ((Math.floor(Math.random() * ((riceX2-riceX1)+1))) + riceX1-1);
        riceRandomY = ((Math.floor(Math.random() * ((riceY2-riceY1)+1))) + riceY1-1);

        ellipse(riceRandomX, riceRandomY, riceWidth, riceHeight);
    }

    ellipse(riceX1,400,10,5);
    ellipse(riceX2,400,10,5);
    ellipse(riceX1,385,10,5);
    ellipse(riceX2,385,10,5);
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