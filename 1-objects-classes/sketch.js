//create a variable to hold one ball
let spear;
let spearX;
let spearY;


function box1(x){
  // noStroke();
  fill(220);
  rect(100,100,this.x+x,40);
}
function box2(x){
  // noStroke();
  fill(220);
  rect(500,300,this.x-10+x,50);
}
function mouseClicked(){
  print(mouseX, mouseY);
  spearX = mouseX;
  spearY = mouseY;
}
function setup() {
  createCanvas(800, 400);
  spear = new Spear(100, 100,"brown"); //make a new ball from the Ball class and call it b.
}

function draw(){
	background(220);
    spear.drawSpear(); //draw the ball called b (go look in the Ball class for the drawBall function)
    spear.moveSpear(); //move the ball called b (go look in the Ball class for the moveBall function)
}


//ball class from which to create new balls with similar properties.
class Spear {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color = color;
	}
	drawSpear(){  // draw a ball on the screen at x,y
    		stroke(10);
    		fill(this.color);

        strokeWeight(3);
        line(this.x,this.y,spearX,spearY);
	}
	moveSpear(){ //update the location of the ball, so it moves across the screen
    box1(this.x+1);
    box2(this.x+1);
	}
}
