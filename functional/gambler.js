/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node gambler.js
 *  
 *  Purpose:      Find number of Wins and Percentage of Win
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   06-06-2019
 *
 ******************************************************************************/

const read = require('readline-sync')
var trials = read.question('Enter the number of trials', trials)
var goal = read.question('Enter the goal', goal)
var stake = read.question('Enter the amount of stakes', stake)

var bets = 0; var win = 0; var lost = 0

/*iterating through number of trials given in user input*/
for (var i = 0; i < trials; i++) {
  /*perform bets only when stake is greater than 0 and less than goal*/
  while (stake > 0 && stake < goal) {
    bets++
    gamble()
  }
  function gamble() {
    var randomValue = Math.random()
    /*by using random values increasing or decreasing stakes*/
    if (randomValue > 0.5) {
      stake++
      win++
    }
    else {
      stake--
      lost++
    }
    if (stake == goal) {
      console.log('Reached the goal')

    }

  }

}

console.log(win)
console.log(lost)
console.log((win / bets) * 100)
