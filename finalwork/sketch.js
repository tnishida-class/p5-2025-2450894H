// 最終課題を制作しよう



let x, y;
let vx, vy;
const g = 0.9;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(181, 216, 255);
  const size = height * 0.2; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(169, 253, 141);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }

  if(keyIsDown("A".charCodeAt(0))){ x -= 10; }
  if(keyIsDown("L".charCodeAt(0))){ x += 10; }
      
  // BLANK[2] 重力とジャンプ

if(keyIsDown(" ".charCodeAt(0))){

  x += vx;
  y += vy;
  
  vy += g; // 重力は「速度の変化量」
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || y > height/1.3){ vy = -1 * vy; }
  y = constrain(y, 0, height);
 
  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;}     

  // キャラクターを描く
  noStroke()
  fill(255,222,89); 

  // くまの頭 
  ellipse(x, y, 180, 160);

  // 耳 
  ellipse(x+60, y-60, 60, 60);
  ellipse(x-60, y-60, 60, 60);

  // 目 
  fill(0)
  ellipse(x+35, y-10, 10,10)
  ellipse(x-35, y-10, 10,10)

  // 鼻 
  fill(203, 167, 154)
  ellipse(x, y, 50,30)
}

