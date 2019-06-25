/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node monthlyPayment.js
 *  
 *  Purpose:      calculates the monthly payments we would have to make
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/


const readline = require('readline-sync')
var P = readline.question(`Enter vlaue of principle amount: `, P);

var Y = readline.question(`Enter number of years to pay off loan amount: `, Y);

var R = readline.question(`Enter the rate of interest in per cent compounded monthly: `, R);

calculateMonthlyPayment(P, Y, R)

function calculateMonthlyPayment(P, Y, R) {

    var n = 12 * Y;
    var r = (R / 1200);
    var payment = (P * r) / (1 - Math.pow(1 + r, -n))

    console.log(`Monthly payement for the loan amount of `, P, `at the rate of `, R, 'is', payment);

}

