class Particle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.vx = random(-1,1);
        this.vy = random(-5,-1);
        this.alpha = 255;
        this.r = random(64,193);
        this.g = random(64,193);
        this.b = random(64,193);
    }

    finished(){
        return this.alpha < 0;
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show(){
        noStroke();
        fill(this.r, this.g, this.b, this.alpha);
        ellipse(this.x, this.y, 16);
    }
}