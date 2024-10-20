let pantallas = [23];
let estado = 0;
let cancionBase;
let font;
let misTextos;


function preload() {
  for (let i = 0; i < 23; i++) {
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
  textosDePantallas();
  botonReinicio();
  botonSiguiente();
  botonesDecisivos();
  if (estado == 23) {
    creditos();
  }
}
function mousePressed() {
  if (estado == 0) {
    if (mouseX > 360 && mouseX < 460 && mouseY > 400 && mouseY < 450) {
      estado++;
    }
  }
  if ( estado == 1 ||  estado == 2 ||  estado == 3
    ||  estado == 6 ||  estado == 7 ||  estado == 8 ||  estado == 10
    ||  estado == 11 ||  estado == 12 || estado == 14 ||  estado == 15
    ||  estado == 18 || estado == 20  || estado == 21|| estado == 22) {
    clickBoton();
  } else if (estado == 4 ||  estado == 9 ||  estado == 16 || estado == 19) {
    if (mouseX>110&&mouseX<210&&mouseY>335&&mouseY<385) {

      if (estado == 4 ) {
        estado = 6;
      } else if ( estado == 9) {
        estado = 14;
      } else if ( estado == 16) {
        estado = 17;
      } else if ( estado == 19) {
        estado = 21;
      }
    } else if (mouseX>430&&mouseX<530&&mouseY>335&&mouseY<385) {
      if (estado==16) {
        estado = 18;
      } else if  (estado == 19) {
        estado = 22;
      } else {
        estado++;
      }
    }
  } else if (estado == 5) {
    estado = 7;
  }
 

  if (estado == 23) {
    if (mouseX>290&&mouseX<390&&mouseY>400&&mouseY<450) {
      estado = 0;
    }
  }
}



function keyPressed() {
  if (cancionBase.isPlaying()) {
    cancionBase.stop();
  } else {
    cancionBase.play();
  }
}
