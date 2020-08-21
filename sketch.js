
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;

var bar1,bar2,bar3;
var ground;
var paperObject;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject=new Paper(150,350,50);

	bar1=new Dustbin(480,610,20,100);
    bar2=new Dustbin(570,650,200,20);
	bar3=new Dustbin(680,610,20,100);

	ground = new Ground(400,height,800,20);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  
  bar1.display();
  bar2.display();
  bar3.display();

  ground.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:400,y:-400});

	 }
   }


