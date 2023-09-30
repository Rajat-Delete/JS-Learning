function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createNewPromiseWithoutLoop() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function fun() {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                //if the number is even we fulfill the promise
                resolve(num);
                return num;
                console.log("resolved successfully");
                resolved(18);
                console.log("resolved");
            } else {
                //if the number is odd we reject the promise
                reject(num);
                return num;
                console.log("rejected successfully");
                reject(18);
                console.log("rejected");
            }
        }, 5000);
    })
}

let y = createNewPromiseWithoutLoop();
console.log(y);