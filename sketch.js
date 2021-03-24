
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World


var engine, world
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  var option = {
    isStatic : true
  }

  ground = Bodies.rectangle(400,360, 800, 20, option);
 World.add(world,ground);

 var ball_option = {
   restitution : 1.0
 }
 ball = Bodies.circle(200,100,20,ball_option);
 World.add(world,ball);


}

function draw() {
 
  background("black");
  Engine.update(engine)
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}