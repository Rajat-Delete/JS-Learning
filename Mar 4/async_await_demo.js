function fetchDataFromUrl(url){
    return new Promise(function cb(resolve,reject){
        console.log("wait2")
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

async function steps(){
    console.log("inside steps");
    const downloadedData = await fetchDataFromUrl('www.xyz.com');
    console.log("downloaded data is:",downloadedData);
    const fileWritten = await savedatatoFile(downloadedData);
    console.log("file written is:",fileWritten);
    const uploadResponse = await uploadFiletoUrl(fileWritten, 'www.drive.com');
    console.log("Upload response",uploadResponse);
    return uploadResponse;
}

async function steps1(){
    console.log("inside steps");
    const downloadedData = await 10;
    console.log("downloaded data is:",downloadedData);
    const fileWritten = await savedatatoFile(downloadedData);
    console.log("file written is:",fileWritten);
    const uploadResponse = await uploadFiletoUrl(fileWritten, 'www.drive.com');
    console.log("Upload response",uploadResponse);
    return uploadResponse;
}

steps();
//steps1(); 
console.log("before promise check");