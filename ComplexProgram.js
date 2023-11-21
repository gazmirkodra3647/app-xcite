/*
Filename: ComplexProgram.js
Content: A complex program showcasing various concepts and techniques in JavaScript.
*/

// Global variables
let counter = 0;
const PI = Math.PI;

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Class representing a shape
class Shape {
  constructor() {
    this.color = "red";
  }

  // Method to calculate the area of the shape
  calculateArea() {
    return 0;
  }
}

// Class representing a circle, extending the Shape class
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Overridden method to calculate the area of the circle
  calculateArea() {
    return PI * this.radius * this.radius;
  }
}

// Class representing a rectangle, extending the Shape class
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // Overridden method to calculate the area of the rectangle
  calculateArea() {
    return this.width * this.height;
  }
}

// Function to generate Fibonacci series up to a given number
function generateFibonacciSeries(limit) {
  let series = [0, 1];
  for (let i = 2; i < limit; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
}

// Function to check if a number is a prime number
function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Event listener for button click
document.getElementById("myButton").addEventListener("click", function () {
  counter++;
  console.log("Button clicked " + counter + " times!");
});

// AJAX request using Fetch API
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error: " + error));

// Object destructuring
const { name, age, gender } = { name: "John", age: 25, gender: "Male" };

// Array destructuring
const [first, second, third] = [1, 2, 3];

// ES6 arrow function
const multiply = (a, b) => a * b;

// Async/await function
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: " + error);
  }
}

// Usage of regular expressions
const regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
if (regex.test("example@example.com")) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}

// Complex algorithm to find the greatest common divisor (GCD) of two numbers
function findGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
}

// Usage of Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (counter === 0) {
      reject("Counter is zero");
    } else {
      resolve("Counter is non-zero");
    }
  }, 2000);
});

// Utility function to format a string
function formatString(string, ...values) {
  return string.replace(/{(\d+)}/g, function (match, index) {
    return typeof values[index] !== "undefined" ? values[index] : match;
  });
}

// Usage of generator function
function* generateRandomNumbers() {
  while (true) {
    yield Math.random();
  }
}

// Example usage of the above functions and classes

const circle = new Circle(5);
console.log("Area of circle: " + circle.calculateArea());

const rectangle = new Rectangle(10, 20);
console.log("Area of rectangle: " + rectangle.calculateArea());

console.log("Factorial of 5: " + factorial(5));

console.log("Fibonacci series: ");
console.log(generateFibonacciSeries(10));

console.log("Is 7 a prime number? " + isPrimeNumber(7));

console.log("Name: " + name + ", Age: " + age + ", Gender: " + gender);

console.log("Array destructuring: " + first + ", " + second + ", " + third);

console.log("Multiply: " + multiply(2, 3));

fetchData();

console.log("GCD of 12 and 18: " + findGCD(12, 18));

promise
  .then((result) => console.log(result))
  .catch((error) => console.log("Error: " + error));

console.log(formatString("Hello, {0}! You are {1} years old.", name, age));

const randomNumbers = generateRandomNumbers();
console.log("Random number generator: ");
for (let i = 0; i < 5; i++) {
  console.log(randomNumbers.next().value);
}

// ... more complex code goes here ...

// ... and so on ...

// ... beyond 200 lines of code ...