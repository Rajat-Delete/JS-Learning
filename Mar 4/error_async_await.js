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

async function steps(){
    try {
        console.log("inside steps");
        const downloadedData = await fetchDataFromUrl('www.xyz.com');
        return downloadedData;
    } catch (error) {
        console.log("we have handled throwed error",error);
    } finally{
        console.log("we have handled everything in finally");
    }
    
}

steps();
