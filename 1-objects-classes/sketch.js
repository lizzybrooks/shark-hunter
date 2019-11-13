//create a variable to hold one ball
let b;
let anotherBall;
let dog;
let g;
let goat;
let anotherGoat
function setup() {
  createCanvas(800, 400);
  b = new Dog(0, 100,"red"); //make a new ball from the Ball class and call it b.
  g = new Goat(0,20,"blue");
  anotherBall = new Dog(200,20,"green");
  anotherGoat = new Goat(60, 200, "purple");
  goat = new Goat(300, 300, "brown")
  dog = new Dog(100,200,"yellow")
}


function draw(){
	background(220);
    b.drawDog(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveDog(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawDog();
    anotherBall.moveDog();
    dog.drawDog();
    dog.moveDog();
    g.drawGoat(); //draw the ball called b (go look in the Ball class for the drawBall function)
    g.moveGoat(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherGoat.drawGoat();
    anotherGoat.moveGoat();
    goat.drawGoat();
    goat.moveGoat();
}


//ball class from which to create new balls with similar properties.
class Dog {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color = color;
	}
	drawDog(){  // draw a ball on the screen at x,y
    		stroke(10);
    		fill(this.color);
		    rect(this.x,this.y,100,10);
	}
	moveDog(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+4;
		this.y = this.y+2;
	}
}
class Goat {
  constructor(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;
  }
  drawGoat(){
    stroke(1);
    fill(this.color);
    ellipse(this.x, this.y, 30, 70);
  }
  moveGoat(){
    this.x+= 10;
    this.y+=1;
  }

}
