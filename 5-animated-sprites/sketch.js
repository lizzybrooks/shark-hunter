
var boatImg, sharkIMG;

function preload() {

  boatImg = loadAnimation('sprites/manboat-1.png', 'manboat-2.png', 'manboat-3.png');
  sharkIMG = loadAnimation('sprites/shark-1.png','sprites/shark-2.png');

  }

  function setup() {
    createCanvas(800, 600);
  }

  function draw() {
    background(200, 255, 255);

    //specify the animation instance and its x,y position
    //animation() will update the animation frame as well
    animation(boatImg, 300, 150);
    animation(sharkIMG, 500,300);

  }
