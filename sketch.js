
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(20, 20, 20)
	box1 = new Dustbin(630, 200, 15, 80)
	box2 = new Dustbin(655, 200, 100, 15)
	box3 = new Dustbin(680, 200, 15, 80)
	ground = new Ground(200, 210, 2000, 10)
	
	ground.shapeColor = color(0, 0, 0)
	box1.shapeColor = color(255, 0, 0)
	box2.shapeColor = color(255, 0, 0)
	box3.shapeColor = color(255, 0, 0)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);

  keypressed();
  
  paper1.display(); 
  box1.display(); 
  box2.display(); 
  box3.display(); 
  ground.display(); 

  
};

function keypressed(){
  if (keyCode === UP_ARROW){

	  Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85, y:-85});
    
  }
}

