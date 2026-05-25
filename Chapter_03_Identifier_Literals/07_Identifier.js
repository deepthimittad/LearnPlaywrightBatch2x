// Chapter 02: Identifiers - Different Naming Conventions
// This file demonstrates various naming conventions used in JavaScript.

// ============================================================
// 1. camelCase
// Commonly used for: variables, functions, methods
// ============================================================
const firstName = "John";
const lastName = "Doe";
const totalAmount = 1500;

function calculateTotalPrice(quantity, unitPrice) {
    return quantity * unitPrice;
}

// ============================================================
// 2. PascalCase
// Commonly used for: class names, constructor functions, React components
// ============================================================
class UserAccount {
    constructor(userName) {
        this.userName = userName;
    }
}

function PersonDetails(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// ============================================================
// 3. snake_case
// Commonly used for: variables, database fields, JSON keys
// JavaScript allows it, but it's less common than camelCase
// ============================================================
const user_name = "johndoe";
const email_address = "john@example.com";
const order_total = 99.99;

function get_user_data(userId) {
    console.log("Fetching data for user: " + userId);
}

// ============================================================
// 4. UPPER_SNAKE_CASE / SCREAMING_SNAKE_CASE
// Commonly used for: constants, environment variables, configuration
// ============================================================
const MAX_LOGIN_ATTEMPTS = 5;
const PI_VALUE = 3.14159;
const API_BASE_URL = "https://api.example.com/v1";
const DATABASE_CONNECTION_STRING = "postgresql://localhost:5432/mydb";

// ============================================================
// 5. kebab-case (also known as dash-case or hyphen-case)
// NOT valid for JavaScript variable/function names!
// Commonly used for: CSS class names, HTML attributes, file names, URL slugs
// ============================================================
// Invalid: const my-variable = 10; // Syntax Error
// Valid usage examples (not as JS identifiers):
const cssClassName = "main-container"; // use in CSS
const fileName = "user-profile-data.json"; // file naming
const routePath = "/user-dashboard/settings"; // URL routing

// ============================================================
// 6. Hungarian Notation (Legacy/Discouraged in modern JS)
// Prefixes indicate type. Not recommended for modern JavaScript.
// ============================================================
const strName = "Alice";     // str prefix for string
const nCount = 10;           // n prefix for number
const bIsActive = true;      // b prefix for boolean
const arrUsers = [];         // arr prefix for array
const objUser = {};          // obj prefix for object

// ============================================================
// Summary / Best Practices
// ============================================================
// - Use camelCase for variables and functions
// - Use PascalCase for classes and constructors
// - Use UPPER_SNAKE_CASE for constants
// - Avoid snake_case in most JavaScript code (use camelCase instead)
// - Never use kebab-case for JS identifiers (invalid syntax)
// - Avoid Hungarian Notation in modern codebases
// ============================================================

// Print examples
console.log("camelCase:", firstName, lastName, totalAmount);
console.log("PascalCase class:", new UserAccount("jdoe"));
console.log("snake_case:", user_name, email_address, order_total);
console.log("UPPER_SNAKE_CASE:", MAX_LOGIN_ATTEMPTS, PI_VALUE, API_BASE_URL);
