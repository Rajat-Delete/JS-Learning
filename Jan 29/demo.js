function timeconsumingByLoop(){
    console.log("Loop Starts");
    for(let i=0;i<100000000;i++){
        //some task
    }
    console.log("loop ends");
}

function timeconsumingbyRumtime0(){
    console.log("Starting Timer0");
    setTimeout(function exec(){
        console.log("Completed the timer0");
        for(let i=0;i<1000000000;i++){
            //sometask
        }
    },5000);
}

function timeconsumingbyRumtime1() {
    console.log("Starting Timer1");
    setTimeout(function exec() {
        console.log("Completed the timer1");
    }, 0);
}

function timeconsumingbyRumtime2() {
    console.log("Starting Timer2");
    setTimeout(function exec() {
        console.log("Completed the timer2");
    }, 200);
}

console.log("Hi");
timeconsumingByLoop();
timeconsumingbyRumtime0();
timeconsumingbyRumtime1();
timeconsumingbyRumtime2();
timeconsumingByLoop();
console.log("Bye");

/*

Output:
Hi
Loop Starts
loop ends
Starting Timer0
Starting Timer1
Starting Timer2
Loop Starts
loop ends
Bye


Completed the timer
*/