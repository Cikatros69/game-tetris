var world = [
	[0,0,0,1,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
];

/*======================================================================
**  Nom         : drawForm
**  Description :  
**======================================================================*/
function drawForm()
{
    document.getElementById('world').innerHTML = "";
    
	for(var y=0; y<world.length; y++)
	{
		console.log(world[y]);
		for(var x=0; x<world[y].length; x++)
		{
//			console.log(world[y][x]);
			if(world[y][x] === 0)
			{
				document.getElementById('world').innerHTML += "<div class='emptySquare'></div>"
			}
            else if(world[y][x]=== 1 || world[y][x]=== 11)
			{
				document.getElementById('world').innerHTML += "<div class='filledSquare'></div>"
			}
		}
        document.getElementById('world').innerHTML += '<br>'
	}
}

/*======================================================================
**  Nom         : moveDown
**  Description :  
**======================================================================*/
function moveDown()
{
    var canMove = true;
    for(var y=world.length-1; y>=0; y--) 
    {
        for(var x=0; x<world[y].length; x++) 
        {
            if(world[y][x] > 0 && world[y][x] < 10 )
            {
                if(y+1 === world.length || world[y+1][x] > 10)
                {
                    canMove = false;
                    stop();
                }
            }
        }
    }
    if (canMove) 
    {
        for(var y=world.length-1; y>=0; y--) 
        {
            for(var x=0; x<world[y].length; x++) 
            {
                if(world[y][x] > 0 && world[y][x] < 10 )
                {
                    world[y+1][x] = world[y][x];
                    world[y][x] = 0;
                }
            }
        }
        drawForm();
    }
    checkLines();
}

/*======================================================================
**  Nom         : moveLeft
**  Description :  
**======================================================================*/
function moveLeft()
{
    var canMove = true;
    for(var y=world.length-1; y>=0; y--) 
    {
        for(var x=0; x<world[y].length; x++) 
        {
            if(world[y][x] > 0 && world[y][x] < 10 )
            {
                if(x === 0 || world[y][x-1] > 10)
                {
                    canMove = false;
                }
            }
        }
    }
    if (canMove) 
    {
        for(var y=world.length-1; y>=0; y--) 
        {
            for(var x=0; x<world[y].length; x++) 
            {
                if(world[y][x] > 0 && world[y][x] < 10 )
                {
                    world[y][x-1] = world[y][x];
                    world[y][x] = 0;
                }
            }
        }
        drawForm();
    }
}

/*======================================================================
**  Nom         : moveRight
**  Description :  
**======================================================================*/
function moveRight()
{
    var canMove = true;
    for(var y=world.length-1; y>=0; y--) 
    {
        for(var x=0; x<world[y].length; x++)
        {
            if(world[y][x] > 0 && world[y][x] < 10 )
            {
                if(x === 7 || world[y][x+1] > 10)
                {
                    canMove = false;
                }
            }
        }
    }
    if (canMove) 
    {
        for(var y=world.length-1; y>=0; y--) 
        {
            for(var x=world[y].length; x>=0; x--) 
            {
                if(world[y][x] > 0 && world[y][x] < 10 )
                {
                    world[y][x+1] = world[y][x];
                    world[y][x] = 0;
                }
            }
        }
        drawForm();
    }
}

/*======================================================================
**  Nom         : checkLines
**  Description : 
**======================================================================*/
function checkLines()
{
    for(var y=world.length-1; y>=0; y--) 
    {
        var fullLine = true;
        for(var x=0; x<world[y].length; x++) 
        {
            if(world[y][x] < 10) 
            {
                fullLine = false;
            }
        }
        if (fullLine) 
        {
            world.splice(y, 1);
            world.splice(0, 0, [0,0,0,0,0,0,0,0])
            y++;
        }
    }
}

/*======================================================================
**  Nom         : stop
**  Description : Vérifie quand la piece arrive en fin de tableau ou si
**  elle touche une autre piece, si c'est le cas, ajoute 10 à la valeur
**  de la piece pour stoper sa course et permettre aux autres pieces de
**  connaître leur fin de course
**======================================================================*/
function stop()
{
    for(var y=world.length-1; y>=0; y--) 
    {
        for(var x=0; x<world[y].length; x++) 
        {
            if(world[y][x] > 0 && world[y][x] < 10 )
            {
                world[y][x] = world[y][x] + 10;
            }
        }
    }
    checkLines();
    var rand = Math.floor(Math.random()*7);
    if(rand === 0)
    {
        world[0] = [0,0,0,1,1,0,0,0]
        world[1] = [0,0,0,1,1,0,0,0]    
    }
    else if(rand === 1)
    {
        world[0] = [0,0,0,1,0,0,0,0]
        world[1] = [0,0,0,1,0,0,0,0]
        world[2] = [0,0,0,1,0,0,0,0]
        world[3] = [0,0,0,1,0,0,0,0]
    }
    else if(rand === 2)
    {
        world[0] = [0,0,1,1,0,0,0,0]
        world[1] = [0,0,0,1,1,0,0,0]
    }
    else if(rand === 3)
    {
        world[0] = [0,0,0,0,1,1,0,0]
        world[1] = [0,0,0,1,1,0,0,0]   
    }
    else if(rand === 4)
    {
        world[0] = [0,0,0,1,0,0,0,0]
        world[1] = [0,0,0,1,0,0,0,0]
        world[2] = [0,0,0,1,1,0,0,0]
    }
    else if(rand === 5)
    {
        world[0] = [0,0,0,1,1,0,0,0]
        world[1] = [0,0,0,1,0,0,0,0]
        world[2] = [0,0,0,1,0,0,0,0] 
    }
    else if(rand === 6)
    {
        world[0] = [0,0,0,1,0,0,0,0]
        world[1] = [0,0,1,1,1,0,0,0]   
    }
}

/*======================================================================
**  Nom         : loop
**  Description : Lance une boucle qui permet de rafraichir le 
**  tableau de jeu
**======================================================================*/
function loop()
{
    console.log('Boucle lancé');
    drawForm();
    moveDown();
    setTimeout(loop, 1000);
}

/*======================================================================
**  Nom         : onkeydown
**  Description : 
**======================================================================*/
document.onkeydown = function(e) 
{
    console.log(e)
    if (e.keyCode === 37)
    {
        moveLeft(); 
    } else if (e.keyCode === 39)
    {
        moveRight();
    } else if (e.keyCode === 40)
    {
        moveDown();
    }
}

drawForm();
loop();