/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node primefactors.js
 *  
 *  Purpose:      Find the prime factors of a number
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


readline.question(`Enter a number`,(num) => {
console.log(`Entered number is ${num}`);
/*iterating to find prime factors of number*/
for (var i=2;i*i<=num;i++)
{
    while(num%i==0)
    {
        console.log('factors are',i);
        num=num/i;    
    }
}
console.log('last prime factor is',num);


})