class Drops{
    constructor(x,y){
        var options={
            restituion:1,
        };
        this.rain = Bodies.circle(x, y,80, options)
        World.add(world, this.rain)

    }
    update() {
        if(this.rain.position.y > height)   {
            Matter.Body.setPosition(this.rain, {x:random(0, 400), y:random(0, 400)})
        }

    }
    display() {
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.rain.position.x, this.rain.position.y, 10,10)
    }
}