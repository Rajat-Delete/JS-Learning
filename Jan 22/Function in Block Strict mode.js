"use strict";
{
    function fun(){
        return "12";
    }
}

// console.log(fun);

/*
If we are using function inside a block scope then in case of  strict mode it will not get outside scope.
Hence it will never be available outside block.
*/

"use strict";
{
    function fun() {
        return "12";
    }

console.log(fun);
}