let capture;
let group = []; //creating a term group
let n;

function setup() {
  let c = createCanvas(700, 600); //video being captured (p5 ref)
  //saveCanvas(c, 'myCanvas', 'jpg');
  capture = createCapture(VIDEO);
  capture.hide();
  //background(0,5);          //optional background
  //noStroke()                //removing stroke optional
  n = 100;


  for (i = 0; i < n; i++) //for loop to execute the objects repeatedly
  {
    group[i] = new Particle();
    print("new group created"); //optional to print on console
  }
}

function draw() {
  image(capture, 0, 0, width, height);
  //filter(INVERT);
  for (i = 0; i < n; i++) { //for loop to execute update and                                             display command
    group[i].display() //to execute the display command
    group[i].update() //to execute the update command

  }


}

function mouseClicked() {
  translate(mouseX, mouseY) //to create new group from origin on the                                       mouseclick
  for (i = 0; i < n; i++) {
    group[i] = new Particle(mouseX, mouseY);
    print("new group created");
  }

}
class Particle {
  constructor() {
    this.s = random(10, 50);
    this.s1 = random(15, 35);
    this.color = color(random(255,255,255), random(0,255,255));
    this.color1 = color(random(0,0,0), random(120,255,255), random(0,255,0));
    this.str = color(random(0, 255), random(0, 255));
    this.str1 = color(random(255,255), random(255,255,255), random(255,0,0));
    this.stwidth = random(0.6, 5.5)
    this.pX = random(width * 0.8, height * 0.8);
    this.pY = random(width * 0.8, height * 0.8);

    this.vX = random(-3, 3);
    this.vY = random(-3, 3);

  }


  display() { //to show and create the objects on the canvas
    fill(this.color);
    stroke(this.str)
    strokeWeight(this.stwidth)
    textSize(this.s)
    text('2021',this.pX, this.pY, this.s); 
    
    fill(this.color1);
    stroke(this.str1)
    strokeWeight(this.stwidth)
    textSize(this.s1)
    text('hello',this.pY, this.pX, this.s1); 
    
  }

  update() {
    this.pX = this.pX + this.vX;
    this.pY = this.pY + this.vY;

    if (this.pX < 0 || this.pX > width) {
      this.vX = -this.vX
    }
    if (this.pY < 0 || this.pY > height) {
      this.vY = -this.vY
    }
  }

}