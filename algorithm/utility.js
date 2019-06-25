exports.module = {
    
   

    binarySearchString: function (givenstring) {

        var low = 0;                   //defined low
        var mid = 0;

        var readlineSync = require('readline-sync');
        // var string = readlineSync.question('Enter the string ');

        var string = givenstring.split(' ').sort();
        console.log(string)
        var high = string.length - 1;//defined high

        var inputstring = readlineSync.question(`Enter a string to be searched ==>:`, inputstring)

           while (low <= high) {

            mid = Math.floor((low + high) / 2)

            if (string[mid] == inputstring) {
                console.log(`Given string is found at index: `)
                return mid
                //   console.log(`index of matching string is `, mid);

            }

            else if (string[mid] > inputstring)

                high = mid - 1;

            else if (string[mid] < inputstring)
                low = mid + 1;




        }


    }
}
