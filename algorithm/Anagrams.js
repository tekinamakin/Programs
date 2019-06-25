
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node Anagrams.js
 *  
 *  Purpose:      Finding if one string is anagram of other
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/



var readlineSync = require('readline-sync');

//input first string
var string1 = readlineSync.question('Enter the 1st string ');
console.log('First string is ' + string1);

//convert the first string into array and sort
var array1 = Array.from(string1).sort();
console.log(array1);

//input second string
var string2 = readlineSync.question('Enter the 2nd string ')
console.log('Second string is ' + string2);

//convert the second string into array and sort
var array2 = Array.from(string2).sort();
console.log(array2);

//If both strings have equal length ,indexwise comparing the characters in string
var flag = false;
if (array1.length == array2.length) {

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i])
      flag = true

    else
      flag = false
  }

  //If all the characters are same flag becomes true else becomes false
  if (flag)
    console.log('both the strings are anagrams of each other');

  else
    console.log('both the strings are not anagrams of each other');
}
//If length is not equal then strings are not anagrams of each
else
  console.log('both the strings are not anagrams of each other');
