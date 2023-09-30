function fun(){//global scope   
    var i=5;//scope of fun
    while(i<10){
        var x=i;
        i++;
        // console.log(x);
    }
    console.log(x);//x will be accessible here also as x will be having either function scope or block scope
}
fun();