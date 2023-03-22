class characterCreator {

    constructor(animationList, xPos, yPos, w, h)
    {
        this.animationList = animationList;
        this.spriteSheets = new Map();
        this.currAnimation = [];
        this.animationLength = 0;
        this.animationIteration = 0;
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
        this.collisionMap = new Map([
            ["borderCollision", false]
        ]);
        this.load();
        
    }
    
    load(){
        for (var j = 0; j < this.animationList.length; j++){
            var animationArray = this.animationList[j];
            var currSpriteSheet = []; 
            //console.log(animationArray);
            for (var i = 0; i < animationArray.length; i++){
                //console.log(animationArray[i]);
                var currFrame = loadImage(animationArray[i]);
                currSpriteSheet[i] = currFrame;
            }
            var currName = (animationArray[0].split(" "))[0].substring((animationArray[0].split(" "))[0].lastIndexOf("/")+1).toLowerCase();

            this.spriteSheets.set(currName, currSpriteSheet);
        }
    }

    draw(){
        // console.log(this.character.length);
        this.animationLength = this.currAnimation.length

        push();
        if(this.direction == "reverse"){
            translate(this.w,0);
            scale(-1.0,1.0);
            image(this.currAnimation[this.animationIteration], -this.xPos, this.yPos, this.w, this.h); // display image
        }
        else if(this.direction == "forward"){
            image(this.currAnimation[this.animationIteration], this.xPos, this.yPos, this.w, this.h); // display image
        }
        pop();
        
        if(frameCount % 3 == 0){
            this.animationIteration++;
        }

        if(this.animationIteration > this.animationLength-1){
            this.animationIteration = 0;
        }

        //if(!this.isColliding){
            if (this.movingRight) {
                this.xPos += this.velocity;
            }
            if (this.movingLeft) {
                this.xPos -= this.velocity;
            }
            if (this.movingUp) {
                this.yPos -= this.velocity;
            }
            if (this.movingDown) {
                this.yPos += this.velocity;
            }
        //}

    }

    animationSelect(keyword){
        if(keyword == "idle"){
            this.currAnimation = this.spriteSheets.get("idle");
        }
        if(keyword == "walk"){
            this.currAnimation = this.spriteSheets.get("walk");
        }
    }

    isMoving(keyIn){
        if(keyIn == "a"){
            this.movingLeft = true;
            this.direction = "reverse";
        }
        if(keyIn == "d"){
            this.movingRight = true;
            this.direction = "forward";
        }
        if(keyIn == "w"){
            this.movingUp = true;
        }
        if(keyIn =="s"){
            this.movingDown = true;
        }
    }

    isNotMoving(keyIn){
        if(keyIn == "a"){
            this.movingLeft = false;
        }
        if(keyIn == "d"){
            this.movingRight = false;
        }
        if(keyIn == "w"){
            this.movingUp = false;
        }
        if(keyIn =="s"){
            this.movingDown = false;
        }
    }
    
    isCharFlipped(){
        return this.direction;
    }

    getX(){
        return this.xPos;
    }

    getY(){
        return this.yPos;
    }

    getW(){
        return this.w;
    }

    getH(){
        return this.h;
    }

    collideWithBorder(isColliding){
        //console.log(isColliding)
        this.collisionMap.set("borderCollision", isColliding);
    }

    getCollisionMap(){
        var returnStr = ""
        for (const eachCollision of this.collisionMap.entries()){
            returnStr = returnStr + eachCollision + ", \n";
        }
        return returnStr;
    }

    getCollisionBorder(){
        return this.collisionMap.get("borderCollision");
    }
}