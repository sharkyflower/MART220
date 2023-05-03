class player
{
    constructor(x, y, w, h, vel){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vel = vel;
        this.hitbox = new rectMaker(this.x-(this.w/2), this.y-(this.h/2), this.w, this.h);
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
        for(var i=0; i < 60; i+=15){
            stroke(255,255,255,255-(i*5));
            scribble.scribbleRect(this.x, this.y, this.w-i, this.h-i);
        }
        stroke(255,255,255,0);
        //scribble.scribbleRect(this.x, this.y, this.w-10, this.h-10);
        this.hitbox.draw();
        pop();

        this.movement();
        
    }

    movement(){
        if(kb.pressing("right")){
            this.changeX(this.vel);
        }
        if(kb.pressing("left")){
            this.changeX(-this.vel);
        }
        if(kb.pressing("up")){
            this.changeY(-this.vel);
        }
        if(kb.pressing("down")){
            this.changeY(this.vel);
        }
    }
}