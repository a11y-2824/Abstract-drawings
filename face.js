function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  
// face
fill('pink')
triangle(240, 40, 20, 260, 490, 260)

// left eye
fill('black')
rect(177, 125, 50, 2)

// left eye ball
fill('black')
ellipse(200, 140, 20, 20)

// right eye
fill('black')
rect(260, 125, 50, 2)

// right eye ball
fill('black')
ellipse(282, 140, 20, 20)

// nose
fill('purple')
triangle(240, 160, 220, 190, 318, 196)

// mouth
fill('red')
ci
