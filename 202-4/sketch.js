/*

Officer: 5035852
CaseNum: 202-3-92675232-5035852

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce yellow filled text with black outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(633,458);
	textSize(27);
}

function draw()
{
	background(255);

	push();
	fill(0,255,255);
	stroke(0,255,0);
	textFont(Diggity);
//	text("away", 116,162);
//	text("delays.", 396,81);
	pop();
	fill(255,255,0);
	stroke(255,0,0);
	textFont(Ballpointprint);
//	text("short", 20,194);
	push();
	fill(255,192,203);
	textFont(Diggity);
//	text("avoiding", 373,135);
	pop();
	textFont(RonsFont);
//	text("Perhaps", 511,135);
	fill(0,255,255);
	textFont(Ballpointprint);
//	text("?", 21,135);
	fill(255,192,203);
	textFont(Diggity);
//	text("g", 539,194);
	fill(0,255,255);
	stroke(0,0,255);
	textFont(RonsFont);
//	text("I'm", 205,108);
	fill(255,165,0);
	textFont(Ballpointprint);
//	text("I", 475,108);
	push();
	fill(255,255,0);
	textFont(Melissa);
//	text("our", 484,81);
//	text("I", 9,81);
//	text("The", 51,135);
	pop();
	textFont(Diggity);
//	text("these", 229,81);
	push();
	stroke(255,0,255);
	textFont(Ballpointprint);
//	text("x", 82,332);
	pop();
	stroke(255,0,255);
	textFont(Melissa);
//	text("we", 596,135);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Ballpointprint);
//	text("a", 220,162);
//	text("uld", 47,162);
	textFont(Diggity);
//	text("sort", 356,162);
//	text("so", 510,194);
	fill(255,165,0);
	textFont(RonsFont);
//	text("all", 452,162);
//	text("Are", 278,135);
	fill(0,255,255);
	stroke(255,0,0);
	textFont(Diggity);
//	text("uarded", 547,194);
//	text("yours,", 84,278);
	push();
	textFont(Melissa);
//	text("secrets,", 87,135);
	pop();
	textFont(Melissa);
//	text("much", 391,108);
	fill(255,192,203);
	stroke(255,0,255);
	textFont(Diggity);
//	text("Is", 462,81);
	stroke(0,0,255);
//	text("can", 508,108);
	stroke(255,0,255);
	textFont(Ballpointprint);
//	text("so,", 226,194);
	push();
	stroke(0,0,0);
	textFont(Melissa);
//	text("more", 432,108);
	pop();
	textFont(Melissa);
//	text("If", 204,194);
	stroke(0,0,255);
	textFont(Diggity);
//	text("er", 54,278);
	fill(255,255,0);
	stroke(255,0,0);
	textFont(RonsFont);
//	text("you", 327,135);
	stroke(0,0,0);
	textFont(Melissa);
//	text("ash.", 388,194);
	push();
	textFont(RonsFont);
	text("money", 114,194);
	text("take", 548,108);
	pop();
	textFont(RonsFont);
	text("the", 155,135);
	text("ignore", 155,81);
	text("safe", 133,108);
	fill(255,192,203);
	stroke(0,255,0);
	textFont(Melissa);
//	text("sometimes.", 8,224);
	textFont(Ballpointprint);
//	text("can", 23,81);
//	text("of", 77,194);
	fill(0,255,255);
//	text("no", 65,81);
	stroke(255,0,255);
	textFont(Diggity);
//	text("?", 491,135);
	push();
	stroke(0,0,0);
	textFont(Melissa);
//	text("how", 356,108);
	pop();
	stroke(0,255,0);
	textFont(Ballpointprint);
//	text("you", 559,162);
	stroke(0,0,255);
	textFont(Diggity);
//	text("and", 314,162);
//	text("lo", 97,81);
//	text("are", 469,194);
	fill(255,192,203);
	textFont(Ballpointprint);
//	text("me", 448,135);
	push();
	fill(0,255,255);
	textFont(Diggity);
//	text("I", 261,194);
	pop();
	stroke(255,0,255);
	textFont(RonsFont);
//	text("silence.", 198,135);
	fill(255,255,0);
	stroke(0,0,255);
	textFont(Ballpointprint);
//	text("send", 320,194);
//	text("darling", 59,27);
	push();
	textFont(RonsFont);
//	text("for", 174,162);
	pop();
	textFont(RonsFont);
//	text("can", 274,194);
	push();
	stroke(0,255,0);
	textFont(Ballpointprint);
//	text("You", 423,194);
	pop();
	stroke(255,0,255);
	textFont(Ballpointprint);
//	text("Daisy", 11,332);
	fill(255,165,0);
	stroke(0,255,0);
	textFont(Diggity);
//	text("go", 88,162);
	stroke(255,0,255);
	textFont(RonsFont);
//	text("break", 245,162);
	stroke(0,0,0);
//	text("Bob,", 136,27);
	stroke(0,255,0);
	textFont(Melissa);
//	text("Are", 527,162);
	fill(255,192,203);
	stroke(0,0,0);
	textFont(Diggity);
//	text("Forev", 6,278);
	textFont(RonsFont);
//	text("?", 185,194);
//	text("continual", 288,81);
//	text("sure", 293,108);
	push();
	fill(255,255,0);
	stroke(0,255,0);
//	text("?", 186,108);
	pop();
	fill(255,165,0);
	textFont(Ballpointprint);
//	text("sho", 19,162);
	fill(0,255,255);
	textFont(Melissa);
//	text("c", 380,194);
	push();
	textFont(Ballpointprint);
//	text("relationship", 18,108);
	pop();
	textFont(Ballpointprint);
//	text("this", 404,162);
	fill(255,165,0);
	stroke(255,0,0);
//	text("My", 15,27);
	push();
	fill(255,255,0);
	stroke(0,0,0);
	textFont(Diggity);
//	text("nger", 108,81);
	pop();
	stroke(0,255,0);
//	text("not", 254,108);
	push();
	fill(255,255,0);
	stroke(0,0,0);
	textFont(Diggity);
//	text("out.", 484,162);
	pop();



}
