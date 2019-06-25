/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node userinput.js
 *  
 *  Purpose:      Taking the user input and replacing the string with user input
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter the username`, (name) => {

    if(name.length>=3)
      console.log(`Hello ${name}, How are you?`)
    
    readline.close()
  }) 