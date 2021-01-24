 
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;

 var man;
 var ground,plat1,plat2; 
 var ground2;

 function preload(){
  // back = loadImage("grass2.png");
   backs = loadImage("bg3.jpeg");
   lavaa = loadImage("bg5.png");
 }


function setup() {

  engine = Engine.create();
  world = engine.world;

 //Create the Bodies Here.

Engine.run(engine);

//creating a canvas
createCanvas(3900,1000);



//ground
ground = new Ground(200,330,2190,10)
ground2 = new Ground(2080,330,420,10);

// the pc 
man = new Player(200,300,20,20);

//over here plat is platform
plat1 = new Platform(400,270,35,35); 
plat2 = new Platform(460,270,35,35); 
plat3 = new Platform(800,300,35,50); 
plat4 = new Platform(1000,300,35,50); 
lava = new Platform(440,325,200,20);


// over here obs refers to obstcale 
obs1 = new Obstacle(900,300,30,30);

// ug is underground
ug1 = new Underground(1300,452,10,255); 
ug2 = new Underground(1470,580,350,10); 
ug3 = new Underground(1350,430,10,210); 
ug4 = new Underground(1470,540,250,10); 
ug5 = new Underground(1650,550,10,70); 
ug6 = new Underground(1600,465,10,160); 
ug7 = new Underground(1680,520,70,10); 
ug8 = new Underground(1720,490,10,70); 
ug9 = new Underground(1750,450,70,10); 
ug10 = new Underground(1790,420,10,70); 
ug11 = new Underground(1830,390,70,10);
ug12 = new Underground(1870,360,10,70);
ug13 = new Underground(2290,500,10,350);
ug14 = new Underground(2470,670,350,10);
ug15 = new Underground(2350,475,10,290);
ug16 = new Underground(2470,625,250,10);
 

console.log("plat1_options--->"+ plat1);
console.log(plat1);
console.log(man);


}



function draw() {

  background(backs);  
  drawSprites();
  ground.display();
  ground2.display();

  lava.display();

  man.display();

  plat1.display(); 
  plat2.display();
  plat3.display();
  plat4.display();

  obs1.display();

  ug1.display();
  ug2.display();
  ug3.display();
  ug4.display();
  ug5.display();
  ug6.display();
  ug7.display();
  ug8.display();
  ug9.display();
  ug10.display();
  ug11.display();
  ug12.display();
  ug13.display();
  ug14.display();
  ug15.display();
  ug16.display();





text("Welcome Hope You Enjoy Our Game!",200,200,500,500);

console.log(man);

obs1.move();

image(lavaa,340,310,200,30);


//reset();


}

function keyPressed() {
if(keyCode===32){
  man.jump();

}
if(keyCode===39){
  man.walk();

}

 }

// function reset(){
// man.position.x = 200
// }





 


