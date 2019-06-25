/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node BinarySearch.js
 *  
 *  Purpose:      BinarySearch for integers
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/


var b=require('./Utility2')
//b.module.binarysearch()
console.time('binarysearch')
console.log(b.module.binarysearch());
console.timeEnd('binarysearch')