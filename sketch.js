const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var engine,world;
var ground;

var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  createSprite(400,200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();
  //plinko = new Plinko(240,400);
  //part = new Particle(240,200);

  Divisions();  
  Plinkos();
}

function draw() {
  background(0,191,254);  
  ground.display();
  //plinko.display();
  //part.display();

  divideDis();
  plinkoDis();
  Particles();
  ParticleDis();
}

function Divisions(){
  for (var x = 0;x <=width; x+=80){
    divisions.push(new Division(x,height - divisionHeight/2,10,divisionHeight));
  }
}

function divideDis(){
  for (var d = 0;d < divisions.length;d++){
    divisions[d].display();
  }
}

function Plinkos(){
  for ( var p=40;p<=width;p += 50){
    plinkos.push(new Plinko(p,75));
  }

  for ( var p=15;p<=width-10;p += 50){
    plinkos.push(new Plinko(p,175));
  }

  for ( var p=40;p<=width;p += 50){
    plinkos.push(new Plinko(p,275));
  }

  for ( var p=15;p<=width-10;p += 50){
    plinkos.push(new Plinko(p,375));
  }
}

function plinkoDis(){
  for (var l =0;l<plinkos.length;l++){
    plinkos[l].display();
  }
}

function Particles(){

  if (frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
}

function  ParticleDis(){
  for(var l = 0;l<particles.length;l++){
    particles[l].display();
  }
}
