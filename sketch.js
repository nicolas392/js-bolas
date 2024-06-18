let cor
let circleX
let circleY

function setup() {
  
  createCanvas(400, 400)
  background(100,0,0)
  cor = color(random(0,255),random(0,255),random(0,255));
  circleX = [0, 0, 0]
  circleY = [random(height),random(height),random(height)]
}
function draw(){
  
  fill(cor)
  //console.log(circleX.length)
  for (let contador in circleX){
    console.log(contador)
    circle(circleX[contador],circleY[contador],50)
    circleX[contador]+= random(0,3);
    circleY[contador]+= random(-3,3)
    
    if(circleX[contador] > width) {
      circleX[contador] = 0;
      circleY[contador] = random(height)
    }
  }
  circle(circleX[0],circleY[0],50)
  circle(circleX[1],circleY[1],50)
  circle(circleX[2],circleY[2],50)
  
  //circleX[0]+= random(0,3);
  //circleY[0]+= random(-3,3)
  
  //circleX[1]+= random(0,3);
  //circleY[1]+= random(-3,3)
  
  //circleX[2]+= random(0,3);
  //circleY[2]+= random(-3,3);
  
  if (mouseIsPressed){
    cor = color(random(0,255),random(0,255),random(0,255),
      random(0,100))
  }
}