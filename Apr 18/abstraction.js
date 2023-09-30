class Product{
    #name;
    #price;
    description;

    constructor(n,p,d){
        this.#name=n;
        this.#price=p;
        this.description=d;
    }
    display(){
        console.log(this.#name,this.#price,this.description);
    }

    set Name(n){
        if(typeof(n) !== "string"){
            console.log("Invalid Name Passed");
            return;
        }
        this.#name=n;
    }

    set Price(p){
        if(p<0){
            console.log("Invalid Name Passed");
            return p;
        }
    }

    get Name(){
        // console.log("here")
        return this.#name;
    }

}

const p=new Product("Bag",100,"A cool Bag");
p.Name="Iphone";
p.display();
console.log(p.Name);
console.log(p);
