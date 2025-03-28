// 1: Declare a variable age and check if it's 18 or more
let age = 25;
let isAdult = age >= 18; // true if age is 18 or more, false otherwise
console.log("Is adult:", isAdult);

// 2: Perform operations with x = 10 and y = 5
let x = 10;
let y = 5;

let addition = x + y; // Addition
let multiplication = x * y; // Multiplication
let modulus = x % y; // Modulus (remainder)

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

// 3: Check if a number n is even or odd
let n = 7; // Change this value to test different numbers
let isEven = n % 2 === 0; // true if even, false if odd
let result = isEven ? "Even" : "Odd";
console.log("Number is:", result);

// 4: Store numbers from 1 to 5 in an array using a loop
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log("Numbers array:", numbers);

// 5: Function to return the square of a number
function square(num) {
    return num * num;
}
console.log("Square of 4:", square(4));
