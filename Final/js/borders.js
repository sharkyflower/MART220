class borders{
    constructor(){
        this.leftBorder = new rectMaker(0,0,50,800);
        this.rightBorder = new rectMaker(550,0,250,800);
        this.topBorder = new rectMaker(0,0,800,15);
        this.botBorder = new rectMaker(0,760,800,50);
    }

    draw()
    {
        push();
        noStroke();
        fill(127,127,127);
            this.leftBorder.draw();
            this.rightBorder.draw();
            this.topBorder.draw();
            this.botBorder.draw();
        pop();
        
    }
}