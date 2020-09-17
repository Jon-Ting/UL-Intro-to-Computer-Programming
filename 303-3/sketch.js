/*

Officer: 5035852
CaseNum: 303-2-11228887-5035852

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is being dragged:
	- Make SecretSafeVal_0 equal to the value of mouseY
	- Use the 'max' function to prevent SecretSafeVal_0 from falling below 3

	When any key is pressed:
	- Increment SecretSafeVal_1 by 2
	- Use the 'max' function to prevent SecretSafeVal_1 from falling below 4

	Whilst the mouse is being dragged:
	- Make SecretSafeVal_2 equal to the value of mouseY
	- Use the 'constrain' function to prevent SecretSafeVal_2 from falling below 3 and going above 11

	When any key is released:
	- Decrement SecretSafeVal_3 by 2
	- Use the 'max' function to prevent SecretSafeVal_3 from falling below 2

	Whilst the mouse is being dragged:
	- Make SecretSafeVal_4 equal to the value of mouseY
	- Use the 'min' function to prevent SecretSafeVal_4 from going above 69



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var SecretSafeVal_0;
var SecretSafeVal_1;
var SecretSafeVal_2;
var SecretSafeVal_3;
var SecretSafeVal_4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	SecretSafeVal_0 = 0;
	SecretSafeVal_1 = 0;
	SecretSafeVal_2 = 0;
	SecretSafeVal_3 = 0;
	SecretSafeVal_4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mouseDragged() {
    SecretSafeVal_0 = max(mouseY, 3);
    SecretSafeVal_2 = constrain(mouseY, 3, 11);
    SecretSafeVal_4 = min(mouseY, 69);
}

function keyPressed() {
    SecretSafeVal_1 += 2
    SecretSafeVal_1 = max(SecretSafeVal_1, 4);
}

function keyReleased() {
    SecretSafeVal_3 -= 2
    SecretSafeVal_3 = max(SecretSafeVal_3, 2);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,SecretSafeVal_0, 19);
	pop();

	push();
	translate(120,380);
	drawDial(140,SecretSafeVal_1, 26);
	pop();

	push();
	translate(280,170);
	drawDial(140,SecretSafeVal_2, 14);
	pop();

	push();
	translate(280,380);
	drawDial(140,SecretSafeVal_3, 17);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(SecretSafeVal_4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
