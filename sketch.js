var bg
var sleep
var gym
var brush
var eat
var drink , move , bath
var Astronaut


function preload() {
  bg = loadImage("iss.png")
   sleep = loadAnimation("sleep.png")
   gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
   brush = loadAnimation("brush.png")
   eat = loadAnimation("eat1.png","eat2.png")
   drink = loadAnimation("drink1.png","drink2.png")
   move = loadAnimation("move.png","move1.png")
  bath = loadAnimation("bath1.png","bath2.png")
}




function setup() {
  createCanvas(800,400);
  Astronaut = createSprite(300,230);
  Astronaut.addAnimation("sleeping", sleep);
  Astronaut.scale = 0.1;
}

function draw() {
  background(bg);  
  drawSprites();
  text("Instructions:",650,290);
  text("Up arrow = Brushing",650,300);
  text("Down Arrow = Gymming",650,310);
  text("Left Arrow = Eating",650,320);
  text("Right Arrow = Bathing",650,330);
  text("m key = Moving",650,340);

  edges = createEdgeSprites() 
    Astronaut.bounceOff(edges);
   
    if (keyDown("UP_ARROW")) {
      Astronaut.addAnimation("Brushing", brush);
      Astronaut.changeAnimation("Brushing");
      Astronaut.y = 350;
      Astronaut.VelocityX = 0;
      Astronaut.VelocityY = 0;
    }

    if (keyDown("DOWN_ARROW")) {
      Astronaut.addAnimation("Gymming", gym);
      Astronaut.changeAnimation("Gymming");
      Astronaut.y = 350;
      Astronaut.VelocityX = 0;
      Astronaut.VelocityY = 0;
    }

    if (keyDown("LEFT_ARROW")) {
      Astronaut.addAnimation("Bathing", bath);
      Astronaut.changeAnimation("Bathing");
      Astronaut.y = 350;
      Astronaut.VelocityX = 0;
      Astronaut.VelocityY = 0;
    }

    if (keyDown("RIGHT_ARROW")) {
      Astronaut.addAnimation("Eating", eat);
      Astronaut.changeAnimation("Eating");
      Astronaut.y = 350;
      Astronaut.VelocityX = 0;
      Astronaut.VelocityY = 0;
    }

    if (keyDown("LEFT_ARROW")) {
      Astronaut.addAnimation("Bathing", bath);
      Astronaut.changeAnimation("Bathing");
      Astronaut.x = 300;
      Astronaut.VelocityX = 0;
      Astronaut.VelocityY = 0;
    }

    if (keyDown("m")) { 
      Astronaut.addAnimation("moving", move); 
      Astronaut.changeAnimation("moving"); 
      Astronaut.velocityX = 1; 
      Astronaut.velocityY = 1; 
    }


}
