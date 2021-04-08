var t = 0;

function setup() {
  createCanvas(800, 800);
  function colorchange() {
    
  var h = hour();
	var m = minute();
	var s = second();
	//var t = h*3600 + m*60 + s;
  } 
}

function draw() {
  background(220);
  
  var s = second();
  var m = minute();
  var h = hour();
  
  //This is the actual cup, drawn with an arc
  fill("eggshell white");
  arc(400, 400, 450, 730, 0, PI);
 
  //This is the handle of the cup
 fill("eggshell white");
  arc(200, 520, 250, 145, PI / 2-PI/13, 3 * PI / 2 -QUARTER_PI+PI/7, OPEN);
  
  fill(220);
  arc(200, 520, 185, 80, PI / 2, 3 * PI / 2 -QUARTER_PI+PI/9, CHORD);
  

  
  // changes color of the bars
  var a1=map(h, 0, 1, 0, 255)
  var a2=map(h, 1, 2, 0, 255)
  var a3=map(h, 2, 3, 0, 255)
  var a4=map(h, 3, 4, 0, 255)
  var a5=map(h, 4, 5, 0, 255)
  var a6=map(h, 5, 6, 0, 255)
  var a7=map(h, 6, 7, 0, 255)
  var a8=map(h, 7, 8, 0, 255)
  var a9=map(h, 8, 9, 0, 255)
  var a10=map(h, 9, 10, 0, 255)
  var a11=map(h, 10, 11, 0, 255)
  var a12=map(h, 11, 12, 0, 255)
    var a13=map(h, 12, 13, 0, 255)
  var a14=map(h, 13, 14, 0, 255)
  var a15=map(h, 14, 15, 0, 255)
  var a16=map(h, 15, 16, 0, 255)
  var a17=map(h, 16, 17, 0, 255)
  var a18=map(h, 17, 18, 0, 255)
  var a19=map(h, 18, 19, 0, 255)
  var a20=map(h, 19, 20, 0, 255)
  var a21=map(h, 20, 21, 0, 255)
  var a22=map(h, 21, 22, 0, 255)
  var a23=map(h, 22, 23, 0, 255)
  var a24=map(h, 23, 24, 0, 255)
  
  //The bars 
  noStroke();
  fill(117, 77, 27, a24);
  rect(178, 400, 444, 10); //24 top
  fill(117, 77, 27, a23);
  rect(180, 415, 440, 10);//23
  fill(117, 77, 27, a22);
  rect(180, 430, 440, 10);//22
  fill(117, 77, 27, a21);
  rect(180, 445, 440, 10);//21
  fill(117, 77, 27, a20);
  rect(183, 460, 435, 10);//20
  fill(117, 77, 27, a19);
  rect(185, 475, 432, 10);//19
  fill(117, 77, 27, a18);
  rect(200, 490, 412, 10);//18
  fill(117, 77, 27, a17);
  rect(203, 505, 405, 10);//17
  fill(117, 77, 27, a16);
  rect(207, 520, 400, 10);//16
  fill(117, 77, 27, a15);
  rect(212, 535, 393, 10);//15
  fill(117, 77, 27, a14);
  rect(218, 550, 382, 10);//14
  fill(117, 77, 27, a13);
  rect(220, 565, 375, 10);//13
  fill(117, 77, 27, a12);
  rect(220, 580, 368, 10);//12
   fill(117, 77, 27, a11);
  rect(220, 595, 365, 10);//11
   fill(117, 77, 27, a10);
    rect(223, 610, 355, 10);//10
   fill(117, 77, 27, a9);
  rect(230, 625, 342, 10);//9
    fill(117, 77, 27, a8);
  rect(237, 640, 325, 10);//8
      fill(117, 77, 27, a7);
  rect(247, 655, 305, 10);//7
   fill(117, 77, 27, a6);
  rect(257, 670, 285, 10);//6
   fill(117, 77, 27, a5);
  rect(268, 685, 264, 10);//5
    fill(117, 77, 27, a4);
  rect(282, 700, 236, 10);//4
   fill(117, 77, 27, a3);
  rect(298, 715, 204, 10);//3
    fill(117, 77, 27, a2);
  rect(318, 730, 163, 10);//2
  fill(117, 77, 27, a1);
  rect(350, 745, 100, 10);//1 bottom
  
  //Numbers for the bars to make the clock more practical in use
  text(h, 580, 398)
  
  //Energy/Battery
  fill(50);
  rect(250, 215, 300, 100);
  fill(50);
  rect(550, 240, 10, 50);
   fill("#2FFF0A");
  rect(252, 223, s*5, 85);
  fill(255);
  textSize(32);
text(m, 385, 275);
  
 
}