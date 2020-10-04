
var boxes;
var cross;

function setup()
{
    //canvas size
    createCanvas(500,500);

    //background colour
    background(0);
    
    //pos and val of each box
    boxes = [
        {xpos: 100, ypos: 100, val: 0},
        {xpos: 200, ypos: 100, val: 0},
        {xpos: 300, ypos: 100, val: 0},
        {xpos: 100, ypos: 200, val: 0},
        {xpos: 200, ypos: 200, val: 0},
        {xpos: 300, ypos: 200, val: 0},
        {xpos: 100, ypos: 300, val: 0},
        {xpos: 200, ypos: 300, val: 0},
        {xpos: 300, ypos: 300, val: 0}
    ]
    //set the initial player to O
    cross = false;
    
    
}

function draw()
{
    
    

    fill(255);
    //vertical lines
    stroke(255);
    
    lines();
    
    
    
}

//a function to draw the grid
function lines()
{
    //line colour
    stroke(255);
    strokeWeight(5);
    //vertical lines
    line(100,200,400,200)
    line(100,300,400,300)
    //horizontal lines
    line(200,100,200,400)
    line(300,100,300,400)
    
    
}

function mousePressed()
{
    for(var i = 0; i < boxes.length; i++)
        {
            if( (mouseX > boxes[i].xpos && mouseX < boxes[i].xpos+100)&&(mouseY > boxes[i].ypos && mouseY < boxes[i].ypos+100) && boxes[i].val == 0)
                {
                    
                    shapes(boxes[i].xpos+50, boxes[i].ypos+50)
                    if(!cross)
                        {
                            boxes[i].val += 5
                            cross = true;
                        }
                    else
                        {
                            boxes[i].val += 1
                            cross = false;
                        }
                
                    
                    console.log(cross)
                }
        }
}

// a function to draw the O and X
function shapes(x,y)
{
    
    if(cross)
        {
            stroke(255);
            strokeWeight(5);
            line(x-20,y-20,x+20,y+20);
            line(x+20,y-20,x-20,y+20)
        }
    if(!cross)
        {
            strokeWeight(1);
            fill(255);
            ellipse(x,y,50)
            fill(0);
            ellipse(x,y,40)
        }
}