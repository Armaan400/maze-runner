const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var wall1,pc,pc_upidle,pc_downidle,pc_leftidle,pc_rightidle;
var pc_upwalk,pc_downwalk,pc_leftwalk,pc_rightwalk

function preload() {
backgroundImg=loadImage("ground.png")
pc_downidle=loadAnimation("Character with sword and shield/idle/idle down1.png","Character with sword and shield/idle/idle down2.png")
pc_leftidle=loadAnimation("Character with sword and shield/idle/idle left1.png","Character with sword and shield/idle/idle left2.png")
pc_rightidle=loadAnimation("Character with sword and shield/idle/idle right1.png","Character with sword and shield/idle/idle right2.png")
pc_upidle=loadAnimation("Character with sword and shield/idle/idle up1.png","Character with sword and shield/idle/idle up2.png")
pc_downwalk=loadAnimation("Character with sword and shield/walk/walk down1.png","Character with sword and shield/walk/walk down2.png","Character with sword and shield/walk/walk down3.png","Character with sword and shield/walk/walk down4.png")
pc_upwalk=loadAnimation("Character with sword and shield/walk/walk up1.png","Character with sword and shield/walk/walk up2.png","Character with sword and shield/walk/walk up3.png","Character with sword and shield/walk/walk up4.png")
pc_leftwalk=loadAnimation("Character with sword and shield/walk/walk left1.png","Character with sword and shield/walk/walk left2.png","Character with sword and shield/walk/walk left3.png","Character with sword and shield/walk/walk left4.png")
pc_rightwalk=loadAnimation("Character with sword and shield/walk/walk right1.png","Character with sword and shield/walk/walk right2.png","Character with sword and shield/walk/walk right3.png","Character with sword and shield/walk/walk right4.png")



}

function setup() {
  createCanvas(windowWidth,windowHeight);
   pc=createSprite(220,705,100,100)
   pc.addAnimation("pc",pc_upidle)
   pc.scale=2


  engine = Engine.create();
  world = engine.world;

wall1=new Mapwall(955,685,1250,5)
wall2=new Mapwall(1590,345,20,685)
wall3=new Mapwall(10,345,20,685);
wall4=new Mapwall(620,8,1200,5);
wall5=new Mapwall(180,85,20,145)
wall6=new Mapwall(525,150,20,140)
wall7=new Mapwall(350,50,20,80)
wall8=new Mapwall(260,160,185,5)
wall9=new Mapwall(850,50,20,80)
wall10=new Mapwall(680,80,350,5)
wall11=new Mapwall(750,140,450,5)
wall12=new Mapwall(610,215,150,5)
wall13=new Mapwall(1510,10,150,5)
wall14=new Mapwall(65,685,150,5)
wall15=new Mapwall(1415,190,20,230)
wall16=new Mapwall(1500,300,150,5)
wall17=new Mapwall(1500,500,200,5)
wall18=new Mapwall(1325,365,200,5)
wall19=new Mapwall(1415,400,20,80)
wall20=new Mapwall(1195,570,400,5)
wall21=new Mapwall(1230,350,20,320)
wall22=new Mapwall(1110,80,250,5)
wall23=new Mapwall(1230,110,20,60)
wall24=new Mapwall(1115,320,250,5)
wall25=new Mapwall(1110,500,250,5)
wall26=new Mapwall(1230,625,20,120)
wall27=new Mapwall(985,185,20,200)
wall28=new Mapwall(990,375,20,115)
wall29=new Mapwall(830,425,300,5)
wall30=new Mapwall(845,525,20,200)
wall31=new Mapwall(910,625,150,5)
wall32=new Mapwall(845,255,20,100)
wall33=new Mapwall(685,350,15,150)
wall34=new Mapwall(530,280,300,5)
wall35=new Mapwall(420,520,470,5)
wall36=new Mapwall(500,610,350,5)
wall37=new Mapwall(325,645,15,75)
wall38=new Mapwall(180,520,20,200)


  
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);


if(keyDown("UP_ARROW")){
  pc.addAnimation("upwalk",pc_upwalk)
  pc.y= pc.y-2

}else{
   pc.addAnimation("idle",pc_upidle)
}

if(keyDown("DOWN_ARROW")){
  pc.addAnimation("downwalk",pc_downwalk)
  pc.y=pc.y+2
}

if(keyDown("LEFT_ARROW")){
  pc.x=pc.x-2
}



if(keyDown("RIGHT_ARROW")){
  pc.x=pc.x+2
}









  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();
  wall23.display();
  wall24.display();
  wall25.display();
  wall26.display();
  wall27.display();
  wall28.display();
  wall29.display();
  wall30.display();
  wall31.display();
  wall32.display();
  wall33.display();
  wall34.display();
  wall35.display();
  wall36.display();
  wall37.display();
  wall38.display();

  console.log(mouseX,mouseY)



  drawSprites();



}


