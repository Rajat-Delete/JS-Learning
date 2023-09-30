console.log(x);
const x=10;
//TDZ exist in const also

x=9;//we can't do the reinitialization in const also

const obj ={x:9};
obj.x=10;
//Well this is possible as if const is a object or array then it's properties can be updated or removed.

