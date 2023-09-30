function fetchData(url){
    return new Promise(function (resolve,reject){
        console.log("Downloading start from url",url);
        setTimeout(function processDownloading(){
            let data="Dummy Data";
            console.log("Download Completed");
            resolve(data);
            console.log("below resolve");
        },7000);
    });
}

console.log("Start");
let promiseObj=fetchData("skksnlnlknlf");
promiseObj.then(function fullFillHandler(value){
    console.log("Value is",value);
})
console.log("End");

/*
Output:

Start
Downloading Start from the url skksnlnlknlf
End
Download Completed
Value is Dummy Data

 */