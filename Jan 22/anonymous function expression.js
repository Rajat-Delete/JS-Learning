function fun(fn){
    console.log("I'm fine");
    fn();
}

fun(function (){
    console.log("How r u")
    console.trace();
});

//So if we use anonymous function expression then it will be difficult to trace the JS code during the runtime.