let pantallas = [24];
let estado = 0;
let cancionBase;

function preload() {
  for (let i = 0; i < 24; i++) {
    pantallas[i] = loadImage('data/' + i + '.png');
  }
  soundFormats('mp3');
  cancionBase = loadSound('data/CancionBase.mp3')
}

function setup() {
  createCanvas(640, 480);
}


function draw() {
  background(0);
  console.log(mouseX, mouseY, estado);
  image(pantallas[estado], 0, 0, width, height);
  if(estado == 14 || estado == 19 || estado == 24) {
    fill(255, 0, 0);
    rect(270, 400, 100, 50);
    fill(0);
    textAlign(CENTER);
    textSize(20);
    text('reiniciar', width/2, 430);
  }
   if (estado == 1 ||  estado == 2 ||  estado == 3
    ||  estado == 6 ||  estado == 7 ||  estado == 8 ||  estado == 10
    ||  estado == 11 ||  estado == 12 ||  estado == 13 ||  estado == 15
    ||  estado == 16 ||  estado == 18||  estado == 20||  estado == 23) {
    fill(255, 0, 0);
    rect(290, 400, 100, 50);
  }
  botonesDeAvance();
}
function mousePressed() {

  if ( estado == 0 ||  estado == 1 ||  estado == 2 ||  estado == 3
    ||  estado == 6 ||  estado == 7 ||  estado == 8 ||  estado == 10
    ||  estado == 11 ||  estado == 12 ||  estado == 13 ||  estado == 15
    ||  estado == 16 ||  estado == 18 || estado == 20 || estado == 23) {

    estado ++;
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
function keyPressed() {
  if (cancionBase.isPlaying()) {
    cancionBase.stop();
  } else {
    cancionBase.play();
  }
}
