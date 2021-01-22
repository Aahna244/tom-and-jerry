var garden
var jerryImage,jerry
var tomImage,tom

function preload() {
    //load the images here
    gardenImage=loadImage("garden.png");
    jerryImage=loadImage("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png");
    tomImage=loadImage("tomOne.png","tomTwo.png","tomThree.png","tomFour.png");
}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here
    garden=createSprite(400,400);
    garden.addImage(gardenImage);
    
    tom = createSprite(250,300,20,20);
    tom.addAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png",tomImage);
    tom.scale=0.05;
  
    jerry=createSprite(220,300,20,20);
    jerry.addAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png",jerryImage)
    jerry.scale=0.05;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyPressed===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("tomTwo.png",jerryImage);
    tom.changeAnimation("catRunning")

}
  //For moving and changing animation write code here


}
