/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node harmonic.js
 *  
 *  Purpose:      Find the harmonic number
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   08-06-2019
 *
 ******************************************************************************/

const readline=require('readline').createInterface({
input:process.stdin,
output:process.stdout

})

readline.question(`Enter a number to find harmonic number`,(num) => {

    console.log(`Finding harmonic number till,${num}th number `);
    var sum =0;
    if(num>0)
    {
/* iterating from 1 to given number to find the harmonic value*/
    for(var i=1;i<=num;i++)
    sum = sum+ 1/i    

    console.log(`Harmonic number h${num} is`,sum)
}

})