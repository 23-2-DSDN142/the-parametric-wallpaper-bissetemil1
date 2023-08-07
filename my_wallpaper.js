//your parameter variables go here!
var bowX = 100 //moves bow on x axis
var bowY = 30 //moves bow in y axis
var ribbionX = 30 //moves ribbion on x axis
var ribbionY = 0 //moves ribbion on y axis
var snowmanX = 160 //moves snowman1 on x axis
var snowmanY = 110 //moves snowman1 on y axis
var SManX=40 //moves snowman2 on x axis
var SManY=110 //moves snowman2 on y axis


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background("#fcf5fc"); //light pale pinkWall
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  if (ribbionX>20){
 //ribbion
 stroke(1);
 stroke("#cc94d4");//darker pinkpurple
 fill("#e1bee6");//pinkpurple
 //rect(ribbionX,ribbionY*0,10,200,);//y-ribbion
 //rect(ribbionX+30,ribbionY*0,10,200,);//y-ribbion

 rect(ribbionX*0,ribbionY,200,10);//x-ribbion
 rect(ribbionX*0,ribbionY+30,200,10);//x-ribbion
 rect(ribbionX*0,ribbionY+60,200,10);//x-ribbion
 rect(ribbionX*0,ribbionY+90,200,10);//x-ribbion
 rect(ribbionX*0,ribbionY+120,200,10);//x-ribbion

 //bow
 triangle(bowX+35,bowY-25,bowX+35,bowY+25,bowX,bowY);
 triangle(bowX-33,bowY+25,bowX-33,bowY-25,bowX,bowY);
 ellipse(bowX,bowY,30,30);

}

// Snowman #1

//snowman body
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


  //snowman #2
  
  //snowman body
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


