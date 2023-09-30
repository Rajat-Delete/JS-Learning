let count=0;
let y=setInterval(function exec(){
    count++;
    console.log(count);
    if(count>15){
        clearInterval(y);
    }
},1000);


console.log(y);
//so the setInterval calls the callback function after every interval(Time)

//This is a kind of Infinite loop then how can we stop it
//So whenever we execute setTimeout we get a id in chrome console, so we can store that Id and call clear interval 
//In node this setInterval return type is object , so that's why it is possible that this feature runs differently in different runtime.
