/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node stock.js
 *  Execution:    node stock.js
 *  
 *  Purpose:       Read in Stock Names, Number of Share, Share Price.
 *                 Print a Stock Report with total value of each Stock and the total value of Stock. 
 *                 
 *                
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   20-06-2019
 * 
 ******************************************************************************/

/* Reading data from json file and using to create stock report */
const read = require("fs")
var fs = read.readFileSync("stock.json", "utf8")
var data = JSON.parse(fs)
console.log(data)
var totalCostOfAllShares = 0
var costOfEach = 0

display()
function display() {
    for (var i = 0; i < data.stock.length; i++) {

        costOfEach = calculateValueOfEachStock(data.stock[i].stockPrice, data.stock[i].numberOfStocks)
        console.log("cost of all", data.stock[i].shareName, "shares is: " + "\t" + costOfEach)
        totalCostOfAllShares += costOfEach
        // console.log(costOfEach)
    }
    console.log("Total cost of all shares is: " + "\t" + totalCostOfAllShares)
    return totalCostOfAllShares
}

/* calculating total value of each stock from number of shares and share price */
function calculateValueOfEachStock(a, b) {

    var multi = a * b
    return multi

}

