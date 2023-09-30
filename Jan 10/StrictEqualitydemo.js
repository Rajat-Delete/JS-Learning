console.log(NaN === NaN);

console.log(-0 === 0);

let obj1={x:10};
let obj2={x:10};
let obj3={y:10};

console.log(obj1 === obj2);
console.log(obj1 === obj3);
console.log(obj1 === obj1); // it just checks the reference of the objects
console.log({x:10} === {x:10}); // both the objects will be created with different memory location that's why it gives false


let x = [10];
let y = 10;
console.log(x == y);
