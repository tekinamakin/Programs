/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node guessNumber.js
 *  
 *  Purpose:      Guess the number using binary search
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   07-06-2019
 *
 ******************************************************************************/

var k = process.argv[2];
var n = Math.pow(2, k);
console.log("Think of an integer between ", 0, `and`, n - 1);
var secret = search(0, n)
console.log('your number is ', secret)

var flag;
function search(lo, hi) {
  if ((hi - lo) == 1) return lo;

  var mid = lo + (hi - lo) / 2;

  console.log('Is it less than ', mid);

  const readline = require('readline-sync')
  var choice = readline.question('Enter your choice ', choice)

  switch (choice) {
    case 'true':
      return search(lo, mid)

      break;

    case 'false':

      return search(mid, hi);
      break;
    default:
      console.log(choice, 'Incorrect choice,Please enter a value between true and false');
  }


}