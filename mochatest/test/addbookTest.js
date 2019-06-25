// const assert = require('chai').assert;
// const fs = require('fs')

// var data = fs.readFileSync("/home/admin1/Desktop/Aniket/nodejs/oops/addressBook/write.json");
// //convert JSON file into object
// var object = JSON.parse(data);
// describe(' json input for Person ', function () {

//     it("Name should be string only", function () {

//         for (let i = 0; i < object.addressBook.length; i++) {
//             var arr = object.addressBook[i].firstName;
//             assert.isString(arr, 'string');

//         }
//     });
//     it("check if name is a number", function () {

//         for (let i = 0; i < object.addressBook.length; i++) {
//             var arr = object.addressBook[i].firstName;
//             assert.isString(arr);

//         }
//     });
//     it("Zip code must be 6 digits",function(){
//         for (let i = 0; i < object.addressBook.length; i++) {
          
//                 var arr = object.addressBook[i].zipCode;
//                 var count = 0;
//                 if (arr >= 1) ++count;
              
//                 while (arr / 10 >= 1) {
//                   arr /= 10;
//                   ++count;
//                 }
              
//                 assert.equal(count,6)
//             }
//     });
//     it("Zip code must be number only",function(){
//         for (let i = 0; i < object.addressBook.length; i++) {
//             var arr = object.addressBook[i].zipCode;
//             assert.isNotString(arr,'Number')
//         }
//     });
    
//     it("Phone no must be 10 digits",function(){
//         for (let i = 0; i < object.addressBook.length; i++) {
//             var arr = object.addressBook[i].phoneNumber;
//             var count = 0;
//             if (arr >= 1) ++count;
          
//             while (arr / 10 >= 1) {
//               arr /= 10;
//               ++count;
//             }
          
//             assert.equal(count,10 )
//         }
//     })

// })