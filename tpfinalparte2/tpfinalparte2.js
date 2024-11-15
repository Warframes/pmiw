let miJuego = new ProgramaDeFlujoGeneral();
let imagenesJugador = [];
let imagenesFondos = [];
let imagenesEnemigos = [];
function preload(){
  for(let i=0; i<4; i++){
    imagenesJugador[i]= loadImage('data/' + i + '.png');
  }
  
  for(let i=0; i<5; i++){
    imagenesEnemigos[i]= loadImage('data/enemigos/' + i + '.png');
  }
  for(let i=0; i<2; i++){
    imagenesFondos[i]= loadImage('data/fondos/' + i + '.png');
  }
}
function setup(){
  createCanvas(640, 480);
  miJuego.dibujar(); 
}
function draw(){
  miJuego.dibujar();
  if(keyIsPressed){
    miJuego.teclaPresionada();
  }
}