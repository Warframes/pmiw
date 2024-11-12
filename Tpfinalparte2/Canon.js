class Canon {
  constructor(posX,posY) {
    this.posX = posX;   
    this.posY = posY;
    this.bala = new Bala(this.posX, this.posY);    
    this.cantBalas = [];
    this.balaDisparada = false;
  }

  dibujar() {
  fill(255);
  rectMode(CENTER);
    rect(this.posX,this.posY, 10, 10);
    if(this.balaDisparada == true){
      this.bala.posY -= 5;
    }else{
      this.bala.posY = this.posY;
      this.bala.posX = this.posX;
    }    
    this.bala.dibujar();
  }
   teclaPresionada(){
    if(keyCode === ENTER){
      this.balaDisparada = true;
    }
  }
  

}
