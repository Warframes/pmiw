class Jugador{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.alto = 40;
    this.ancho = 80;
    this.canon = new Canon(this.posX, this.posY);
  }

  dibujar(){
    imageMode(CENTER);
    if (keyCode === RIGHT_ARROW){
      image(imagenesJugador[3], this.posX, this.posY, this.ancho, this.alto);
    } else if (keyCode === LEFT_ARROW){
      image(imagenesJugador[1], this.posX, this.posY, this.ancho, this.alto);
    } else if (keyCode === UP_ARROW){
      image(imagenesJugador[0], this.posX, this.posY, this.ancho-40, this.alto+40);
    } else if (keyCode === DOWN_ARROW){
      image(imagenesJugador[2], this.posX, this.posY, this.ancho-40, this.alto+40);
    }
    this.canon.dibujar();
  }

  mover() {
    if (keyIsDown(RIGHT_ARROW)){
      this.posX += 2; 
    } else if (keyIsDown(LEFT_ARROW)){
      this.posX -= 2;
    } else if (keyIsDown(UP_ARROW)){
      this.posY -= 2;
    } else if (keyIsDown(DOWN_ARROW)){
      this.posY += 2;
    }
    this.canon.posX = this.posX;
    this.canon.posY = this.posY;
  }
}
