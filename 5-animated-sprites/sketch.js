let spear;
let spearX;
let spearY;
let dead = false;

var boatImg, sharkIMG;
let sharky;

function preload() {
  boatImg = loadAnimation('sprites/manboat-1.png', 'sprites/manboat-3.png');
  sharkIMG = loadAnimation('sprites/shark-1.png','sprites/shark-2.png');
  }

  function setup() {
    createCanvas(1000, 1000);
    sharky = new Shark(width,0);
    spear = new Spear(350,250,100,100,50,"brown", false);
  }

  function draw() {
    background(200, 255, 255);
    spear.drawSpearTrajectory(); //draw the ball called b (go look in the Ball class for the drawBall function)
    spear.drawCover1();
    spear.drawCover2();

    sharky.drawShark();
    sharky.moveShark();


    //specify the animation instance and its x,y position
    //animation() will update the animation frame as well
    animation(boatImg, 350, 250);


    beginText();
    fill('red');
    rect(300,400,200,100);
    spear.hitShark();


  }
