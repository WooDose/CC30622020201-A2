const root = document.getElementById('root');
root.style.display = 'grid'
root.style.gridTemplateColumns = 'repeat(8, 64px)'
root.style.gridAutoRows = '64px'
root.style.gridAutoColumns = '64px'

let firstturn = true;

const rendercell = function(cell){
	cell_ = document.createElement('div');
    cell_.style.margin = '2px';
    cell_.row = cell.row;
    cell_.column = cell.column;
    if (cell.colour == -1){
    	cell_.style.backgroundColor = 'white';
    }
    else if (cell.colour == 1){
    	cell_.style.backgroundColor = 'black';
    }
    else{
    	cell_.style.backgroundColor = 'green';
    }
    cell_.addEventListener("click", function(){ 
    	changeCell(cell.row, cell.column);
    	renderView();
    } );
	root.appendChild(cell_);
}

//Metodo Samuel
/*const render = (mount,state) =>{
	const rendercell = ({
		colour,
		row,
		col,
	}) => {
		const cell = document.createElement('div');
		switch(colour){
			case -1{
				cell.style.backgroundColor ='white';
			}
			case 1{
				cell.style.backgroundColor = 'black';
			}
			case 0 {
				cell.style.backgroundColor = 'green';
				cell.onClick = () => {
					if (state.firstturn){
						state.grid[row][column] = -1;
					}
					else{
						cell.style.backgroundColor = 1;
					}

				}
			}
		}
	}
}
*/
const grid = [  [0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,-1,1,0,0,0],
				[0,0,0,1,-1,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0]];


const gamegrid = grid.map((row, r)=>
	row.map((value, i)=>
		({
			row : r,
			column: i,
			colour : value
		})
		)
	)


const checkAdjacentCells = function(row,column){
	let sumofcolour =  [gamegrid[row+1][column].colour, gamegrid[row-1][column].colour, gamegrid[row][column+1].colour , gamegrid[row][column-1].colour];
	console.log(sumofcolour)
}

const changeCell = function(row, column){
	console.log(firstturn)
    if (gamegrid[row][column].colour == 0 ){
	    if (firstturn == true){
			gamegrid[row][column].colour = -1;
			gamegrid[row+1][column].colour =-1;
			gamegrid[row-1][column].colour =-1;
			gamegrid[row][column+1].colour =-1;
			gamegrid[row][column-1].colour =-1;
			firstturn = !firstturn;
	    }
	    else if (firstturn == false){
	      gamegrid[row][column].colour = 1;
			gamegrid[row+1][column].colour =1;
			gamegrid[row-1][column].colour =1;
			gamegrid[row][column+1].colour =1;
			gamegrid[row][column-1].colour =1;
	      firstturn = !firstturn;
	    }   
	}
}


const renderView = function(){
	root.innerHTML = '';
	gamegrid.forEach(row => row.forEach(cell => rendercell(cell)));
	}

renderView();
checkAdjacentCells(4,4);

//console.log(gamegrid[4][1].getAttribute("row"));
