const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, umbrella;
var thunder1, thunder2, thunder3, thunder4;
var maxDrops = 100;
var drops = []
var rand;


function preload(){
    thunder1 = loadImage("thunderbolt/1.png")
    thunder2 = loadImage("thunderbolt/2.png")
    thunder3 = loadImage("thunderbolt/3.png")
    thunder4 = loadImage("thunderbolt/4.png")
}

function setup(){
   createCanvas(800,800)
   engine = Engine.create();
   world = engine.world;
   umbrella = new Umbrella(400,550);

   for(var i = 0; i < maxDrops; i++)    {
       drops.push(new Drops(random(0,800), random(0,0)));
   }

}

function draw(){
    Engine.update(engine)
    background(0)

    umbrella.display();
    
    rand = Math.round(random(1,4))
    
    if(frameCount % 50 === 0)   {
        thunder = createSprite(random(10,800), 10, 10, 10)
        switch(rand)    {
            case 1 : thunder.addImage(thunder1);
            break;
            case 2 : thunder.addImage(thunder2);
            break;
            case 3 : thunder.addImage(thunder3);
            break;
            case 4 : thunder.addImage(thunder4);
            break;
        }
        thunder.lifetime = 10;
    }
    for(var i = 0; i<maxDrops; i++)   {
        drops[i].display()
        drops[i].update()

    }
    
    drawSprites();
}   