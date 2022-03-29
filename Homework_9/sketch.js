function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(80,45,78);
    textSize(24)
    text("YOOOOOO,\nT-POSE\n BOOOII", 350,450);
  
    // fro
    fill(0, 0, 0);
    circle(250,100,300);

    // head
    fill(150, 75, 0);
    circle(250,160,175);
   
    // eyes
    strokeWeight(15);
    fill(0);
    point(200,140);
    point(285,140);

    // nose
    strokeWeight(10);
    triangle(243, 159, 244, 158, 245, 159);
    
    // mouth
    arc(250, 195, 30, 35, 0, PI + + QUARTER_PI, CHORD);
  
    // body
    fill(41, 42, 43);
    rect(200,250,100,150);
    
    // sweater
    fill(255);
    triangle(220,250,250,320,280,250)
    // right arm
    fill(10, 24, 120);
    rect(300,250,50,10);
    // left arm
    rect(150,250,50,10);
    // left leg
    rect(200,410,10,50);
    // right leg
    rect(290,410,10,50);
    
    fill(120);
    textSize(22);
    text("Antonio Champion",20,590 );


}