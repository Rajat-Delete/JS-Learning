function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if (idx == array.length) {
            return {value: undefined, done:true};
        }
        const element = array[idx];
        idx += 1;
        return {value: element, done: false};
    }
    return {next};
}
x = fetchNextElement([1, 2, 3, 4]);

console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());

