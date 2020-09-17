/*
The case of the Python Syndicate
Stage 4

Officer: 5035852
CaseNum: 301-3-39909489-5035852

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var rockyKrayImage;
var countessHamiltonImage;
var linaLovelaceImage;
var cecilKarpinskiImage;
var annaKarpinskiImage;
var robbieKrayImage;

var annaKarpinskiObject;


//declare your new objects below

//var rockyKrayLocX = 115;
//var rockyKrayLocY = 40;
//var countessHamiltonLocX = 408;
//var countessHamiltonLocY = 40;
//var linaLovelaceLocX = 701;
//var linaLovelaceLocY = 40;
//var cecilKarpinskiLocX = 115;
//var cecilKarpinskiLocY = 309;
//var robbieKrayLocX = 701;
//var robbieKrayLocY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImage = loadImage("krayBrothers1.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	linaLovelaceImage = loadImage("lina.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	robbieKrayImage = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	annaKarpinskiObject = {
		x: 408,
		y: 309,
		image: annaKarpinskiImage
	};

	//define your new objects below
    rockyKrayObject = {
		x: 115,
		y: 40,
		image: rockyKrayImage
	};
    
    countessHamiltonObject = {
		x: 408,
		y: 40,
		image: rockyKrayImage
	};
    
    linaLovelaceObject = {
		x: 701,
		y: 40,
		image: rockyKrayImage
	};
    
    cecilKarpinskiObject = {
		x: 115,
		y: 309,
		image: rockyKrayImage
	};
    
    robbieKrayObject = {
		x: 701,
		y: 309,
		image: rockyKrayImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rockyKrayImage, rockyKrayObject.x, rockyKrayObject.y);
	image(countessHamiltonImage, countessHamiltonObject.x, countessHamiltonObject.y);
	image(linaLovelaceImage, linaLovelaceObject.x, linaLovelaceObject.y);
	image(cecilKarpinskiImage, cecilKarpinskiObject.x, cecilKarpinskiObject.y);
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);
	image(robbieKrayImage, robbieKrayObject.x, robbieKrayObject.y);


}