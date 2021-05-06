class Hero{
    constructor(x,y,radius){
        this.image=loadImage("images/superman.png")
    var options={
       restitution:0.8,
       frictionAir:0.005,
       density:0.04

    }
    
    this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
        
}
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    fill("black")
    stroke("white")
    imageMode(CENTER)
    image(this.image,0,0,200,120)
    pop()
}
}