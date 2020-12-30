//Renaming of the matter.js objects
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;
var box3;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();// create the engine
    world = engine.world;// adding the engine to the world

    box1 = new Box(200,300,50,50);// create box1 object
    box2 = new Box(240,100,50,100);// create box2 object
    box3=new Box(280,200,50,50);
    ground = new Ground(400,height,800,20)// create ground object
    
}

function draw(){
    background("lightblue");
    Engine.update(engine);// update the engine
    box1.display();// display the box1
    box2.display();// display the box2
    box3.display();
    ground.display();// display the ground
}