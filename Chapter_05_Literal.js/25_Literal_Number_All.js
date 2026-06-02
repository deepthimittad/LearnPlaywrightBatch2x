// ============================================================
// JavaScript: Number Type - All Concepts
// Chapter 05 - Literals
// File: 25_Literal_Number_All.js
// ============================================================

// ------------------------------------------------------------
// 1. Creating Numbers
// ------------------------------------------------------------

// Integer literal
let count = 42;
console.log("1. Integer:", count);                 // 42

// Floating-point literal
let price = 19.99;
console.log("2. Float:", price);                   // 19.99

// Exponential notation
let large = 3.5e5;    // 3.5 * 10^5 = 350000
let small = 3.5e-5;   // 3.5 * 10^-5 = 0.000035
console.log("3. Large (3.5e5):", large);            // 350000
console.log("4. Small (3.5e-5):", small);           // 0.000035

// Hexadecimal (base 16) - starts with 0x or 0X
let hex = 0xFF;
console.log("5. Hexadecimal (0xFF):", hex);         // 255

// Octal (base 8) - starts with 0o or 0O
let octal = 0o77;
console.log("6. Octal (0o77):", octal);             // 63

// Binary (base 2) - starts with 0b or 0B
let binary = 0b1010;
console.log("7. Binary (0b1010):", binary);         // 10


// ------------------------------------------------------------
// 2. typeof Number
// ------------------------------------------------------------
console.log("\n--- typeof ---");
console.log("typeof 42       :", typeof 42);        // "number"
console.log("typeof 3.14     :", typeof 3.14);      // "number"
console.log("typeof NaN      :", typeof NaN);       // "number" (special!)
console.log("typeof Infinity :", typeof Infinity);  // "number"


// ------------------------------------------------------------
// 3. Special Number Values
// ------------------------------------------------------------
console.log("\n--- Special Values ---");

// Infinity
console.log("1 / 0           :", 1 / 0);           // Infinity
console.log("-1 / 0          :", -1 / 0);          // -Infinity

// NaN (Not a Number)
console.log("0 / 0           :", 0 / 0);           // NaN
console.log("'hello' * 2     :", "hello" * 2);     // NaN

// Checking for NaN
console.log("isNaN(NaN)      :", isNaN(NaN));       // true
console.log("isNaN('abc')    :", isNaN("abc"));     // true
console.log("isNaN(42)       :", isNaN(42));        // false

// Number.isNaN (ES6 - stricter)
console.log("Number.isNaN('abc'):", Number.isNaN("abc")); // false (doesn't coerce)


// ------------------------------------------------------------
// 4. Number Methods & Properties
// ------------------------------------------------------------
console.log("\n--- Number Methods ---");

let num = 123.456;

console.log("num.toFixed(2)  :", num.toFixed(2));     // "123.46"
console.log("num.toPrecision(4):", num.toPrecision(4)); // "123.5"
console.log("num.toString()  :", num.toString());     // "123.456"
console.log("num.toString(16):", num.toString(16));   // "7b.74bc6a7ef9db"

// Number object static methods
console.log("Number.parseInt('42px'):", Number.parseInt("42px"));    // 42
console.log("Number.parseFloat('3.14abc'):", Number.parseFloat("3.14abc")); // 3.14
console.log("Number.isInteger(42)   :", Number.isInteger(42));     // true
console.log("Number.isInteger(42.5) :", Number.isInteger(42.5));     // false


// ------------------------------------------------------------
// 5. Math Object - Common Operations
// ------------------------------------------------------------
console.log("\n--- Math Object ---");

console.log("Math.PI         :", Math.PI);           // 3.14159...
console.log("Math.round(4.5) :", Math.round(4.5));    // 5
console.log("Math.ceil(4.1)  :", Math.ceil(4.1));     // 5
console.log("Math.floor(4.9) :", Math.floor(4.9));    // 4
console.log("Math.abs(-10)   :", Math.abs(-10));      // 10
console.log("Math.max(1,5,3) :", Math.max(1, 5, 3));  // 5
console.log("Math.min(1,5,3) :", Math.min(1, 5, 3));  // 1
console.log("Math.pow(2, 3)  :", Math.pow(2, 3));      // 8
console.log("Math.sqrt(16)   :", Math.sqrt(16));      // 4
console.log("Math.random()   :", Math.random());       // 0 to <1

// Generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random 1-10     :", getRandomInt(1, 10));


// ------------------------------------------------------------
// 6. Precision Issues (Floating Point)
// ------------------------------------------------------------
console.log("\n--- Floating Point Precision ---");

console.log("0.1 + 0.2       :", 0.1 + 0.2);        // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false!

// Fix using toFixed or a small epsilon
let sum = 0.1 + 0.2;
console.log("Fixed sum       :", Number(sum.toFixed(2))); // 0.3


// ------------------------------------------------------------
// 7. BigInt (for very large integers - ES2020)
// ------------------------------------------------------------
console.log("\n--- BigInt ---");

let big = 9007199254740991n;  // 'n' suffix
let bigger = BigInt("123456789012345678901234567890");
console.log("BigInt          :", big);
console.log("Bigger BigInt   :", bigger);
console.log("typeof big      :", typeof big);          // "bigint"

// Cannot mix BigInt and Number directly
// console.log(big + 1);  // Error!
console.log("big + 1n        :", big + 1n);           // 9007199254740992n


// ------------------------------------------------------------
// 8. Practical Example: Shopping Cart Total
// ------------------------------------------------------------
console.log("\n--- Practical Example: Shopping Cart ---");

let cart = [
    { name: "Apple",  price: 1.20, qty: 3 },
    { name: "Bread",  price: 2.50, qty: 2 },
    { name: "Milk",   price: 1.99, qty: 1 }
];

let total = 0;
for (let item of cart) {
    total += item.price * item.qty;
}

console.log("Cart Total (raw):", total);                        // 9.19
console.log("Cart Total (fixed):", total.toFixed(2));           // "9.19"
