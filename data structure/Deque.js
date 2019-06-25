/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node Deque.js
 *  Execution:    node Deque.js
 *  
 *  Purpose:     Use a deque to store the characters of the string.Process 
 *               the string from left to right and add each character to the rear of the deque.
 *               Check whether it is a palindrome. 
 *    
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   14-06-2019
 * 
 ******************************************************************************/

//var MAX = 100;

function Deque(size) {

    this.arr = []
    this.front = -1;
    this.rear = 0;
    this.size = size;
}
Deque.prototype.isFull = function () {
    /* check if the size of deque is full*/
    return ((this.front === 0 && this.rear === this.size - 1) || this.front === this.rear + 1);
};

Deque.prototype.isEmpty = function () {
    /*check if the deque is empty*/
    return (this.front === -1);
};

Deque.prototype.insertfront = function (key) {
    /* considering all possible places of "front" for inserting an element */
    if (this.isFull()) {
        console.info("Overflow");
        return;
    }
    if (this.front === -1) {
        this.front = 0;
        this.rear = 0;
    }
    else if (this.front === 0)
        this.front = this.size - 1;
    else
        this.front = this.front - 1;
    /* Adding key to the front of an array */
    this.arr[this.front] = key;
};

Deque.prototype.insertrear = function (key) {
    /* considering all possible places of "rear" for inserting an element */
    if (this.isFull()) {
        console.info(" Overflow ");
        return;
    }
    if (this.front === -1) {
        this.front = 0;
        this.rear = 0;
    }
    else if (this.rear === this.size - 1)
        this.rear = 0;
    else
        this.rear = this.rear + 1;
    /* Adding key to the front of an array */
    this.arr[this.rear] = key;
};
Deque.prototype.deletefront = function () {
    /*replacing the value of "front" by skipping its current value, so element at that particular index will be deleted*/
    if (this.isEmpty()) {
        console.info("Queue Underflow\n");
        return;
    }
    if (this.front === this.rear) {
        this.front = -1;
        this.rear = -1;
    }
    else if (this.front === this.size - 1)
        this.front = 0;
    else
        this.front = this.front + 1;
};
Deque.prototype.deleterear = function () {
    /*replacing the value of "front" by skipping its current value, so element at that particular index will be deleted*/
    if (this.isEmpty()) {
        console.info(" Underflow");
        return;
    }
    if (this.front === this.rear) {
        this.front = -1;
        this.rear = -1;
    }
    else if (this.rear === 0)
        this.rear = this.size - 1;
    else
        this.rear = this.rear - 1;
};
Deque.prototype.getFront = function () {

    if (this.isEmpty()) {
        console.info(" Underflow");
        return -1;
    }
    return this.arr[this.front];
};
Deque.prototype.getRear = function () {
    if (this.isEmpty() || this.rear < 0) {
        console.info(" Underflow\n");
        return -1;
    }
    return this.arr[this.rear];
};

/* taking a user input of string and converting to character array and passing to deque */
var dq = new Deque(100);
const read = require('readline-sync')
var string = read.question('Enter a string: ', string)
var charArray = string.split("")
for (var i = 0; i < charArray.length; i++) {
    console.log('hi')
    dq.insertrear(charArray[i])

}
console.log(dq)
flag = false
/* comparing front and rear element */
for (var j = 0, k = dq.size - 1; j < dq.size && k >= 0; j++ , k--) {
    var f = dq.getFront()
    var r = dq.getRear()

    if (f == r)

        flag = true


    else
        flag = false

}

if (flag)

    console.log('Given string is a palindrome')

else

    console.log('Given string is not a palindrome string')