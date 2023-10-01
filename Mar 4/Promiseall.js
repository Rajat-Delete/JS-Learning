function downlaod(url,time){
    return new Promise(function cb(resolve,reject){
        console.log("Starting downloading from ",url);
        setTimeout(function (){
            let content="ABCDEF";
            resolve(content);
            console.log("content downloaded",url)
        },time);  
    })
}

const p1= downlaod("www.abc1.com",8000);
const p2= downlaod("www.abc2.com",2000);
const p3= downlaod("www.abc3.com",6000);
Promise.all([p1,p2,p3]).then((value)=>{
    console.log("All Promise got fulfilled with values",value);
})