
let stolen = false;

let cherryY = 157;
let cherrySpeed = 0;

let puddingAngle = 0;

function setup() {
  createCanvas(500, 430);
}

function draw() {
  let overPudding = false;

  if (mouseX > 125 && mouseX < 275 &&
      mouseY > 145 && mouseY < 300) {
    overPudding = true;
  }

  background(255, 248, 238);

  // 체리가 위로 날아감
  if (stolen == true) {
    cherrySpeed = cherrySpeed - 0.15;
    cherryY = cherryY + cherrySpeed;

    // 푸딩이 기울어짐
    if (puddingAngle < 8) {
      puddingAngle = puddingAngle + 0.3;
    }
  }

  // 접시
  noStroke();
  fill(215, 210, 205);
  ellipse(200, 299, 250, 36);

  fill(250, 248, 245);
  ellipse(200, 293, 220, 24);

  // 푸딩 회전
  push();
  translate(200, 290);
  rotate(radians(puddingAngle));
  translate(-200, -290);

  // 푸딩 몸통
  noStroke();
  fill(255, 214, 130);
  quad(145, 180, 255, 180, 275, 295, 125, 295);

  // 카라멜
  fill(170, 95, 52);
  ellipse(200, 181, 110, 26);
  rect(145, 180, 110, 10);
  rect(155, 186, 12, 20, 5);
  rect(230, 186, 12, 15, 5);

  // 얼굴
  if (stolen == true) {

    // 울어서 빨개진 볼
    noStroke();
    fill(255, 65, 95);
    ellipse(160, 248, 29, 20);
    ellipse(240, 248, 29, 20);

    // 작아진 눈
    fill(65, 40, 35);
    ellipse(180, 234, 4, 4);
    ellipse(220, 234, 4, 4);

    // 눈물
    noStroke();
    fill(90, 180, 255);
    rect(174, 241, 12, 46, 6);
    rect(214, 241, 12, 46, 6);

    // 엉엉 우는 입
    fill(95, 45, 55);
    ellipse(200, 261, 18, 24);

  } else if (overPudding == true) {

    // 새빨간 볼
    noStroke();
    fill(255, 40, 60);
    ellipse(160, 248, 30, 22);
    ellipse(240, 248, 30, 22);

    // 화난 눈썹
    stroke(65, 40, 35);
    line(165, 215, 188, 228);
    line(212, 228, 235, 215);

    // 눈
    noStroke();
    fill(65, 40, 35);
    ellipse(180, 234, 9, 9);
    ellipse(220, 234, 9, 9);

    // 작은 점 입
    ellipse(200, 260, 3, 3);

  } else {

    // 기본 상태의 볼
    noStroke();
    fill(255, 175, 185);
    ellipse(160, 248, 20, 13);
    ellipse(240, 248, 20, 13);

    // 점눈
    fill(65, 45, 40);
    ellipse(180, 234, 8, 8);
    ellipse(220, 234, 8, 8);

    // 작은 점 입
    ellipse(200, 260, 3, 3);
  }

  pop();

  // 체리
  if (cherryY > -40) {

    // 꼭지
    stroke(65, 125, 70);
    line(200, cherryY - 10, 210, cherryY - 28);

    // 작은 잎
    noStroke();
    fill(85, 155, 85);
    ellipse(213, cherryY - 27, 16, 7);

    // 체리
    fill(220, 35, 65);
    ellipse(200, cherryY, 25, 25);

    // 반짝임
    fill(255, 170, 185);
    ellipse(195, cherryY - 5, 7, 5);
  }
}

function mousePressed() {
  if (mouseX > 125 && mouseX < 275 &&
      mouseY > 145 && mouseY < 300) {
    stolen = true;
  }
}

function keyPressed() {
  stolen = false;
  cherryY = 157;
  cherrySpeed = 0;
  puddingAngle = 0;
}
