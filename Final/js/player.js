class player
{
    constructor(x, y, w, h, vel){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vel = vel;
        this.hitbox = new hitbox(this.x-(this.w/2), this.y-(this.h/2), this.w, this.h, "d");
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

    changeVel(input){
        this.vel = input;
    }

    changeX(input){
        this.x += input
    }

    changeY(input){
        this.y += input;
    }

    changeW(input){
        this.w += input;
    }

    changeH(input){
        this.h += input;
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
        for(var i=0; i < 60; i+=15){
            stroke(255,255,255,255-(i*5));
            scribble.scribbleRect(this.x, this.y, this.w-i, this.h-i);
        }
        stroke(255,255,255,0);
        pop();

        this.movement();
        
    }

    movement(){
        if(kb.pressing("right")){
            this.hitbox.getShape.vel.x = 5;
            this.changeX(this.vel);
        }
        if(kb.pressing("left")){
            this.hitbox.getShape.vel.x = -5;
            this.changeX(-this.vel);
        }
        if(kb.pressing("up")){
            this.hitbox.getShape.vel.y = -5;
            this.changeY(-this.vel);
        }
        if(kb.pressing("down")){
            this.hitbox.getShape.vel.y = 5;
            this.changeY(this.vel);
        }
        if(!kb.pressing("right") && !kb.pressing("left") && !kb.pressing("up") && !kb.pressing("down")){
            this.hitbox.getShape.vel.x = 0;
            this.hitbox.getShape.vel.y = 0;
        }
    }
}