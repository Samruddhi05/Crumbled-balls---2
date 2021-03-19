const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperBall, dustBinObject;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,370,width,20);
	paperBall = new Paper(200,150,70);
	dustBinObject = new Dustbin(1000,350);
	
	Engine.run(engine);
  
}


function draw() {
  
  background(240);
  
  Engine.update(engine);
  ground.display();
  paperBall.display();
  dustBinObject.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		var option = {
			x:130,
			y:-145
		}
	  Body.applyForce(paperBall.body,paperBall.body.position,option);  
	}
}