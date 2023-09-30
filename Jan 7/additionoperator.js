let obj={};

console.log("18" + obj); // "18" +  [object Object] --> 18[objectObject]

console.log(18 + obj); // 18 + [object Object] --> 18[objectObject]

console.log("18" - obj);//18 - NaN --> NaN

console.log(18 - obj);// 18 - NaN --> NaN