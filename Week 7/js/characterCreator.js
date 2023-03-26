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
            ["borderCollision", false],
            ["scribbleRectCollision", false]
        ]);
        this.collisionRestrictionArray = ["borderCollision", 
        "scribbleRectCollision"]; // this is a list of collision object i want to have movement constrcition on
        this.restrictMvtActivation = false;
        this.restrictMovement = new Map([
            ["Left", false], ["Right", false],
            ["Top", false], ["Bottom", false]
        ])
        this.directionalCollision = new Map([
            ["leftColli", false], ["rightColli", false],
            ["topColli", false], ["botColli", false]
        ])
        this.shapeCollided = new Map([])
        this.collisionBox = new rectMaker(this.xPos+3, this.yPos, this.w-10, this.h);
        this.predictionCollisionBox = new rectMaker(this.xPos+3, this.yPos, this.w-10, this.h+10);
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

        push();
        fill(0,0,0,100);
        if(this.direction == "reverse"){
            this.collisionBox.changeAll(this.xPos+7, this.yPos, this.w-10, this.h);
            this.collisionBox.draw();
            fill(200,0,0,100);
            this.predictMovementAdder();
            this.predictionCollisionBox.draw();
        }
        else if(this.direction == "forward"){
            this.collisionBox.changeAll(this.xPos+3, this.yPos, this.w-10, this.h);
            this.collisionBox.draw();
            fill(200,0,0,100);
            this.predictMovementAdder();
            this.predictionCollisionBox.draw();
        }
        line(0, this.getY()+this.getH(), width, this.getY()+this.getH());
        pop();  
        
        if(frameCount % 3 == 0){
            this.animationIteration++;
        }

        if(this.animationIteration > this.animationLength-1){
            this.animationIteration = 0;
        }


        //note: directional collision based on object's coordination to characters

        if (this.movingRight && !this.directionalCollision.get("leftColli")) {
            this.xPos += this.velocity;
        }
        else if(this.directionalCollision.get("leftColli")){
            this.xPos = this.xPos;
        }
        if (this.movingLeft && !this.directionalCollision.get("rightColli")) {
            this.xPos -= this.velocity;
        }
        else if(this.directionalCollision.get("rightColli")){
            this.xPos = this.xPos;
        }
        if (this.movingUp && !this.directionalCollision.get("botColli")) {
            this.yPos -= this.velocity;
        }
        else if(this.directionalCollision.get("botColli")){
            this.yPos = this.yPos;
        }
        if (this.movingDown && !this.directionalCollision.get("topColli")) {
            this.yPos += this.velocity;
        }
        else if(this.directionalCollision.get("topColli")){
            this.yPos = this.yPos;
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

    predictMovementAdder(){
        var xPosChange = this.xPos;
        var yPosChange = this.yPos;
        var hChange = this.h + 5;
        if(this.direction == "forward"){
            xPosChange += 3;
        }
        else if(this.direction == "reverse"){
            xPosChange += 7;
        }
        if(this.movingUp){
            yPosChange -= this.velocity;
        }
        if(this.movingDown){
            yPosChange += this.velocity + 5;
            hChange -= 5;
        }
        if(this.movingLeft){
            xPosChange -= this.velocity;
        }
        if(this.movingRight){
            xPosChange += this.velocity;
        }
        this.predictionCollisionBox.changeAll(xPosChange, yPosChange, this.w-10, hChange);
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
        return this.predictionCollisionBox.getX();
    }

    getY(){
        return this.predictionCollisionBox.getY();
    }

    getW(){
        return this.predictionCollisionBox.getW();
    }

    getH(){
        return this.predictionCollisionBox.getH();
    }

    getCollisionBoxX(){
        return this.collisionBox.getX();
    }

    getCollisionBoxY(){
        return this.collisionBox.getY();
    }

    getCollisionBoxW(){
        return this.collisionBox.getW();
    }
    
    getCollisionBoxH(){
        return this.collisionBox.getH();
    }


    restrictMvtActivationCheck(){
        for (let i = 0; i < this.collisionRestrictionArray.length; i++){
            var currColli = this.collisionRestrictionArray[i]
            if(this.collisionMap.get(currColli)){
                this.restrictMvtActivation = true;
                return;
            }
        }
        this.restrictMvtActivation = false;
    }

    collideWithBorder(inShape){
        //console.log(inShapeArray instanceof Array);
        var inShapeArray = []
        if(!(inShape instanceof Array)){
            inShapeArray.push(inShape);
        }
        else{
            inShapeArray = inShape;
        }
        var colliCheck = false
        var hasColliArray = []

        /*
        for (var i in inShapeArray){
            if(inShapeArray[i].getCollision() && !this.shapeCollided.has(inShapeArray[i])){
                colliCheck = true
                hasColliArray.push(inShapeArray[i])
                this.shapeCollided.set(inShapeArray[i], "")
            }
            else if(this.shapeCollided.has(inShapeArray[i]) && !inShapeArray[i].getCollision()){
                this.shapeCollided.delete(inShapeArray[i])
            }
            else if(this.shapeCollided.has(inShapeArray[i])){
                colliCheck = true
                hasColliArray.push(inShapeArray[i])
            }
        }
        */

        var returnChecks = this.collisionChecker(inShapeArray, colliCheck, hasColliArray, false)
        colliCheck = returnChecks[0]
        hasColliArray = returnChecks[1]
        this.restrictMvtActivationCheck();

        this.collisionUpdater(colliCheck, hasColliArray, "borderCollision")

        /*
        if(colliCheck){
            this.collisionMap.set("borderCollision", true)
            for (var i in hasColliArray){
                var retArray = hasColliArray[i].directionalCollisionCheck(this, this.shapeCollided)
                this.directionalCollision = retArray[0]
                this.shapeCollided = retArray[1]
            }
        }
        else{
            this.collisionMap.set("borderCollision", false)
        }
        */
    }

    collideWithScribRect(inShape){
        //this.collisionMap.set("scribbleRectCollision", isColliding);
        //this.restrictMvtActivationCheck();
        
        var inShapeArray = []
        if(!(inShape instanceof Array)){
            inShapeArray.push(inShape);
        }
        else{
            inShapeArray = inShape;
        }

        var colliCheck = false
        var hasColliArray = []

        /*
        for (var i in inShapeArray){
            if(inShapeArray[i].getCollision() && !this.shapeCollided.has(inShapeArray[i].getCollisionBox())){
                colliCheck = true
                hasColliArray.push(inShapeArray[i].getCollisionBox())
                this.shapeCollided.set(inShapeArray[i].getCollisionBox(), "")
            }
            else if(this.shapeCollided.has(inShapeArray[i].getCollisionBox()) && !inShapeArray[i].getCollision()){
                this.shapeCollided.delete(inShapeArray[i].getCollisionBox())
            }
            else if(this.shapeCollided.has(inShapeArray[i].getCollisionBox())){
                colliCheck = true
                hasColliArray.push(inShapeArray[i].getCollisionBox())
            }
            //console.log(inShapeArray[i].getName())
        }
        */
        

        var returnChecks = this.collisionChecker(inShapeArray, colliCheck, hasColliArray, true)
        colliCheck = returnChecks[0]
        hasColliArray = returnChecks[1]
        this.restrictMvtActivationCheck();

        this.collisionUpdater(colliCheck, hasColliArray, "scribbleRectCollision")

        /*
        if(colliCheck){
            this.collisionMap.set("scribbleRectCollision", true)
            for (var i in hasColliArray){
                var retArray = hasColliArray[i].directionalCollisionCheck(this, this.shapeCollided)
                this.directionalCollision = retArray[0]
                this.shapeCollided = retArray[1]
            }
        }
        else{
            this.collisionMap.set("scribbleRectCollision", false)
        }
        */
    }

    collisionChecker(inShapeArray, colliCheck, hasColliArray, hasCollisionBox){
        if(!(hasCollisionBox)){
            for (var i in inShapeArray){
                if(inShapeArray[i].getCollision() && !this.shapeCollided.has(inShapeArray[i])){
                    colliCheck = true
                    hasColliArray.push(inShapeArray[i])
                    this.shapeCollided.set(inShapeArray[i], "")
                }
                else if(this.shapeCollided.has(inShapeArray[i]) && !inShapeArray[i].getCollision()){
                    this.shapeCollided.delete(inShapeArray[i])
                }
                else if(this.shapeCollided.has(inShapeArray[i])){
                    colliCheck = true
                    hasColliArray.push(inShapeArray[i])
                }
            }
        }
        
        else if(hasCollisionBox){
            for (var i in inShapeArray){
                if(inShapeArray[i].getCollision() && !this.shapeCollided.has(inShapeArray[i].getCollisionBox())){
                    colliCheck = true
                    hasColliArray.push(inShapeArray[i].getCollisionBox())
                    this.shapeCollided.set(inShapeArray[i].getCollisionBox(), "")
                }
                else if(this.shapeCollided.has(inShapeArray[i].getCollisionBox()) && !inShapeArray[i].getCollision()){
                    this.shapeCollided.delete(inShapeArray[i].getCollisionBox())
                }
                else if(this.shapeCollided.has(inShapeArray[i].getCollisionBox())){
                    colliCheck = true
                    hasColliArray.push(inShapeArray[i].getCollisionBox())
                }
            }
        }
        return [colliCheck, hasColliArray]
    }

    collisionUpdater(colliCheck, hasColliArray, collisionType){
        if(colliCheck){
            this.collisionMap.set(collisionType, true)
            for (var i in hasColliArray){
                var retArray = hasColliArray[i].directionalCollisionCheck(this, this.shapeCollided)
                this.directionalCollision = retArray[0]
                this.shapeCollided = retArray[1]
            }
        }
        else{
            this.collisionMap.set(collisionType, false)
        }
    }

    collisionRefresher(){
        if(!this.restrictMvtActivation){
            for (const eachDirection of this.directionalCollision.keys()){
                this.directionalCollision.set(eachDirection, false)
            }
        }
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

    getCollisionScribRect(){
        return this.collisionMap.get("scribbleRectCollision");
    }

    getRestrictMvtActivation(){
        return this.restrictMvtActivation;
    }

    getDirectionalCollision(){
        var returnStr = ""
        for (const eachDirection of this.directionalCollision.entries()){
            returnStr = returnStr + eachDirection + ", \n";
        }
        return returnStr;
    }

    getShapeCollided(){
        var returnStr = ""
        for(const eachShapes of this.shapeCollided.entries()){
            returnStr = returnStr + eachShapes[0].getName() + ": " + eachShapes[1] + " "
        }
        return returnStr;
    }

}