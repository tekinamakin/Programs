/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node BalancedParentheses.js
 *  Execution:    node BalancedParentheses.js
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
var data=fileSystem.readFileSync('expression.txt','utf8')
    
var info=data.split("")
console.log('Expression is:  ',info)


function stack(){

    this.items=[]
}
  


    // Functions to be implemented 

    // push(item) 
    stack.prototype.push = function (element)
{ 
    // push element into the items 
    this.items.push(element); 
} 

    // pop() 

    stack.prototype.pop = function ()
 {
        if(this.items.length==0)
        return 'Underflow'
        return this.items.pop()

    }
    // peek() 
    // isEmpty() 
    // printStack() 


    stack.prototype.isEmpty = function (){

  return this.items.length==0

   }


   stack.prototype.size = function (){
    return this.items.length

   }

   stack.prototype.peek = function (){

    return this.items[this.items.length-1]

   }
//class ends



var list= new stack()



stack.prototype.arePair = function (opening,closing){
if(opening==='(' && closing===')')
return true

else if(opening==='{' && closing==='}')
return true

else if(opening==='[' && closing===']')
return true

else return false
}


stack.prototype.balanced = function (info){ 

for(var i=0;i<info.length;i++)
{
    if(info[i]==='(' || info[i]==="{" || info[i]==="[")
   list.push(info[i])
   

else if(info[i]===')' || info[i]==="}" || info[i]==="]")
{
if(list.isEmpty() || !list.arePair(list.peek(),info[i])){

    return false
}
  list.pop()

}

}
if(list.isEmpty())
return true

else
return false
}



if(list.balanced(info))
{
    console.log('Arithmetic Expression is Balanced.')
}
else

console.log('Arithmetic Expression is NOT Balanced.')






















