class foodCreator {

    constructor()
    {
        this.riceX1;
        this.riceX2; 
        this.riceY1;
        this.riceY2;
        this.riceWidth = 10;
        this.riceHeight = 5;

        this.riceRandomizerAmount = 154;

        this.riceRandomX = [];
        this.riceRandomY = [];

        this.variableRandomizer();
    }

    variableRandomizer(){
        this.riceX1 = random(10, 400);
        this.riceX2 = this.riceX1 + 70;
        this.riceY1 = random(10, 500);
        this.riceY2 = this.riceY1 + 15;

        this.riceRandomizer(this.riceRandomizerAmount);
    }
        
    makeFood(direction){
        this.riceMaker(direction);
    }

    riceMaker(direction){
        fill("#F6F8ED");
        stroke("#999999");

        for(var i=0; i<this.riceRandomX.length; i++){
            var flip = 1
            if(direction == "reverse"){
                translate(this.riceWidth,0);
                scale(-1.0,1.0);
                flip *= -1
            }
            ellipse(flip * this.riceRandomX[i], this.riceRandomY[i], this.riceWidth, this.riceHeight);
        }
    }

    riceRandomizer(i){
        for(var i=0; i<150; i++){
            this.riceRandomX[i] = ((Math.floor(Math.random() * ((this.riceX2-this.riceX1)+1))) + this.riceX1-1);
            this.riceRandomY[i] = ((Math.floor(Math.random() * ((this.riceY2-this.riceY1)+1))) + this.riceY1-1);
        }
    }

}