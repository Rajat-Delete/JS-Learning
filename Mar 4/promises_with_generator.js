function fetchDataFromUrl(url){
    return new Promise(function cb(resolve,reject){
        console.log("wait2")
        console.log("Starting downloading from ",url);
        setTimeout(function (){
            let content="ABCDEF";
            resolve(content);
            console.log("content downloaded")
        },1000);
        
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

function doAfterRecieving(value){
    let future = iter.next(value);
    console.log("future is:",future);
    if(!future.done){
        future.value.then(doAfterRecieving);
    }
}

function* steps(){
    const downloadedData = yield fetchDataFromUrl('www.xyz.com');
    console.log("downloaded data is:",downloadedData);
    const fileWritten = yield savedatatoFile(downloadedData);
    console.log("file written is:",fileWritten);
    const uploadResponse = yield uploadFiletoUrl(fileWritten, 'www.drive.com');
    console.log("Upload response",uploadResponse);
    return uploadResponse;
}

const iter = steps();
const future = iter.next();
for(let i=0;i<100000000000;i++){

}
console.log("wait1")
future.value.then(doAfterRecieving);
