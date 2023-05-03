class characterCreator {

    constructor(xPos, yPos, w, h)
    {
        this.xPos = xPos; 
        this.yPos = yPos;
        this.w = w;
        this.h = h;
        this.direction = "forward";
        this.velocity = 5;
        this.movingUp = false;
        this.movingDown = false;
        this.movingLeft = false;
        this.movingRight = false;
        this.currFrameCount = 0;
        this.currAnimation;
        this.createAnimation();
    }

    createAnimation(){
        this.currAnimation = createSprite(this.w,this.h);
    }

    loadAnimation(animationType, fileNames){
        this.currAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length-1]);
    }

    drawAnimation(animationType){
        this.currAnimation.frameDelay = 3;
        this.currAnimation.scale = 0.5;
        this.currAnimation.changeAnimation(animationType);
        if(animationType == "walk" && this.direction == "forward"){
            this.currAnimation.direction = 0;
            this.currAnimation.mirror.x = false;
            this.currAnimation.speed = 1;
        }
        else if(animationType == "walk" && this.direction == "reverse"){
            this.currAnimation.mirror.x = true;
            this.currAnimation.direction = 180;
            this.currAnimation.speed = 1;
        }
        else{
            this.currAnimation.velocity.x = 0;
        }
    }

    incrementIndex() {

        if (this.currentFrameCount % 3 == 0) {
            this.i++;
        }

        if (this.i >= this.fileNames.length) {
            this.i = 0;
        }
    }

    updatePosition(direction) {
        this.direction = direction;
       
    }

}