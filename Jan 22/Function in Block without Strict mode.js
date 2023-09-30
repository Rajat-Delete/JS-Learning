 "use strict";
{
    function fun() {
        return "12";
    }
}

console.log(fun);

/*
If we are using function inside a block scope then in case of non strict mode it will get outside scope.
If block is in function , then it will get block scope or if it is like above then it will get global scope.
*/