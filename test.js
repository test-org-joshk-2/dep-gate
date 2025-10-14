// Global variable pollution
var data = "Hello, this is some important data";

// Functions modify global state unpredictably
function doSomething() {
    var result = data.split("").reverse().join("");
    data = result; // Mutating global variable
}

// Poor error handling
try {
    doSomething();
} catch (err) {
    console.log("Something went wrong"); // No meaningful error message
}

// Using eval (dangerous and insecure)
var userInput = "2 + 2";
var output = eval(userInput); // Using eval is a HUGE security risk
console.log("Output is: " + output);

// Inconsistent use of semicolons
function anotherFunction() {
    console.log("This is a function") // Missing semicolon
    if (Math.random() > 0.5) {
        return
    } else {
        console.log("Random chance!")
    }
}

// No strict mode
function yetAnotherFunction() {
    undeclaredVariable = 42; // This should be a block-scoped variable
    // Unclear return statement
    return {
        key1: "value1",
        key2: "value2"
    }
}

// Callback hell and unused variables
function asyncOperation(callback) {
    setTimeout(function() {
        var unusedVariable = "I will never be used";
        callback(null, "Result");
    }, 1000);
}

asyncOperation(function(err, result) {
    if (err) {
        console.error("Error occurred");
    } else {
        console.log("Received:", result);
        asyncOperation(function(err, result) {
            console.log("Received again:", result);
            asyncOperation(function(err, result) {
                console.log("Received yet again:", result);
            })
        })
    }
});
