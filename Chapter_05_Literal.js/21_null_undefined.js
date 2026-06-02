// ============================================================
// JavaScript: null vs undefined
// Chapter 05 - Literals
// ============================================================

// ------------------------------------------------------------
// 1. undefined
//    - A variable is declared but NOT assigned a value.
//    - JavaScript automatically sets it to 'undefined'.
// ------------------------------------------------------------
let notAssigned;
console.log("1. Uninitialized variable:", notAssigned);          // undefined
console.log("2. typeof notAssigned:", typeof notAssigned);     // "undefined"

// Another common source of undefined: missing function argument
function greet(name) {
    console.log("3. Missing argument 'name':", name);          // undefined
}
greet();

// Accessing a non-existent object property
let person = { firstName: "Deepthi" };
console.log("4. Missing property 'age':", person.age);           // undefined


// ------------------------------------------------------------
// 2. null
//    - An intentional assignment representing "no value" or "empty".
//    - The programmer explicitly sets it to 'null'.
// ------------------------------------------------------------
let emptyValue = null;
console.log("5. Explicitly set to null:", emptyValue);          // null
console.log("6. typeof null (JS bug):", typeof emptyValue);    // "object"

// Use null when you want to CLEAR a value intentionally
let user = "John";
user = null;  // deliberately removing the user reference
console.log("7. Cleared user:", user);                           // null


// ------------------------------------------------------------
// 3. Comparison
// ------------------------------------------------------------
console.log("\n--- Comparisons ---");
console.log("null == undefined  :", null == undefined);          // true  (loose equality)
console.log("null === undefined :", null === undefined);         // false (strict equality)
console.log("null == 0          :", null == 0);                 // false
console.log("undefined == 0     :", undefined == 0);            // false


// ------------------------------------------------------------
// 4. Practical Example
// ------------------------------------------------------------
console.log("\n--- Practical Example ---");

function findUser(id) {
    // Simulating a database lookup
    const database = {
        1: { name: "Alice", role: "Admin" },
        2: { name: "Bob", role: "User" }
    };

    const user = database[id];

    if (user === undefined) {
        console.log(`User with id ${id} does not exist (undefined).`);
        return null; // intentional "no user found"
    }

    return user;
}

let result1 = findUser(1);   // exists
let result2 = findUser(99);  // does not exist

console.log("Found user:", result1);      // { name: "Alice", role: "Admin" }
console.log("Not found  :", result2);     // null (intentionally set)


// ------------------------------------------------------------
// 5. Best Practice Check
// ------------------------------------------------------------
console.log("\n--- Best Practice: Check for both ---");

let value;
if (value == null) {
    console.log("Value is either null or undefined (loose check).");
}

value = null;
if (value == null) {
    console.log("Value is either null or undefined (loose check).");
}

// To distinguish specifically:
if (value === null) {
    console.log("Value is specifically null.");
}

if (value === undefined) {
    console.log("Value is specifically undefined.");
}
