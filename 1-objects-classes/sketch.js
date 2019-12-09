//create a variable to hold one ball
let spear;
let spearX;
let spearY;
let dead = false;




function setup() {
  createCanvas(800, 400);
  spear = new Spear(50,50,100,100,50,"brown", false); //make a new ball from the Ball class and call it b.
}

function draw(){
  background(220);
  spear.drawSpearTrajectory(); //draw the ball called b (go look in the Ball class for the drawBall function)
  spear.drawCover1();
  spear.drawCover2();
  beginText();
  fill('red');
  rect(300,400,200,100);
  spear.hitShark();

}


function mouseClicked(){
  print(mouseX, mouseY);
  spear.spearX = mouseX;
  spear.spearY = mouseY;
  spear.moving = true;


}

function keyPressed(){
        spear.moving = true;

}

function reset(){
  spear.moving = false;
}

function beginText(){
  fill('red')
  text('click to throw spear      try and hit the shark     you only get one shot so make it count!', 300, 50);
}

function successText(){
  fill('red')
  text('Nice! You killed the shark! Reload to try again!', 300, 200);
}

function failText(){
  fill('red')
  text('Darn! You are not a good shark hunter! Reload to try again!', 300, 200)
}

if (this.dead == true){
  successText();
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
      if(spear.moving==true){
        stroke(10);
        fill(this.color);
        strokeWeight(3);
        line(this.x,this.y,this.spearX,this.spearY);
    }


    }



  	drawCover1(){

        noStroke();
        fill(220,220,220);
        rect(0,0,this.coverX,height);
       if(spear.moving==true){
            this.coverX += 10;
      }
  	}
    drawCover2(){
      if(this.spearX-this.coverX>100){
          fill(220,220,220);
          quad(this.coverX+100,0,this.coverX+100,height,width,height,  width,0 )

      }
    }

	moveSpear(){
    		if(this.moving == true){
        	this.x1 = this.x1+3
    		 }
	}
  hitShark(){
    if(this.spearY <= 400 && this.spearX <= 300){
      this.dead = true
    }
    else if (this.spearY >= 400 && this.spearX >=300) {
      failText();
    }
  }
 }
