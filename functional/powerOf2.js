/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node powerOf2.js
 *  
 *  Purpose:      Find a table of the powers of 2 that are less than or equal to 2^N
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout

})

readline.question('Enter a number', (num) => {

    console.log(`Given number is ${num}`)

/*iterating from 1 to input number*/
    for (var i = 1; i <= num; i++) {
        var table = Math.pow(2, i);
        console.log(`power of 2 to the `, i, `is`, `${table}`);
    }


    readline.close();
})