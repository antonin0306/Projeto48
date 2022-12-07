var BattleGround;
var cachorroImg;
var cachorro;
var fireballImg;
var fireball;
var gramballImg;
var gramball;
var heroImg;
var hero;
var soundtrack;
var slashImg;
var slash;
var slash2;
var wall1;
var wall2;
var gramL = 100;
var fireL = 100;

function preload(){
BattleGround = loadImage ("assets/Battleground.png")
cachorroImg = loadAnimation ("assets/cachorro-1.png.png","assets/cachorro-2.png.png",
"assets/cachorro-3.png.png","assets/cachorro-4.png.png","assets/cachorro-5.png.png")
fireballImg = loadImage ("assets/FyreBall.png")
gramballImg = loadImage ("assets/GramBall.png")
heroImg = loadImage ("assets/hero.png")
soundtrack = loadSound ("assets/soundtrack.mp3")
slashImg = loadImage ("assets/attack.png")
}

function setup(){
createCanvas (1920/1.3,1080/1.5)
cachorro = createSprite (100, 500)
cachorro.scale = 1.2
cachorro.addAnimation ("andando", cachorroImg)
fireball = createSprite (1300, 500)
fireball.addImage (fireballImg)
gramball = createSprite (1000, 500)
gramball.addImage (gramballImg)
gramball.scale = 0.8
hero = createSprite (300, 450)
hero.addImage (heroImg)
hero.scale = 0.5
soundtrack.play ()
soundtrack.setVolume (0.3)
wall1 = createSprite(1100,25,800,10 )
wall2 = createSprite(1100,700,800,10 )
fireball.velocityY = 10
gramball.velocityY = -10
wall1.visible = false
wall2.visible = false
slash2 = new Group()
gramball.setCollider("rectangle",0,0,200,200)
}

function draw() {
background (BattleGround) 
 drawSprites()    
 aleatorio() 
 remover()
 remover2()
 gl()
 fl()
}

function keyReleased () {
  if (keyCode===32) {
    slash = createSprite (400,475)
    slash2.add(slash)
    slash.addImage (slashImg)
    slash.scale = 0.3
    slash.velocityX = 15
    slash.lifetime = 100
    //slash.debug = true
  }  

}

function aleatorio () {
var a = Math.round (random(8,15))
var b = Math.round (random(8,15))
  
if (gramball.collide(wall2)) {
    gramball.velocityY = -a
}
if (fireball.collide(wall1)) {
    fireball.velocityY = b
}
    
    if (fireball.collide(wall2)) {
        fireball.velocityY = -b
    }
    if (gramball.collide(wall1)) {
        gramball.velocityY = a
    }
}
function remover() {
  gramball.overlap(slash2,function (collector,collected){
    collected.remove()
    gramL -= 5
  })
}
function remover2() {
  fireball.overlap(slash2,function (collector,collected){
    collected.remove()
    fireL -= 5
  })
}
function gl() {
push()
fill("white")
rect(20,20,100,10)
fill("green")
rect(20,20,gramL,10)
pop()
}
function fl() {
  push()
  fill("white")
  rect(20,60,100,10)
  fill("red")
  rect(20,60,fireL,10)
  pop()
  }