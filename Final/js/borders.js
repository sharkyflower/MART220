class borders{
    constructor(){
        this.leftBorder = createSprite(0,400,70,800, "s");
        this.rightBorder = createSprite(770,400,400,800,"s");
        this.topBorder = createSprite(400,0,800,20,"s");
        this.botBorder = createSprite(400,780,800,50,"s");

        this.leftBorder.stroke = 127;
        this.rightBorder.stroke = 127;
        this.topBorder.stroke = 127;
        this.botBorder.stroke = 127;

        this.leftBorder.color = 127;
        this.rightBorder.color = 127;
        this.topBorder.color = 127;
        this.botBorder.color = 127;
    }

}