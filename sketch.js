var PLAY = 1;
var END = 0;
var gameState = PLAY;
var boy, boyImg
var zombie
var gameover, gameoverImage ;
var restart, restartImage ;
function preload(){
zombieImg = loadImage("zombie.png")
boyImg = loadAnimation("boy1.png","boy2.png", "boy3.png")
bgImg = loadImage("bg.jpeg")
gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}


function setup(){

    canvas =  createCanvas(1000,600)

    bg = createSprite(0,500,1200,1200)
    bg.addAnimation("bg", bgImg)
    bg.velocityX = -5
    bg.scale = 1.7
   
    boy = createSprite(200,550,50,50)
    boy.addAnimation("boy",boyImg)
    boy.scale = 0.3
      boy.debug = true

  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;

      
   
   zombieGroup = new Group();
   
    //bg.x = bg.width/2
   
}

function draw(){
    background(0)
    textSize(25)
    text(mouseX + "x" + mouseY + "y",mouseX -10, mouseY)
drawSprites();



if (gameState===PLAY){
    if (bg.x < 0){
        bg.x = bg.width/2;
      }
    if(keyDown("UP_ARROW")){
        boy.y = boy.y -20;
    
    }
    if(keyDown("DOWN_ARROW")){
        boy.y = boy.y + 20;
    
    
    
    }


if (zombieGroup.isTouching (boy))
      {gameState = END; 
       
    }}
    else if (gameState === END)
    {    gameover.visible = true;
    restart.visible = true;
    
    
    ground.velocityX = 0;
    boy.velocityY = 0;
    
    zombieGroup.setVelocityXEach(0);
    
   
   zombieGroup.setLifetimeEach(-1);
    
    
  }
spawnzombie()
}
function spawnzombie() {
    if (frameCount % 120 === 0) {
      var zombie = createSprite(1000,500,50,50);
      zombie.y = Math.round(random(50,550));
      zombie.addImage('zombie',zombieImg);
      zombie.scale = 0.1;
      zombie.velocityX = -3;
      
      zombie.lifetime = 400;
      
      
      zombieGroup.add(zombie);
    }
    
  }
