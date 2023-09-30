function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function createPromiseWithTimeout(){
    return new Promise(function exec(resolve,reject){
        console.log("Entering the executor function in Promise constructor")
        setTimeout(function fun(){
            let num=getRandomInt(10);
            if(num%2==0){
                resolve(num);
            }else{
                reject(num);
            }
        },10000);
        console.log("Executing the executor function in the Promise constructor");
    });

}

console.log("Starting...");
let p=createPromiseWithTimeout();
console.log("We are now waiting the promise handler to complete");
console.log("Our Promise object looks like",p);

p.
then(function fulfillHandler(value){console.log("Entering the fullfill Handler with value",value)}
    , function rejectHandler(value) { console.log("Entering the Reject Handler with value", value) }
);

/*

Starting...
Entering the executor function in Promise constructor
Executing the executor function in the Promise constructor
We are now waiting the promise handler to complete
Our Promise object looks like
Entering the fullfill Handler with value/Entering the Reject Handler with value will run
*/