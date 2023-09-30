console.log(null == undefined);

console.log(12 == "12");

console.log(false == 0);
/*
false == 0 --> 0 == 0 --> true
*/

console.log(null == false);

/*
null == false --> null == 0 -->false
*/

console.log("NaN" == NaN);

let obj={x: 10, valueOf(){return 100;}}

console.log(99 == obj);
console.log(100 == obj);
 