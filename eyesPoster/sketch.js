// let center

// function preload() {
//   img = loadImage('/paperTexture.jpeg');
// }

function setup() {
  createCanvas(1600, 1600);
  // center = [width / 2, height /2]
}

function draw() {
  background("black");

  // image.blend()
  for (let i = 40; i < width; i+= 80) {
    for (let j = 40; j < height; j += 80) {
        let activeRow = abs(mouseY - j) < 40 ? true : false
        let eyeCenter = {x : i, y: j}
        // let eyeCenter = [i, height / 2]
        // translate(...eyeCenter)
        fill("white")
        // fill( abs(mouseY - j) < 40 ? "green" : "white")
        // fill( abs(mouseX - i) < 80 ? "red" : "white")
        // circle(0, 0, 200, 200)
        arc(eyeCenter.x, eyeCenter.y-29, 80, 80, (PI/4), (PI * 3/4), OPEN);
        // rotate(PI)
        // fill("yellow")
        arc(eyeCenter.x, eyeCenter.y+28, 80, 80, -(PI * 3/4), -(PI/4), OPEN);
        // arc(eyeCenter[0], (height / 2)-28, 80, 80, (PI/4), (PI * 3/4), OPEN);
        if (abs(mouseY - j) < 40 && abs(mouseX - i) < 80) {
          noStroke()
          fill("red")
          circle(eyeCenter.x, eyeCenter.y, 23)
          continue
        }
        fill("black")
        let v0 = createVector(eyeCenter.x, eyeCenter.y)
        fill("green")
        // circle(mouseX, mouseY, 20)
        let v1 = createVector(mouseX,mouseY)
        let v2 = createVector(eyeCenter.x - mouseX, eyeCenter.y - mouseY)
        // line()
        v2.normalize()


        // console.log(mouseX - center[0], mouseY - center[1])
        fill("black")
        circle(eyeCenter.x + (v2.x * -5), eyeCenter.y + (v2.y * -5), 23)
  } 
}
    tint(120, 70);
    // img.filter(GRAY);
    // image(img, 0, 0);
  // arc(0, 0, 80, 80, -(PI/4), -(PI * 3/4), CHORD);
}

// Draws an arrow between two vectors.
// function drawArrow(base, vec, myColor) {
//   push();
//   stroke(myColor);
//   strokeWeight(3);
//   fill(myColor);
//   translate(base.x, base.y);
//   line(0, 0, vec.x, vec.y);
//   rotate(vec.heading());
//   let arrowSize = 7;
//   translate(vec.mag() - arrowSize, 0);
//   triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
//   pop();
// }