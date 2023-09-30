function process(){
    let i=0;
    function innerProcess(){
        i+=1;
        return i;
    }
    return innerProcess;
}

let res=process();

console.log("first time calling res",res());
console.log("Second time calling res", res());
console.log("third time calling res", res());

//here we are not snapshoting the values, we are just storing the values. 