/*
The case of the Python Syndicate
Stage 2


Officer: 5035852
CaseNum: 301-1-29396608-5035852

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Rocky kray

- The variables for Rocky kray have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Rocky kray for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var robbieKrayImage;
var rockyKrayImage;
var bonesKarpinskiImage;
var linaLovelaceImage;
var annaKarpinskiImage;
var pawelKarpinskiImage;


var rockyKrayXLoc = 408;
var rockyKrayYLoc = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImage = loadImage("krayBrothers2.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	linaLovelaceImage = loadImage("lina.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rockyKrayImage, rockyKrayXLoc, rockyKrayYLoc);
	image(robbieKrayImage, rockyKrayXLoc - 293, rockyKrayYLoc);
	image(bonesKarpinskiImage, rockyKrayXLoc + 293, rockyKrayYLoc);
	image(linaLovelaceImage, rockyKrayXLoc - 293, rockyKrayYLoc + 269);
	image(annaKarpinskiImage, rockyKrayXLoc, rockyKrayYLoc + 269);
	image(pawelKarpinskiImage, rockyKrayXLoc + 293, rockyKrayYLoc + 269);

}