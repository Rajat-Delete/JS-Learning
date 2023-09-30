
//Write a function to fetch data from a url
//write a function to Save that data in a file and return the file name
//write a function to upload the file into a new url

function fetchDataFromUrl(url){
    return new Promise(function cb(resolve,reject){
        console.log("Starting downloading from ",url);
        setTimeout(function (){
            let content="ABCDEF";
            resolve(content);
            console.log("content downloaded")
        },5000);
        
    })
}
function savedatatoFile(content){
    return new Promise(function cb(resolve,reject){
        console.log("started writing data to file");
        setTimeout(function (){
            let filename="file.txt";
            resolve(filename);
        },4000)
    })
    
}

function uploadFiletoUrl(filename,url){
    return new Promise(function cb(resolve,reject){
        console.log("Started writing to the url",url);
        setTimeout(function (){
            console.log("File Upload completed");
            const response="SUCCESS";
            resolve(response);
        },2000);
    })
}
const y =fetchDataFromUrl("www.xyz.com");
z=y.then(
    function fullfillhandler(value){
        console.log("Now we are going to start saving the content");
        savedatatoFile(value)
});
z.then(
    function fullFillHandler(FileName){
        console.log("We are now going to upload the file",FileName);
        uploadFiletoUrl("www.uploaded.com",FileName);
});



