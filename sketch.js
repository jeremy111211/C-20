
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle = 60;

var ball2, ball3;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(250,10,20,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball3);

  wedge = Bodies.rectangle(150,150,100,10,ground_options);
  World.add(world,wedge);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);



  Matter.Body.rotate(wedge, angle);
  push()
  translate(wedge.position.x, wedge.position.y)
  rotate(angle);
  fill("yellow");
  rect(0,0, 150, 10)
  pop()

  angle += 0.1;
 
}

