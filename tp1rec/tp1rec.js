//https://youtu.be/2yWmnnJV4-c
//Guillermo Joaquín Franco 
//91308/0
//Comisión 5

let arte, ls, ls1, r, g, b, giro;


function preload() {
  arte = loadImage ('/data/arte.jpg');
}

function setup() {
  createCanvas(800, 400);
  imageMode(CENTER);
  rectMode(CENTER);
  strokeWeight(5);
  ls = color(240, 72, 39);
  ls1 = color(244, 55, 17);
  giro = 0;
}


function draw() {
  background(240, 72, 39);
  image (arte, 200, 200, 400, 400);
  rotate(giro);
  cuadrados();
}

function mouseMoved(){

  giro = frameCount/120;

}


//Cambio de color con tecla
function keyPressed() {
  if (key === 'a') {
    r = color(random(0, 255));
    g = color(random(0, 255));
    b = color(random(0, 255));
    ls = color(r, g, b);
    ls1 = color(r, g, b);
  
  } else {
    ls= color(240, 72, 39);
    ls1= color(244, 55, 17);
    giro = 0;
  }
}
