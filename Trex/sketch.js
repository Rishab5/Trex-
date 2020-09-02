var ground2,trex,ig,hello,cactuses,start=1,gamestate=start,end=0,gameover,restart,clouds,obstacle,cactus,select;
var trexrunning,trexcollided,groundimage,cloudimage,ob1,ob2,ob3,ob4,ob5,ob6,restartimage,gameoverimage,junksound,diesound,alersound;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6
function preload(){
  trexrunning=loadAnimation("trex1.png","trex3.png","trex4.png")
trexcollided=loadAnimation("trex_collided.png")
  groundimage=loadImage("ground2.png")
  cloudimage=loadImage("cloud.png")
 ob1=loadImage("obstacle1.png")
 ob2=loadImage("obstacle2.png")
ob3=loadImage("obstacle3.png")
ob4=loadImage("obstacle4.png")
ob5=loadImage("obstacle5.png")
ob6=loadImage("obstacle6.png")
               gameoverimage=loadImage("gameOver.png")
restartimage=loadImage("restart.png")
}
function setup(){
  createCanvas(600,200);


 ground2 = createSprite(200,180,400,20)
 trex = createSprite(50,180,20,50)
trex.addAnimation("trex",trexrunning)
trex.scale=0.5
ground2.addImage(groundimage)
ground2.scale=2
 ig = createSprite(200,190,400,10)
ig.visible=false
//trex.setCollider("rectangle",0,0,50,50)
 cactuses = createGroup();
 hello = createGroup();
 gameover = createSprite(200,200)
gameover.addImage(gameoverimage)
gameover.scale=0.5
 restart = createSprite(187,84)
restart.addImage(restartimage)
gameover.visible=false
restart.visible=false

  ground2.velocityX=-25
  ground2.velocityX=-25



 score = 0
}


















function draw() {
background("white")
if(gamestate==start){
 score = score+Math.round(frameCount/100)
textSize(30)
fill("black")

text(score, 350, 27);
  
 
 

if(keyDown("space")&&trex.y>=340){
trex.velocityY=-5
//playSound("sound://category_jump/arcade_game_jump_1.mp3");

}

trex.velocityY=trex.velocityY+0.15
edges=createEdgeSprites()
trex.collide(ig)
if(ground2.x<0){
ground2.x=ground2.width/2


}
if(trex.isTouching(cactuses)){
  gamestate=end
trex.changeAnimation("trex_collided",trexcollided)
  gameover.visible=true
  restart.visible=true
 // playSound("sound://category_pop/deep_bubble_notification.mp3");
  
}
cloud();
obstacle1();
}
else if(gamestate==end){
trex.velocityY=0





if(mousePressedOver(restart)){
  gamestate=start
  score=0
  gameover.visible=false
  restart.visible=false
}
ground2.velocityX=0
hello.setVelocityXEach(0)
cactuses.setVelocityXEach(0)
  hello.setLifetimeEach(0)
  cactuses.setLifetimeEach(0)
}

if(score%100==0&&score>0){
  ground2.velocityX=-35
//  playSound("sound://category_alerts/airy_bell_notification.mp3");
  
}
  




drawSprites()
  

} 
function obstacle1() {
if(frameCount%80==0){
   cactus = createSprite(600,165,10,10)
 select = Math.round(random(1,6))
switch(select){
  case 1:cactus.addImage(ob1);
    break;
     case 2:cactus.addImage(ob2);
    break;
     case 3:cactus.addImage(ob3);
    break;
     case 4:cactus.addImage(ob4);
    break;
     case 5:cactus.addImage(ob5);
    break;
     case 6:cactus.addImage(ob6);
    break;
    default: break;

}
cactus.scale=1 
cactus.velocityX=-4
if(trex.collide(cactus)){
trex.velocityY=0
cactus.velocityX=0
cactus.destroy()
textSize(30)
fill("red")
text("Game Over",100, 200);
}
cactuses.add(cactus);

cactus.depth=trex.depth
trex.depth=trex.depth+1
  



  
}  
}

function cloud() {
  if(frameCount%60==0){
    var clouds = createSprite(600 ,Math.round(random(80,120)),30,30)
     clouds.addImage(cloudimage)
  clouds.velocityX=-3
  hello.add(clouds)  
  }
}













