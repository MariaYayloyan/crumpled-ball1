
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin1,dustbin2,dustbin3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(50,600);
	dustbin1 = new Dustbin(370,620,20,100);
	dustbin2 = new Dustbin(570,620,20,100);
	dustbin3 = new Dustbin(470,660,200,20);

	ground = new Ground(400,680,800,20);


	Engine.run(engine);
  
}


function draw() {
  background(250);
  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		(Matter.Body.applyForce(paper.body,paper.body.position,{x:92,y:-100}));
	}
}



