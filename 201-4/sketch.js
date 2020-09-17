/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 5035852
CaseNum: 201-3-12947786-5035852

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(273, 96);
    vertex(273, 152);
    vertex(246, 152);
    vertex(246, 193);
    vertex(287, 231);
    vertex(287, 255);
    vertex(425, 360);
    vertex(390, 396);
    vertex(429, 469);
    vertex(457, 469);
    vertex(457, 440);
    vertex(432, 406);
    vertex(534, 410);
    vertex(598, 356);
    vertex(586, 281);
    vertex(619, 215);
    vertex(659, 195);
    vertex(634, 160);
    vertex(561, 230);
    vertex(527, 283);
    vertex(348, 113);
    vertex(321, 119);
    vertex(319, 146);
    vertex(297, 91);
    vertex(273, 96);
    endShape();
}
