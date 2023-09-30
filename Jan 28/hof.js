//Higher order functions:

//Functions which are going to consume other functions as a argument are called higher order functions

function fun(x,fn){

    console.log(fn);
    console.log(x);
}

fun(10,function f(){
    console.log("I am a function passed to HOF");
});


//now we will see inbuilt js HOF

let arr=[1,10,9.100,1000,11,12,13,14,4];

arr.sort();// expectation: it might sort the array in increasing order
console.log(arr)
/* The default implementation of arr.sort is going to sort the array in lexicographical order(dictionary wise)    */


/** let suppose this is the corresponding values for above
 A -> 0
 B -> 1
 C -> 2
 D -> 3
 E -> 4
 F -> 5
 G -> 6
 H -> 7
 I -> 8
 J -> 9
 */

 //Now we'll arrange it as per dictionary
//[B,BA,J,BAA,BAAA,BB,BC,BD,BE,E]
//Now we'll sort as per dictionary
//[B,BA,BAA,BAAA,BA,BB,BC,BD,BE,E,J]

let b = [1, 10, 9,100, 1000, 11, 12, 13, 14, 4];
//now we will sort the array in increasing order.

//so the array.sort method in JS takes a comparator function which will compare two values

b.sort(function comp(a,b){
    return a-b;
    //If a<b then a-b will be negative number, If comparator function gives negative answer then a is placed before b
    //If a>b then a-b will be positive number, If the comparator function gives positive answer then b is placed before a
})

console.log(b);