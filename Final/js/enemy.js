class enemy{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.whiteHealth = 385;
        this.redHealth = 50;
        this.hitbox = new hitboxAddon(this.x, this.y, this.w, this.h, "d");
        this.hitbox.getShape().overlaps(player.hitbox.getShape());
    }

    getX()
    {
        return this.hitbox.getX();
    }
    getY()
    {
        return this.hitbox.getY();
    }
    getW()
    {
        return this.hitbox.getW();
    }
    getH()
    {
        return this.hitbox.getH();
    }

    getHitbox(){
        return this.hitbox;
    }

    changeX(input){
        this.x += input
        this.hitbox.changeX(input);
    }

    changeY(input){
        this.y += input;
        this.hitbox.changeY(input);
    }

    changeW(input){
        this.w += input;
        this.hitbox.changeW(input);
    }

    changeH(input){
        this.h += input;
        this.hitbox.changeH(input);
    }

    changeAll(inX, inY, inW, inH){
        this.x += inX;
        this.y += inY;
        this.w += inW;
        this.h += inH;
        this.hitbox.changeAll(inX, inY, inW, inH);
    }
  
    draw()
    {
        push();
        stroke(255,127,127,255);
        scribble.scribbleRect(this.x, this.y, this.w, this.h);
        stroke(127,255,127,255);
        scribble.scribbleRect(this.x, this.y, this.w-20, this.h-20);
        stroke(127,127,255,255);
        scribble.scribbleRect(this.x, this.y, this.w-40, this.h-40);
        stroke(255,255,255,0);

        pop();
        
        this.healthDisplay();
    }

    healthDisplay(){
        push();
        noFill();
        stroke(255,0,0,127);
        strokeWeight(5);
        //top-left => top-right => bot-right => bot-left
        //total width: 435
        rect(80,30,this.redHealth,1,30,0,0,30);
        stroke(255,255,255,127);
        rect(135,30,this.whiteHealth,1,0,30,30,0);
        pop();
    }

    isOverlapping(inObj){
        return this.hitbox.isOverlapping(inObj);
    }

}