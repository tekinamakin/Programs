//Vending Macine
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node VendingMachine.js
 *  
 *  Purpose:      Finding minimum number of change from given currency numbers 
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/

const read = require('readline-sync')
var amount = read.question('Enter the amount', amount)

var Array = [1000, 500, 100, 50, 10, 5, 2, 1]

var sum = 0
change(amount)
function change(amount) {
    if (amount > 0) {

        //Traverse between all the currencies available in the array
        for (var i = 0; i < Array.length; i++) {

            var count = Math.floor(amount / Array[i])
            amount = amount % Array[i]
            console.log(Array[i] + " \t  " + count)
            sum= sum+ count

        }
        change(amount)
        console.log('Total number of notes required is: ', sum)
    }
    
}