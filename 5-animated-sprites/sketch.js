
//create a variable to hold your avatar

//create a variable to hold your avatar
let me;
let r;
let g;
let b;
let bow;

function preload() {
  bow = loadImage('bowandarrow.png')
}

function setup() {
  createCanvas(1000, 780);
  r=255;
  g=255;
  b=255;

  angleMode(DEGREES);

  //make one avatar called me
  me = new Avatar(0, 0, 10);
  arrow = new Arrow(0,0,10);

}

function draw(){
	background(r,g,b);
  angleMode(DEGREES); // Change the mode to DEGREES
    let a = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    push();
    rotate(a);
    image(bow,this.x,this.y,100,100)
    me.drawMe();
    me.moveMe();

    pop();



    if (me.y >= 500){
      me.y=499
    }


}

function keyPressed() {
  if (keyCode === 32) {
    me.drawArrow();
  }
}

class Arrow {
  drawArrow(){

          line(this.x+80,this.y+30,this.x,this.y+30)
      }
      constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
    		    this.x = x;
        		this.y = y;
            this.speed = speed;
    	}


}
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}


	drawMe(){
        // strokeWeight(3);
    		// fill("blue");
		    // ellipse(this.x,this.y,20,20);
        // line(this.x,this.y, this.x, this.y+40);
        // line(this.x, this.y+40, this.x-20, this.y+60);
        // line(this.x, this.y+40, this.x+10, this.y+50);
        // line(this.x+10, this.y+50, this.x+5, this.y+60);
        // line(this.x, this.y+15, this.x-10, this.y+25);
        // line(this.x-10, this.y+25, this.x+10, this.y+35);
        ellipse(this.x,this.y,50);
        line(this.x,this.y+25,this.x,this.y+80)
        line(this.x,this.y+40,this.x+70,this.y+35)
        line(this.x,this.y+80,this.x+20,this.y+130)
        line(this.x-30,this.y+130,this.x,this.y+80)
        line(this.x,this.y+40,this.x-50,this.y+40)
        line(this.x-5,this.y+30,this.x-50,this.y+40)
        ellipse(this.x+70,this.y+35,10)
        ellipse(this.x-8,this.y+30,10)
        image(bow,this.x-10,this.y-20,100,100)

	}

	moveMe(){
    if (keyIsDown(87)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(83)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(65)){
      this.x -= this.speed;
    }
    if (keyIsDown(68)){
      this.x += this.speed;
    }
    if (keyIsDown(80)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(60)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(60)){
      this.x -= this.speed;
    }
    if (keyIsDown(60)){
      this.x += this.speed;
    }
    if (keyIsDown(32)){
      r = 255;
      g = 255;
      b = 255;
    }
	}

  die(){
if (me.y = 0){
  me.y = 779

    }
  }
 bouncefloor(){
   if (this.y >= 580){
   this.jump = -this.jump;
   }

 }
}
