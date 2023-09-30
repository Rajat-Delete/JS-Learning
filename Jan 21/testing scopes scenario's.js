var y=40;
var x = 10;

function fun() {
    function gun() {
        var y = 20;
        console.log(x);
        console.log(y);
    }
    gun();
    // console.log(x);
    // console.log(y);
}

fun();