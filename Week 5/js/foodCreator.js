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

        this.riceRandomX = [];
        this.riceRandomY = [];

        this.riceFlippedRandomX = [];
        this.riceFlippedRandomY = [];

        this.ogRicePositionX = [];
        this.ogRicePositionY = [];

        this.riceFlipperSelector = 0;

        this.variableRandomizer();
    }

    variableRandomizer(){
        this.riceX1 = random(10, 400);
        this.riceX2 = this.riceX1 + 70;
        this.riceY1 = random(10, 500);
        this.riceY2 = this.riceY1 + 15;

        this.riceRandomizer(this.riceRandomizerAmount);
        this.ogRicePositionX = this.riceRandomX.slice();
        this.ogRicePositionY = this.riceRandomY.slice();
    }
        
    makeFood(direction){
        this.riceMaker(direction);
        this.riceFlipper();
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

    riceFlipper(){
        if(this.riceFlipperSelector == 1){
            if(! (this.riceFlippedRandomX.length == this.riceRandomX.length)){
                for(i=0; i<this.riceRandomX.length; i++){
                    this.riceFlippedRandomX[i] = ((Math.random() * 5 - 2));
                    this.riceFlippedRandomY[i] = ((Math.random() * 5 - 2));
                }
            }
    
            for(i=0; i<this.riceRandomX.length; i++){
                this.riceRandomX[i] += this.riceFlippedRandomX[i];
                this.riceRandomY[i] += this.riceFlippedRandomY[i];
            }
        }
        if(this.riceFlipperSelector == 2){
            this.riceRandomX = this.ogRicePositionX.slice();
            this.riceRandomY = this.ogRicePositionY.slice();
            this.riceFlippedRandomX = [];
            this.riceFliipedRandomY = [];
            this.riceFlipperSelector = 0;
        }
    }

    riceFlipSelect(inNum){
        this.riceFlipperSelector = inNum;
    }

}