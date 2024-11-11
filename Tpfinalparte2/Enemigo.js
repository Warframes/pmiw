class Enemigo {
  constructor() {
    this.vidas = 2;
    this.posX = 100;
    this.posY = 100;
    this.ancho = 180;
    this.alto = 200;
  }

  dibujar() {
    if (this.estaVivo) {
      image(imagenesEnemigos[0], this.posX, this.posY, this.ancho, this.alto);
    }
  }
  dividido() {
    this.estaVivo = 1;
  }
  matar() {
    this.estaVivo = 0;
  }
   estaVivo(){
    return this.vidas > 0;
  }
}
