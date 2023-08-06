//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background("#f2f7f7"); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//rect(40 ,40, rect_width, rect_height);
//rect(40 ,40, rect_width, rect_height);

var bowX = 120
var bowY = 30
var ribbionX = 30
var ribbionY = 30
var snowmanX = 160
var snowmanY = 110

 //ribbion
 stroke(1);
 stroke("#cc94d4");//darker pinkpurple
 fill("#e1bee6");//pinkpurple
 //rect(ribbionX,ribbionY*0,10,200,);//y-ribbion
 //rect(ribbionX+30,ribbionY*0,10,200,);//y-ribbion
 //rect(ribbionX+60,ribbionY*0,10,200,);//y-ribbion
 //rect(ribbionX+90,ribbionY*0,10,200,);//y-ribbion
 //rect(ribbionX+120,ribbionY*0,10,200,);//y-ribbion


 rect(ribbionX*0,ribbionY,200,10);//x-ribbion
 rect(ribbionX*0,ribbionY+30,200,10);//x-ribbion
 rect(ribbionX*0,ribbionY+60,200,10);//x-ribbion
 rect(ribbionX*0,ribbionY+90,200,10);//x-ribbion
 rect(ribbionX*0,ribbionY+120,200,10);//x-ribbion

 //bow
 triangle(bowX+35,bowY-25,bowX+35,bowY+25,bowX,bowY);
 triangle(bowX-33,bowY+25,bowX-33,bowY-25,bowX,bowY);
 ellipse(bowX,bowY,30,30);

//snowman
  strokeWeight(2);
  stroke("#cce1e3");//lightblue
  fill("#cce1e3");//lightblue
  ellipse(snowmanX,snowmanY,50,45);//head
  ellipse(snowmanX,snowmanY+55,70,65);//body base

  //eyes
  strokeWeight(1.5);
  stroke("#868ba3");// dark purpely/blue
  fill("#ffffff");//white
  ellipse(snowmanX-10,snowmanY,10,10);//right eye
  ellipse(snowmanX+10,snowmanY,10,10);//left eye
  stroke("#868ba3");// dark purpely/blue
  fill("#868ba3");
  ellipse(snowmanX-10,snowmanY-3,3,4);//middle of eye
  ellipse(snowmanX+10,snowmanY-3,3,4);//middle of eye

  //hat
  fill("#4b4661");
  stroke("#4b4661");//greyblue
  strokeWeight(3);
  line(snowmanX-25,snowmanY-20,snowmanX+15,snowmanY-24);
  
  beginShape();
  vertex(snowmanX-30,snowmanY-46);
  vertex(snowmanX+15,snowmanY-50);
  vertex(snowmanX+5,snowmanY-25);
  vertex(snowmanX-15,snowmanY-22);
  endShape(CLOSE);
  
  //nose
  stroke("#faa250");//orange
  fill("#faa250");//orange
  triangle(snowmanX+1,snowmanY+8,snowmanX-10,snowmanY+10,snowmanX+2,snowmanY+11);


  var SManX=40
  var SManY=55
 
 //snowman
 strokeWeight(2);
 stroke("#cce1e3");//lightblue
 fill("#cce1e3");//lightblue
 ellipse(SManX,SManY,50,45);//head
 ellipse(SManX,SManY+55,70,65);//body base

 //eyes
 strokeWeight(1.5);
 stroke("#868ba3");// dark purpely/blue
 fill("#ffffff");//white
 ellipse(SManX-10,SManY,10,10);//right eye
 ellipse(SManX+10,SManY,10,10);//left eye
 stroke("#868ba3");// dark purpely/blue
 fill("#868ba3");
 ellipse(SManX-10,SManY-3,3,4);//middle of eye
 ellipse(SManX+10,SManY-3,3,4);//middle of eye

 //hat
 fill("#4b4661");
 stroke("#4b4661");//greyblue
 strokeWeight(3);
 line(SManX-25,SManY-20,SManX+15,SManY-24);
 
 beginShape();
 vertex(SManX-30,SManY-46);
 vertex(SManX+15,SManY-50);
 vertex(SManX+5,SManY-25);
 vertex(SManX-15,SManY-22);
 endShape(CLOSE);
 
 //nose
 stroke("#faa250");//orange
 fill("#faa250");//orange
 triangle(SManX+1,SManY+8,SManX-10,SManY+10,SManX+2,SManY+11);


}


