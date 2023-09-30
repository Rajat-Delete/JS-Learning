class Product {
    // name;
    // price;
    // description;

    constructor(n,p,d){
        console.log("Inside constructor")
        this.name=n;
        this.price=p;
        this.description=d;
        /*return 10; */ //If we return a primitive from constructor then there is no effect
        //return {}; //This is going to create impact as constrcutor also returns object. 
        return this; //If we don't return anything it is equivalent to saying return this;
    }

    display(){
    //print the object      
    }

}
const p = new Product("Bag",100,"A cool Bag");
console.log(p);