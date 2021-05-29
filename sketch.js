var fixedRect,movingRect,fixedRect2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect2 = createSprite(300,100,50,50)
 }

function draw() {
  background("Yellow");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(touch(movingRect,fixedRect)){
    movingRect.shapeColor="black"
    fixedRect.shapeColor="brown"
    console.log("true")
  }
  else if (touch(fixedRect2,movingRect)){
    movingRect.shapeColor="red"
    fixedRect2.shapeColor="blue"
    console.log("true")
  }
  else{
    movingRect.shapeColor="pink"
    fixedRect2.shapeColor="green"
    fixedRect.shapeColor="grey"
    console.log("true")
  }
   console.log("false")
  drawSprites();
}

