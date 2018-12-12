var x= 280;
var moonRadius = 17;
var y = 280;
var rainRadius = 3;
function setup() {
  createCanvas(800, 330);
							 

		
}

function draw() {

	background (127,16,65);
   
	
		
	//the moon :)
  fill(255,229,243);
  noStroke();
  ellipse(x,45,40,40);
  x = x + 0.5 ;
  fill(127,16,65);
  rect(340,100,60,100);
	
	//rain
	fill(255,255,255);
	noStroke();
	ellipse(510,y,2,2);
	y=y+2

	
	
	//the stars
	fill(255,229,243);
	noStroke();
	ellipse(25,80,5,5);
	ellipse (15,70,4,4);
	ellipse (150,50,6,6);
	ellipse(190,40,3,3);
	ellipse(90,179,4,4);
	ellipse(110,130,5,5);
	ellipse(250,115,6,6);
	ellipse(310,180,5,5);
	ellipse(300,30,3,3);
	ellipse(150,140,4,4);
	
	//the clouds
	
	ellipse(500,50,70,40);
	ellipse(536,64,50,20);
	
	ellipse(580,180,60,30);
	ellipse(610,160,70,40);
	ellipse(643,175,40,20);
	 //buildings
	stroke(3);
	line(0,300,300,300);
	line(300,300,300,200);
	line(300,200,350,200);
	line(350,200,350,300);
	line(350,300,340,300);
	line(340,300,340,100);
	line(340,100,370,65);
	line(370,65,400,100);
	line(400,100,400,300);
	line(400,300,375,300);
	line(375,300,375,150);
	line(375,150,430,180);
	line(430,180,430,300);
	line(430,300,800,300);
	
	 //tree
	fill(255,173,197); //green
	ellipse(450,284,17,17);
	line(450,300,450,280);
	line(455,285,450,290);
	line(445,281,450,286);
	
	//left tree
	fill (255,173,197);
	ellipse(275,270,21,21)
	line(275,265,275,300);
	line(280,270,275,276);
	line(269,268,275,273);
	 //name
	textSize(20);
	fill(179,0,155);
	text("Kendall Wightman",21,322);
	fill(255,173,197);
	text("Kendall Wightman",19,320);
	console.log(mouseX, mouseY)
	
	
	
	if (x>width+moonRadius){
		x=-moonRadius;
		
		
	if (y>height+rainRadius){
		x=-rainRadius;
	}
}
}