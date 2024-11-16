class Juego{
  constructor(cantidadDeEnemigos){
    this.cantidadDeEnemigos = cantidadDeEnemigos;
    this.crearEnemigos();
    this.crearJugador();
  }

 dibujar() {
  image(imagenFondo, width / 2, height / 2, width, height);
  for (let i = 0; i < this.enemigos.length; i++) {
    this.enemigos[i].mover(this.jugador);
    this.enemigos[i].dibujar();
  }
  this.jugador.dibujar();
  this.colisionDeBalaConEnemigo();
  if (!this.verificarEnemigosRestantes()) {
    miJuego.cambioDePantalla("inicio");
  }
}
  crearJugador(){
    this.jugador = new Jugador(width/2, height/2);
  }

  teclaPresionada(){
    this.jugador.mover();
    this.jugador.canon.disparo();
  }

  crearEnemigos(){
  this.enemigos = [];
  for(let i = 0; i < this.cantidadDeEnemigos; i++){
    let posX = random(0, width);
    let posY = random(-100, -50);    
    this.enemigos[i] = new Enemigo(posX, posY);
  }
}

verificarEnemigosRestantes() {
  for(let i = 0; i < this.enemigos.length; i++){
    if(this.enemigos[i].estaVivo()){
      return true;
    }
  }
  return false;
}

  colisionDeBalaConEnemigo(){
  for(let i = 0; i < this.enemigos.length; i++){
    let enemigo = this.enemigos[i];
    if(enemigo.estaVivo()){
      let cajaDeColision = enemigo.obtenerCajaDeColision();
      for(let j = 0; j < this.jugador.canon.cantBalas.length; j++){
        let bala = this.jugador.canon.cantBalas[j];
        if(bala.posX > cajaDeColision.x && bala.posX < cajaDeColision.x + cajaDeColision.width &&
            bala.posY > cajaDeColision.y && bala.posY < cajaDeColision.y + cajaDeColision.height) {
          enemigo.matar();
          let enemigosDivididos = enemigo.dividir();
          if(enemigosDivididos.length > 0){
            this.enemigos = this.enemigos.concat(enemigosDivididos);
          }
          this.jugador.canon.cantBalas.splice(j, 1);
          break;  
        }
      }
    }
  }
}
}
