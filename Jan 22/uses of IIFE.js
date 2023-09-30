(function fun(y){
    console.log("Hii",y)
})("Rajat");


function fun(y){
    console.log("hiii",y);
}

fun("Rajat");

//So this is the use of IIFE, supoose there is some new developer who has recently joined the team.
//then if he write the IIFE then the same name code will not be overrided.
//While if we don't use IIFE then let's see

(function gun(y){
    console.log("Hii",y);
})

function gun(y){
    console.log("hiii",y);
}
gun();