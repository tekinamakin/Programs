/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node BST.js
 *  Execution:    node BST.js
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

var count1;
var count2;
const read=require('readline-sync')
var n1 = read.question('Enter number of nodes',n1) 
n=parseInt(n1) 
var k
class GFG{
    static factorial(n) {
        var res = 1;
        for (var i = 1; i <= n; ++i) {
            {
                res *= i;
            }
            ;
        }
        return res;
    };
    static binomialCoeff(n, k) {
        var res = 1;
        if (k > n - k)
            k = n - k;
        for (var i = 0; i < k; ++i) {
            {
                res *= (n - i);
                res = (function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(res / (i + 1));
            }
            ;
        }
        return res;
    };
    static catalan(n) {
        var c = GFG.binomialCoeff(2 * n, n);
        return (c / (n + 1) | 0);
    };
    static countBST(n) {
        var count = GFG.catalan(n);
        return count;
    };
    static countBT(n) {
        var count = GFG.catalan(n);
        return count * GFG.factorial(n);
    };
    static print() {
        
        count1 = GFG.countBST(n);
        count2 = GFG.countBT(n);
        console.info("Count of BST with " + n + " nodes is " + count1);
        console.info("Count of binary " + "trees with " + n + " nodes is " + count2);
    };
}
GFG.factorial(n)
GFG.binomialCoeff(n, k)
GFG.catalan(n)
GFG.countBST(n)
GFG.countBT(n) 
GFG.print()
