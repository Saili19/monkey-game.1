 
var monkey , monkey_running;
var  bananaImage , obstacleImage;
var bananaGroup, obstacleGroup;
var  ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600,400)
  
monkey=createSprite(50,160,50,60);
monkey.addAnimation("runnimg",monkey_running);
monkey.scale=0.1;
 
  
ground=createSprite(400,350,900,10);
ground.velocityX=-5;
ground.x=ground.width/2; 
  
bananaGroup=createGroup();
obstacleGroup=createGroup();
  
 
  
survivalTime=0;
  
}


function draw() {
  
  background("white");
  
  stroke("black");
  textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("survivalTime: "+survivalTime,100,50);
  
   if(ground.x<0){
  ground.x=ground.width/2 
    
  }
  if(keyDown("space")&& monkey.y >= 175) {
    monkey.velocityY=-10;
    
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground);
  console.log(monkey.y)
  
  food();
  obstacle();
  drawSprites();
}
function food(){
  
  if(frameCount%80===0){
   var banana =createSprite(400,120,30,40); 
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=125;
    
    bananaGroup.add(banana);
    
  }
}

function obstacle (){
 
  if(frameCount%300===0){
   var stone=createSprite(600, 326,10,40);
    stone.velocityX=-3;
    stone.addImage(obstacleImage);
    stone.x=Math.round(random(500,600));
    stone.scale=0.1;
    stone.lifetime=170;
    
     obstacleGroup.add(stone);
    
  }
}

  

