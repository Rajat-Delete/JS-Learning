console.log("" + 0);//both +0 and -0 will be converted to 0 while converting to ToString
console.log("" + -0);

console.log("" + []);
console.log("" + {});

console.log("" + [1,2,3]);
console.log("" + [null,undefined]);
console.log("" + [1,2,null,3]);


console.log(0 - '010'); // 010 will be convtered to decimal 
console.log(0 - 'O10');
console.log(0 - 0xa);//it will be converted to hexa decimal value
console.log(0 - 010);//it will be converted to octal number
console.log(0 - 0xb);


console.log([] - 1);
console.log(1 - []);
console.log([""]-1);
console.log(["0"] - 1);