function fetchDataFromUrl(url){
    return new Promise(function cb(resolve,reject){
         console.log("Starting downloading from ",url);
        setTimeout(function (){
            let content="ABCDEF";
            reject(content);
            console.log("content downloaded")
        },1000);
        
    })
}
function savedatatoFile(content){
    return new Promise(function cb(resolve,reject){
        console.log("started writing data to file");
        setTimeout(function (){
            let filename="file.txt";
            reject(filename);
        },4000)
    })
    
}

function uploadFiletoUrl(filename,url){
    return new Promise(function cb(resolve,reject){
        console.log("Started writing to the url",url);
        setTimeout(function (){
            console.log("File Upload completed");
            const response="SUCCESS";
            reject(response);
        },2000);
    })
}


fetchDataFromUrl('www.google.com').then(
    function fullFillHandler1(value){
        console.log("Downloading done with the following value",value);
        return savedatatoFile(value);
    }
).then(
    function fullFillHandler2(value){
        console.log("savedatatoFile done with the following value",value);
        return savedatatoFile(value);
    }
).then(
    function fullFillHandler2(value){
        console.log("uploadFiletoUrl done with the following value",value);
        return savedatatoFile(value);
    }
).catch(function f(error){
    console.log("rejected the promise with value",error);
}).finally(function fun(){
    console.log("executed finally");
})
