class Juego {
  constructor(cantidadDeEnemigos){
    this.cantidadDeEnemigos = cantidadDeEnemigos;
    this.crearEnemigos();
    this.crearJugador();
  }

  dibujar(){
    image(imagenesFondos[0], width / 2, height / 2, width, height);
    
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i].mover(this.jugador);
      this.enemigos[i].dibujar();
    }
    
    this.crearEnemigos.dibujar();  
    this.colisionDeBalaConEnemigo();  
  }

  crearJugador(){
    this.jugador = new Jugador(this.posX, this.posY);
  }

  teclaPresionada(){
    this.jugador.mover();
    this.jugador.canon.disparo();
  }

  crearEnemigos(){
    this.enemigos = [];
    for(let i = 0; i < this.cantidadDeEnemigos; i++){
      this.enemigos[i] = new Enemigo(i * 80 + 50, 0); 
    }
  }

  colisionDeBalaConEnemigo(){
  for (let i = 0; i < this.cantidadDeEnemigos; i++) {
    let enemigo = this.enemigos[i];
    if (enemigo.estaVivo()) {
      for (let j = this.jugador.canon.cantBalas.length - 1; j >= 0; j--) {
        let bala = this.jugador.canon.cantBalas[j];
        let cajaDeColision = enemigo.obtenerCajaDeColision();
        if (bala.posX > cajaDeColision.x && bala.posX < cajaDeColision.x + cajaDeColision.width &&
          bala.posY > cajaDeColision.y && 
          bala.posY < cajaDeColision.y + cajaDeColision.height){
          enemigo.matar(); 
          this.jugador.canon.cantBalas.splice(j, 1);  
          break;
        }
      }
    }
  }
}

}
