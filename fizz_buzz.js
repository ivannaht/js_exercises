let input = prompt("Please enter a random number");

function fizzBuzz(input) {
    for (let num = 0; num <= input; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
        } else if (num % 3 === 0) {
            console.log("Fizz");
        } else if (num % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(num);
        }
    }
}

fizzBuzz(input);