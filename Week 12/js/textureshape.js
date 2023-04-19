class textureShape {

    //GOAL: create random shape when setup'd 

    constructor(imageFile, x, y, z)
    {
        this.imageFile = imageFile;
        this.x = x;
        this.y = y;
        this.z = z;
        this.rotX;
        this.rotY;
        this.rotZ;

        // these parameters will be setup depending on what shape is chosen
        this.w; //width
        this.h; //height
        this.d; //depth
        this.r; //radius
        this.tubeR; //tube radius [for torus]
        
        //radius x,y,z for ellipsoid
        this.rx;
        this.ry;
        this.rz; 

        // optional details
        this.detailX;
        this.detailY;

        // [random shape] selected
        this.selectedShape;

        // setups for shape
        this.shapeSetupFunctions = [
            this.setPlane,
            this.setBox,
            this.setSphere,
            this.setCylinder,
            this.setCone,
            this.setEllipsoid,
            this.setTorus
        ]

        // choose random function to set shape up
        this.chosenShapeSetup = this.shapeSetupFunctions[Math.floor(Math.random()*this.shapeSetupFunctions.length)]
        this.chosenShapeSetup();

        this.changeRotation();

        //console.log("x: " + this.x + "; y: " + this.y + "; z: " + this.z);
        //zRandom = (Math.random()*0.01);
    }

    // shape setup functions [all values randomized within range]
    setPlane(){
        this.selectedShape = "Plane";
        //console.log("plane'd");
        //need: w, h
        //range between 50-200
        this.w = Math.floor(Math.random() * 151) + 50;
        this.h = this.w;
    }

    setBox(){
        this.selectedShape = "Box";
        //console.log("box'd");
        //need: w, h, d
        //range between 50-175
        this.w = Math.floor(Math.random() * 126) + 50;
        this.h = this.w;
        this.d = this.w;
    }

    setSphere(){
        this.selectedShape = "Sphere";
        //console.log("sphere'd");
        //need: r, detailX, detailY
        //range between 50-150
        this.r = Math.floor(Math.random() * 101) + 50;
        //range between 2-24
        this.detailX = Math.floor(Math.random() * 23) + 2;
        this.detailY = Math.floor(Math.random() * 23) + 2;
    }
    
    setCylinder(){
        this.selectedShape = "Cylinder";
        //console.log("cylinder'd");
        //need: r, h, detailX, detailY
        //range between 50-100
        this.r = Math.floor(Math.random() * 51) + 50;
        //range between 100-250
        this.h = Math.floor(Math.random() * 151) + 100;
        //range between 2-24
        this.detailX = Math.floor(Math.random() * 23) + 2;
        this.detailY = Math.floor(Math.random() * 23) + 2;
    }

    setCone(){
        this.selectedShape = "Cone";
        //console.log("cone'd");
        //need: r, h, detailX, detailY
        //range between 50-100
        this.r = Math.floor(Math.random() * 51) + 50;
        //range between 100-250
        this.h = Math.floor(Math.random() * 151) + 100;
        //range between 2-24
        this.detailX = Math.floor(Math.random() * 23) + 2;
        this.detailY = Math.floor(Math.random() * 23) + 2;        
    }

    setEllipsoid(){
        this.selectedShape = "Ellipsoid";
        //console.log("ellipsoid'd");
        //need: rx, ry, rz, detailX, detailY
        //range between 50-125
        this.rx = Math.floor(Math.random() * 76) + 50;
        this.ry = Math.floor(Math.random() * 76) + 50;
        this.rz = Math.floor(Math.random() * 76) + 50;
        //range between 2-24
        this.detailX = Math.floor(Math.random() * 23) + 2;
        this.detailY = Math.floor(Math.random() * 23) + 2;   
    }

    setTorus(){
        this.selectedShape = "Torus";
        //console.log("torus'd");
        //need: r, tubeR, detailX, detailY
        //range between 50-100
        this.r = Math.floor(Math.random() * 51) + 50;
        //range between 25-75
        this.tubeR = Math.floor(Math.random() * 51) + 25;
        //range between 3-24
        this.detailX = Math.floor(Math.random() * 22) + 3;
        this.detailY = Math.floor(Math.random() * 22) + 3; 
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getZ(){
        return this.z;
    }

    getImageFile(){
        return this.imageFile;
    }

    changeLocation(){
        var randomOnset = [-1,1][Math.round(Math.random())];

        if(randomOnset = -1){
            //range between -375~-200 & 200~375
            this.x = (Math.floor(Math.random() * 176) + 200) * [-1,1][Math.round(Math.random())];
            //range between -375~375
            this.y = (Math.floor(Math.random() * 751) - 375);
        }
        else if(randomOnset = 1){
            //range between -375~-200 & 200~375
            this.y = (Math.floor(Math.random() * 176) + 200) * [-1,1][Math.round(Math.random())];
            //range between -375~375
            this.x = (Math.floor(Math.random() * 751) - 375) * [-1,1][Math.round(Math.random())];
        }


        //range between -10~10
        this.z = (Math.floor(Math.random() * 21) - 10);

        console.log("x: " + this.x + "; y: " + this.y + "; z: " + this.z);
    }

    changeRotation(){
        this.rotX = (Math.random() * 0.02) + 0.01;
        this.rotY = (Math.random() * 0.02) + 0.01;
        this.rotZ = (Math.random() * 0.02) + 0.01;
    }

    draw(fCount){
        push();

        translate(this.x, this.y, this.z);

        normalMaterial();
        rotateX(this.rotX * fCount);
        rotateY(this.rotY * fCount);
        rotateZ(this.rotZ * fCount);
        texture(this.imageFile);
        
        switch(this.selectedShape){
            case "Plane":
                //need: w, h
                plane(this.w, this.h);
                break;
            case "Box":
                //need: w, h, d
                box(this.w, this.h, this.d);
                break;
            case "Sphere":
                //need: r, detailX, detailY
                sphere(this.r, this.detailX, this.detailY);
                break;
            case "Cylinder":
                //need: r, h, detailX, detailY
                cylinder(this.r, this.h, this.detailX, this.detailY);
                break;
            case "Cone":
                //need: r, h, detailX, detailY
                cone(this.r, this.h, this.detailX, this.detailY);
                break;
            case "Ellipsoid":
                //need: rx, ry, rz, detailX, detailY
                ellipsoid(this.rx, this.ry, this.rz, this.detailX, this.detailY);
                break;
            case "Torus":
                //need: r, tubeR, detailX, detailY
                torus(this.r, this.tubeR, this.detailX, this.detailY);
                break;
        }

        pop();

        /*
    normalMaterial();
    texture(transflag);
    rotateX(frameCount * Math.PI * 0.01);
    rotateY(frameCount * Math.PI * 0.01);
    rotateZ(frameCount * Math.PI * 0.01 * zRandom);
    box(100,100,100);
        */
    }


}