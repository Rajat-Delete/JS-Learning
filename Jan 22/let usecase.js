function fun(){
    for(var i=0;i<5;i++){
        //do something
    }
    console.log(i); // the issue with this code is that i is still accessible outside the for loop also, that is weird part
}


function gun(){
    //swap two elements
    if(x>y){
        var temp=x;
        x=y;
        y=temp;
    }
    console.log(temp); //now here also the temp will be available outside the if condition which is wrong.
}


//So both Let and Var has their own usecases.