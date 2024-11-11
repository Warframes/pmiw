class Pantalla {
  constructor() {
    this.jugador = new Jugador();  
    this.crearEnemigos();
  }

  dibujar() {
    imageMode(CENTER);
    image(imagenesFondos[0],width/2, height/2,width, height);
    this.jugador.dibujar();
    for(let i = 0; i<10;i++){
    this.enemigos[i].dibujar();
    }
  }
  crearEnemigos(){
  this.enemigos = [];
    for(let i = 0; i<10;i++){
    this.enemigos[i] = new Enemigo();
    }
  }
  
    teclaPresionada(){
    this.jugador.teclaPresionada();
  }
}
