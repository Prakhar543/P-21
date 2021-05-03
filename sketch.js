var wall,thickness;
var bullet,speed,weight;
var damage;
function setup(){
  createCanvas(800,400)
  speed= random(223,321);
  weight= random(30,52);
  thickness= random(22,83);

  wall=createSprite(700,200,thickness,height/2)
  wall.shapeColor="yellow"

  bullet=createSprite(200,200,35,10)
  bullet.shapeColor="yellow"
}

function draw(){
 background("black");

 bullet.velocityX=speed;
 if(collide(bullet,wall)){
bullet.velocityX=0;
damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage<=10){
  wall.shapeColor="green"

}
if(damage>10){
  wall.shapeColor="red"
}
}
  drawSprites();
}







function collide(body1,body2){
  if(body1.x-body2.x<=body1.width/2+body2.width/2 && body2.x-body1.x<=body1.width/2+body2.width/2 &&
    body1.y-body2.y<=body1.height/2+body2.height/2 && body2.y-body1.y<=body1.height/2+body2.height/2){
  return true;
 }
 else{
  return false; 
  
 }}