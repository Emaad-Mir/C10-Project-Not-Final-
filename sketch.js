var seaImg;
var shipImg1;
var sea;
var ship;

function preload(){

  seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", "ship-2.png");

sea.addImage(seaImg);
ship.addAnimation(shipImg1);

}

function setup(){
  createCanvas(400,400);

sea = createSprite(50,50,400,400);
ship = createSprite(50,50,200,200);


  
  
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
 
}