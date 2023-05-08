class bullet{

    //TODO: make a new class [bullet]
    //change this class to [playerShotType]
    //updates
    
    constructor(x,y,condition,type){
        this.x = x;
        this.y = y;
        this.vx;
        this.vy;
        this.w;
        this.h;
        this.condition = condition;
        this.type = type;
        this.clearCheck = false;

        this.alpha;
        this.color;

        this.shape;

        this.typeSelection();
        //this.visibility();
    }

    typeSelection(){
        if(this.type == "playerUnfocused"){
            this.playerUnfocused();
        }
    }

    playerUnfocused(){
        this.w = 10
        this.h = 30
        this.vx = 2;
        this.vy = -20;
        this.shape = createSprite(this.x, this.y, this.w, this.h, this.condition);
        this.shape.rotationLock = true;
        this.changeColor("#F5A9B8");
        this.changeRotation(45);
        this.changeDirection(90);
        this.overlapSwitch();
    }

    changeColor(inColor){
        this.shape.color = inColor;
        this.shape.stroke = inColor;
    }

    changeRotation(inRot){
        this.shape.rotation = inRot;
    }

    changeDirection(inDir){
        this.shape.direction = inDir;
    }

    visibility(){
        if(this.shape.visible == true){
            this.shape.visible = false;
        }
        else{
            this.shape.visible = true;
        }
    }

    resetShape(){
        this.shape.remove();
        this.shape = createSprite(this.x, this.y, this.w, this.h, this.condition);
        this.shape.rotationLock = true;
    }

    circlify(input){
        this.shape.diameter = input;
    }

    getShape(){
        return this.shape;
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

    changeX(input){
        this.shape.vel.x = input;
        this.x = this.shape.x;
    }

    changeY(input){
        this.shape.vel.y = input;
        this.y = this.shape.y;
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
        this.resetShape();
    }

    isColliding(inObj){
        return this.shape.collide(inObj);
    }

    isOverlapping(inObj){
        return this.shape.overlaps(inObj);
    }

    overlapSwitch(){
        this.shape.overlaps(player.hitbox.getShape());
        this.shape.overlaps(borders.returnBarriers());
    }

    update(){
        this.changeX(this.vx);
        this.changeY(this.vy);
    }

    checkRemoveCondition(){
        if(this.y < 100){
            this.clearCheck = true;
        }

        return this.clearCheck;
    }
}