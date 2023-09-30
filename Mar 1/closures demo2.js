function process(){
    let i=0;
    function innerProcess1(){
        i+=1;
    }
    function innerProcess2(){
        i+=1;
    }
    return {innerProcess1,innerProcess2};
}
y=process();
y.innerProcess1();
console.log(y);