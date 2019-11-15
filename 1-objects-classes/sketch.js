//create a variable to hold one ball
let spear;
function printMousePos(event) {
  document.body.textContent =
    "clientX: " + event.clientX +
    " - clientY: " + event.clientY;
}

document.addEventListener("click", printMousePos);
function setup() {
  createCanvas(800, 400);
  spear = new Spear(0, 100,"brown"); //make a new ball from the Ball class and call it b.
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

        strokeWeight(5);
        line(this.x,this.y,);
	}
	moveSpear(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+4;
		this.y = this.y+2;
	}
}
