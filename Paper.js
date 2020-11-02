class Paper{
 constructor(x,y){
    var options = {
        isStatic : false,
        restitition : 2.0,
        friction : 0.6,
        density : 1.0
    }

    this.body = Bodies.circle(x,y,30,options);

    World.add(world, this.body);
}
display(){
    var pos = this.body.position;

    push();

    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill(0,100,0);
    ellipse(0,0,30,30);

    pop();
}
}