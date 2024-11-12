class Juego {
  constructor(cantidadDeEnemigos) {
    this.cantidadDeEnemigos = cantidadDeEnemigos;
    this.crearEnemigos();
    this.crearJugador();
    this.pantalla = new Pantalla();  
    
  }

  dibujar() {
    this.pantalla.dibujar();
    image(imagenesFondos[0], width/2, height/2, width, height);   
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i].dibujar();
    }
     this.jugador.dibujar();
     this.colisionJugadorConEnemigo();
  }
   
  crearJugador() {
    this.jugador = new Jugador(width/2, height/2);
  }
  teclaPresionada() {
    this.jugador.teclaPresionada();
  }
  
   crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i] = new Enemigo(i*80,10);
    }
  }
 colisionJugadorConEnemigo(){
    if(this.jugador.haDisparado()){
      if(dist(
        this.Jugador.Canon.Bala.posX,
        this.Jugador.Canon.Bala.posY,
        this.Enemigo.posX,
        this.Enemigo.posY) < 10){
        this.Enemigo.matar();  
      }
    }
  }
    haDisparado(){
    return this.Canon.balaDisparada;
  }
}
