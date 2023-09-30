//so we will see the sync nature of JS


//By sync nature, it means that JS code is going to run line by line,if there is a valid piece of ES code then JS is going to 
//wait there and post that it will run other code
console.log("Hiii");
for(let i=0;i<10000000000;i++){

}
console.log("Bye");