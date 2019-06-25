/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node leapyear.js
 *  
 *  Purpose:      Determine if it is a Leap Year.
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   07-06-2019
 *
 ******************************************************************************/

const read =require('readline-sync')
var num=read.question('Enter a number to check if it is a leap year', num )
    
    /*checking if the number has 4 digits*/
    if (num > 999 && num < 9999) {
        console.log('this is a 4digit number');

        //leap year logic
        if (num % 400 == 0 || num % 4 == 0) {
            console.log('This is a leap year');
        }
        else
            console.log('It is not a leap year');

    }


    else
        console.log('Given number is not a 4digit number');
    