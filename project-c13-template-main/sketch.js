var garden,rabbit;
var gardenImg,rabbitImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 

 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function createApples(){

  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifetime=150;


}


function createorangeL(){

orangeL=createSprite(random(50,350),40,10,10)
orangeL.addImage(orangeImg);
orangeL.velocityY=3;
orangeL.scale=0.07;
orangeL.lifetime=150


}

function createRedL(){
RedL=createSprite(random(50,350),40,10,10);
RedL.addImage(redImg);
RedL.velocityY=3;
RedL.scale=0.07;
RedL.lifetime=150;

}












function draw() {

  createApples();
  createRedL();
  createorangeL();  

  var select_sprites = Math.round(random(1, 3));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1){
       createApples();
      } else if(select_sprites == 2) {
        createorangeL();
      }else {
        createRedL();
    }

  }
rabbit.x=mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}


