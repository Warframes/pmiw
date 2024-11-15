class Boton {
  constructor() {
    this.altoDeBoton = 150;
    this.anchoDeBoton = 150; 
    this.posX = 150;
    this.posY = 150;
    
  }

  dibujar(pantallaActiva) {
   
    if (pantallaActiva === 0) {
      this.crearBotonDeInicio();  
    }else if(pantallaActiva === 1){
      this.crearBotonDeCreditos();
    }else if(pantallaActiva === 2){ 
    this.crearBotonDeInstrucciones();} 
  }

  crearBotonDeCreditos() {  
    fill(200, 0, 0); 
    rect(this.posX, this.posY + 70, this.anchoDeBoton, this.altoDeBoton);  // Posición ajustada
  }

  crearBotonDeInstrucciones() {   
    fill(0, 0, 200);  
    rect(this.posX, this.posY + 140, this.anchoDeBoton, this.altoDeBoton);  // Posición ajustada
  }

  crearBotonDeInicio() {
   
    fill(0, 200, 0);  
    rect(this.posX, this.posY, this.anchoDeBoton, this.altoDeBoton);
  }
}
