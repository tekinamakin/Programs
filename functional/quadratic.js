/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node quadratic.js
 *  
 *  Purpose:      Finding the roots of a quadratic equation
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/


var readlineSync = require('readline-sync');
var a = readlineSync.question('Enter value of a for quadratic equation');
var b = readlineSync.question('Enter value of b for quadratic equation');
var c = readlineSync.question('Enter value of c for quadratic equation');


console.log('Quadratic equation is '+a+'x*x'+'+'+b+'x'+'+'+c);

var delta= b*b-(4*a*c);

console.log('value of delta is'+delta)

var root1=(-b+Math.sqrt(delta))/(2*a);
var root2=(-b-Math.sqrt(delta))/(2*a);

console.log(`roots of quadratic equation are `+root1,root2);
