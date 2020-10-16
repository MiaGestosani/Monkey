
var monkey , monkey_running
var banana, bananaImage,bananaGroup, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  FoodGroup= new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  

 stroke("white");
  textSize=20;
  fill("white");
  text("score"+score,500,50);
  
   stroke("black");
  textSize=20;
  fill("black");
  survivialTime=Math.ceil(frameCount/frameRate())
  text("Survivial Time: "+survivialTime, 100,50);
  
}


function draw() {
  
background("white");
  
   stroke("white");
  textSize=20;
  fill("white");
  text("score"+score,500,50);
  
   stroke("black");
  textSize=20;
  fill("black");
  survivialTime=Math.ceil(frameCount/frameRate())
  text("Survivial Time: "+survivialTime, 100,50);
  
  //ground moving
  if(ground.x <0){
      ground.x =ground.width/2;
  }
 
  //monkey jump when press space
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY= monkey.velocityY + 0.8;
  monkey.collide(ground);
    spawnBanana();
  spawnObstacles();
   //FoodGroup.setLifetimeEach(-1);

  
  drawSprites();
}


function spawnBanana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -8;
    banana.scale= 0.1;
     //assign lifetime to the variable
    banana.lifetime = 200;
     FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,332,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    obstacle.scale = 0.1;
     obstacleGroup.add(obstacle);
  }
}



