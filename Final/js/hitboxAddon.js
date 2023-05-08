class hitboxAddon{
    constructor(x,y,w,h,condition){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.condition = condition;
        this.alpha = 255;
        this.shape;
        this.createShape();
        //this.visibility();
    }

    createShape(){
        this.shape = createSprite(this.x, this.y, this.w, this.h, this.condition);
        this.shape.rotationLock = true;
    }

    changeColor(inColor){
        this.shape.color = inColor;
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
}