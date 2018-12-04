var world = [
	[0,0,0,1,0,0,0,0],
	[0,0,0,1,1,0,0,0],
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
];

function drawSquare()
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
    for(var y=0; y<world.length; y++)
	{
		for(var x=0; x<world[y].length; x++)
		{
           if(world[y][x] > 0 && world[y][x] < 10 ) 
            {
                 if(y === world.length-1 || world[y+1][x] > 10)
                 {
                    canMove = false; 
                    stop();
                 }  
            }
        }
    }
    if(canMove)
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
}

/*======================================================================
**  Nom         : loop
**  Description : Lance une boucle qui permet de rafraichir le 
**  tableau de jeu
**======================================================================*/
function loop()
{
    console.log('Boucle lancé');
    drawSquare();
    moveDown();
    setTimeout(loop, 1000);
}

document.onkeydown = function(e)
{
    console.log(e);
}

drawSquare();
loop();