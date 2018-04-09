function sudokuSolve(grid) {

  let i= 0;


   let sudoku_data = {
     row:{},
     col:{},
     quad:{}
   }    // instanciate the sudoku_data


   let vertical_quad = 0;
   let row_count = 0;
   let isValid = true;


   while(i< grid.length){   //go through each row

     let row = i;
     if(!sudoku_data.row[i]){  sudoku_data.row[i]=[ ];}
     if(row_count == 3 ){ row_count = 0 ;  vertical_quad += 3 } // each time count is == 2 , get quad++


     // then we need to run through the row and get the numbers
       let quad = 0 + vertical_quad ;  // instanciate quad .
       let count = 0; // insanciate the count of rows to know which quadrant

       for ( let j=0; j < grid[row].length; j++ ){

         if(count == 3 ){ count = 0 ;  quad ++  } // each time count is == 2 , get quad++


           let number= grid[row][j];
            let col = j;

          if(!sudoku_data.col[j]){ sudoku_data.col[j]=[ ]; }
          if(!sudoku_data.quad[quad]){ sudoku_data.quad[quad] = [ ]; }
          //instanciate if it doesnt exist



                  if(grid[row][col]!=='.'){  // if there is a number,

                        console.log(sudoku_data)

                           if(
                             sudoku_data.row[row].includes(number) ||
                             sudoku_data.col[col].includes(number) ||
                             sudoku_data.quad[quad].includes(number)  ){

                             isValid = false;
                             return isValid;
                           }

                       sudoku_data.row[row].push(number) ;
                       sudoku_data.col[col].push(number) ;
                       sudoku_data.quad[quad].push(number);

                    }
            // if there are no repeats then push them;
           count++
       } // end of for

     row_count++ //  count for vertical_quad
     i++    // go to next row
   }


   return isValid;


 }
