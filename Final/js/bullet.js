class bullet{
        //TODO: make a new class [bullet]
    //change this class to [playerShotType]
    //updates
    
    constructor(x,y,vx,vy,w,h,condition,user){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.w = w;
        this.h = h;
        this.condition = condition;
        this.user = user;
        this.clearCheck = false;

        this.alpha;
        this.color;

        this.shape;

        this.initialize();
        //this.visibility();
    }

    initialize(){
        this.shape = createSprite(this.x, this.y, this.w, this.h, this.condition);
        this.shape.rotationLock = true;
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

    changeX(){
        this.shape.vel.x = this.vx;
        this.x = this.shape.x;
    }

    changeY(){
        this.shape.vel.y = this.vy;
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
        this.shape.overlaps(enemy.hitbox.getShape());
        this.shape.overlaps(borders.returnBarriers());
        this.shape.layer=1;
    }

    update(){
        this.changeX(this.vx);
        this.changeY(this.vy);
    }

    checkRemoveCondition(){
        if(this.user == "player"){
            if(this.y < 10 || this.x < 10 || this.x > 595){
                this.clearCheck = true;
            }
            else if(enemy.isOverlapping(this.shape)){
                this.clearCheck = true;
            }

        }
        return this.clearCheck;
    }
}