var bg,bgImage;
var wizard,wiz_image;
var bludger1,bludger2,bludger_img;
var quaffle,quaffle_img;
var snitch,snitch_img;
var teamLogo, logo_img;
var confetti, confetti2,confetti_img;
var collisionSound;
var victorySound;
function preload(){

  wiz_image=loadImage("images/Harry_img.png")
  bgImage=loadImage("images/background.jpg")
  bludger_img=loadImage("images/bludger.png")
  quaffle_img=loadImage("images/quaffle.png")
  snitch_img=loadImage("images/snitch.png")
  logo_img=loadImage("images/gryffindor.png")
  confetti_img=loadImage("images/confetti.png")
  collisionSound=loadSound("collision.mp3")
  victorySound=loadSound("victory.mp3")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
teamLogo=createSprite(100,100,50,50)
teamLogo.addImage(logo_img)
teamLogo.scale=0.4

confetti=createSprite(1300,270,50,50)
confetti.addImage(confetti_img)
confetti_img.scale=0.5

confetti2=createSprite(1320,270,50,50)
confetti2.addImage(confetti_img)
confetti2.scale=0.5

  wizard=createSprite(100, 280, 50, 50);
  wizard.addImage(wiz_image)
  wizard.scale=0.7

  bludger1=createSprite(400,windowHeight/2,40,40);
  bludger1.addImage(bludger_img)
  bludger1.scale=0.1
  bludger1.velocityY=11

  bludger2=createSprite(700,windowHeight/2,40,40);
  bludger2.addImage(bludger_img)
  bludger2.scale=0.1
  bludger2.velocityY=18

  quaffle=createSprite(1000,windowHeight/2,40,40);
  quaffle.addImage(quaffle_img)
  quaffle.scale=0.14
  quaffle.velocityY=20

  snitch=createSprite(1300,300,40,40);
  snitch.addImage(snitch_img)
  snitch.scale=0.3

  invinci1=createSprite(400,40,20,20);
  invinci1.visible=false;
  invinci2=createSprite(400,windowHeight-50,20,20);
  invinci2.visible=false;

  invinci3=createSprite(700,40,20,20);
  invinci3.visible=false;
  invinci4=createSprite(700,windowHeight-50,20,20);
  invinci4.visible=false;

  invinci5=createSprite(1000,20,20,20);
  invinci5.visible=false;
  invinci6=createSprite(1000,windowHeight-50,20,20);
  invinci6.visible=false;
}

function draw() {
  background(bgImage);  

  stroke("gold")
  fill("maroon")
  textSize(45)
  text("QUIDDITCH", 480,40)

  stroke("blue")
  fill("lightblue")
  textSize(20)
  text("**PRESS RIGHT ARROW TO MOVE**", 1000,30)

  bludger1.bounceOff(invinci2)
  bludger1.bounceOff(invinci1)
  bludger2.bounceOff(invinci3)
  bludger2.bounceOff(invinci4)
  quaffle.bounceOff(invinci5)
  quaffle.bounceOff(invinci6)
  
  if(keyDown(37)){
    wizard.x=wizard.x-12
  }
  if(keyDown(39)){
    wizard.x=wizard.x+12
  }

  if(wizard.isTouching(bludger1)|| wizard.isTouching(bludger2) || wizard.isTouching(quaffle)){
    wizard.x=100
    wizard.y=280
    collisionSound.play();

    message1=createElement('h1');
    message1.position(450,100)
    message1.html("OOPS! BE CAREFUL")
    message1.style('background','white')
  }

  if(wizard.x>410){
    message1.hide();
    
    message2=createElement('h1');
    message2.position(450,100)
    message2.html("GREAT GOING!")
    message2.style('background','white')
  }

  if(wizard.x>710){
    message2.hide();
  }
  
  if(wizard.isTouching(snitch)){
    stroke("white")
    fill("blue")
    textSize(40)
    text("YOU WIN!!!!!", 1100,200)
    victorySound.play();
  }
  drawSprites();
}