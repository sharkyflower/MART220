var myImage;
var myAnimation;
var myWalkAnimation;
var i = 0;
var j = 0;
var idlePaths = [];
var walkPaths = [];
var walkanimations = [];
var rectangle1;
var isColliding = false;
var backgroundSound;

var rectangleArray = [];
var points = 0;
function preload() {

    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/walk/walk.txt");
    backgroundSound = loadSound('./sounds/Trap.mp3');
}

function setup() {

    createCanvas(800, 800);
    myAnimation = new animationImage(idlePaths, 0, 0, 150, 150);
    myWalkAnimation = new animationImage(walkPaths, 0, 0, 150, 150);
    for(var i = 0; i < 40; i++)
    {
        if(i % 2 == 0)
        {
            rectangleArray.push(new MyRectangle(random(0,width), random(0,height), random(20,100), random(10,75), 255,0,0));
        }
        else
        {
            rectangleArray.push(new MyRectangle(random(0,width), random(0,height), random(20,100), random(10,75),0,255,0));
            
        }
    }
    


  
}

function draw() {

    background(120);
   
    if(keyIsPressed)
    {
        if(!backgroundSound.isPlaying())
            backgroundSound.loop();

        if(key == 'd')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
            myWalkAnimation.updatePosition('forward');
            myAnimation.updatePosition('forward');
          
        }
        else if(key == 'a')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
            myWalkAnimation.updatePosition('reverse');
            myAnimation.updatePosition('reverse');
        }
        else if(key == 'w')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
            myWalkAnimation.updatePosition('up');
            myAnimation.updatePosition('up');
        }
        else if(key == 's')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
            myWalkAnimation.updatePosition('down');
            myAnimation.updatePosition('down');
        }
        else
        {
            myAnimation.updatePosition('idle');
            myAnimation.setCurrentFrameCount(frameCount);
            myAnimation.drawAnimation();
            
       
        }
    }
    else
    {
        myAnimation.setCurrentFrameCount(frameCount);
        myAnimation.drawAnimation();
       
    }
    //check all rectangles in the array
    for(var i = 0; i < rectangleArray.length; i++)
    {
        // check each object for collision
        isColliding = myWalkAnimation.isRectanglesColliding(rectangleArray[i]);
        if(isColliding)
        {
            if(rectangleArray[i].getG() > 0)
            {
                points++;
            }
            if(rectangleArray[i].getR() > 0)
            {
                points--;
            }
            
            // if colliding move the object to somewhere else
            rectangleArray[i] = new MyRectangle(random(0,width), random(0,height), random(20,100), random(10,75));
            if(!backgroundSound.isPlaying())
              backgroundSound.play();
        }
    }
   
    textSize(32);
    text(isColliding, 300,300);
    text("Score: " + points, 50,50);
    for(var i = 0; i < rectangleArray.length; i++)
    {
        rectangleArray[i].draw();
    }
   
}



function mousePressed() {
    // playing a sound file on a user gesture
   
   // backgroundSound.play();
  }

