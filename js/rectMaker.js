class rectMaker
{
  
  constructor(x,y,w,h)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isColliding = false;
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
  
  draw()
  {
    rect(this.x, this.y, this.w, this.h);
  }

  rectCollisionCheck(inChar){
    this.isColliding = collideRectRect(this.x, this.y, this.w, this.h, 
        inChar.getX(), inChar.getY(), inChar.getW(), inChar.getH());
  }

  getCollision(){
    return this.isColliding;
  } 

}