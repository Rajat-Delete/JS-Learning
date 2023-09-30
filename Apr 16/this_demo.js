let iphone ={
    name: "iphone 13",
    price: "100000",
    desc: "The Brand new Iphone 13",
    rating: "4.8",

    display(){
        console.log("first calling site",this);
    }
}

let macbook ={
    name: "Macbook Pro",
    price: "125000",
    desc: "The Brand new Macbook Pro M2",
    rating: "4.9",

    display(){
        console.log("second calling site",this);
    }
}

iphone.display();//here iphone is the calling site that's why iphone object is getting displayed.
macbook.display();//here macbook is the calling site that's why macbook object is getting displayed.


function fun(){
    console.log(this);
}

fun();








