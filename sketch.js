var PLAY = 1;
var END = 0;
var gameState = PLAY;

var jungleImg, jungle



function preload(){

  jungleImg = loadImage("./images/bg.png")
 
}

function setup() {
  createCanvas(1500, 800);
  
  jungle = createSprite(800,400, 400, 20)
  jungle.addImage("jungle",jungleImg);
  jungle.scale = 0.5
  jungle.velocityX = -3

 
}

function draw() {

  background("white");
  
  if(jungle.x<300){
     jungle.x=width/2
  }
     
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  
}

function reset(){
 
}

function spawnObstacles() {
 
}

