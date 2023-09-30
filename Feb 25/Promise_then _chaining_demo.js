function fetch(url) {
    console.log("Started fetching the content from the url", url);
    return new Promise(function exec(res, rej) {
        setTimeout(function p() {
            console.log("Downlaod completed from the url");
            const content = "ABCDEF";
            res(content);
        }, 5000)
    })
}

fetch("www.xyz.com").then(
    function fullfillhandler(value){
        console.log("value is",value);
        return "a new string";
    }
).then(
    function fullFillHandler(value){
        console.log("Value of above .then chaining method is:",value);
    }
)
