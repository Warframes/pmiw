class PantallaDeInicio {
  constructor() {
    this.boton = new Boton();
  }
  dibujar() {
    this.boton.dibujar(this.pantallaActiva);
    image(imagenesFondos[1], 0, 0, width, height);
  }

  teclaPresionada() {
    
    
  }
 
}
