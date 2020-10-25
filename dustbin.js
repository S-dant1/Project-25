class Bin{
    constructor(x, y, width, height){


    var options_b= {
        isStatic: true


    }
       this.body = Bodies. rectangle(x, y, width, height, options_b);
       this.width = width;
       this.height = height;
       this.image = loadImage("dustbingreen.png");
       World.add(world, this.body);



    }
display(){

    var pos = this.body.position;
    push ();

image(this.image, 550, 570, 100, 100);




    pop ();
}


}