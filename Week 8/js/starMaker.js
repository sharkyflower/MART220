class starMaker
{
  
  constructor(pt1, pt2, pt3, pt4, pt5, colliDetection = false, name)
  {
    this.pt1 = pt1;
    this.pt2 = pt2;
    this.pt3 = pt3;
    this.pt4 = pt4;
    this.pt5 = pt5;
    this.poly = [];
    this.polyInitializer();
    this.colliDetection = colliDetection;
    this.isColliding = false;
    this.name = name;
  }

  // user in x and y is the center point of the star drawn. 
  getColliDetection(){
    return this.ColliDetection;
  }

  getName(){
    return this.name;
  }

  getPoints(){
    return [this.pt1, this.pt2, this.pt3, this.pt4, this.pt5]
  }

  changePts(x, y, w, h){
    this.pt1 = this.coordination((x), (y - h))
    this.pt2 = this.coordination((x - (w * 0.75)), (y + h))
    this.pt3 = this.coordination((x + (w * 1.1)), (y + (-h * 0.25)))
    this.pt4 = this.coordination((x - (w * 1.1)), (y + (-h * 0.25)))
    this.pt5 = this.coordination((x + (w * 0.75)), (y + h))
  }

  polyInitializer(){
    this.poly[0] = createVector(this.pt1[0], this.pt1[1])
    this.poly[1] = createVector(this.pt2[0], this.pt2[1])
    this.poly[2] = createVector(this.pt3[0], this.pt3[1])
    this.poly[3] = createVector(this.pt4[0], this.pt4[1])
    this.poly[4] = createVector(this.pt5[0], this.pt5[1])
  }
  
  draw()
  {
    beginShape();
    for (const { x,y } of this.poly) vertex(x,y);
    endShape(CLOSE);
  }

  coordination(x, y){
    return [x, y]
  }

  rectCollisionCheck(inChar){
    this.isColliding = collideRectPoly(inChar.getX(), inChar.getY(), inChar.getW(), inChar.getH(),
        this.poly);
  }

  getCollision(){
    return this.isColliding;
  } 

}