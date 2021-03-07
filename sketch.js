var cat, catImage, catWalkingImage, catSittingImage;
var garden, gardenImage;
var mouse, mouseImage, mouseTeasingImage, 


function preload() {
    mouseImage = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouseTeasingImage = loadAnimation("images/mouse4.png")
    catImage = loadAnimation("images/cat1.png");
    gardenImage = loadImage("garden.png");
    cat2 = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");
}

function setup() {
    createCanvas(1000,800);
    garden = createSprite(600, 200, 300, 20);
    garden.addImage("garden", gardenImage);

    mouse = createSprite(200,100, 20, 20);
    mouse.addAnimation("mouse", mouseImage);

    cat = createSprite(300,200, 20, 20);
    cat.addAnimation("cat", catImage);
}

function draw() {
    background(gardenImage);
    if (cat.x - mouse.x < (cat.width/2 - mouse.width/2)) {
        cat.velocityX = 0
        cat.addAnimation("catWalking", cat2);
        cat.x = 300;
        cat.scale = 0.5;
        cat.changeAnimation("catSitting", cat4);
        mouse.addAnimation("mouseTeasing", mouseTeasingImage);
        mouse.scale = 0.5;
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW) {
        cat.velocityX = -5;
        cat.addAnimation("catRunning", cat2);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("mouseTeasing", mouseImage2);
        mouse.changeAnimation("mouseTeasing");
    }
 }
