
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var parede1;
var parede2;
var ball;
var leftSide;
var rightSide;
var groundObj;
var radius;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	var ball_options = {
		isStatic:false,
		restruction:0.3,
		friction:0,
		density:1.2,
	}
	ball = Bodies.circle(600,600,1200,20,ball_options);
	World.add(world, ball);
	

	
	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1200,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x,ball.position.y,radius,radius);

	groundObj.display();
	keyPressed()
    Engine.update(engine);
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball,{ x : 0, y : -5}, { x : 5, y : 0});
	}
}

