var input;
var button;
var name;
var gameState=0
function preload(){
  restrauntImg=loadImage("restraunt.png")
  boyImg1=loadImage("boy1.png")
  boyImg2=loadImage("boy2.png")
  boyImg3=loadImage("boy3.png")
  boyImg4=loadImage("boy4.png")
  girlImg1=loadImage("girl1.png")
  girlImg2=loadImage("girl2.png")
  girlImg3=loadImage("girl3.png")

}
function setup() {
  createCanvas(800,400);

  background1=createSprite(400,200,800,400)
  background1.addImage(restrauntImg)
  kitchen=createSprite(400,300,800,50)
  kitchen.visible=false
  input=createInput("ENTER YOUR NAME")
  input.position(300,200)
  button=createButton("START")
  button.position(300,300)
  button.mousePressed(()=>{
    var name=input.value()
   greeting=createElement("h3")
   greeting.html("WELCOME " +  name)
   greeting.position(300,150)
   input.hide()
   button.hide()
   gameState=1
  })
obstaclesGroup=createGroup()
}


function draw() {
  background("pink");  
if(gameState===1){
  kitchen.visible=true
  if(obstaclesGroup.isTouching(kitchen)){
    obstaclesGroup.setVelocityYEach(0)
  }
  greeting.hide()
  spawnObstacles()
}
  drawSprites();
}
function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(random(100,600),165,10,40);
    obstacle.velocityY= 6;
    
     //generate random obstacles
     var rand = Math.round(random(1,7));
     switch(rand) {
       case 1: obstacle.addImage(boyImg1);
               break;
       case 2: obstacle.addImage(boyImg2);
               break;
       case 3: obstacle.addImage(boyImg3);
               break;
       case 4: obstacle.addImage(boyImg4);
               break;
       case 5: obstacle.addImage(girlImg1);
               break;
       case 6: obstacle.addImage(girlImg2);
               break;
        case 7: obstacle.addImage(girlImg3);
                break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
    // obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }
 