
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box3, box3;
var paper
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(400, 680, 1600, 20);
	box1 = new Bin(600, 660, 100, 10);
	box2 = new Bin(550, 630, 10, 80);
	box3 = new Bin(650, 630, 10, 80);
	paper = new Paper(200, 380, 30);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:115,y:-115});
	}

}



