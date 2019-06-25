/*****************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node windchill.js
 *  
 *  Purpose:      Calculate windchill temperature
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   07-06-2019
 *
 ******************************************************************************/


var t=process.argv[2]
var v=process.argv[3]
windchill(t,v)

function windchill(t,v)
{
if(Math.abs(t)<50 && (Math.abs(v)>3 && Math.abs(v)<120))
{
var w=35.74+0.6215*t+(0.4275*t-35.75)*Math.pow(v,0.16)
console.log(`wind chill is `+w);
}
}