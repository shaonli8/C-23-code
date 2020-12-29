const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies

var engine,world;
var ground,box1,box2;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  ground = new Ground(400,380,800,20)
  box1 = new Box(400,200,50,50)
  box2 = new Box(425,100,50,80)
}

function draw() {
  background(0); 
  Engine.update(engine);
  
  ground.display();
  box1.display();
  box2.display();
}

