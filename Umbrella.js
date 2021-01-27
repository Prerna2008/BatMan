class Umbrella {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.umb = Bodies.rectangle(x, y,100,300,options)
        this.image = loadImage("walking/walking_1.png")
        World.add(world, this.umb)
        
    }
    display() {
        fill("blue")
        imageMode(CENTER)
        image(this.image, this.umb.position.x, this.umb.position.y, 400, 550)
    }
}
