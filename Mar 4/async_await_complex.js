function fetchDataFromUrl(url){
    return new Promise(function cb(resolve,reject){
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

steps().then((value)=>{console.log("we have completed steps with ",value)});
console.log("outside");
for(let i=0;i<10000000;i++){

}
setTimeout(function fun(){console.log("Timer Completed")},4000);
console.log("for loop done");


/*
inside steps
wait2
Starting downloading from www.xyz.com
outside
for loop done
content downloaded
downloaded data is:
started writing data to file
Timer Completed
file written is:
Started writing to the url
File Upload completed
Upload response
we have completed steps with SUCCESS
*/