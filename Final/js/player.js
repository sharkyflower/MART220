class player
{
    constructor(x, y, w, h, vel){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vel = vel;
        this.focusAlpha = 0;
        this.focusDiameter = 0;
        this.focusVisual;
        this.hitbox = new hitboxAddon(this.x, this.y, this.w, this.h, "d");
        this.hitbox.circlify(20);
        this.hitbox.visibility();
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

    changeX(){
        this.x = this.hitbox.getX();
    }

    changeY(){
        this.y = this.hitbox.getY();
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
        pop();

        push();
        fill(255,255,255);

        text("player's x: " + this.x, 250, 400);
        text("player's y: " + this.y, 250, 420);
        text("hitbox's x: " + this.hitbox.getX(), 250, 440);
        text("hitbox's y: " + this.hitbox.getY(), 250, 460);
        pop();

        this.focus();
        this.movement();
        
    }

    focus(){
        if(kb.presses("shift")){
            console.log("Shift is pressed");
            this.vel = 3;
        }
        if(kb.pressing("shift")){
            push();
            strokeWeight(3);
            fill(255,100,75,this.focusAlpha);
            stroke(127,25,25,this.focusAlpha);

            this.focusVisual = circle(this.x,this.y,this.focusDiameter);
            if(this.focusAlpha <= 255){
                this.focusAlpha += 50;
                if(this.focusAlpha > 255){
                    this.focusAlpha = 255;
                }
            }
            if(this.focusDiameter <= 15){
                this.focusDiameter += 7.5;
                if(this.focusDiameter > 15){
                    this.focusDiameter = 15;
                }
            }
            pop();
        }

        if(kb.released("shift")){
            this.vel = 5;
            this.focusVisual;
            //this.focusAlpha = 0;
            //this.focusDiameter = 0;
        }

        if(!kb.pressing("shift") && (this.focusAlpha != 0 || this.focusDiameter != 0)){
            push();
            strokeWeight(3);
            fill(255,100,75,this.focusAlpha);
            stroke(127,25,25,this.focusAlpha);

            this.focusVisual = circle(this.x,this.y,this.focusDiameter);
            if(this.focusAlpha > 0){
                this.focusAlpha -= 50;
                if(this.focusAlpha <= 0){
                    this.focusAlpha = 0;
                }
            }
            if(this.focusDiameter > 0){
                this.focusDiameter -= 7.5;
                if(this.focusDiameter <= 0){
                    this.focusDiameter = 0;
                }
            }
            pop();
        }
    }

    movement(){
        if(kb.pressing("right")){ // move right
            this.hitbox.changeX(this.vel);
            this.changeX();
        }
        if(kb.pressing("left")){ // move left
            this.hitbox.changeX(-this.vel);
            this.changeX();
        }
        if((kb.pressing("right") && kb.pressing("left")) || (!kb.pressing("right") && !kb.pressing("left"))){
            // in the event that player pressing both a and d
            // and in the event that player pressing w and d then let go of d [drifting]
            // set vel of x to 0
            this.hitbox.changeX(0);
            this.changeX();
        }
        if(kb.pressing("up")){ // move up
            this.hitbox.changeY(-this.vel);
            this.changeY();
        }
        if(kb.pressing("down")){ // move down
            this.hitbox.changeY(this.vel);
            this.changeY();
        }
        if((kb.pressing("up") && kb.pressing("down")) || (!kb.pressing("up") && !kb.pressing("down"))){
            // in the event that player pressing both w and s
            // and in the event that player pressing w and d then let go of w [drifting]
            // set vel of y to 0
            this.hitbox.changeY(0);
            this.changeY();
        }
        if(!kb.pressing("right") && !kb.pressing("left") && !kb.pressing("up") && !kb.pressing("down")){
            // if not pressing any movement key
            // stop moving
            this.hitbox.changeX(0);
            this.hitbox.changeY(0);
            this.changeX();
            this.changeY();
        }
    }

}