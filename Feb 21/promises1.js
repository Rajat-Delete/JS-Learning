//going to return a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createNewPromiseWithLoop(){
    return new Promise(function executor(resolve,reject){
        for(let i=0;i<100000000;i++){ }
        let num=getRandomInt(10);
        if(num%2==0){
            //if the number is even we fulfill the promise
            resolve(num);
        }else{
            //if the number is odd we reject the promise
            reject(num);
        }
    })
}

let y=createNewPromiseWithLoop();
console.log(y);