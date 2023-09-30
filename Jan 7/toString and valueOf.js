var obj ={
    toString(){
    //     //by default it will return the [object Object]
    //     //but we can override the method to handle it
        return "JS is the new big thing";
    }

    // valueOf(){
    //     //bydefault it return the same object
    //     return 10;
    // }
}
console.log(obj.toString());