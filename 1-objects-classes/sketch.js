//create a variable to hold one ball
let spear;
let spearX;
let spearY;



function setup() {
  createCanvas(800, 400);
  spear = new Spear(100,100,100,100,100,100,"brown", true); //make a new ball from the Ball class and call it b.
}

function draw(){
  background(220);

  spear.drawSpearTrajectory(); //draw the ball called b (go look in the Ball class for the drawBall function)
  spear.drawCover1();
  spear.moveSpear();
}


function mouseClicked(){
  print(mouseX, mouseY);
  spear.spearX = mouseX;
  spear.spearY = mouseY;
  spear.moving = true;


}


class Spear {

	constructor(x,y,x1,y1,endX,endY,color,moving){ //every ball needs an x value and a y value
		this.x = x;
    		this.y = y;
        this.x1 = x1;
        this.y1 = y1;
       		this.spearX = endX;
      		this.speary = endY;
        	this.color = color;
        	this.moving = moving;
	}

	drawSpearTrajectory(){  // draw a ball on the screen at x,y
    		stroke(10);
    		fill(this.color);
       		strokeWeight(3);
        	line(this.x,this.y,this.spearX,this.spearY);
	}

  	drawCover1(){
    	rect(this.x1,this.y1,this.x1+40,this.y1+40)

  	}

	moveSpear(){
    		if(this.moving == true){
        	this.x1 = this.x1+3
          // this.spearX = this.spearX+3

    		}
	}
}
