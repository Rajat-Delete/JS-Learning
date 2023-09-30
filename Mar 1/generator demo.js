function* fetchNextElement(){
    console.log("I am inside of a generator function");
    yield 1;
    setTimeout(function exec(){
        console.log("Timer is done")
    },5000);
    yield [1,2,3];
    console.log("Somewhere in Middle");
    yield 3;
    yield 4;
}

const iter=fetchNextElement();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());