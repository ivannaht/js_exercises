function fizzBuzz(num) {
    for (let num = 0; num <= 46; num++) {
        if (num % 3 === 0 && num % 5 === 0)
            return 'FizzBuzz';
        else if (num % 3 === 0)
            return 'Fizz';
        else if (num % 5 === 0)
            return 'Buzz';
        else
            return num;
    }
}

const output = fizzBuzz;
console.log(output);