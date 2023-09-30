//Abstarct operations

console.log(2 - 9);
console.log(2 - null); // 2 - null -> 2 - 0 -> 2 
console.log(2 - undefined); // 2 - undefined -> 2 - NaN -> NaN

console.log(1 - "453"); //1 - 453 -> -452
console.log(100 - "34fejnj450");

console.log(1 - 0xa); // 0xa is 10 in decimal system --> 1 - 10 -> -9
console.log(1 - "null"); // null is a invalid number, it will convert it to NaN -> 1 - NaN -> NaN