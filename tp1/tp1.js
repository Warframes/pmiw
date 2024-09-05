let arte, ls, ls1;

function preload() {
  arte = loadImage ('/data/arte.jpg');
}

function setup() {
  createCanvas(800, 400);
  imageMode(CENTER);
  rectMode(CENTER);
  strokeWeight(5);
  
}


function draw() {
  background(240, 72, 39);
  image (arte, 200, 200, 400, 400);
  cuadrados();
  ls = color(240, 72, 39);
  ls1 = color(244, 55, 17);
}


//rotación de obra por movimiento de mouse
function mouseMoved() {
  let mucho = frameCount*0.0005;
  rotate(mucho);
  cuadrados();
}


//intento de cambio de color con tecla, aun no funciona...
function keyPressed() {
  let r = color(random(0, 255));
  let g = color(random(0, 255));
  let b = color(random(0, 255));
  if (key === 'a') {
    ls = color(r, g, b);
    ls1 = color(r, g, b);
  }
  if (key==='s') {
    ls= color(240, 72, 39);
    ls1= color(244, 55, 17);
  }
}
