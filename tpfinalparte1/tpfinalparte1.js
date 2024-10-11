let pantallas = [25];
let estado = 0;


function preload() {
  for (let i = 0; i < 25; i++) {
    pantallas[i] = loadImage('data/' + i + '.png');
  }
}

function setup() {
  createCanvas(640, 480);
}


function draw() {
  background(0);
  if (estado == 1) {
    fill(255, 0, 0);
    rect(110, 335, 100, 50);
    fill(0, 0, 255);
    rect(430, 335, 100, 50);
  }
  image(pantallas[estado], 0, 0, width, height);
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
  }
  else if(estado == 5){
    estado = 7;
  }
}
