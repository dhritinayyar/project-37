var back,backImg;
var monkey,monkeyImg;
var ground;
var banana,bananaImg; 
var obstacle,obstacleImg;
var score=0;
var survivalTime=0;
function preload(){
monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png")  
bananaImg=loadImage("banana.jpg");  
obstacleImg=loadImage("tumble.png"); 
  backImg=loadImage("back.png");
  
  
}
function setup(){
createCanvas(400,400); 

back=createSprite(0,200,1000,400);  
back.addImage(backImg);
back.velocityX=-4  
  
monkey=createSprite(40,350,10,20);  
monkey.addAnimation("Running",monkeyImg); 
 monkey.scale=0.1; 

  
ground=createSprite(200,390,800,10);
ground.velocityX=-4; 
ground.visible=false;  
 
bananaGroup=createGroup();
obstacleGroup=createGroup();  
score=0; 
 survivalTime=0; 
}

function draw(){
 background(backImg);




 camera . position . x= monkey.x;

 if(keyDown("space")){
 monkey.velocityY=-12;     
    
    
    }
monkey.velocityY=monkey.velocityY+0.8;  
monkey.collide(ground); 
  
 if(ground.x<0){
  ground.x=ground.width/2;  
    } 
  
 
 if(back.x<0){
  back.x=back.width/2;  
    } 
  
  
  if(bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach();
    score = score + 2 ;
     
     }
 
 if(obstacleGroup.isTouching(monkey)){
   monkey.scale=0.1;   
   score=0;
    
    
    } 
  
switch(score){
 case 10: monkey.scale=0.12;   
 break;
 
 case 20: monkey.scale=0.13;
 break;
 
 case 30: monkey.scale=0.14;
  break;
  
  case 40 : monkey.scale=0.15; 
   break;
   

  case 50 : monkey.scale=0.16; 
   break;   
    
 
  case 70 : monkey.scale=0.18; 
   break;   
  
   default: break;
   
}  
  
food(); 
obstacles();  
  
drawSprites();
 
 
  textSize(20);
  strokeWeight(40);
  fill("red")
  text("SCORE:"+score,120,40)
  
  
  
 survivalTime=survivalTime + Math.round (getFrameRate()/60);
  textSize(20);
  strokeWeight(40);
  fill("yellow")
  text("SurvivalTime:"+survivalTime,80,60)  
}

function food (){
if(frameCount%80===0){
 banana=createSprite(400,random(120,200),10,20);  banana.addImage(bananaImg);
 banana.scale=0.2; 
 banana.velocityX=-5;
 banana.lifetime=100;
 bananaGroup.add(banana); 
   
   }  
  
  
}

function obstacles (){
if(frameCount%300===0){
 obstacle=createSprite(400,370,10,20);  obstacle.addImage(obstacleImg);
 obstacle.scale=0.1; 
 obstacle.velocityX=-5;
 obstacle.lifetime=100;
 obstacleGroup.add(obstacle); 
   
   }  
  
  
}


