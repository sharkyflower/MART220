class characterCreator {

    constructor(animationList)
    {
        this.animationList = animationList;
        this.spriteSheets = new Map();
        this.currAnimation = [];
        this.animationLength = 0;
        this.animationIteration = 0;
        this.xPos = 50; 
        this.yPos = 200;
        this.w = 75;
        this.h = 100;
        this.direction = "forward";

        console.log(animationList);
        

        for (var j = 0; j < animationList.length; j++){
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
        /*
        for (var i = 0; i < idleAnimation.length; i++) {
            console.log(this.idleAnimation[j]);
            person = loadImage(this.idleAnimation[j]);
           // console.log(this.imageLinks[j]);
            this.character[j] = person;
        }
        */
    }
    
    draw(){
        // console.log(this.character.length);
        this.animationLength = this.currAnimation.length

        if(this.direction == "reverse"){
            translate(this.w,0);
            scale(-1.0,1.0);
            image(this.currAnimation[this.animationIteration], -this.xPos, this.yPos, this.w, this.h); // display image
        }
        else if(this.direction == "forward"){
            image(this.currAnimation[this.animationIteration], this.xPos, this.yPos, this.w, this.h); // display image
        }
        
        
        if(frameCount % 3 == 0){
            this.animationIteration++;
        }

        if(this.animationIteration > this.animationLength-1){
            this.animationIteration = 0;
        }
    }

    animationSelect(keyword){
        if(keyword == "idle"){
            this.currAnimation = this.spriteSheets.get("idle");
        }
        if(keyword == "walk"){
            this.currAnimation = this.spriteSheets.get("walk");
        }
    }

    movement(keyIn){
        if(keyIn == "a"){
            this.xPos-=5;
            this.direction = "reverse";
        }
        if(keyIn == "d"){
            this.xPos+=5;
            this.direction = "forward";
        }
        if(keyIn == "w"){
            this.yPos-=5;
        }
        if(keyIn =="s"){
            this.yPos+=5;
        }
    }
    
    isCharFlipped(){
        return this.direction;
    }

}