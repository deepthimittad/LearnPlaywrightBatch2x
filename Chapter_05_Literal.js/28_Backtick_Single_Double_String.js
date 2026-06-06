// 28_Backtick_Single_Double_String.js
// This file explains the differences between Single Quotes, Double Quotes, and Backticks (Template Literals) in JavaScript

// ============================================================================
// 1. SINGLE QUOTES ('...')
// ============================================================================
// - Used to define a string literal.
// - You must escape single quotes inside with a backslash (\').
// - You can freely use double quotes inside without escaping.

let singleQuoteString = 'Hello, World!';
let singleWithDouble = 'She said, "Hello!"'; // Double quotes inside single quotes - no escaping needed
let singleWithEscaped = 'It\'s a sunny day'; // Single quote inside single quotes - must escape

console.log("--- Single Quotes ---");
console.log(singleQuoteString);
console.log(singleWithDouble);
console.log(singleWithEscaped);


// ============================================================================
// 2. DOUBLE QUOTES ("...")
// ============================================================================
// - Also used to define a string literal.
// - Behavior is almost identical to single quotes.
// - You must escape double quotes inside with a backslash (\").
// - You can freely use single quotes inside without escaping.

let doubleQuoteString = "Hello, World!";
let doubleWithSingle = "It's a sunny day"; // Single quote inside double quotes - no escaping needed
let doubleWithEscaped = "She said, \"Hello!\""; // Double quote inside double quotes - must escape

console.log("\n--- Double Quotes ---");
console.log(doubleQuoteString);
console.log(doubleWithSingle);
console.log(doubleWithEscaped);


// ============================================================================
// 3. BACKTICKS / TEMPLATE LITERALS (`...`)
// ============================================================================
// - Introduced in ES6 (ECMAScript 2015).
// - Allow STRING INTERPOLATION: embedding variables or expressions using ${expression}.
// - Allow MULTI-LINE strings without using \n or concatenation.
// - Allow TAGGED TEMPLATES for advanced string processing.

let name = "Mittad";
let age = 25;

// String Interpolation
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("\n--- Backticks (Template Literals) ---");
console.log("Interpolation:", greeting);

// Multi-line String
let multiLine = `This is line one.
This is line two.
This is line three.`;
console.log("\nMulti-line:");
console.log(multiLine);

// Expression evaluation inside ${}
let sum = `The sum of 10 and 20 is ${10 + 20}`;
console.log("\nExpression:", sum);


// ============================================================================
// COMPARISON SUMMARY
// ============================================================================
console.log("\n--- Comparison Summary ---");

let text1 = 'Single';
let text2 = "Double";
let text3 = `Backtick`;

console.log("Single == Double:", text1 == text2); // false, different values
console.log("typeof same?:", typeof text1 === typeof text2); // true, both are 'string'

// All three produce the same primitive type: string
console.log("Type of single:", typeof text1);
console.log("Type of double:", typeof text2);
console.log("Type of backtick:", typeof text3);

// ============================================================================
// KEY DIFFERENCES AT A GLANCE
// ============================================================================
// | Feature                | Single ('') | Double ("") | Backtick (``)        |
// |------------------------|-------------|-------------|----------------------|
// | String value           | Yes         | Yes         | Yes                  |
// | Interpolation (${})    | No          | No          | Yes                  |
// | Multi-line             | No          | No          | Yes                  |
// | Escape own quote       | \'          | \"          | \` (rarely needed)   |
// | Tagged Templates       | No          | No          | Yes                  |
// ============================================================================
