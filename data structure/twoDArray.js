var index = 0; var a1 = [];
// var a2 = [];
var r = 10; var c = 100
// var result=[];


// result=findPrimeNumbers()

// console.log(result)
function findPrimeNumbers() {
    //console.log("Prime numbers from 1 to 1000 ");
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

    //return the prime numbers

    return myData
}



//logic to check if the number is prime or not

function isPrime(num) {

    //If the number is 2 or 3 , it is a prime number
    if (num == 1) return false
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


//****************************************************************************************************************


cat()

function cat() {

    var result = []
    var twoD = []
    // result[l]=findPrimeNumbers()
    var j1 = 0; var k = 100; var l = 0;

    for (var i = 0; i < 10; i++) {

        for (var j = j1; j <= k; j++) {
            if (isPrime(j)) {
                result[l] = j

                l++;
            }

         


        }
        k = k + 100
        j1 = j1 + 100
      
        console.log(result)
        return result
    }


}



function res() {
    var array1 = []; var array2 = []
    array1 = cat()



    for (var i = 0; i < 10; i++) {
        array2[i] = new Array()
        
        for (var j = 0; j < array1.length; j++) {
            array2[i][j] = array1[j]
        }

    }

    console.log(array2)
}
res()