
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;

var score,ground;


var PLAY =1;
var END =0;
var gameState=PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
 
  monkey = createSprite(60,500,20,40);
monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.12;
    monkey.setCollider("circle",0,0,200)
  
  
  
  
  ground = createSprite(200,575,1200,80);
  ground.shapeColor=("brown");
  ground.velocityX=-3;
  ground.x = ground.width/2;
  
  
  
  
  //monkey.debug=true;
  
  
  score=0;
  obstacleGroup = new Group ();
}


function draw() {
 background("black");
  textSize(24);
 text("Survival Time ="+score,250,40); 
  
  
  
  
  
  
  if(gameState===PLAY){
    
    spawnObstacles();
    spawnfruit();
    
    
  if(frameCount%20===0){
    score=score+1;
  }
      }
  
  
  ground.x=ground.width/2;
 
  if (keyDown("space")&&monkey.y>=480){
      monkey.velocityY=-20;
      }
  monkey.velocityY=monkey.velocityY+0.8;
  

  
  
  
  if (monkey.isTouching(obstacleGroup)){
      monkey.setVelocityY=0;
    obstacleGroup.setVelocityX=0;
    ground.setVelocityX=0;
    obstacleGroup.destroyEach();
    
    
    gameState=END;
      }
  
  if(gameState===END){
     text("Game over",270,300);
     text("Press R to restart",230,350);
  }
  
  
  if(gameState===END&&keyDown("r")){
    gameState=PLAY;
  }
  
  monkey.collide(ground);
  
  drawSprites();
  
  monkey.depth=ground.depth
  monkey.depth=monkey.depth +1;
}



function spawnObstacles(){
 if (frameCount % 160 === 0){
   obstacle = createSprite(550,515,40,40);
   obstacle.addImage("obtacle",obstaceImage);
   obstacle.velocityX = -6;
   obstacle.lifetime=300;
   obstacle.scale=0.19;
   obstacleGroup.add(obstacle);

 }
}





function spawnfruit(){
  if(frameCount%80===0){
    
    banana = createSprite(500,0,40,20);
    banana.addImage("bananaImage",bananaImage);
    banana.lifetime=300;
    banana.velocityX=-3;
    banana.y=Math.round(random(300,350));
    banana.scale=0.1;
  }
}


























