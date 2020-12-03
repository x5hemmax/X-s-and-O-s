
var boxes;
var cross;
var end;
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
    end = false;
    
    
}

function draw()
{
    
    

    fill(255);
    //vertical lines
    stroke(255);
    
    lines();
    win();
    
    
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
//function to check when mouse is clicked
function mousePressed()
{
    for(var i = 0; i < boxes.length; i++)
    {
        if(end == false && (mouseX > boxes[i].xpos && mouseX < boxes[i].xpos+100)&&(mouseY > boxes[i].ypos && mouseY < boxes[i].ypos+100) && boxes[i].val == 0)
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
            line(x+20,y-20,x-20,y+20);
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

// a function to check if someone has one
function win()
{
    //horizontal win checks
    if((boxes[0].val + boxes[1].val + boxes[2].val) == 3 || (boxes[0].val + boxes[1].val + boxes[2].val) == 15)
        {
            console.log('someone win');
            line(boxes[0].xpos,boxes[0].ypos+50,boxes[2].xpos+100,boxes[2].ypos+50)
            end = true;
        }
    if((boxes[3].val + boxes[4].val + boxes[5].val) == 3 || (boxes[3].val + boxes[4].val + boxes[5].val) == 15)
        {
            console.log('someone win');
            line(boxes[3].xpos,boxes[3].ypos+50,boxes[5].xpos+100,boxes[5].ypos+50)
            end = true;
        }
    if((boxes[6].val + boxes[7].val + boxes[8].val) == 3 || (boxes[6].val + boxes[7].val + boxes[8].val) == 15)
        {
            console.log('someone win');
            line(boxes[6].xpos,boxes[6].ypos+50,boxes[8].xpos+100,boxes[8].ypos+50)
            end = true;
        }
    
    //vertical win checks
    if((boxes[0].val + boxes[3].val + boxes[6].val) == 3 || (boxes[0].val + boxes[3].val + boxes[6].val) == 15)
        {
            console.log('someone win');
            line(boxes[0].xpos+50,boxes[0].ypos,boxes[6].xpos+50,boxes[6].ypos+100)
            end = true;
        }
    if((boxes[1].val + boxes[4].val + boxes[7].val) == 3 || (boxes[1].val + boxes[4].val + boxes[7].val) == 15)
        {
            console.log('someone win');
            line(boxes[1].xpos+50,boxes[1].ypos,boxes[7].xpos+50,boxes[7].ypos+100)
            end = true;
        }
    if((boxes[2].val + boxes[5].val + boxes[8].val) == 3 || (boxes[2].val + boxes[5].val + boxes[8].val) == 15)
        {
            console.log('someone win');
            line(boxes[2].xpos+50,boxes[2].ypos,boxes[8].xpos+50,boxes[8].ypos+100)
            end = true;
        }
    //diagonal win check 
    if((boxes[0].val + boxes[4].val + boxes[8].val) == 3 || (boxes[0].val + boxes[4].val + boxes[8].val) == 15)
        {
            console.log('someone win');
            line(boxes[0].xpos,boxes[0].ypos,boxes[8].xpos+100,boxes[8].ypos+100)
            end = true;
        }
    if((boxes[2].val + boxes[4].val + boxes[6].val) == 3 || (boxes[2].val + boxes[4].val + boxes[6].val) == 15)
        {
            console.log('someone win');
            line(boxes[2].xpos+100,boxes[2].ypos,boxes[6].xpos,boxes[6].ypos+100)
            end = true;
        }
    
    
}