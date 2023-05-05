class scribbleRectMaker
{
  
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.collisionBox = new rectMaker(this.x, this.y, this.w, this.h, "static");
        this.collisionBox.visibility();
    }
  
    getX()
    {
        return this.collisionBox.getX();
    } 
    getY()
    {
        return this.collisionBox.getY();
    }
    getW()
    {
        return this.collisionBox.getW();
    }
    getH()
    {
        return this.collisionBox.getH();
    }

    getCollisionBox(){
        return this.collisionBox;
    }
  
    draw()
    {
        scribble.scribbleRect(this.x, this.y, this.w, this.h)
    }

}