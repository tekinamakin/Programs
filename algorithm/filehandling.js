/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node filehandling.js
 *  
 *  Purpose:      Binary Search the Word from Word List 
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   08-06-2019
 *
 ******************************************************************************/


var fs=require('fs');

/*reading file demo.txt*/
// fs.readFile('demo.txt','utf8',function(err,ata){
// if (err) throw err;
// console.log(ata)


// });

var data=fs.readFileSync('demo.txt','utf8')
console.log('String in the text file is : ',data)



var a=require('./utility')

console.log(a.module.binarySearchString(data))