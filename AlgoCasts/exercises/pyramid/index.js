// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//
//   pyramid(5)
//1       '  #  '
//2       ' ### '
//3       '#####'
//4      '#######'
//5     '#########'
/*
/*
function pyramid(n, row = 0, level = '') {
    if (row === n) {
      return;
    }
  
    if (level.length === 2 * n - 1) {
      console.log(level);
      return pyramid(n, row + 1);
    }
  
    const midpoint = Math.floor((2 * n - 1) / 2);
    
    console.log("Midpoint", midpoint)
    
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
      add = '#';
    } else {
      add = ' ';
    }
    pyramid(n, row, level + add);
  };
  pyramid(3);
  */

 function pyramid(n) {

  let maxRowChars = 2 * n - 1;
  let midChar = n;
 

  console.log(maxRowChars)
  console.log(midChar)
  

    for (let level = 1; level <= n; level++) {
  let rowChars = '';
  let firstChar = midChar - (level - 1);
  let lastChar = midChar + (level - 1);
  
     // if (n == level) {
     //   rowChars = "#";
     //   console.log(rowChars);
     //   return rowChars;
     // } //end if

      for (let col = 0; col <= maxRowChars; col ++){
    //    console.log(col, firstChar, lastChar )
        if (col < firstChar ||  col > lastChar) {
          rowChars += ' ';
          
        }
        else
        {
          rowChars += '#';
         
        }
        }//end for
        
console.log(rowChars)
      
    } //end level
 } //end function

 pyramid(5);
module.exports = pyramid;