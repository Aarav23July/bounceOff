var fixedrect,movingrect;
var rect1,rect2,rect3,rect4;




function setup() {

  createCanvas(1800,1500);
  fixedrect=createSprite(200,200,50,80);
  movingrect=createSprite(400,200,80,30);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  rect1=createSprite(100,100,50,50);
  rect1.shapeColor="green";
  rect2=createSprite(200,100,50,50);
  rect2.shapeColor="green";
  rect3=createSprite(300,100,50,50);
  rect3.shapeColor="green";
  rect4=createSprite(400,100,50,50);
  rect4.shapeColor="green";
  movingrect.velocityY=-3;
  movingrect.velocityX=-2;
  fixedrect.velocityY=-5;
  fixedrect.velocityX=2;
}

function draw() {
  background("blue");  
 // movingrect.x=World.mouseX;
 // movingrect.y=World.mouseY;
 bounceOff(movingrect,fixedrect);
 if( isTouching(movingrect,rect4)){
  rect4.shapeColor="red";
  movingrect.shapeColor="red";
 }
 
 else{
  rect4.shapeColor="green";
  movingrect.shapeColor="green";
}
if( isTouching(movingrect,rect3)){
  rect3.shapeColor="red";
  movingrect.shapeColor="red";
 }
 
 else{
  rect3.shapeColor="green";
  movingrect.shapeColor="green";

}
if( isTouching(movingrect,rect2)){
  rect2.shapeColor="red";
  movingrect.shapeColor="red";
 }
 
 else{
  rect2.shapeColor="green";
  movingrect.shapeColor="green";

}
if( isTouching(movingrect,rect1)){
  rect1.shapeColor="red";
  movingrect.shapeColor="red";
 }
 
 else{
  rect1.shapeColor="green";
  movingrect.shapeColor="green";

}

  drawSprites();
}
