/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node euclidean.js
 *  
 *  Purpose:      Finding Euclidean distance from the point (x, y) to the origin (0, 0)
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   06-06-2019
 *
 ******************************************************************************/

/* Giving input through command-line*/
var x = process.argv[2]
var y = process.argv[3]

distance(x, y)

function distance(x, y) {
    var dist = Math.sqrt(Math.pow(x, x) + Math.pow(y, y))
    console.log(`Euclidean's distance from the given point is: `, dist);

}

