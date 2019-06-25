/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node TempConv.js
 *  
 *  Purpose:      Converting temperature in fahrenheit to Celsius or viceversa 
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   07-06-2019
 *
 ******************************************************************************/


const readline = require('readline-sync')
var expr = readline.question('Select the your scale for temperature between c for celsius and f for fahrenheit: ', expr)
switch (expr) {
  case 'c':


    var value = readline.question('Enter value in °C: ', value)
    var result = (value * (9 / 5)) + 32
    console.log(`Temperature after conversion is `, result, `°F`);
    break;

  case 'f':
    var value = readline.question('Enter value in °F: ', value)
    var result = (value - 32) * (5 / 9)
    console.log(`Temperature after conversion is `, result, `°C`);

    break;
  default:
    console.log(expr, `is not a correct option, please select c or f`);
}

