var teacher="sanket";
function fun(){
    var teacher="rajat";
    console.log(teacher);
}
function gun(){
    var teacher="abhinav";
    console.log(teacher);
}
fun();
gun();
console.log(teacher);

//Explanation
/*
So first parsing phase of JS will come into picture, so the scope resolution will be as follows:
teacher will be getting a global scope.
function fun will also be getting a global scope.

var teacher will be getting the scope of function fun.
function gun will also be getting a global scope.
var teacher will be getting the scope of function gun.

During the parsing phase, we only consider formal declartions(that starts with let, var, const)

Now the execution phase will come in picture. 
so first, Global teacher will be assigned sanket.
then values inside functions will not be assigned until they are called. 
Now flow will come to line no.10 , fun will be called and it will check var can have a function scope, so it is assigned value as rajat
and console log will print it.

Similar will be checked for function gun.

*/

