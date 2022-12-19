var navil,navilimg;
var mar,marimg
function preload(){
navilimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
marimg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(200,200,20,50);
  mar.scale =0.3
  
  navil = createSprite(200,200)
  navil.scale =0.3
mar.addImage("sea.png",marimg)
navil.addAnimation("navil",navilimg)
mar.velocityX=-5
}

function draw() {
  background("blue");
    drawSprites();
    if (mar.x < 0){
      mar.x = 200
    }
 
}
