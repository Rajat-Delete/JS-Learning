console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
},0);

for(let i=0;i<1000000000;i++){
    //something
}

let x=Promise.resolve("Sanket Promise");
x.then(function processPromise(value){
    console.log("Whose Promise ?",value);
});

setTimeout(function Timer2(){
    console.log("Timer 2 Done");
},0);

console.log("End of the file");

//cb queue:timer1,timer2  MS Queue:ProcessPromise
/*
Output:

Start of the file
End Of the File
Whose Promise ? Sanket Promise
Timer 1 Done
Timer 2 Done

*/