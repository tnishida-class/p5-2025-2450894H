//要件１：左右キーで地面の上を左右に移動
//要件２：左右キー＋好きなキーを押している間だけ移動速度アップ
//要件３：スペースキーでジャンプ（空中ジャンプ不可）
//要件１と要件２はテキストの「キーボード操作に反応する」のサンプルほぼそのままです。

//要件３はテキストの「重力、床に弾む」の応用になります。 
// 地面で跳ね返る代わりにキー操作でジャンプ（vx を大きめの負の値にする）するようにしてください。 
// そのままだと空中でもジャンプできてしまうので、地面にいるときだけジャンプできるように if 文を追加しましょう。


// 2D アニメーションゲームのようなインタラクション

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
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
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
  fill(0);
  ellipse(x, y, size, size);
}
