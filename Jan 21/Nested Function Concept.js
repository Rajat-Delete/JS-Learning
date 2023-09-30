
function fun(){ // this is going to get the global scope
    var x=10;//this will be getting scope of fun
    function gun(){//this will be getting the scope of fun
        console.log("Hii");
        var y=20;//this will be getting scope of gun
        console.log(x);
        console.log(y);
    }
    console.log(x);
    console.log(y);
}

fun();

/*
Now if we execute the above code once parsing phase is completed, then execution phase will come in picture.
fun will be called from line 14, var x will get 10 value , gun function will be skipped as it is not called yet.
flow will come on line 10 , it will print 10 then it will come on line no 11, unfortunately there is no y in scope of fun so it will give error. 
*/


function fun() { // this is going to get the global scope
    var x = 10;//this will be getting scope of fun
    function gun() {//this will be getting the scope of fun
        console.log("Hii")
        var y = 20;//this will be getting scope of gun
        console.log(x);
        console.log(y);
    }
    gun();
    console.log(x);
    console.log(y);
}

fun();

/*
Now if we execute the above code once parsing phase is completed, then execution phase will come in picture.
fun will be called from line 23, var x will get 10 value , gun function will be skipped as it is not called yet.
flow will come on line 31 it is called so y will be assigned value as 20, Now flow will come on line 28, x is not there in function
so scope manager will go one scope out and ask whether x is there and prints 10, after that it will print y,
now after that 32 line will print x and again y is not there so scope manager will go one scope ie global scope. and it's not there.
so it will give error there.
*/
