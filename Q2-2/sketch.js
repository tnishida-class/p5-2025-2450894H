// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  noStroke();
  fill(255);


  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if ((x + y) % 2 == 1) {
        fill(160)
      } else {
        fill(255);}
        rect(size * x, size * y, size, size);

  for (let x = 0; x < 9; x++){     //上３段の赤丸
    for (let y = 0; y < 4; y++){
      if ((x + y) % 2 == 1) {
        fill(255, 0, 0)
      } else {
        fill(255);}
        circle(size * (x - 1) + 0.5 * size , size * y - 0.5 * size , size);
    }
  }


  for (let x = 0; x < 9; x++){     //下３段の黒丸
    for (let y = 6; y < 9 ; y++){
      if ((x + y) % 2 == 1) {
        fill(0)
      } else {
        fill(255);}
        circle(size * (x - 1) + 0.5 * size , size * y - 0.5 * size , size);

  
      }
    }
  }
}
}




