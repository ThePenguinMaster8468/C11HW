var player,playerRun;
var path;
var pathImg; 
var InvisWall1;
var InvisWall2;

function preload(){
  playerRun = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage("Img",pathImg);
  path.scale = 1.2;
  path.velocityY = 4;

  player = createSprite(160,340,2,2);
  player.addAnimation("move",playerRun);
  player.scale = 0.1;

  InvisWall1 = createSprite(390,200,4,400);
  InvisWall1.visible = false;

  InvisWall2 = createSprite(20,200,4,400);
  InvisWall2.visible = false;
}

function draw() {
  background("green");
  player.x = World.mouseX;

  player.collide(InvisWall1);
  player.collide(InvisWall2);

  if(path.y>400){
    path.y = height/2;
  }
  
 drawSprites();
}