function fun(task){
    setTimeout(function exec(){
        console.log(task ,"is completed");
    },2000);
}

fun();
 