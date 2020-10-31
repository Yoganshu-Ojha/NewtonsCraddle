const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform;
var bobObject1, slingShot;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,50,600,30);

    bobObject1 = new BOB2(200,100,50);
    bobObject2 = new BOB1(300,100,50);
    bobObject3 = new BOB1(400,100,50);
    bobObject4 = new BOB1(500,100,50);
    bobObject5 = new BOB2(600,100,50);

    slingshot1 = new SlingShot(bobObject1.body,{x:200, y:50});
    slingshot2 = new SlingShot(bobObject2.body,{x:300, y:50});
    slingshot3 = new SlingShot(bobObject3.body,{x:400, y:50});
    slingshot4 = new SlingShot(bobObject4.body,{x:500, y:50});
    slingshot5 = new SlingShot(bobObject5.body,{x:600, y:50});
}

function draw(){
    background("lavender");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();

    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();

    slingshot1.display();    
    slingshot2.display();    
    slingshot3.display();    
    slingshot4.display();    
    slingshot5.display();    
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); 
   } 
}