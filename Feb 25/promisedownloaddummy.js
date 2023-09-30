function fetch(url){
    console.log("Started fetching the content from the url",url);
    return new Promise(function exec(res,rej){
        setTimeout(function p(){
            console.log("Downlaod completed from the url");
            const content="ABCDEF";
            res(content);
        },5000)
    })
}

y=fetch("www.xyz.com");
console.log(y)