function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createNewPromiseWithoutLoop() {
    return new Promise(function executor(resolve, reject) {
    setTimeout(function fun(){
    let num = getRandomInt(10);
    if (num % 2 == 0) {
        //if the number is even we fulfill the promise
        resolve(num);
    } else {
        //if the number is odd we reject the promise
        reject(num);
    }},10000);    
    })
}

let y = createNewPromiseWithoutLoop();
console.log(y);

//Now this is async code, as soon as promises see's the setTimeout function , it will give that code to runtime for execution
//hence returning a promise object with pending status
//post the timer, the promise object will change the state again