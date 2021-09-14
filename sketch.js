var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;
 keyPressed();
}

function draw() {

    background(bg);

    if(tom.x - jerry.x <(tom.width - jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("gato quieto",tomImg3);
        tom.changeAnimation("gato quieto");
        tom.x=300;
        tom.scale=0.2;

        jerry.velocityX=0;
        jerry.addAnimation("raton quieto",jerryImg3);
        jerry.changeAnimation("raton quieto");
        jerry.x=200;
        jerry.scale=0.1;
 
    }
    drawSprites();
}


function keyPressed(){
 if(keyCode === LEFT_ARROW){
  jerry.addAnimation("raton molestando",jerryImg2);
  jerry.changeAnimation("raton molestando");
  jerry.frameDelay = 25;

  tom.addAnimation("gato molesto",tomImg2);
  tom.changeAnimation("gato molesto");
  tom.frameDelay = 25;
  tom.velocityX=-5;
 }

}