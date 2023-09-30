let obj={};

console.log(10 - obj); 
/*
so ToNumber is going to call ToPrimitive on obj with hint number
ToPrimitive will call ordinaryToNumber on object with hint as number
Now valueOf and toString will be called on object
valueof will return the same object of type object, then toString will give [object Object] of type String
so ToNumber will be called on [object Object] which will give NaN.
so 10 - NaN will give NaN
*/

let obj2={
    x:10,
    y:20
}
console.log(100-obj2);

let obj3={
    x:20,
    valueOf(){
        return 99;
    }
}
console.log(100 - obj3);

let obj4={
    x:23,
    toString(){
        return "88";
    }
}
console.log(90 - obj4);
console.log(100 + obj4);
let obj5={
    x:34,
    toString(){
        return {};
    }
}
console.log(10 + obj);
console.log(100 - obj5); 


