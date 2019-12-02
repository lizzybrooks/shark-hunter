//create a variable to hold one ball
let spear;
let spearX;
let spearY;



function setup() {
  createCanvas(800, 400);
  spear = new Spear(100, 100,100,100,"brown", false); //make a new ball from the Ball class and call it b.
}

function draw(){
  background(220);

  spear.drawSpearTrajectory(); //draw the ball called b (go look in the Ball class for the drawBall function)
  spear.drawCover();
  spear.moveSpear();
}


function mouseClicked(){
  print(mouseX, mouseY);
  spear.spearX = mouseX;
  spear.spearY = mouseY;


}

function keyPressed(){
 spear.moving = true;

}


class Spear {

	constructor(x,y,endX,endY,color,moving){ //every ball needs an x value and a y value
		this.x = x;
    		this.y = y;
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

  	drawCover(){
    		stroke(220)
    		strokeWeight(30)
    		line(this.x+50,this.y+5, this.spearX, this.spearY)

  	}
	
	moveSpear(){
    		if(this.moving == true && this.x < this.spearX){
        	this.x = this.x+ 3
    		}
	}
}
