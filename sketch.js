const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10,
    block11, block12, block13, block14, block15, block16;
var block17, polygon18, polygon19, polygon20, polygon21, polygon22, polygon23, polygon24, polygon25;

var polygon, polygonImg, slingshot;


function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(900, 500);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(390, 300, 250, 10);
    stand2 = new Ground(725, 200, 250, 10);
    block1 = new Block(300, 270, 30, 40);
    block2 = new Block(330, 270, 30, 40);
    block3 = new Block(360, 270, 30, 40);
    block4 = new Block(390, 270, 30, 40);
    block5 = new Block(420, 270, 30, 40);
    block6 = new Block(450, 270, 30, 40);
    block7 = new Block(480, 270, 30, 40);

    block8 = new Block(330, 230, 30, 40);
    block9 = new Block(360, 230, 30, 40);
    block10 = new Block(390, 230, 30, 40);
    block11 = new Block(420, 230, 30, 40);
    block12 = new Block(450, 230, 30, 40);

    block13 = new Block(360, 190, 30, 40);
    block14 = new Block(390, 190, 30, 40);
    block15 = new Block(420, 190, 30, 40);

    block16 = new Block(390, 150, 30, 40);

    block17 = new Block(660, 180, 30, 40);
    block18 = new Block(690, 180, 30, 40);
    block19 = new Block(720, 180, 30, 40);
    block20 = new Block(750, 180, 30, 40);
    block21 = new Block(780, 180, 30, 40);
    
    block22 = new Block(690, 140, 30, 40);
    block23 = new Block(720, 140, 30, 40);
    block24 = new Block(750, 140, 30, 40);

    block25 = new Block(720, 100, 30, 40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingshot = new Slingshot(polygon, {x:100, y:200})
}

function draw() {
    background("brown");
    text(mouseX + " " + mouseY, mouseX, mouseY);
    Engine.update(engine);
    stand1.display();
    stand2.display();
    fill("lightblue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("cyan");
    block13.display();
    block14.display();
    block15.display();

    fill("grey");
    block16.display();

    fill("lightblue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill("cyan");
    block22.display();
    block23.display();
    block24.display();

    fill("pink");
    block25.display();


    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
    slingshot.display();



}

function mouseDragged() {
    Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    slingshot.fly();
}