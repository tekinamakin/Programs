/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node inventoryManager.js
 *  
 *  Purpose:      The InventoryManager will call each Inventory Object in its list to calculate the Inventory Price 
 *                and then call the Inventory Object to return the JSON String.
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   19-06-2019
 *
 ******************************************************************************/

var totalP = 0
const fs = require('fs')

/*read the  JSON file */
const read = require('readline-sync')
var data = fs.readFileSync("/home/admin1/Desktop/Aniket/nodejs/oops/inventoryManager/dummy.json", "utf8")


var words = JSON.parse(data)

/* display the JSON object read from the file */
for (var i = 0; i < words.inventory.length; i++) {

    console.log(words.inventory[i])

}
/* choose the item from the options listed */
var choice = parseInt(read.question("Enter the correct choice: 1. rice, 2. pulses, 3. wheat  ==> "))

switch (choice) {

    case 1:

        var choice = parseInt(read.question("Enter the correct choice: 1. Basmati, 2. Surati-kolam, 3. Arborio  ==>  "))
        switch (choice) {
            case 1: //calculating price for Basmati rice
                totalPrice = calculateItemPrice(words.inventory[0].rice[0].Price, words.inventory[0].rice[0].weight)
                console.log("Total price for Basmati is", totalPrice)

                break;

            case 2: //calculating price for surati-kolam rice
                totalPrice = calculateItemPrice(words.inventory[0].rice[1].Price, words.inventory[0].rice[1].weight)
                console.log("Total price for Surati-kolam is", totalPrice)

                break;

            case 3: //calculating price for Arborio rice
                totalPrice = calculateItemPrice(words.inventory[0].rice[2].Price, words.inventory[0].rice[2].weight)
                console.log("Total price for Arborio is", totalPrice)

                break;


        }//calculating total price for rice
        for (var i = 0; i < words.inventory.length; i++) {
            totalPrice = calculateItemPrice(words.inventory[0].rice[i].Price, words.inventory[0].rice[i].weight)
            totalP += totalPrice
        }
        console.log("Total cost for all rice items is: ", totalP)
        break;

    case 2:


        var choice = parseInt(read.question("Enter the correct choice: 1. Tur, 2. Mung bean, 3. kidney bean  ==>   "))
        switch (choice) {
            case 1://calculating price for Tur
                totalPrice = calculateItemPrice(words.inventory[1].pulses[0].Price, words.inventory[1].pulses[0].weight)
                console.log("Total price for Tur is", totalPrice)
                break;

            case 2:// calculating price for Mung bean
                totalPrice = calculateItemPrice(words.inventory[1].pulses[1].Price, words.inventory[1].pulses[1].weight)
                console.log("Total price for Mung bean is", totalPrice)
                break;

            case 3://calculating price for kidney bean
                totalPrice = calculateItemPrice(words.inventory[1].pulses[2].Price, words.inventory[1].pulses[2].weight)
                console.log("Total price for kidney bean is", totalPrice)
                break;
        }
        //calculating total price for pulses
        for (var i = 0; i < 3; i++) {
            totalPrice = calculateItemPrice(words.inventory[1].pulses[i].Price, words.inventory[1].pulses[i].weight)
            totalP += totalPrice
        }
        console.log("Total cost for all pulses items is: ", totalP)
        break;




    case 3:

        var choice = parseInt(read.question("Enter the correct choice: 1. Emmer wheat, 2. Macaroni wheat, 3. Common bread wheat  ==>   "))
        switch (choice) {
            case 1://calculating total price for Emmer wheat
                totalPrice = calculateItemPrice(words.inventory[2].wheat[0].Price, words.inventory[2].wheat[0].weight)
                console.log("Total price for Emmer wheat is", totalPrice)
                break;

            case 2://calculating total price for Macaroni wheat
                totalPrice = calculateItemPrice(words.inventory[2].wheat[1].Price, words.inventory[2].wheat[1].weight)
                console.log("Total price for Macaroni wheat is", totalPrice)
                break;

            case 3://calculating total price for Common bread wheat
                totalPrice = calculateItemPrice(words.inventory[2].wheat[2].Price, words.inventory[2].wheat[2].weight)
                console.log("Total price for Common bread wheat is", totalPrice)
                break;
        }
        //calculating total price for wheat
        for (var i = 0; i < 3; i++) {
            totalPrice = calculateItemPrice(words.inventory[2].wheat[i].Price, words.inventory[2].wheat[i].weight)
            totalP += totalPrice
        }
        console.log("Total cost for all wheat items is: ", totalP)

        break;




    default:
        console.log("Please re enter the correct choice from given choices  ")


}

//method for calculation
function calculateItemPrice(price, weight) {

    var total = price * weight

    return total


}

module.exports={


calculateItemPrice

}