/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node ToBinary.js
 *  
 *  Purpose:      Converting decimal to binary and Swap nibbles and find the new number.
 *                Check the resultant number is the number is a power of 2
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   10-06-2019
 *
 ******************************************************************************/


class ConvertBinary {
    static decimalToBinary() {
        const read = require('readline-sync');
        var DecimalNumber = read.question("Enter a number: ", DecimalNumber);

        //convert given number into binary 

        var BinaryString = parseInt(DecimalNumber, 10).toString(2);
        console.log(`After converting into binary: `, BinaryString)

        //Adding zero till the binary number becomes 8 digit binary number
        var zero = '0'
        while (BinaryString.length < 8) {

            BinaryString = zero + BinaryString

        }
        console.log(`After adding zero's at begining to make it 8 digit: `, BinaryString)
        //Extracting  first half
        var firsthalf = BinaryString.substring(0, 4);
        // console.log(firsthalf)
        //Extracting  second half
        var secondhalf = BinaryString.substring(4, 9)
        // console.log(secondhalf)


        //Creating another by swapping two parts 
        var NewString = secondhalf + firsthalf
        console.log(`After swapping the nibbles the number becomes`, NewString)

        //converting that string into a number 
        var NumberAfterSwapping = parseInt(NewString, 2)
        console.log(`After converting the number into decimal: `, NumberAfterSwapping)

        //checking if the obtained number is a power of 2
        var flag = false
        var factor = NumberAfterSwapping / 2

        //checking if all the numbers obtaining after division of 2 are again divisible by 2
        while (factor > 1) {

            if (factor % 2 == 0) {
                factor = factor / 2
                flag = false
            }

            else {
                flag = true
                break;
            }
        }
        if (flag == false)
            console.log('Given number is  a power of 2')

        else
            console.log('Given number is not a power of 2')

    }
}
ConvertBinary.decimalToBinary()
