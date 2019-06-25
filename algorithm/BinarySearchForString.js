/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node BinarySearchForString.js
 *  
 *  Purpose:      BinarySearch for Strings
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/

var b=require('./Utility2')
//a.module.binarysearchStr()
console.time('binarysearchStr')
console.log(b.module.binarysearchStr());
console.timeEnd('binarysearchStr')