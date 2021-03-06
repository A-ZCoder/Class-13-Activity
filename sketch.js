var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage,cactusImg,cactusImg2,cactusImg3,cactusImg4,cactusImg5,cactusImg6;

var score = 0;

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  cactusImg = loadImage("obstacle1.png");
  cactusImg2 = loadImage("obstacle2.png");
  cactusImg3= loadImage("obstacle3.png");
  cactusImg4= loadImage("obstacle4.png");
  cactusImg5= loadImage("obstacle5.png");
  cactusImg6= loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -6;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacles();

text("Score=" + score, 500,30);
score=score+Math.round(frameCount/60);


  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 190;
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}



function spawnObstacles() {
if(frameCount %100 === 0) {
cactus = createSprite(590,160,10,10);


cactus.velocityX = -6;

var rand = Math.round(random(1,6));
switch(rand) {
  case 1: cactus.addImage(cactusImg2);
  break;
  case 2: cactus.addImage(cactusImg5);
  break;
  case 3: cactus.addImage(cactusImg3);
  break;
  case 4: cactus.addImage(cactusImg);
  break;
  case 5: cactus.addImage(cactusImg6);
  break;
  case 6: cactus.addImage(cactusImg4);
  break;
  default:break

}

cactus.scale=0.7;

cactus.lifetime=190;
}

if(frameCount %254 === 0) {
  cactus = createSprite(590,160,10,10);
  
  
  cactus.velocityX = -6;
  
  var rand = Math.round(random(1,6));
  switch(rand) {
    case 1: cactus.addImage(cactusImg2);
    break;
    case 2: cactus.addImage(cactusImg5);
    break;
    case 3: cactus.addImage(cactusImg3);
    break;
    case 4: cactus.addImage(cactusImg);
    break;
    case 5: cactus.addImage(cactusImg6);
    break;
    case 6: cactus.addImage(cactusImg4);
    break;
    default:break
  }
cactus.scale=0.670;

cactus.lifetime=190;
}

}





