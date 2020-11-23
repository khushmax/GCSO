var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

speed=random(55,90);
weight=random(400,1500);


  car = createSprite(500,200, 50, 50);

  car.velocityX = speed;
  car.shapecolour = "white";

  wall = createSprite(1500,200,60,height/2);
  wall.shapecolour = "blue";
}

function draw() {
  background(255,255,255); 

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation = 0.5 *weight *speed *speed/22509;
    if(deformation>180)
    {
      car.shapecolour = "green"
    }
    if(deformation<180 && deformation>100)
    {
      car.shapecolour = "blue";
    }
    if(deformation<100)
    {
      car.shapecolour = "yellow"
    }
  }

  car.display();
  wall.display();


  
  drawSprites();
}