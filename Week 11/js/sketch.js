zRandom = (Math.random()*0.01);

function preload(){
    fontForAll = loadFont("./fonts/ComicNeueAngular-Regular.ttf");
    transflag = loadImage("./images/transflag.png");
    catfish = loadImage("./images/catfish.png");
    donut = loadImage("./images/donut.jpg");
    brokenglass = loadImage("./images/brokenglass.jpg");
    crystal = loadImage("./images/crystal.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);

    //font picker
    textFont(fontForAll);
    textSize(17);
}

function draw()
{
    background(0,0,0);

    //name text
    nameText();

    lights();

    push();
    specularMaterial(200);
    texture(transflag);
    rotateX(frameCount * Math.PI * 0.01);
    rotateY(frameCount * Math.PI * 0.01);
    rotateZ(frameCount * Math.PI * 0.01 * zRandom);
    box(100,100,100);
    pop();

    push();
    normalMaterial();
    translate(-300,-200);
    texture(catfish);
    rotateY(frameCount * 0.01);
    sphere(150);
    pop();

    push();
    normalMaterial();
    translate(300,150);
    texture(donut);
    rotateX(frameCount * 0.019);
    rotateY(frameCount * 0.023);
    torus(100, 50);
    pop();

    push();
    normalMaterial();
    translate(-300,200);
    texture(brokenglass);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(70, 170);
    pop();

    push();
    normalMaterial();
    translate(300,-200);
    texture(crystal);
    rotateX(frameCount * 0.017);
    rotateY(frameCount * 0.021);
    ellipsoid(50, 150, 75, 12, 2);
    pop();

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
    text("Shapes", (-width/2)+10, (-height/2)+30);
    pop();
}

function keyPressed(){

}

function mouseClicked(){

}


