const assert = require('chai').assert;
const result = require('/home/admin1/Desktop/Aniket/nodejs/oops/inventoryManager/inventoryManager.js');

const fs = require('fs');
var data = fs.readFileSync("/home/admin1/Desktop/Aniket/nodejs/oops/inventoryManager/dummy.json");
//convert JSON file into object
var object = JSON.parse(data);


describe('Inventory data Method  argument input by user', function () {
    it('check if the result is a number', function () {

        let output = result.calculateItemPrice(3,2);
        assert.isNumber(output, 'Number')

    })

    });


    it('When if result is non zero value', function () {
        let output = result.calculateItemPrice(15, 10)
        assert.isNotNull(output);
    });

