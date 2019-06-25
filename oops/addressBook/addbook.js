/*************************************************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node addbook.js
 *  
 *  Purpose:      To maintain an address book. An address book holds a collection of entries, each recording 
 *                a person's first and last names, address, city, state, zip, and  phone number.
 *                It must be possible to add a new person to an address book, to edit existing information about a person
 *                (except the person's name), and to delete a person.
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   21-06-2019
 *
 *************************************************************************************************************/

let fs = require('fs')
let read = require('readline-sync')
var data = fs.readFileSync("write.json")
/*Reading json data from write.json file*/
var words = JSON.parse(data)

var firstName; var lastName; var address; var zipCode; var state; var city; var phoneNumber
console.log("\t"+ "Address Book"+"\t")
console.log("1. To add info to the addressbook")
console.log("2. To modify info in the address book")
console.log("3. To remove info in the addressbook")
var choice = parseInt(read.question("Enter the choice: "))

/* Making a choice between insert ,modify and delete*/
switch (choice) {

  case 1:
    addInfo()
    break;

  case 2:
    modifyInfo()
    break;

  case 3:
    remove()
    break;

  default:
    console.log("Please re-enter the correct choice between 1 and 3")
}
//end of switch case


function addInfo() {

  /* Asking how many number of entries user want to add in the addressbook*/
  var newEntries = read.question("Enter number of new entries to made: ", newEntries)

  for (var i = 0; i < newEntries; i++) {


    var object = {

      firstName: read.question('Enter the name: ', firstName),

      lastName: read.question('Enter the lastName: ', lastName),

      address: read.question('Enter the address: ', address),

      zipCode: parseInt(read.question('Enter the zipCode: ', zipCode)),

      city: read.question('Enter the city: ', city),

      state: read.question('Enter the state: ', state),

      phoneNumber: parseInt(read.question('Enter the phoneNumber: ', phoneNumber))

    }

    /* Inserting the created object inside of addressBook array in json file */
    words.addressBook.push(object)
    console.log(words)

    var jsonObject = JSON.stringify(words, null, 2)

    /*writing the newly created json object to the write.json file*/
    fs.writeFile("write.json", jsonObject, 'utf8', function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }

      console.log("JSON file has been saved.");

    });
  }
}

/* To modify information of the existing user*/
function modifyInfo(firstName, lastName, address, zipCode, city, state, phoneNumber) {
  var input = read.question("Enter the first name of user to modify info: ")
  var inputZip = parseInt(read.question("OPTIONAL: Enter the zip code of user to modify info: "))
  for (var i = 0; i < words.addressBook.length; i++) {
    //matching either name or zipcode or both
    if (words.addressBook[i].firstName == input || words.addressBook[i].zipCode == inputZip || words.addressBook[i].firstName == input && words.addressBook[i].zipCode == inputZip) {

      console.log("Enter 1 to update the address", "\n",
        "Enter 2 to update the zipcode", "\n",
        "Enter 3 to update the city", "\n",
        "Enter 4 to update the state", "\n",
        "Enter 5 to update the phone number", "\n",
        "Enter 6 to update all the information")

      var choice = parseInt(read.question('enter the choice ', choice))

      switch (choice) {
        /*only edit the address*/
        case 1:
          { /*Taking input of new details and assigning it to the existing attributes*/
            var editAddress = read.question('Enter the new address for the user: ', editAddress)
            words.addressBook[i].address = editAddress

            console.log(words.addressBook[i])

            var jsonObject = JSON.stringify(words, null, 2)

            /*writing the newly created json object to the write.json file*/
            fs.writeFile("write.json", jsonObject, 'utf8', function (err) {
              if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
              }

              console.log("JSON file has been updated successfully.");

            });
            break;
          }


        /*only edit the zip code*/
        case 2:
          { /*Taking input of new details and assigning it to the existing attributes*/
            var editZipCode = parseInt(read.question('Enter the new zip code for the user: ', zipCode))
            words.addressBook[i].zipCode = editZipCode

            console.log(words.addressBook[i])

            var jsonObject = JSON.stringify(words, null, 2)

            /*writing the newly created json object to the write.json file*/
            fs.writeFile("write.json", jsonObject, 'utf8', function (err) {
              if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
              }

              console.log("JSON file has been updated successfully.");

            });
            break;
          }

        /*only edit the city*/
        case 3:
          { /*Taking input of new details and assigning it to the existing attributes*/
            var editCity = read.question('Enter the new city for the user: ', editCity)
            words.addressBook[i].city = editCity

            console.log(words.addressBook[i])

            var jsonObject = JSON.stringify(words, null, 2)

            /*writing the newly created json object to the write.json file*/
            fs.writeFile("write.json", jsonObject, 'utf8', function (err) {
              if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
              }

              console.log("JSON file has been updated successfully.");

            });
            break;
          }

        /*only edit the state*/
        case 4:

          { /*Taking input of new details and assigning it to the existing attributes*/
            var editState = read.question('Enter the new state for the user: ', editState)
            words.addressBook[i].state = editState

            console.log(words.addressBook[i])

            var jsonObject = JSON.stringify(words, null, 2)

            /*writing the newly created json object to the write.json file*/
            fs.writeFile("write.json", jsonObject, 'utf8', function (err) {
              if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
              }

              console.log("JSON file has been updated successfully.");

            });
            break;
          }


        /*only edit the phone number*/
        case 5:
          { /*Taking input of new details and assigning it to the existing attributes*/
            var editPhoneNumber = parseInt(read.question('Enter the new phone number for the user: ', editPhoneNumber))
            words.addressBook[i].phoneNumber = editPhoneNumber

            console.log(words.addressBook[i])

            var jsonObject = JSON.stringify(words, null, 2)

            /*writing the newly created json object to the write.json file*/
            fs.writeFile("write.json", jsonObject, 'utf8', function (err) {
              if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
              }

              console.log("JSON file has been updated successfully.");

            });
            break;
          }


        /*Edit all the information*/
        case 6:
          {
            console.log("Update all the details of user: ")
            /*Taking input of new details and assigning it to the existing attributes*/
            var editAddress = read.question('Enter the new address for the user: ', editAddress)
            words.addressBook[i].address = editAddress
            var editZipCode = parseInt(read.question('Enter the new zip code for the user: ', zipCode))
            words.addressBook[i].zipCode = editZipCode
            var editCity = read.question('Enter the new city for the user: ', editCity)
            words.addressBook[i].city = editCity
            var editState = read.question('Enter the new state for the user: ', editState)
            words.addressBook[i].state = editState
            var editPhoneNumber = parseInt(read.question('Enter the new phone number for the user: ', editPhoneNumber))
            words.addressBook[i].phoneNumber = editPhoneNumber

            console.log(words.addressBook[i])

            var jsonObject = JSON.stringify(words, null, 2)

            /*writing the newly created json object to the write.json file*/
            fs.writeFile("write.json", jsonObject, 'utf8', function (err) {
              if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
              }

              console.log("JSON file has been updated successfully.");

            });
            break;
          }
        default:
          console.log("Please try again and enter the choice between 1 to 6")
          break;


      }
    }



  }

}

/* To delete the information of existing user*/
function remove() {

  var input = read.question("Enter the name of user to be removed from the addressbook: ", input)
  var inputZip = read.question("Compulsory enter the zipcode of user to match with first name of user: ", inputZip)
  for (var i = 0; i < words.addressBook.length; i++) {
    /*matching first name and zipcode*/
    if (words.addressBook[i].firstName == input && words.addressBook[i].zipCode == inputZip) {

      words.addressBook.splice(i, 1)
    }


    console.log(words.addressBook[i])
  }
  var jsonObject = JSON.stringify(words, null, 2)

  /*writing the newly created json object to the write.json file*/
  fs.writeFile("write.json", jsonObject, function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been deleted successfully.");

  });


}



