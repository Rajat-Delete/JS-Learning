function Product(n,p,d){
    this.name=n;
    this.price=p;
    this.description=d;

    // this.display=function() {
    //     console.log(this);
    // }
    return this;
}

const p = Product("Bag",100,"A cool Bag");
// p.display();
console.log(p); 