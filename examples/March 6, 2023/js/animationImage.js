class animationImage
{

    constructor(fileNames, x, y, w, h)
    {
        this.fileNames = fileNames;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imageObjects = [];
        this.loadAnimation();
        this.i = 0;
        this.currentFrameCount = 0;
        this.direction  = "";
        
    }

    getX()
    {
        return this.x;
    }

    setX(x)
    {
        this.x = x;
    }

    setCurrentFrameCount(currentFrameCount)
    {

        this.currentFrameCount = currentFrameCount;
    }

    loadAnimation()
    {
        for(var i = 0; i < this.fileNames.length; i++)
        {
            this.imageObjects[i] = loadImage(this.fileNames[i]);
        }
         
    }


    drawAnimation()
    {  
        this.incrementIndex();
        if(this.direction == "reverse")
        {
            //translate(this.w,0);
            //scale(-1.0,1.0);
            image(this.imageObjects[this.i], -this.x, this.y, this.w, this.h);
        }
        else
        {
            image(this.imageObjects[this.i], this.x, this.y, this.w, this.h);
        }
        
           
        
    }

    incrementIndex() {
       
        if(this.currentFrameCount % 5 == 0)
        {
            this.i++;
        }
       
        if (this.i >= this.fileNames.length) {
            this.i = 0;
        }
    }

    updatePosition(direction)
    {
        this.direction = direction;
        if(direction == "forward")
        {
            this.x += 1;
        }
        else if(direction == "reverse")
        {   
            this.x -= 1;
            
        }
        else if(direction == "up")
        {   
            this.y -= 1;
            
        }
        else if(direction == "down")
        {   
            this.y += 1;
            
        }
    }

    isRectanglesColliding(rectangle2){

        return collideRectRect(this.x, this.y, 
         this.w, this.h,rectangle2.getX(), rectangle2.getY(),
          rectangle2.getW(), rectangle2.getH());
        
    }
    
}