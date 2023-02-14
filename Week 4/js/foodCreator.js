class foodCreator {

    constructor()
    {
        this.riceX1 = 215;
        this.riceX2 = 285; 
        this.riceY1 = 385;
        this.riceY2 = 400;
        this.riceWidth = 10;
        this.riceHeight = 5;

        this.riceRandomizerAmount = 154;

        this.riceRandomX = [];
        this.riceRandomY = [];

        this.fishList = ["Salmon", "Tuna"];
        this.fishPicked;

        this.variableRandomizer();
        this.riceMaker();
        this.fishMaker();

    }

    variableRandomizer(){
        this.riceX1 = random(10, 400);
        this.riceX2 = this.riceX1 + 70;
        this.riceY1 = this.riceX2 - 100;
        this.riceY2 = this.riceY1 + 15;

        this.riceRandomizer(this.riceRandomizerAmount);

        this.fishPicked = random(this.fishList);
    }
        
    riceMaker(){
        fill("#F6F8ED");
        stroke("#999999");

        for(i=0; i<riceRandomX.length; i++){
            ellipse(riceRandomX[i], riceRandomY[i], riceWidth, riceHeight);
        }
    }

    riceRandomizer(i){
        for(i=0; i<150; i++){
            riceRandomX[i] = ((Math.floor(Math.random() * ((riceX2-riceX1)+1))) + riceX1-1);
            riceRandomY[i] = ((Math.floor(Math.random() * ((riceY2-riceY1)+1))) + riceY1-1);
        }
    }

    fishMaker(){
        //fish maker
    
        if(fishPicked == "Salmon"){
            salmonMaker();
        }   
        else if(fishPicked == "Tuna"){
            tunaMaker();
        }
    }

    salmonMaker(){
    //salmon maker
    fill("#FA8072");
    stroke("rgba(0,0,0,0)");
    rect(200,370,100,20);
    fill("#FFFFFF");
    stroke("#000000");
    arc(250,390,100,20,PI,2*PI,OPEN);
    fill("#FA8072");
    stroke("#000000");
    arc(250,370,100,20,PI,2*PI,OPEN);
    line(200,370,200,390);
    line(300,370,300,390);

    //salmon line

    //x - > 16

    stroke("#ff91a4");
    strokeWeight(2);
    line(218,364,210,374);
    line(210,374,218,381);

    line(234,362,224,372);
    line(224,372,234,379);

    line(250,361.5,240,371);
    line(240,371,250,378.5);

    line(266,362,256,371);
    line(256,371,266,379);

    line(284,364,274,372);
    line(274,372,284,381);
    }   

    tunaMaker(){
    //salmon maker
    fill("#cf6275");
    stroke("rgba(0,0,0,0)");
    rect(200,370,100,20);
    fill("#FFFFFF");
    stroke("#000000");
    arc(250,390,100,20,PI,2*PI,OPEN);
    fill("#cf6275");
    stroke("#000000");
    arc(250,370,100,20,PI,2*PI,OPEN);
    line(200,370,200,390);
    line(300,370,300,390);

    //tuna line

    //x - > 16

    stroke("#df7285");
    strokeWeight(1);
    line(218,364,210,374);
    line(210,374,218,381);

    line(234,362,224,372);
    line(224,372,234,379);

    line(250,361.5,240,371);
    line(240,371,250,378.5);

    line(266,362,256,371);
    line(256,371,266,379);

    line(284,364,274,372);
    line(274,372,284,381);
    }

}