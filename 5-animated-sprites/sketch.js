

var boatImg, sharkIMG;
let sharky;

function preload() {
  boatImg = loadAnimation('sprites/manboat-1.png', 'sprites/manboat-3.png');
  sharkIMG = loadAnimation('sprites/shark-1.png','sprites/shark-2.png');
  }

  function setup() {
    createCanvas(1000, 1000);
    sharky = new Shark(width,0);
  }

  function draw() {
    background(200, 255, 255);
    sharky.drawShark();
    sharky.moveShark();


    //specify the animation instance and its x,y position
    //animation() will update the animation frame as well
    animation(boatImg, 350, 250);


  }
