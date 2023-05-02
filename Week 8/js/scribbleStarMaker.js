class scribbleStarMaker
{
  
  constructor(x, y, w, h, colliDetection = false, name)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colliDetection = colliDetection
    this.isColliding = false;
    this.name = name;
    this.pt1 = this.coordination((this.x), (this.y - this.h))
    this.pt2 = this.coordination((this.x - (this.w * 0.75)), (this.y + this.h))
    this.pt3 = this.coordination((this.x + (this.w * 1.1)), (this.y + (-this.h * 0.25)))
    this.pt4 = this.coordination((this.x - (this.w * 1.1)), (this.y + (-this.h * 0.25)))
    this.pt5 = this.coordination((this.x + (this.w * 0.75)), (this.y + this.h))
    this.collisionBox = new starMaker(this.pt1, this.pt2, this.pt3, this.pt4, this.pt5, this.colliDetection, this.name);
}

  // user in x and y is the center point of the star drawn. 

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

  getColliDetection(){
    return this.ColliDetection;
  }

  getName(){
    return this.name;
  }

  getCollisionBox(){
    return this.collisionBox;
  }

  getPoints(){
    return [this.pt1, this.pt2, this.pt3, this.pt4, this.pt5]
  }

  changeX(input){
    this.x = input;
  }

  changeY(input){
    this.y = input;
  }

  changeW(input){
    this.w = input;
  }

  changeH(input){
    this.h = input;
  }

  changePts(){
    this.pt1 = this.coordination((this.x), (this.y - this.h))
    this.pt2 = this.coordination((this.x - (this.w * 0.75)), (this.y + this.h))
    this.pt3 = this.coordination((this.x + (this.w * 1.1)), (this.y + (-this.h * 0.25)))
    this.pt4 = this.coordination((this.x - (this.w * 1.1)), (this.y + (-this.h * 0.25)))
    this.pt5 = this.coordination((this.x + (this.w * 0.75)), (this.y + this.h))
  }

  changeAllFundamental(inX, inY, inW, inH){
    this.x = inX;
    this.y = inY;
    this.w = inW;
    this.h = inH;
  }

  changeCollisionBox(){
    this.collisionBox.changePts(this.x, this.y, this.w, this.h);
  }
  
  draw()
  {
    scribble.scribbleLine(this.pt1[0], this.pt1[1], this.pt2[0], this.pt2[1]);
    scribble.scribbleLine(this.pt2[0], this.pt2[1], this.pt3[0], this.pt3[1]);
    scribble.scribbleLine(this.pt3[0], this.pt3[1], this.pt4[0], this.pt4[1]);
    scribble.scribbleLine(this.pt4[0], this.pt4[1], this.pt5[0], this.pt5[1]);
    scribble.scribbleLine(this.pt5[0], this.pt5[1], this.pt1[0], this.pt1[1]);

    this.collisionBox.draw();
  }

  coordination(x, y){
    return [x, y]
  }

  rectCollisionCheck(inChar){
    this.collisionBox.rectCollisionCheck(inChar);
    }

  getCollision(){
    return this.collisionBox.isColliding;
  } 

}