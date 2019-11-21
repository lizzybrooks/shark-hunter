//create a variable to hold one ball
let spear;
let spearX;
let spearY;

function mouseClicked(){
  print(mouseX, mouseY);
  spearX = mouseX;
  spearY = mouseY;
}
function setup() {
  createCanvas(800, 400);
  spear = new Spear(100, 100,"brown",1); //make a new ball from the Ball class and call it b.
}

function draw(){
	background(220);
    spear.drawSpear(); //draw the ball called b (go look in the Ball class for the drawBall function)
    // spear.moveSpear(); //move the ball called b (go look in the Ball class for the moveBall function)
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
		this.x = this.x;
		this.y = this.y;
	}
}
