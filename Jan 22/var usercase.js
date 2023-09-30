//this will be also OK approach.
function fun(x){
    let i;
    if(x % 2 == 0){
        i = 0;
    }else{
        i = 1;
    }
}

//This will be a much cleaner approach
function gun(x){
    if(x % 2 == 0){
        var i=0;
    }else{
        var i=1;
    }
}

//so both code are ready to go but if there is something which is going to use in entire function then think of using Var.