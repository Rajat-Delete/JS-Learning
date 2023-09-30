function Hello(){
    console.log("Function declaration");
}

const expression=function(){
    //console.log("function expression");
    let x = 1+2;
    return x;
}

const obj={
    firstName:"xyz",
    age:20,
    funDec:Hello,
    funExe:expression
}

// console.log(expression)
Hello();
expression();
obj.funDec;
console.log(Hello());