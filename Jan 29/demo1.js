console.log("Hii");
setTimeout(function fun(){
    console.log("Starts function");
    setTimeout(function exec2(){
        console.log("Timer2 done");
    },10);
    console.log("end of exec0");
},0)

for(let i=0;i<1000;i++){
    //do something
}
console.log("ends");

/*

hii
ends
starts funciton
end of exec0
Timer2 done

*/