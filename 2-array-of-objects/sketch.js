
//create an empty array called balls

let balls = [];
let rectangle = [];
function setup() {
  createCanvas(800, 400);
background(220);
}

function draw(){


//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
  for (let i = 0; i <rectangle.length; i++){
    rectangle[i].drawRect();
    rectangle[i].moveRect();
  }
}

function keyPressed(){
  if (keyCode === UP_ARROW){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(random(0,800), random(0,400),random(0,255), random(0,255), random(0,255), random(-10,10), random(-10,10));
  balls.push(b);

}
else if (keyCode === DOWN_ARROW) {
  let  g = new Rectangle(random(0,800), random(0,400),random(0,255), random(0,255), random(0,255), random(-10,10), random(-10,10));
  rectangle.push(g);
}
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,r,g,b,mX, mY){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
        this.mX = mX
        this.mY = mY
	}

	drawBall(){  // draw a ball on the screen at x,y
    		noStroke();
    		fill(this.r, this.g, this.b);
		    ellipse(this.x,this.y,10,10);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.mX;
		this.y = this.y+this.mY;
	}


}
class Rectangle {

	constructor(x,y,r,g,b,mX, mY){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
        this.mX = mX
        this.mY = mY
	}

	drawRect(){  // draw a ball on the screen at x,y
    		noStroke();
    		fill(this.r, this.g, this.b);
		    rect(this.x,this.y,30,30);
	}

	moveRect(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.mX;
		this.y = this.y+this.mY;
	}


}
