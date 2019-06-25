/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node InsertionSortForString.js
 *  
 *  Purpose:      Sorting string elements using insertion sort
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   05-06-2019
 *
 ******************************************************************************/



var b=require('./Utility2')
//b.module.insertionSortString()
console.time('insertionSortString')
console.log(b.module.insertionSortString());
console.timeEnd('insertionSortString')