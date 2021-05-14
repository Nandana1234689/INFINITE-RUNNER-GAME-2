var gamestate = "play" 
var snake,snakeImg
var foodImg
var score =0
function preload() {
snakeImg1 = loadImage("images/snake-r.png")
snakeImg2 = loadImage("images/snake-l.png")
snakeImg3 = loadImage("images/snake-t.png")
snakeImg4 = loadImage("images/snake-b.png")
foodImg = loadImage("images/food.png")
badfoodImg = loadImage("images/badfood.png")
gameoverImg = loadImage("images/gameOver.png")
}
function setup() {
  createCanvas(1250,600);

snake = createSprite(200,250,50,50)
snake.addImage(snakeImg1)
snake.scale=0.4

gameover=createSprite(625,200,20,50)
gameover.addImage(gameoverImg)
gameover.scale=0.5
gameover.visible=false



fg = createGroup ()  
bfg=createGroup()
}

function draw() {
  background(0);

if(gamestate == "play"){


 snake.debug=false
 snake.setCollider("circle",0,10,100)

  if(keyDown(LEFT_ARROW)){
    snake.velocityX=-2;
    snake.velocityY=0;
    snake.addImage(snakeImg2)
    snake.scale=0.4

  
}
else if(keyDown(RIGHT_ARROW)){    
  snake.velocityX=3;
  snake.velocityY=0;
  snake.addImage(snakeImg1)
  snake.scale=0.4
} 
else if(keyDown(UP_ARROW)){      
    snake.velocityX = 0;
    snake.velocityY = -2;
    snake.addImage(snakeImg3)
    snake.scale=0.4
}
else if(keyDown(DOWN_ARROW)){
  snake.velocityX=0;
  snake.velocityY=3;
  snake.addImage(snakeImg4)
  snake.scale=(0.4)
}




if (snake.isTouching(fg)){
  fg.destroyEach()
  score+=10
  }

  
 if (snake.isTouching(bfg)){
  bfg.destroyEach()
gamestate = "end"
  }

food() 
badfood()




}
   
  if(gamestate == "end" ){

                        snake.velocityX = 0
                        snake.velocityY = 0
                        fg.destroyEach()
                        bfg.destroyEach()
                        gameover.visible=true
                     







}




drawSprites()
fill ("blue")
textSize (20)
text ("score : "+score,40,30)
}
function food() {
  if (frameCount % 200 === 0) {
    var a=random(1000,500)
    var b = random(50,600)
    f = createSprite(a,b,40,10);
    f.addImage(foodImg)
    f.x = Math.round(random(100,1200))
    f.scale = 0.01;
    f.velocityX = 0
    snake.depth=f.depth
    snake.depth=snake.depth+1
    f.lifetime=500
    fg.add(f)


    }
}

function badfood() {
  if (frameCount % 500 === 0) {
    var a=random(1000,500)
    var b = random(50,600)
    bf = createSprite(a,b,40,10);
    bf.addImage(badfoodImg)
    bf.x = Math.round(random(100,1200))
    bf.scale = 0.1;
    bf.velocityX = 0
    snake.depth=bf.depth
    snake.depth=snake.depth+1
    bf.lifetime=550
    bfg.add(bf)


    }
}

