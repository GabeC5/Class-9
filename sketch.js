var box;
function setup() {
  createCanvas(400,400);

  box = createSprite(200,200,50,50);
  box.shapeColor="red";
}

function draw() 
{
  background(30);

  if(keyWentDown(RIGHT_ARROW)){
    box.position.x = box.position.x +5;
  }


if(keyWentDown(LEFT_ARROW)){
  box.position.x = box.position.x -5;
}

if(keyWentDown(UP_ARROW)){
  box.position.y = box.position.y -5;
}

if(keyWentDown(DOWN_ARROW)){
  box.position.y = box.position.y +5;
}


  
  drawSprites();
}




