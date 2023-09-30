//Ideally fun is a HOF here , the fun passed to the HOF as a argument is called as callback function
function fun(x,fn){
    console.log("Inside the function");
    for(let i=0;i<x;i++){
        console.log(i);
    }
    fn();
}

fun(10,function exec(){
    console.log("I am a callback function passed to Higher order function");
})