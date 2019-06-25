/******************************************************************************
 *  Compilation: csc.exe /t:exe /out: tsc binary.ts
 *  
 *  
 *  Purpose:     binarySearch method for integer
 *               binarySearch method for String
 *               insertionSort method for integer
 *               insertionSort method for String
 *               bubbleSort method for integer
 *               bubbleSort method for String
 * 
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   05-06-2019
 *
 ******************************************************************************/

exports.module = {

//*****************************************BinarySearch for Integers*************************************/
    

 binarysearch : function() {
        var readlineSync = require('readline-sync');
    //Enter a number to be searched in the array using BinarySearch
        var number = readlineSync.question('Enter number ');
        console.log('Number to be searched is ' + number);
        var l = 0; var arr = [];
        
    //Array is declared to search the elements
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var r = arr.length - 1;

        var m = 0


        //binary search for finding integer

    //Finding the middle element of the array when l is less than or equal to r
        while (l <= r) {
            m = Math.floor((l + (r)) / 2);

    //if the entered number is equal to middle element of the array, print the index of middle element
            if (arr[m] == number) {
                console.log('index of the matching element in an array is ', m);
                break;
            }
    
    //if middle element is less than the number then left element index becomes middle+1
            else if (arr[m] < number) {
                l = m + 1

            }

    //if middle element is greater than change the value of right element to middle-1        
            else if (arr[m] > number) {
                r = m - 1

            }
        }


    },

//##########################################BinarySearch_String##############################################//

     binarysearchStr : function (){
        var low = 0;
        var mid = 0;

        var readlineSync = require('readline-sync');
        var string = readlineSync.question('Enter the string ');

        var givenstring = string.split(' ').sort();
        console.log(givenstring)
        var high = givenstring.length - 1;//defined high

        var inputstring = readlineSync.question(`Enter a string to be searched ==>:`, inputstring)

        while (low <= high) {
         //Finding the middle element of the array when low is less than or equal to high
            mid = Math.floor((low + high) / 2)

         //if the entered string is equal to middle element of the array, print the index of middle element
            if (givenstring[mid] == inputstring) {
                console.log(`index of matching string is `, mid);
                break;
            }
         //if middle element is greater than the inputstring ,change the value of right element to middle-1        
            else if (givenstring[mid] > inputstring)

                high = mid - 1;
          //if middle element is less than the string then left element index becomes middle+1
            else if (givenstring[mid] < inputstring)
                low = mid + 1;


        }



    },


//========================================insertion_sort=====================================================//

     insertionSort : function() {
        console.log(`This is sorting elements using insertion sort`)
        var a = [11, 8, 9, 7, 6, 14];
        console.log(`Given array is `, a);
        var j;
        var key;
        //iterating from index 1 to end of the array
        for (var i = 1; i < a.length; i++) {
        
            //assign value of a[i] to key
            key = a[i];
            //go back to previous index
            j = i - 1;
            
            //checking if previous index is greater than 0 and element at that index is greater than the key
            while (j >= 0 && a[j] > key) {
               
               //changing the position of a[j] element to next position as it is greater than the key
                a[j + 1] = a[j]

                //decreasing the index, to compare remaining previous elements with key
                j = j - 1;
            }
            a[j + 1] = key

        }
        console.log(`After sorting using insertion sort`, a);

    },



//****************************************insertion sort for string*****************************************
     insertionSortString : function() {
        var readlineSync = require('readline-sync');
        var string = readlineSync.question('Enter the string ');

        var a = string.split(' ');

        console.log(`This is sorting elements using insertion sort`)

        console.log(`Given array is `, a);
        var j;
        var key;



        for (var i = 1; i < a.length; i++) {
            key = a[i];
            j = i - 1;

            while (j >= 0 && a[j] > key) {
                a[j + 1] = a[j]
                j = j - 1;
            }
            a[j + 1] = key

        }
        console.log(`After sorting using insertion sort`, a);

    },


//+++++++++++++++++++++++++++++++++++++Bubble Sort+++++++++++++++++++++++++++++++++++++++++++++++++
     bubbleSort: function() {
        console.log(`This is bubblesort for integers===================================>`);
        var a = [18, 12, 10, 5, 6]
        console.log(`Given array is `, a)
        var temp
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a.length - 1 - i; j++) {


                if (a[j] > a[j + 1]) {
                    temp = a[j]
                    a[j] = a[j + 1]
                    a[j + 1] = temp

                }
            }
            console.log(' output after round number', i, a)
        }
        console.log('Final output', a)
    },
//*******************************************Bubble for String************************************


     bubbleSortString : function() {
        const readlineSync = require('readline-sync');
        var string = readlineSync.question('Enter the string ');

        var a = string.split(' ');

        console.log(`This is sorting elements using Bubble sort`)

        console.log(`Given array is `, a);


        var temp
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a.length - 1 - i; j++) {


                if (a[j] > a[j + 1]) {
                    temp = a[j]
                    a[j] = a[j + 1]
                    a[j + 1] = temp

                }
            }
            console.log(' output after round number', i, a)
        }
        console.log('Final output', a)

    }


}
//===================================================================================================
