let mySound;
let img;
function preload() {
 soundFormats('mp3');
 mySound = loadSound('assets/girl.mp3');
  img = loadImage('op.jpg');
}


function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
  img.loadPixels();
}

function draw() {
for(let i =0;i<50;i++){
  let x = random(0,width);
  let y = random(0,height);
  let r = random(15,mouseX/10);
  
  let c = img.get(x,y);

  fill(c[0],c[1],c[2],128);  
   stroke(255,128);
  noStroke();
   ellipse(x,y,r);
  
    blur(x,y,r);
// 
}
}

function blur(x,y,r){
    //let r = random(15,20);
    let c = img.get(x,y);
    fill(c[0],c[1],c[2],128);  

    ellipse(x,y,r);

   fill(c);

  for(let i = 0;i<360;i +=random(55,76))
    {
      let rx = r/2 *sin(radians(i)) + random(-3,3);
      let ry = r/2 * cos(radians(i)) + random(-3,3);
      ellipse(x+rx, y +ry, r*0.25);}
}
      
function canvasPressed() {
  mySound.play();
}