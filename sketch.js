function setup() {
    createCanvas(400, 400);
  }
  let olhoX;
  let olhoY;
  
  function draw() {
    background("white");
    fill("pink");
    circle(200, 200, 300); // rosto
    fill("white");
    circle(150, 150, 80); // olho esquerdo
    circle(250, 150, 80); // olho direito
    line(150, 270, 270, 295); // boca
    fill("black");
    triangle(200, 180, 10, 250, 220, 220); // nariz
    line(123, 15, 200, 110); // sobrancelha esquerda
    line(225, 117, 300, 50); // sobrancelha direita
    // circle(200,200,50); // pupila esquerda
    //circle(250,200,50); // pupila direita
  
    olhoX = map(mouseX, 0, 400, 130, 170);
    olhoY = map(mouseY, 0, 400, 130, 170);
  
    circle(olhoX, olhoY, 10); // nova pupila esquerda
    circle(olhoX + 140, olhoY, 10); //nova pupila direita
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  