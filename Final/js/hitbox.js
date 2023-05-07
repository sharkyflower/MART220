class hitbox
{
  constructor(x,y,w,h,condition)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.condition = condition;
    this.shape;
    this.createShape();
  }

  createShape(){
    this.shape = createSprite(this.x, this.y, this.w, this.h, this.condition);
  }

  changeColor(color){
    this.shape.color = color;
  }

  visibility(){
    this.shape.visible = false;
  }

  updateShape(){
    this.shape.remove();
    this.shape = createSprite(this.x, this.y, this.w, this.h, this.condition);
  }

  getShape(){
    return this.shape;
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

  changeAll(inX, inY, inW, inH){
    this.x = inX;
    this.y = inY;
    this.w = inW;
    this.h = inH;
    updateShape();
  }

  isColliding(inObj){
    return this.shape.collide(inObj);
  }

  isOverlapping(inObj){
    return this.shape.overlaps(inObj);
  }
}