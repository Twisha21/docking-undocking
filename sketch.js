
var bgI, bg;  


function preload (){
  bgI = loadImage ("images/iss.png" );
  sleep = loadAnimation ("images/sleep.png");
  brush = loadAnimation ("images/brush.png");
  gym = loadAnimation ("images/gym11.png" , "images/gym12.png");
  eat = loadAnimation ("images/eat1.png" , "images/eat2.png");
  bath = loadAnimation ("images/bath1.png" , "images/bath2.png");
  move = loadAnimation ("images/move.png" , "images/move1.png");
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200, 50, 50);
  bg.addImage (bgI); 
}

function draw() {
  background(255,255,255);  
  drawSprites();
}