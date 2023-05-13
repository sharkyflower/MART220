class playerShotType{

    //TODO: make a new class [bullet]
    //change this class to [playerShotType]
    //updates
    
    constructor(x,y,type){
        this.x = x;
        this.y = y;
        this.type = type;
        this.clearCheck = false;

        this.bulletList = [];

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
        var centerBullet = new bullet(this.x, this.y, 0, -20, 10, 30, "k", "player");
        centerBullet.changeColor("#F5A9B8");
        centerBullet.changeDirection(90);
        centerBullet.overlapSwitch();

        var leftSpreadBullet = new bullet(this.x+10, this.y, 2, -20, 10, 30, "k", "player");
        leftSpreadBullet.changeColor("#F5A9B8");
        leftSpreadBullet.changeRotation(0);
        leftSpreadBullet.changeDirection(90);
        leftSpreadBullet.overlapSwitch();

        var rightSpreadBullet = new bullet(this.x-10, this.y, -2, -20, 10, 30, "k", "player");
        rightSpreadBullet.changeColor("#F5A9B8");
        rightSpreadBullet.changeRotation(-5);
        rightSpreadBullet.changeDirection(90);
        rightSpreadBullet.overlapSwitch();

        this.bulletList.push(centerBullet);
        this.bulletList.push(leftSpreadBullet);
        this.bulletList.push(rightSpreadBullet);
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

    update(){
        for (let i=this.bulletList.length-1; i>=0; i--){
            this.bulletList[i].changeX();
            this.bulletList[i].changeY();
        }
    }

    internalRemoveCondition(){
        for(let i=this.bulletList.length-1; i>=0; i--){
            if(this.bulletList[i].checkRemoveCondition()){
                this.bulletList[i].getShape().remove();
                this.bulletList.splice(i, 1);
            }
        }
    }

    checkRemoveCondition(){
        this.internalRemoveCondition();

        if(this.bulletList === undefined || this.bulletList.length == 0){
            this.clearCheck = true;
        }

        return this.clearCheck;
    }
}