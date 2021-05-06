class Fly{
    constructor(bodyA,pointB){
        var options={
         bodyA:bodyA,
         pointB:pointB,
         length:250
      }
  this.fly=Constraint.create(options)
  this.pointB=pointB
  World.add(world,this.fly)
    }
  display(){
      var pointA =this.fly.bodyA.position
      var pointB=this.pointB
      strokeWeight(3)
      line(pointA.x,pointA.y,pointB.x,pointB.y)
  }
  }