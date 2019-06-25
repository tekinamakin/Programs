
function linkedList() {

    this.head = null
}


linkedList.prototype.isEmpty = function () {
    return this.head === null

};

linkedList.prototype.prepend = function (val) {
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

    while (current.next!== null) {
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
linkedList.prototype.print = function (val) {
    var output = '['
    var current = this.head
    while (current !== null) {

        output += current.data
        if (current.next !== null) {

            output += ' ';

        }
        current = current.next
    }

    output += ']'
    return output
};


linkedList.prototype.sort=function(){

    var current=this.head;

    while(current!==null){
    if(current.data>current.next.data)
    {
    var temp=current.data
    current.data=current.next.data
    current.next.data=temp
    
    
    }
    current=current.next
    
    
    }
    
    };
var list=new linkedList()

list.append(10)
list.append(50)
list.append(5)

list.print()

list.sort()

list.print()