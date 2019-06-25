
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node PrimeNum.js
 *  
 *  Purpose:      Finding prime numbers from range 0 to 1000
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   04-06-2019
 *
 ******************************************************************************/


console.log("Prime numbers from 1 to 1000 ");
//taking a range from 2 to 1000 as 0 and 1 are not prime numbers
for (var i = 2; i <= 1000; i++) {
    //if isPrime function returns true then only number will be printed
    if (isPrime(i))
        console.log(i);
}

function isPrime(num) {
    //if number equals 2 or 3 , it is a prime number
    if (num == 2 || num == 3) { return true; }

    //if number is divisible by 2 or 3 , it is not a prime number
    if (num % 2 == 0 || num % 3 == 0) { return false; }

    //if number is has any factors from 3 to square root of that number then it is not a prime
    for (var j = 3; j < Math.sqrt(num); j += 2) {
        if (num % j == 0 || num % Math.sqrt(num) == 0) { return false; }

    } return true;

}


