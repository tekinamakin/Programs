/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node BubbleSort.js
 *  
 *  Purpose:      Sorting integer elements using BubbleSort
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/



var a=require('./Utility2')
//a.module.binarysearchStr()
console.time('bubbleSort')
console.log(a.module.bubbleSort());
console.timeEnd('bubbleSort')