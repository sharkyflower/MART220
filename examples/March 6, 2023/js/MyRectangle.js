class MyRectangle
{
  
  constructor(x,y,w,h, r, g,b)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
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
  getR()
  {
    return this.r;
  }
  getG()
  {
    return this.g;
  }
  draw()
  {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.w, this.h);
  }
}