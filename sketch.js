var angle = 0;

function setup()
{
   createCanvas(400, 400);

}


function draw()
{
    background("purple");
  //  push();
    rectMode(CENTER);
    //new point of origin
    translate(100, 100);
    angle = angle + 0.02;
    rotate(angle);
    rect(0, 0, 60, 40);
  
    //pop();
   // rect(100, 100, 40, 60);
    

}