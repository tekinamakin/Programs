/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node LinkedList.js
 *  Execution:    node LinkedList.js
 *  
 *  Purpose:      Read from file the list of Words and take user input to search 
 *                a Text.If the Word is not found then add it to the list, and if 
 *                it found then remove the word from the List.
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   12-06-2019
 * 
 ******************************************************************************/

var fileSystem = require('fs');
var data = fileSystem.readFileSync('demo.txt', 'utf8')
var info = data.split(" ")

function linkedList() {

    this.head = null
}

linkedList.prototype.isEmpty = function () {
    return this.head === null

};

linkedList.prototype.size = function () {

    var current = this.head
    var count = 0

    /* Increase the value of count till current becomes null */
    while (current !== null) {

        count++
        current = current.next;
    }
    return count;
};

linkedList.prototype.prepend = function (val) {
    /*assigning head to next of newNode and then newhead becomes head*/
    var newNode = {

        data: val,
        next: this.head
    };

    this.head = newNode
};
linkedList.prototype.append = function (val) {

    var newNode = {

        data: val,
        next: null
    };
    if (this.isEmpty()) {
        this.head = newNode
        return;

    }
    var current = this.head

    while (current.next !== null) {
        current = current.next

    }

    current.next = newNode
};

linkedList.prototype.search = function (val) {

    var current = this.head
    while (current !== null) {
        if (current.data === val) {
            return true
        }
        current = current.next
    }
    return false
};

linkedList.prototype.remove = function (val) {
    if (!this.search(val)) {
        return
    }
    if (this.head.data === val) {

        this.head = this.head.next;
        return
    }

    var prev = null
    var curr = this.head
    while (curr.data !== val) {

        prev = curr;
        curr = curr.next;
    }

    prev.next = curr.next
};


linkedList.prototype.print = function (val) {
    var output = ''
    var current = this.head
    while (current !== null) {

        output += current.data
        if (current.next !== null) {

            output += ' ';

        }
        current = current.next
    }

    //output += ''
    return output
};
try {

    var list = new linkedList()
    /* adding characters from info string inside the linked list */
    for (var i = 0; i < info.length; i++) {

        list.append(info[i])

    }

    console.log('Text read from the file demo.txt is : ')
    list.print()

    const read = require('readline-sync')
    var NewString = read.question("Enter a new string :", NewString)

    /* if entered string matches the strings inside the link list then delete it, if not matching string 
    is found then add it to the string*/

    if (list.search(NewString)) {
        console.log(NewString, 'is already present in the list, Enter another string to')
        list.remove(NewString)
    }
    else

        list.append(NewString)

    var fs = require("fs");

    var data = "New File Contents";

    fs.writeFile("demo.txt", list.print(), (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
}
catch (e) {
    console.log('Error', e)

}

