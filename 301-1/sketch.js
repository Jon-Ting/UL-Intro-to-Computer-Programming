/*
The case of the Python Syndicate
Stage 1

Officer: 5035852
CaseNum: 301-0-88468003-5035852

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var anna_karpinski_image;
var pawel_karpinski_image;
var rocky_kray_image;
var countess_hamilton_image;
var robbie_kray_image;
var bones_karpinski_image;


//declare your new variables below
var anna_karpinski_x_coordinate = 115;
var anna_karpinski_y_coordinate = 40;
var pawel_karpinski_x_coordinate = 408;
var pawel_karpinski_y_coordinate = 40;
var rocky_kray_x_coordinate = 701;
var rocky_kray_y_coordinate = 40;
var countess_hamilton_x_coordinate = 115;
var countess_hamilton_y_coordinate = 309;
var robbie_kray_x_coordinate = 408;
var robbie_kray_y_coordinate = 309;
var bones_karpinski_x_coordinate = 701;
var bones_karpinski_y_coordinate = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(robbie_kray_image, robbie_kray_x_coordinate, robbie_kray_y_coordinate);
	image(anna_karpinski_image, anna_karpinski_x_coordinate, anna_karpinski_y_coordinate);
	image(pawel_karpinski_image, pawel_karpinski_x_coordinate, pawel_karpinski_y_coordinate);
	image(rocky_kray_image, rocky_kray_x_coordinate, rocky_kray_y_coordinate);
	image(countess_hamilton_image, countess_hamilton_x_coordinate, countess_hamilton_y_coordinate);
	image(bones_karpinski_image, bones_karpinski_x_coordinate, bones_karpinski_y_coordinate);

}