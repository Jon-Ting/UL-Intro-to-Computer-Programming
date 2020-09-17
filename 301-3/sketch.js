/*
The case of the Python Syndicate
Stage 3


Officer: 5035852
CaseNum: 301-2-52119691-5035852

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Cecil karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Cecil karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var anna_karpinski_image;
var rocky_kray_image;
var bones_karpinski_image;
var lina_lovelace_image;
var cecil_karpinski_image;
var countess_hamilton_image;

var cecil_karpinski_object;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	lina_lovelace_image = loadImage("lina.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	countess_hamilton_image = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecil_karpinski_object = {
		x: 408,
		y: 309,
		image: cecil_karpinski_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_object.image, cecil_karpinski_object.x, cecil_karpinski_object.y);
	image(anna_karpinski_image, cecil_karpinski_object.x - 293, cecil_karpinski_object.y - 269);
	image(rocky_kray_image, cecil_karpinski_object.x, cecil_karpinski_object.y - 269);
	image(bones_karpinski_image, cecil_karpinski_object.x + 293, cecil_karpinski_object.y - 269);
	image(lina_lovelace_image, cecil_karpinski_object.x - 293, cecil_karpinski_object.y);
	image(countess_hamilton_image, cecil_karpinski_object.x + 293, cecil_karpinski_object.y);

}