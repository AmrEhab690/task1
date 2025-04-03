function twoParameterFunction() {
    if (arguments.length !== 2) {
        throw new Error("Function must accept exactly 2 parameters.");
    }
    console.log("Accepted numbers: " + arguments[0] + "," + arguments[1]);
}

twoParameterFunction(5, 14);

function addNumbers() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
            throw new Error("All parameters must be numbers.");
        }
        sum += arguments[i];
    }

    return sum;
}

console.log(addNumbers(5, 10, 15));