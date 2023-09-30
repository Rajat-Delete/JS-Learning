x = Promise.resolve(11);
console.log(x);
y = x.then((v) => {console.log(v)})
console.log("what is .then returning ? ", y);