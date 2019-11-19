//create a variable to hold one ball
let spear;
function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}
function setup() {
  createCanvas(800, 400);
  spear = new Spear(0, 100,"brown"); //make a new ball from the Ball class and call it b.
}

coords = canvas.relMouseCoords(event);
canvasX = coords.x;
canvasY = coords.y;

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
        line(this.x,this.y,coords.x,coords.y);
	}
	moveSpear(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+4;
		this.y = this.y+2;
	}
}
