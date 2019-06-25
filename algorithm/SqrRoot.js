/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node SqrRoot.js
 *  
 *  Purpose:      Finding square root of a number
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/


class SqrRoot{
static sqrt(){
const read=require('readline-sync')
var c=read.question("Enter the number to find a square root: ",c)

var t=c
var epsilon=1e-15
while(Math.abs(t - c/t) > epsilon*t )
{
t=(c/t+t)/2

}
console.log(t)
}
}
SqrRoot.sqrt()