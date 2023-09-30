function blocking_for_loop(){
    for (let i = 0; i < 1000000000; i++) {
        //something
    }
}
console.log("Start of the file");
setTimeout(function timer1() {
    console.log("Timer 1 done");
}, 0);
blocking_for_loop();
let x = Promise.resolve("Sanket Promise1");
x.then(function processPromise(value) {
    console.log("Whose Promise ?", value);
    blocking_for_loop();
});
let y = Promise.resolve("Sanket Promise2");
y.then(function processPromise(value) {
    console.log("Whose Promise ?", value);
    setTimeout(function (){console.log("ok done")},0);
});
let z = Promise.resolve("Sanket Promise3");
z.then(function processPromise(value) {
    console.log("Whose Promise ?", value);
});
setTimeout(function Timer2() {
    console.log("Timer 2 Done");
}, 10000);

console.log("End of the file");

//cb queue:timer1,timer2,ok done  MS Queue:
/*
Output:

Start of the file
End of the file
Whose Promise ? Sanket Promise1
Whose Promise ? Sanket Promise2
Whose Promise ? Sanket Promise3
Timer 1 Done
Timer 2 Done
ok done
*/