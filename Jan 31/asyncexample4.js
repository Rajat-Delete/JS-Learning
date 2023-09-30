console.log("Staring the code");
setTimeout(function exec0(){
        console.log("starting the function");
        setTimeout(function exec2(){
            console.log("Timer done2");
        },5000)
        console.log("End of exec0")
},6000);
for(let i=0;i<100000;i++){

}
console.log("Ends");
