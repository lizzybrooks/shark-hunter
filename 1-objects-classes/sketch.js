//create a variable to hold one ball
let spear;
let spearX;
let spearY;



function setup() {
  createCanvas(800, 400);
  spear = new Spear(100,100,100,100,100,100,100,100,"brown", false); //make a new ball from the Ball class and call it b.
}

function draw(){
  background(220);

  spear.drawSpearTrajectory(); //draw the ball called b (go look in the Ball class for the drawBall function)
  spear.drawCover1();
  spear.drawCover2();
  spear.moveSpear();
}


function mouseClicked(){
  print(mouseX, mouseY);
  spear.spearX = mouseX;
  spear.spearY = mouseY;
  spear.moving = true;


}


class Spear {

	constructor(x,y,x1,y1,endX,endY,endX1,endY1,color,moving){ //every ball needs an x value and a y value
		this.x = x;
    		this.y = y;
        this.x1 = x1;
        this.y1 = y1;
       		this.spearX = endX;
      		this.spearY = endY;
          this.spearX1 = endX1;
          this.spearY1 = endY1;
        	this.color = color;
        	this.moving = moving;
	}

	drawSpearTrajectory(){  // draw a ball on the screen at x,y
    if(spear.moving==true){
      stroke(10);
      fill(this.color);
        strokeWeight(3);
        line(this.x,this.y,this.spearX,this.spearY);
    }

	}

  	drawCover1(){
      if(spear.moving==true){
            	rect(this.x,this.y,this.x1+10,this.y1+20)
      }
  	}
    drawCover2(){
      if(spear.moving==true){
          rect(this.x+60,this.y,this.spearX,this.spearY)
      }
    }

	moveSpear(){
    		if(this.moving == true){
        	this.x1 = this.x1+3


    		 }
	}
 }
