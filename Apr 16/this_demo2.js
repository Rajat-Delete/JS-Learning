let iphone={
    name:"Iphone 12",
    price:"100000",
    rating:"4.6",
    display: () => {
        console.log(this);
    } 
}

let macbook={
    name:"Macbook Pro",
    price:"150000",
    rating:"4.9",
     display() {
        console.log(this);
    }
}

iphone.display();// now for iphone this is no referring to the calling context
macbook.display();