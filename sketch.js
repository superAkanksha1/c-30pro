const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, platform1, platform2;

var Hexagon;
var blue_block1,  blue_block2,  blue_block3,  blue_block14, blue_block5, blue_block6,  blue_block7,  blue_block8, blue_block9,  blue_block10,  blue_block11, blue_block12;
var pink_block1, pink_block2, pink_block3, pink_block4, pink_block5, pink_block6;
var green_block1,  green_block2,  green_block3,  green_block4,  green_block5,  green_block6;
var black_block1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height,1200,30);

    platform1 = new Ground(600,400,300,15);
    platform2 = new Ground(1000,300,250,15);
    
    //4th layer
    blue_block1 = new BlueBlock(510,385);
    blue_block2 = new BlueBlock(540,385);
    blue_block3 = new BlueBlock(570,385);
    blue_block4 = new BlueBlock(600,385);
    blue_block5 = new BlueBlock(630,385);
    blue_block6 = new BlueBlock(660,385);
    blue_block7 = new BlueBlock(690,385);

    //3rd layer
    pink_block1 = new PinkBlock(540,345);
    pink_block2 = new PinkBlock(570,345);
    pink_block3 = new PinkBlock(600,345);
    pink_block4 = new PinkBlock(630,345);
    pink_block5 = new PinkBlock(660,345);

    //2nd layer
    green_block1 = new GreenBlock(570,275);
    green_block2 = new GreenBlock(600,275);
    green_block3 = new GreenBlock(630,275);

    //1st layer
    black_block1 = new BlackBlock(600,235);
    
    //2nd platform 3rd layer
    blue_block8 = new BlueBlock(940,285);
    blue_block9 = new BlueBlock(970,285);
    blue_block10 = new BlueBlock(1000,285);
    blue_block11 = new BlueBlock(1030,285);
    blue_block12 = new BlueBlock(1060,285);

    green_block4 = new GreenBlock(970,265);
    green_block5 = new GreenBlock(1000,265);
    green_block6 = new GreenBlock(1030,265);

    pink_block6 = new PinkBlock(1000,245);

    Hexagon = new Polygon(200,300,50,50);

    slingshot = new SlingShot(Hexagon.body,{x:200 , y:300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(60,46,46);
  
  ground.display();

  platform1.display();
  platform2.display();
 
  blue_block1.display();
  blue_block2.display();
  blue_block3.display();
  blue_block4.display();
  blue_block5.display();
  blue_block6.display();
  blue_block7.display();
 
  pink_block1.display();
  pink_block2.display();
  pink_block3.display();
  pink_block4.display();
  pink_block5.display();

  green_block1.display();
  green_block2.display();
  green_block3.display();

  black_block1.display();

  blue_block8.display();
  blue_block9.display();
  blue_block10.display();
  blue_block11.display();
  blue_block12.display();

  green_block4.display();
  green_block5.display();
  green_block6.display();

  pink_block6.display()

  Hexagon.display();

  slingshot.display();  
  
  stroke("black");
  fill("white");
  textSize(20);
  text("Drag the hexagonal block and Release it, to launch it toward blocks", 350,100)
}
function mouseDragged(){
    Matter.Body.setPosition(Hexagon.body, {x: mouseX, y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
     slingshot.attach(Hexagon.body);
    }
}