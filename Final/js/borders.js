class borders{
    constructor(){
        this.leftBorder = createSprite(0,400,70,800, "n");
        this.rightBorder = createSprite(770,400,400,800,"n");
        this.topBorder = createSprite(400,0,800,20,"n");
        this.botBorder = createSprite(400,780,800,50,"n");

        this.barrier = new Sprite([[35,10],[570,10],[570,755],[35,755],[35,10.1]],"s");
        this.barrier.stroke = "#BBBBBB"

        this.leftBorder.stroke = 127;
        this.rightBorder.stroke = 127;
        this.topBorder.stroke = 127;
        this.botBorder.stroke = 127;

        this.leftBorder.color = 127;
        this.rightBorder.color = 127;
        this.topBorder.color = 127;
        this.botBorder.color = 127;

        this.leftBorder.layer = 10;
        this.rightBorder.layer = 10;
        this.topBorder.layer = 10;
        this.botBorder.layer = 10;
    }

    returnBarriers(){
        return this.barrier;
    }
}