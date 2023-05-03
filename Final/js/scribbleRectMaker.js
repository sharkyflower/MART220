class scribbleRectMaker
{
  
    constructor(x,y,w,h,colliDetection = false, name)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.colliDetection = colliDetection;
        this.isColliding = false;
        this.name = name;
        this.collisionBox = new rectMaker(this.x, this.y, this.w, this.h);
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

    getName(){
        return this.collisionBox.getName();
    }

    getColliDetection(){
        return this.colliDetection();
    }

    getCollisionBox(){
        return this.collisionBox;
    }
  
    draw()
    {
        scribble.scribbleRect(this.x, this.y, this.w, this.h)
        this.collisionBox.draw()
    }

    rectCollisionCheck(inChar){
        this.isColliding = collideRectRect(this.getX(), this.getY(), this.getW(), this.getH(), 
            inChar.getX(), inChar.getY(), inChar.getW(), inChar.getH());
    }

    getCollision(){
        return this.isColliding;
    } 

    directionalCollisionCheck(inChar, existingColli){
        return this.collisionBox.directionalCollisionCheck(inChar, existingColli);
    }
    

}