/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node flipcoin.js
 *  
 *  Purpose:      Find percentage of Head vs Tails
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   07-06-2019
 *
 ******************************************************************************/


var heads = 0, tails = 0;
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter number of times coins to be fliped `, (num) => {
  /*iterating between number of flips given by user input*/
  for (var i = 1; i <= num; i++) {

    /*generating random values by using random function*/
    var randomValue = Math.random();
    //console.log(randomValue)

    if (randomValue > 0.5) {
      heads++
      // console.log('heads',heads);

    }
    else if (randomValue < 0.5) {
      tails++
      //console.log('tails',tails);

    }
  }
  console.log('HEADS PROBABILITY', (heads / num) * 100)
  console.log('TAILS PROBABILITY', (tails / num) * 100)
  readline.close()
})


