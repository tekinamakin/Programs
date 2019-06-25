/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node regexp.js
 *  
 *  Purpose:      Use Regex to replace name, full name, Mobile#, and Date with proper value.
 *                Print the Modified Message.
 *                
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   20-06-2019
 *
 ******************************************************************************/

const read = require('fs')
var expression = read.readFileSync('regexp.txt', 'utf8')
//input and replace the nmae
const readline = require('readline-sync')
var name = readline.question("Enter the first name: ", name)
expression = expression.replace(/<<name>>/, name)

//input the last name and replace the full name
var lastName = readline.question("Enter the last name: ", lastName)
var fullname = name + " " + lastName
expression = expression.replace(/<<full name>>/, fullname)

//input the phone number and replace it
var phonenumber = readline.question("Enter the mobile number: ", phonenumber)
expression = expression.replace('xxxxxxxxxx', phonenumber)

//input th date and replace the date 
var anyDate = readline.question("Enter the date: ", anyDate)
expression = expression.replace('xx/xx/xxxx', anyDate)

//print the text read from the file with replaced values from our inputs
console.log(expression)