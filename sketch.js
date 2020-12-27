
var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,380,1200,20);
	paper= new Paper(50,360,30);
	dustbin1= new Dustbin(900,330,10,80);
	dustbin2= new Dustbin(775,330,10,80);
	dustbin3= new Dustbin(835,365,120,10);
	Engine.run(engine);
}


function draw() {
   background(0);
 Engine.update(engine);
 paper.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		//Matter.Body.setStatic(paper.body,false);
		Matter.Body.applyForce(paper.body,paper.body.position,{x:42,y:-42});
	}
}


