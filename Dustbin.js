class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitition : 0.1,
            friction : 5.0,
            density : 5.0
        }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
   }
   display(){
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       fill(0);
       rect(0,0,this.width,this.height);
       pop();
    }
   }