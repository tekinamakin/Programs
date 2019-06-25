
  /******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node FindDay.js
 *  
 *  Purpose:      Using the following formulas,finding day of a week for the Gregorian calendar
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   07-06-2019
 *
 ******************************************************************************/
  
  
  var m=process.argv[2]
  var d=process.argv[3]
  var y=process.argv[4]

class FindDay{


static dayOfWeek (m,d,y){
var Days=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]

var x;

 y = y - ((14 - m) / 12)
 x = y + (y/4) - (y/100) + (y/400)
 m = m + 12 * ((14-m)/12) - 2
 d =Math.floor(d + x + ((31 * m)/ 12) % 7)

console.log(y);
console.log(m);console.log(d);
console.log(Days[d])

}

}

FindDay.dayOfWeek(m,d,y)
