// nameSpace to object
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// creating my own artifital engine, world, and bodies
var engine, world;
var ground;
var ball;
var up;
var down;
var left;
var rotater1;
var angle = 45

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  //console.log(world)

  var ground_options = {
    isStatic: true,
  };
  var ball_options = {
    isStatic: false,
    restitution: 0.95,
    frictionAir: 0.01,
  };
  ground = Bodies.rectangle(200, 380, 400, 20, ground_options);
  World.add(world, ground);
  console.log(world);
  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world, ball);

  up = createImg("up.png");
  up.size(50, 50);
  up.position(20, 50);
  up.mouseClicked(vForceup);

  down = createImg("down.png");
  down.size(70, 70);
  down.position(5, 120);
  down.mouseClicked(vForcedown);

  left = createImg("left.png");
  left.size(70, 70);
  left.position(20, 170);
  left.mouseClicked(vForceleft);

  rotater1 = Bodies.rectangle(200, 200, 10,80, ground_options);
  World.add(world, rotater1);
}

function draw() {
  background(0);
  //update engine created by us
  Engine.update(engine);
  fill("red");
  //rect(30, 20, 55, 55);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  
  text(mouseX + "," + mouseY, mouseX, mouseY);
  
  // rotater1
  push()
  rectMode(CENTER)
  translate(rotater1.position.x, rotater1.position.y,10,80)
  rotate(angle)
  rect(0,0,10,80)
  angle+=0.03
  pop()
}

function vForceup() {
  Matter.Body.applyForce(ball, ball.position, { x: 0, y: -0.05 });
}
function vForcedown() {
  Matter.Body.applyForce(ball, ball.position, { x: 0, y: 0.05 });
}
function vForceleft() {
  Matter.Body.applyForce(ball, ball.position, { x: -0.01, y: 0 });
}
