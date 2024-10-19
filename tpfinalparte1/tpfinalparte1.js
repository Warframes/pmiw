let pantallas = [24];
let estado = 0;
let cancionBase;
let font;
let anchoPantalla = 640;
let altoPantalla = 480;
let anchoTexto;
let tamTexto;
let inicioTexto;
let posTextoActual = 0;

function preload() {
  for (let i = 0; i < 24; i++) {
    pantallas[i] = loadImage('data/' + i + '.png');
  }
  font = loadFont('data/angrybirds-regular.ttf')
    soundFormats('mp3');
  cancionBase = loadSound('data/CancionBase.mp3')
    misTextos = loadStrings('data/aventura.txt');
  print(misTextos);
}

function setup() {
  createCanvas(640, 480);
  textFont(font);
}


function draw() {
  background(0);
  console.log(mouseX, mouseY, estado);
  image(pantallas[estado], 0, 0, width, height);
  botonReinicio();
  botonSiguiente();
  botonesDecisivos();
  push();
  fill(250);
  textSize(20);
  text(misTextos[obtenerTextActual()], inicioTexto, inicioTexto, anchoTexto);
  reload();
  pop();
}
function mousePressed() {
  if(estado == 0){
  clickBoton();
  }

  if ( estado == 1 ||  estado == 2 ||  estado == 3
    ||  estado == 6 ||  estado == 7 ||  estado == 8 ||  estado == 10
    ||  estado == 11 ||  estado == 12 ||  estado == 13 ||  estado == 15
    ||  estado == 16 ||  estado == 18 || estado == 20 || estado == 23) {
    clickBoton();
  } else if (estado == 4 ||  estado == 9 ||  estado == 17 || estado ==21) {
    if (mouseX>110&&mouseX<210&&mouseY>335&&mouseY<385) {

      if (estado == 4 ) {
        estado = 6;
      } else if ( estado == 9) {
        estado = 15;
      } else if ( estado == 17) {
        estado = 20;
      } else if ( estado == 21) {
        estado = 22;
      }
    } else if (mouseX>430&&mouseX<530&&mouseY>335&&mouseY<385) {
      if (estado ==4) {
        estado = 5;
      } else if ( estado == 9) {
        estado = 10;
      } else if ( estado == 17) {
        estado = 18;
      } else if ( estado == 21) {
        estado = 23;
      }
    }
  } else if (estado == 5) {
    estado = 7;
  }
}

function reload() {


  anchoTexto = anchoPantalla * 0.8;
  tamTexto = altoPantalla * 0.10;
  inicioTexto = anchoPantalla * 0.05;

  textSize(tamTexto);
}


function keyPressed() {
  if (cancionBase.isPlaying()) {
    cancionBase.stop();
  } else {
    cancionBase.play();
  }
}
