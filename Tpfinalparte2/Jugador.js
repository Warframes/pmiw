class Jugador {
  constructor() {
    this.vida = 1;
    this.posX = 320;
    this.posY = 240;
    this.alto = 40;
    this.ancho = 80;
    this.canon = new Canon();
  }
  dibujar() {
    imageMode(CENTER);
    if (keyCode === RIGHT_ARROW) {     
      image(imagenesJugador[3], this.posX, this.posY,  this.ancho, this.alto);
    } else if (keyCode === LEFT_ARROW) {      
      image(imagenesJugador[1], this.posX, this.posY,  this.ancho, this.alto);
    } else if (keyCode === UP_ARROW) {    
      image(imagenesJugador[0], this.posX, this.posY, this.ancho-40, this.alto+40);
    } else if (keyCode === DOWN_ARROW) {     
      image(imagenesJugador[2], this.posX, this.posY, this.ancho-40, this.alto+40);
    }
    //image(imagenes[0], this.posX, this.posY, this.ancho-40, this.alto+40);
  }

  moverDerecha() {
    this.posX = this.posX += 1.5;
  }

  moverIzquierda() {
    this.posX = this.posX -= 1.5;
  }
  
  moverArriba() {
    this.posY = this.posY -= 1.5;
  }

  moverAbajo() {
    this.posY = this.posY += 1.5;
  }
  
 moverDiagonalIzquierdaArriba() {
    this.posX = this.posX -= 1.5;
    this.posY = this.posY -= 1.5;
  }


  mover() {
    if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();    
    } else if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();     
    } else if (keyCode === UP_ARROW) {
      this.moverArriba();     
    } else if (keyCode === DOWN_ARROW) {
      this.moverAbajo();    
    }else if (keyCode === 'W') {
    moverDiagonalIzquierdaArriba();
    }
  }
  teclaPresionada() {
    this.mover();
  }
}
