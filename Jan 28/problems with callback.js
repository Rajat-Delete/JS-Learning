//So there are two major problems with callbacks
// 1.inversion of control (promise cam help in fixing the issue)
// 2.callback hell -> this is just a readiblity problem, that will not hamper our codebase

function doTask(x,fn){
    //whole implementation is done by team A
    console.log(x);

    fn(x*x); //calling my callback with square of x
    fn(x * x);


}

//here team B tries to use it
doTask(10,function useHOF(){
    console.log("Hiiii");//due to callbacks , I am passing all control Of useHOF to doTask function , this is inversion of control
})