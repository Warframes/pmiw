function cuadrados(){
  let ls = color(240, 72, 39);
  let ls1 = color(244, 55, 17);
  let x0 = 500;
  let x1 = 700;
  let y0 = 100;
  let y1 = 300;
 for (let c=200; c>0; c-=20) {
    stroke(244, 55, 17);
    fill(255, c-50, c-50);
    rect(x0, y0, c, c);

    for (let cx=100; cx>0; cx-=20) {
      fill(255/cx, cx+100, cx+100);
      rect(x0, y0, cx, cx);
      if (cx==20) {
        rect(500, 100, 1, 1);
      }
    }
  }
  for (let c=200; c>0; c-=20) {
    stroke(ls1);
    fill(252, c-50, c-25);
    rect(x0, y1, c, c);
    for (let cx=100; cx>0; cx-=20) {
      fill(175, c+155, c+25);
      rect(x0, y1, cx, cx);
      if (cx==20) {
        rect(500, 300, 1, 1);
      }
    }
  }
  for ( c=200; c>0; c-=20) {
    stroke(ls);
    fill(255, c+50, 2/c+50);
    rect(x1, y0, c, c);
    for (let cx=100; cx>0; cx-=20) {
      fill(225, c+125, c+180);
      rect(x1, y0, cx, cx);
      if (cx==20) {
        rect(700, 100, 1, 1);
      }
    }
  }
  for (let c=200; c>0; c-=20) {
    stroke(ls1);
    fill(255, c-20, c-200);
    rect(x1, y1, c, c);
    for (let cx=100; cx>0; cx-=20) {
      fill(c+155, c+125, c+155);
      rect(x1, y1, cx, cx);
      if (cx==20) {
        rect(700, 300, 1, 1);
      }
    }
  }
  
}
