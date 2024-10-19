function botonesDecisivos() {
    if (estado == 4 ||  estado == 9 ||  estado == 17 || estado ==21) {
    fill(255, 0, 0);
    rect(110, 335, 100, 50, 50);
    fill(0, 0, 255);
    rect(430, 335, 100, 50, 50);
    noStroke();
    push();
     textSize(30);
     fill(255);
     text("Si",145, 370 );
     text("No", 465, 370);
     pop();
  }
}
