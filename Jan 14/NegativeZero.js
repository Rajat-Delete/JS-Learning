let x = -0;
console.log(x === -0);// true
console.log(x === 0);//true


console.log(Object.is(x , -0));//true
console.log(Object.is(x, 0));//false
console.log(Object.is(x,1));//false

console.log(Math.sign(-3));//-1
console.log(Math.sign(3));//1
console.log(Math.sign(0));//0
console.log(Math.sign(-0));//-0


console.log(x<0);
console.log(-1 < 0);


/*
can we write a custom function that can give us sign of the number properly
return -1 for negative and 1 for positive
*/


function check(number){
    if(number > 0){
        return 1;
    }else if(number < 0){
        return -1;
    }else if(number == 0){
        if(Object.is(number , -0)){
            return -1;
        }else if(Object.is(number , 0)){
            return 1;
        }
    }else{
        return "Invalid Number";
    }
}

check(-1);
check(1);
check(10);
check("Rajat");
check(-0);
check(+0);