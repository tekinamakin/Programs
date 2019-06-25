/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node InsertionSort.js
 *  
 *  Purpose:      Sorting integer elements using insertion sort
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   05-06-2019
 *
 ******************************************************************************/



var b=require('./Utility2')
//b.module.insertionSort()
console.time('insertionSort')
console.log(b.module.insertionSort());
console.timeEnd('insertionSort')