let mySound;
function preload() {
 soundFormats('mp3');
 mySound = loadSound('assets/song.mp3');
}

let total = 100;
let multiplier = 0;
let rate = 0.005;
let radius;

function setup() {
  
   createCanvas(900, 900);
   
   frameRate(10);
   background(0);
   radius = min(width, height) / 2 - 20;
  
   let cnv = createCanvas(900, 900);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}

function draw() {
  
   translate(width/2, height/2);
   background(0);
   noFill();
   colorMode(RGB, 255);
   stroke(multiplier * 100 % 255, 200, 255);
   for (let i = 0; i <= total; i++) {
      beginShape();
      connectTo(i);
      connectTo(i*multiplier);
      endShape();
   }
   multiplier += rate;
}

function connectTo(number) {
   let interval = TWO_PI / total;
   let angle = interval * number;
   let x = tan(angle) * radius;
   let y = sin(angle) * radius;
   vertex(x, y);
}
function canvasPressed() {
  
  mySound.play();
}