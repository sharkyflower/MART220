class rectMaker
{
  
  constructor(x,y,w,h)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
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
    this.x += input;
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
  }
  
  draw()
  {
    rect(this.x, this.y, this.w, this.h);
  }

  rectCollisionCheck(inChar){
    this.isColliding = collideRectRect(this.x, this.y, this.w, this.h, 
        inChar.getX(), inChar.getY(), inChar.getW(), inChar.getH());
  }

}