//First variation
var teacher = "sanket";
function fun() {
    var teacher = "rajat";
    content = "JS";
    console.log(teacher);
}
function gun() {
    var teacher = "abhinav";
    console.log(teacher);
}
fun();
gun();
console.log(teacher);
console.log(content);

/* Explanation 

In Parsing phase below things will happen:
teacher will get global scope
function fun will get global scope
var teacher will get function fun scope
Function gun will get global scope
var teacher will get gun scope

Now comes the execution phase,
teacher will be check in global variable and assigned the value as sanket.
function fun and gun will be ignored until they are called
Now fun will start execution, teacher will be checked in function fun and assigned value as rajat
Now content will be checked inside function fun but it is not present, so we move one scope out ie. global scope, we don't have content in global scope also, so now it will automatically become global.
This concept is called autoglobal.
teacher value will be printed as per function fun.

*/

//Output
/*rajat
abhinav
sanket
JS*/
 



//Second variation
var teacher = "sanket";
function fun() {
    var teacher = "rajat";
    content = "JS";
    console.log(teacher);
}
function gun() {
    var teacher = "abhinav";
    console.log(teacher);
}
console.log(content);
fun();
gun();
console.log(teacher);
// Now in this scenario, content is accessed before value is assigning to it, so it will give a reference error

//The concept of autoglobals works during value assigning phase.