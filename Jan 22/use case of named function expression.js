function fun(fn){
    console.log("Having fun");
    fn();
}

fun(function gun(){
    console.log("so much fun")
    console.trace();//now this console.trace helps us to identify the trace of this gun function.
})

//If we use named function expression then the trace will always show the function name which is called, else we'll get a no named function.

//So with help of named function expression , we get the following advantage:
// readiblity of code increases.

