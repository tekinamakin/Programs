/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node array2d.js
 *  
 *  Purpose:      To elements in print 2 Dimensional Array
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   06-06-2019
 *
 ******************************************************************************/


var readlineSync = require('readline-sync');
var rows = readlineSync.question('Enter number of rows');
console.log('Number of rows for array are ' + rows);
// var myArray=[]
var columns = readlineSync.question('Enter number of columns');
console.log('Number of columns for array are ' + columns);

var myArray = [[], []]

/*iterating through rows from zero to entered value */
for (var i = 0; i < rows; i++) {

    /*iterating through rows from zero to entered value */
    for (var j = 0; j < columns; j++) {

        var element = readlineSync.question('Enter element' + i + j, ' :', element);
        console.log(myArray[i][j] = element)



    }

}

console.log(myArray)
