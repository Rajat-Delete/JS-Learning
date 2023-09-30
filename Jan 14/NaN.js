console.log(Number("123"));
console.log(Number("rajat"));
console.log(Number(0xa));

let x = "Rajat";

console.log(x == NaN); // we can't do this as NaN are not equal to each other

// so what is the way to check NaN

console.log(isNaN(x)); // so this will check whether the number is NaN or not but
console.log(isNaN("sanket")); // so the isNaN method actually does the ToNumber conversion on the input argument

console.log(Number.isNaN("sanket")); //this doesnot do the coercion
console.log(Number.isNaN(x)); 

//so Number.isNaN is a better appraoch to check whether number is NaN or not.

if(typeof x == Number && x !== x){
    console.log(true);
}
console.log(x!==x);// check isthere any problem with this expression to check NaN value.