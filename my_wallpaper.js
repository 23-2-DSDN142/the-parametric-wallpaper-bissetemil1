//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(40 ,40, rect_width, rect_height);
  rect(40 ,40, rect_width, rect_height);

  strokeWeight(5);
  line(70,35,130,35);

  strokeWeight(3);
  fill("#e1e2e8");//lightgrey
  ellipse(100,57,45,40);//head
  ellipse(100,100,50,45);//body
  ellipse(100,155,70,65);//body base

  strokeWeight(2);
  stroke("#868ba3");// dark purpely/blue
  fill("#868ba3");
  ellipse(90,55,10,10);//right eye
  ellipse(110,55,10,10);//left eye
}
