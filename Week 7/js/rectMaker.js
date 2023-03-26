class rectMaker
{
  
  constructor(x,y,w,h,colliDetection = false, name)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colliDetection = colliDetection
    this.isColliding = false;
    this.name = name;
  }
  
  getX()
  {
    return this.x;
  }
  getY()
  {
    return this.y;
  }
  getW()
  {
    return this.w;
  }
  getH()
  {
    return this.h;
  }

  getName(){
    return this.name;
  }

  changeX(input){
    this.x = input;
  }

  changeY(input){
    this.y = input;
  }

  changeW(input){
    this.w = input;
  }

  changeH(input){
    this.h = input;
  }

  changeAll(inX, inY, inW, inH){
    this.x = inX;
    this.y = inY;
    this.w = inW;
    this.h = inH;
  }
  
  draw()
  {
    rect(this.x, this.y, this.w, this.h);
  }

  rectCollisionCheck(inChar){
    this.isColliding = collideRectRect(this.x, this.y, this.w, this.h, 
        inChar.getX(), inChar.getY(), inChar.getW(), inChar.getH());
  }

  getCollision(){
    return this.isColliding;
  } 

  directionalCollisionCheck(inChar, existingColli){
    if(this.colliDetection){
        var retDirectionalCollision = inChar.directionalCollision
        var retShapeCollision = existingColli

        var keyList = [...existingColli.keys()]
        var nameList = []

        for (var i = 0; i < keyList.length; i++){
          nameList.push(keyList[i].getName())
        }

        var directionList = [...existingColli.values()]

        console.log(keyList)
        console.log(nameList)
        console.log(directionList)

        var charBottom = inChar.getY() + inChar.getH();
        var rectBottom = this.getY() + this.getH();

        var charRight = inChar.getX() + inChar.getW();
        var rectRight = this.getX() + this.getW();

        var charTop = inChar.getY();
        var rectTop = this.getY();

        var charLeft = inChar.getX();
        var rectLeft = this.getX();

        //distance between [direction] of rect and [opposite direction] of char

        var topColli = rectTop - charBottom;
        var botColli = charTop - rectBottom; 
        var leftColli = rectLeft - charRight; 
        var rightColli = charLeft - rectRight;
        
        //console.log("topColli: " + topColli)
        //console.log("botColli: " + botColli)
        //console.log("leftColli: " + leftColli)
        //console.log("rightColli: " + rightColli)

        //this is in terms of the perspective of the rectangle object.
        if(directionList.includes("Top")){
          retDirectionalCollision.set("topColli", true)
        }
        else if(topColli <= 0 && topColli >= -10 && topColli > botColli && leftColli <= 0 && rightColli <= 0){ //top collision
            // top needs to be smaller or equal to 0 and bigger or equal to -10 [small space of detection]
            // top needs to always be bigger than bottom 
            // top needs to be confined in the space between left and right
            retDirectionalCollision.set("topColli", true)
            retShapeCollision.set(this, "Top")
        }
        else{
            retDirectionalCollision.set("topColli", false)
        }

        if(directionList.includes("Bot")){
          retDirectionalCollision.set("botColli", true)
        }
        else if(botColli <= 0 && botColli >= -10 && botColli > topColli && leftColli <= 0 && rightColli <= 0){ //bottom collision
            // bottom needs to be smaller or equal to 0 and bigger or equal to -10 [small space of detection]
            // bottom needs to always be bigger than top
            // bottom needs to be confined in the space between left and right
            retDirectionalCollision.set("botColli", true)
            retShapeCollision.set(this, "Bot")
        }
        else{
            retDirectionalCollision.set("botColli", false)
        }

        if(directionList.includes("Left")){
          retDirectionalCollision.set("leftColli", true)
        }
        else if(leftColli <= 0 && leftColli >= -10 && leftColli > rightColli && topColli <= 0 && botColli <= 0){ //left collision
            // left needs to be smaller or equal to 0 and bigger or equal to -10 [small space of detection]
            // left needs to always be bigger than right
            // left needs to be confined in the space between top and bottom
            retDirectionalCollision.set("leftColli", true)
            retShapeCollision.set(this, "Left")
        }   
        else{
            retDirectionalCollision.set("leftColli", false)
        }

        if(directionList.includes("Right")){
          retDirectionalCollision.set("rightColli", true)
        }
        else if(rightColli <= 0 && rightColli >= -10 && rightColli > leftColli && topColli <= 0 && botColli <= 0){ //right collision
            retDirectionalCollision.set("rightColli", true)
            retShapeCollision.set(this, "Right")
            // right needs to be smaller or equal to 0 and bigger or equal to -10 [small space of detection]
            // right needs to always be bigger than left
            // right needs to be confined in the space between top and bottom
        }
        else{
            retDirectionalCollision.set("rightColli", false)
        }
        

        //TODO: move the directional collision check to objects instead of character
        //as individual objects has their own check to do, and there's only one check for character
        //update object maker with the option of collision check [default to false]
        
        return [retDirectionalCollision, retShapeCollision]
    }

    else return [inChar.directionalCollision, existingColli]
}

}