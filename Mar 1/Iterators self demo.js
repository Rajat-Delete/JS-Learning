function fetchNextElement(array){
    let idx=0;
    function next(){
        if(idx==array.length){
            return undefined;
        }
        const element=array[idx];
        idx+=1;
        return element;
    }
    return next;
}
x = fetchNextElement([1, 2, 3, 4]);

console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());

