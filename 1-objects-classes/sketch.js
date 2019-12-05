//create a variable to hold one ball
let spear;
let spearX;
let spearY;



function setup() {
  createCanvas(800, 400);
  spear = new Spear(100,100,200,200,100,"brown", false); //make a new ball from the Ball class and call it b.
}

function draw(){
  background(220);

  spear.drawSpearTrajectory(); //draw the ball called b (go look in the Ball class for the drawBall function)
  spear.drawCover1();
  spear.drawCover2();

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

	constructor(x,y,endX,endY,coverX,color,moving){ //every ball needs an x value and a y value
		this.x = x;
    	this.y = y;

       		this.spearX = endX;
      		this.spearY = endY;

          this.coverX = coverX;
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

        noStroke();
        fill(220,220,220);
        rect(0,0,this.coverX,height);
       if(spear.moving==true){
            this.coverX += 2;
      }
  	}
    drawCover2(){
      if(this.spearX-this.coverX>200){
          fill(220,220,220);
          quad(this.coverX+200,0,this.coverX+200,height,width,height,  width,0 )

      }
    }

	moveSpear(){
    		if(this.moving == true){
        	this.x1 = this.x1+3


    		 }
	}
 }
