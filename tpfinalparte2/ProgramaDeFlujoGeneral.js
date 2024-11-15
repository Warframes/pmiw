class ProgramaDeFlujoGeneral {
  constructor() {
    this.boton = new Boton();
    this.pantallaDeInicio = new PantallaDeInicio();
    this.pantallaInstruccion = new PantallaInstruccion()
    this.pantallaCredito = new PantallaCredito()
    this.juego = new Juego(5);
    this.pantallaActiva = 0;
  }
  dibujar() {
    if(this.pantallaActiva === 0){
      this.pantallaDeInicio.dibujar();  
    }else if(this.pantallaActiva === 1){
      this.pantallaInstruccion.dibujar();  
    }else if(this.pantallaActiva === 2){
      this.juego.dibujar(); 
    }else if (this.pantallaActiva === 3){
      this.pantallaCredito.dibujar();
    }
  }
}
