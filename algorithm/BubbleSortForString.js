/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node BubbleSortForString.js
 *  
 *  Purpose:      Sorting string  using BubbleSort
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
console.time('bubbleSortString')
console.log(a.module.bubbleSortString());
console.timeEnd('bubbleSortString')