/******************************************************************************
 *  Compilation: csc.exe /t:exe /out: tsc binary.ts
 *  Execution:   node PrimeAnagramPalindrome.js
 *  
 *  Purpose:     Finding Anagram numbers and Palindrome numbers from list of prime numbers between 0 to 1000 
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/

var index = 0; var a1 = [];
var a2 = [];
console.log("Prime numbers from 1 to 1000 ");
var myData = new Array();

//traversing from 2 to 1000 to find prime numbers
for (var i = 2; i <= 1000; i++) {
   
   //Finding if the number is prime or not and storing boolean value in a variable
   var p = isPrime(i)
   
   //If the number is a prime number then add it to the array myData  
   if (p) {

      myData[index] = i;
      index++;
   }
}

//Print the prime numbers

console.log(myData)




//logic to check if the number is prime or not

function isPrime(num) {

   //If the number is 2 or 3 , it is a prime number
   if (num == 2 || num == 3) { return true; }

   //If the number is divisible by 2 or 3, it is not a prime number
   if (num % 2 == 0 || num % 3 == 0) { return false; }

   //if number has any factor from 3 to square root of that then it is not a prime number
   for (var j = 3; j < Math.sqrt(num); j += 2) {
      if (num % j == 0 || num % Math.sqrt(num) == 0) { return false; }

   } 
   
   //In all other cases number is a prime number
   return true;

}


/********************************************Palindrome Number from the list of prime numbers********************************************/


//logic to check palindrome numbers
console.log('Prime Palindrome numbers are :==> ');

//Using the array in which we have stored prime numbers
for (var k = 0; k <= myData.length; k++) {
   palindrome(myData[k])
}
function palindrome(pnum) {
   var temp = pnum;
   var sum = 0;
   var remainder = 0;

   //Reversing the digits of a number
   while (pnum > 0) {
      remainder = pnum % 10;
      sum = (sum * 10) + remainder;
      pnum = Math.floor(pnum / 10);


   }

   //After reversing the digits if number is equal to original number , it is a palindrome number
   if (temp == sum) {

      console.log(temp)
   }


}


/***************************************************Anagrams From Prime Numbers*****************************/

// finding anagrams from prime numbers
anagramsFromPrime()
function anagramsFromPrime() {

   //Using the array of prime numbers to find out anagram numbers
   for (var i = 0; i < myData.length; i++) {

      //converting the number to string then converting to array and sorting that array
      var x = myData[i].toString().split("").sort()

      //comparing all the elements next to the element with index i
      for (var j = i + 1; j < myData.length; j++) {

      //converting the number to string then converting to array and sorting that array
         var y = myData[j].toString().split("").sort()
        
      //After sorting convert back to strings  
         var str1 = x.toString()
         var str2 = y.toString()
       
      //If strings are equal then they are anagrams of each other
         if (str1 == str2) {
            console.log(myData[i], `and`, myData[j], `anagrams of each other`)
         }

      }
   }
}