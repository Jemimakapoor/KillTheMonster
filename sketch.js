
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine
var world 

function preload() {
backGround=loadImage("images/backGround.jpg")
monster=loadImage("images/monster.png")


}

function setup() {
  createCanvas(3000, 800);
  engine= Engine.create()
  world=engine.world

  ground= new Ground(600,600,2000,400)
  hero= new Hero(200,200,80)
  fly= new Fly(hero.body,{x:500,y:50})
  monster = new Monster(1000,200,80)


  



block5 = new Block(900,100,70,70)
block6 = new Block(900,100,70,70)
block7 = new Block(900,100,70,70)
block8 = new Block(900,100,70,70)




block13= new Block(800,100,70,70)
block14= new Block(800,100,70,70)
block15= new Block(800,100,70,70)
block16= new Block(800,100,70,70)


block19= new Block(700,100,70,70)
block20= new Block(700,100,70,70)
block21= new Block(700,100,70,70)
block22= new Block(700,100,70,70)
block23= new Block(700,100,70,70)
block24= new Block(700,100,70,70)


}

function draw() {
  background(backGround);
  Engine.update(engine)

  hero.display()
  ground.display()
  fly.display()



block5.display()
block6.display()
block7.display()
block8.display()



block13.display()
block14.display()
block15.display()
block16.display()


block19.display()
block20.display()
block21.display()
block22.display()
block23.display()
block24.display()
monster.display()

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
   }









