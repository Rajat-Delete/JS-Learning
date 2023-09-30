Promise.resolve("foo")
    .then(
        (string) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    string += "bar";
                    resolve(string);
                }, 1);
            }),
    )
    .then((string) => {
        setTimeout(() => {
            string += "baz";
            console.log(string); // foobarbaz
        }, 1);
        return string;
    })
    .then((string) => {
        console.log(
            "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
        );

        console.log(string); // foobar
    });

// Logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz