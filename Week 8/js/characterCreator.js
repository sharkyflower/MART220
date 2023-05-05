class characterCreator {

    constructor(xPos, yPos, w, h)
    {
        this.x = xPos; 
        this.y = yPos;
        this.w = w;
        this.h = h;
        this.facing = "forward";
        this.direction;
        this.isColliding = false;
        this.currAnimation;
        this.createAnimation();
    }

    createAnimation(){
        this.currAnimation = createSprite(this.x, this.y);
        this.currAnimation.scale = 0.13;
        this.currAnimation.rotationLock = true;
    }

    loadAnimation(animationType, fileNames){
        this.currAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length-1]);
        this.currAnimation.width = this.w;
        this.currAnimation.height = this.h;
    }

    drawAnimation(animationType){
        this.currAnimation.debug = mouse.pressing();
        
        this.currAnimation.frameDelay = 5;
        this.currAnimation.changeAnimation(animationType);
        if(animationType == "walk"){
            if(this.facing == "forward"){
                this.currAnimation.direction = 0;
                this.currAnimation.mirror.x = false;
            }
            if(this.facing == "reverse"){
                this.currAnimation.mirror.x = true;
                this.currAnimation.direction = 180;
            }
            if(this.direction == "up"){
                this.currAnimation.direction = 270;
            }
            if(this.direction == "down"){
                this.currAnimation.direction = 90;
            }
            if(this.direction == "right"){
                this.currAnimation.speed = 4;
            }
            if(this.direction == "left"){
                this.currAnimation.speed = 4;
            }
            if(this.direction == "up"){
                this.currAnimation.speed = 4;
            }
            if(this.direction == "down"){
                this.currAnimation.speed = 4;
            }
        }
        else{
            this.currAnimation.velocity.x = 0;
            this.currAnimation.velocity.y = 0;
        }
    }

    getAnimation(){
        return this.currAnimation;
    }

    updateDirection(facing) {
        this.facing = facing;
    }

    updatePosition(direction){
        this.direction = direction;
    }

    collisionCheck(inObj){
        return this.currAnimation.colliding(inObj);
    }
}