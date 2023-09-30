var teacher="Sanket"; // this will be getting global scope
function fun(){ //global scope
    console.log(teacher);//this will give undefined as there is declaration inside the function
    // console.log(content);//this will give error as content is used before declaration.
    var teacher="Madhvi"; //function scope
    let content="JS"; // block scope
    if(content === "JS"){
        let hours = "120+"; //block scope
        console.log(content,hours);
    }
}
console.log(teacher);
console.log(content);