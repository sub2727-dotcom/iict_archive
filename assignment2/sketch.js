let starX;
let starY;
let starSize;
let starLength;

function setup() {
  createCanvas(600, 500);

  starX = random(50, 350);
  starY = random(40, 160);
  starSize = random(3, 8);
  starLength = random(20, 50);
}

function draw() {
  // 하늘
  background(20, 30, 60);


  // 별
  noStroke();
  fill(255, 245, 190);

  ellipse(starX, starY, starSize, starSize);
  ellipse(starX + 100, starY + 50, starSize, starSize);
  ellipse(starX + 200, starY - 10, starSize, starSize);
  ellipse(starX - 40, starY + 90, starSize, starSize);
  ellipse(starX + 250, starY + 80, starSize, starSize);
  ellipse(starX + 60, starY + 120, starSize, starSize);


  // 별똥별
  ellipse(starX + 80, starY + 30, starSize, starSize);

  stroke(255, 245, 190);
  line(
    starX + 80,
    starY + 30,
    starX + 80 - starLength,
    starY + 30 + starLength
  );


  // 도시 건물
  noStroke();

  fill(30, 40, 65);
  rect(300, 280, 60, 170);

  fill(40, 50, 75);
  rect(360, 320, 55, 130);

  fill(25, 35, 60);
  rect(415, 250, 65, 200);

  fill(45, 55, 80);
  rect(480, 300, 50, 150);

  fill(30, 40, 65);
  rect(530, 270, 70, 180);


  // 높은 빌딩
  fill(35, 45, 70);
  rect(390, 210, 45, 240);

  stroke(200);
  line(412, 210, 412, 175);


  // 건물 창문
  noStroke();
  fill(255, 220, 120);

  rect(315, 310, 6, 8);
  rect(335, 340, 6, 8);

  rect(375, 350, 6, 8);

  rect(395, 250, 6, 8);
  rect(420, 290, 6, 8);

  rect(445, 280, 6, 8);
  rect(460, 330, 6, 8);

  rect(495, 320, 6, 8);
  rect(515, 370, 6, 8);

  rect(550, 300, 6, 8);


  // 다리 기둥
  fill(80, 85, 90);

  rect(75, 300, 20, 120);
  rect(145, 300, 20, 120);

  rect(68, 290, 34, 15);
  rect(138, 290, 34, 15);


  // 다리
  stroke(170, 170, 160);

  line(0, 390, 300, 390);
  line(0, 400, 300, 400);

  // 다리 위쪽 줄
  line(0, 350, 85, 290);
  line(85, 290, 155, 290);
  line(155, 290, 300, 360);

  // 다리 세로 줄
  line(30, 330, 30, 390);
  line(60, 310, 60, 390);
  line(120, 290, 120, 390);
  line(200, 310, 200, 390);
  line(240, 330, 240, 390);
  line(280, 350, 280, 390);


  // 물
  noStroke();
  fill(15, 25, 45);
  rect(0, 420, 600, 80);


  // 물에 비치는 불빛
  stroke(255, 220, 120);

  line(320, 440, 340, 440);
  line(325, 450, 335, 450);

  line(390, 435, 415, 435);
  line(395, 445, 410, 445);
  line(400, 455, 405, 455);

  line(465, 445, 490, 445);
  line(470, 455, 485, 455);

  line(535, 435, 560, 435);
  line(540, 445, 555, 445);
}


// 마우스를 클릭하면 별이 바뀜
function mousePressed() {
  starX = random(50, 300);
  starY = random(40, 140);
  starSize = random(3, 8);
  starLength = random(20, 50);
}