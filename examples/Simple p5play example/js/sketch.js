
function preload()
{
    ghost = loadAnimation('assets/wriggle01.png', 'assets/wriggle10.png');
 }

function setup()
{
    createCanvas(800, 300);
}

function draw()
{
    background(255, 255, 255);

    animation(ghost, 300, 150);
}