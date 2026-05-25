/**
 * ============================================================
 * JavaScript Identifiers - Comprehensive Guide
 * ============================================================
 * 
 * An identifier is a name given to a variable, function, class,
 * or any other user-defined item in JavaScript.
 * 
 * Rules for Naming Identifiers:
 * 1. Must begin with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
 * 2. Subsequent characters can be letters, digits (0-9), underscores, or dollar signs
 * 3. Cannot use reserved keywords (e.g., let, const, function, class)
 * 4. Identifiers are case-sensitive (myVar and myvar are different)
 * 5. Cannot contain spaces or hyphens (-)
 */

// ============================================================
// SECTION 1: camelCase
// Convention: first word lowercase, subsequent words capitalized
// Usage: variables, functions, methods
// ============================================================

// Variables
let firstName = "John";
let lastName = "Doe";
let totalAmount = 1500;
let isUserActive = true;
let employeeRecordCount = 42;

// Functions
function calculateTotalPrice(quantity, unitPrice) {
    return quantity * unitPrice;
}

function getUserDetailsById(userId) {
    return { id: userId, name: "John" };
}

function updateCustomerEmailAddress(newEmail) {
    console.log("Email updated to:", newEmail);
}

// ============================================================
// SECTION 2: PascalCase
// Convention: Every word starts with a capital letter
// Usage: class names, constructor functions, React components, enums
// ============================================================

// Classes
class UserAccount {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

class OrderProcessingSystem {
    processOrder() {
        console.log("Processing order...");
    }
}

// Constructor Functions
function PersonDetails(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// React Components (if using React)
// function UserProfileCard() { return <div>Profile</div>; }
// class LoginForm extends React.Component { }

// ============================================================
// SECTION 3: snake_case
// Convention: all lowercase with underscores between words
// Usage: database fields, JSON keys, Python-style in JS (less common)
// Note: Valid in JS but not the community standard
// ============================================================

// Variables
const user_name = "johndoe";
const email_address = "john@example.com";
const order_total = 99.99;
const shipping_address_line_1 = "123 Main St";

// Functions
function get_user_data(userId) {
    console.log("Fetching data for user:", userId);
}

function update_order_status_by_id(orderId, newStatus) {
    console.log(`Order ${orderId} status: ${newStatus}`);
}

// Database-style field names
const databaseRecord = {
    user_id: 101,
    first_name: "Alice",
    last_name: "Smith",
    created_at: "2024-01-15"
};

// ============================================================
// SECTION 4: UPPER_SNAKE_CASE (SCREAMING_SNAKE_CASE)
// Convention: all uppercase with underscores between words
// Usage: constants, configuration values, environment variables
// ============================================================

// Application Constants
const MAX_LOGIN_ATTEMPTS = 5;
const PI_VALUE = 3.141592653589793;
const EULER_NUMBER = 2.71828;

// API and Configuration
const API_BASE_URL = "https://api.example.com/v1";
const API_TIMEOUT_MS = 30000;
const API_RETRY_COUNT = 3;

// Database
const DATABASE_CONNECTION_STRING = "postgresql://localhost:5432/mydb";
const DEFAULT_PAGE_SIZE = 20;

// Feature Flags
const ENABLE_BETA_FEATURES = false;
const DEBUG_MODE_ENABLED = true;

// ============================================================
// SECTION 5: kebab-case (dash-case / hyphen-case)
// Convention: all lowercase with hyphens between words
// IMPORTANT: NOT VALID for JavaScript identifiers!
// Usage: CSS classes, HTML attributes, file names, URL paths
// ============================================================

// INVALID - This would cause a SyntaxError:
// const my-variable = 10;        // ERROR!
// function my-function() {}      // ERROR!
// class my-class {}              // ERROR!

// Valid alternatives in JS:
const myVariable = 10;            // Use camelCase instead
const myFunction = () => { };      // Use camelCase instead
class MyClass { }                  // Use PascalCase instead

// Where kebab-case IS used (not as JS identifiers):
const cssClassName = "main-container";           // CSS class
const cssId = "user-profile-header";           // CSS id
const fileName = "user-profile-data.json";       // File naming
const urlSlug = "/product-detail-page";          // URL slug
const htmlAttribute = "data-user-status";      // HTML data attributes

// ============================================================
// SECTION 6: Hungarian Notation (Legacy)
// Convention: Prefix indicates data type
// Status: Discouraged in modern JavaScript
// Reason: TypeScript and modern IDEs make prefixes redundant
// ============================================================

// String
const strName = "Alice";
const strEmail = "alice@example.com";

// Number
const nCount = 10;
const nTotalPrice = 150.50;
const iIndex = 0;              // i for integer

// Boolean
const bIsActive = true;
const bHasPermission = false;

// Array
const arrUsers = ["John", "Jane"];
const arrProductIds = [1, 2, 3];

// Object
const objUser = { name: "Bob", age: 25 };
const objConfig = { debug: true, env: "prod" };

// Function
const fnCallback = () => console.log("Done");

// ============================================================
// SECTION 7: Single Letter & Short Identifiers
// Convention: Very short names for specific contexts
// Usage: loop iterators, mathematical variables, callbacks
// ============================================================

// Loop iterators (standard convention)
for (let i = 0; i < 10; i++) {        // i = index
    console.log(i);
}

for (let j = 0; j < 5; j++) {         // j = secondary index
    for (let k = 0; k < 3; k++) {     // k = tertiary index
        console.log(i, j, k);
    }
}

// Iterating arrays
const items = ["a", "b", "c"];
items.forEach((e, idx) => {           // e = element, idx = index
    console.log(e, idx);
});

// Mathematical context
function calculateCircleArea(r) {      // r = radius
    return PI_VALUE * r * r;
}

// Callbacks
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);   // n = number
const evens = numbers.filter(x => x % 2 === 0); // x = item

// ============================================================
// SECTION 8: Special Characters in Identifiers
// JavaScript allows $ and _ at the beginning and anywhere in identifiers
// ============================================================

// Dollar sign ($) - commonly used with jQuery and DOM elements
const $button = document.querySelector("button");
const $userForm = "form-element";
const _privateVar = "hidden";

// Underscore (_) - commonly used for private/internal variables
const _internalCounter = 0;
const _cache = new Map();

// Double underscore (__) - sometimes used for system/private variables
const __filename = "current-file.js";   // Actually a Node.js global!
const __dirname = "/project/src";       // Actually a Node.js global!

// ============================================================
// SECTION 9: Invalid Identifier Examples (DO NOT USE)
// These will cause SyntaxError if uncommented
// ============================================================

// const 1stPlace = "Gold";           // Cannot start with digit
// const first-name = "John";         // Hyphens not allowed
// const first name = "John";         // Spaces not allowed
// const var = 10;                    // Reserved keyword
// const function = () => {};         // Reserved keyword
// const class = "Math";              // Reserved keyword
// const return = 42;                 // Reserved keyword
// const @username = "john";          // @ not allowed (except in private fields #)

// ============================================================
// SECTION 10: Best Practices Summary
// ============================================================

/*
 1. Use camelCase for variables and functions
    ✅ const firstName = "John";
    ✅ function getUserData() {}

 2. Use PascalCase for classes and constructors
    ✅ class UserProfile {}
    ✅ function ShoppingCart() {}

 3. Use UPPER_SNAKE_CASE for true constants
    ✅ const MAX_FILE_SIZE = 5242880;
    ✅ const API_KEY = "abc123";

 4. Use descriptive names - avoid single letters except in loops
    ✅ const numberOfActiveUsers = 42;
    ❌ const n = 42;        // Not clear outside of loop context

 5. Use boolean variable names that read like questions
    ✅ const isLoggedIn = true;
    ✅ const hasPermission = false;
    ✅ const canEdit = true;

 6. Avoid Hungarian notation in modern JS/TS projects
    ❌ const strName = "John";
    ✅ const name = "John";

 7. Avoid snake_case in JavaScript code (use camelCase)
    ❌ const user_name = "John";
    ✅ const userName = "John";

 8. Never use kebab-case for JS identifiers (SyntaxError!)
    ❌ const user-name = "John";  // ERROR
    ✅ const userName = "John";

 9. Be consistent within your project - pick one style and stick to it

10. Use _ prefix for private/internal variables (convention)
    ✅ const _internalState = {};
*/

// ============================================================
// SECTION 11: Quick Reference Examples
// ============================================================

// Variable Declarations
let userAge = 25;                              // camelCase
const MAX_RETRY_COUNT = 3;                     // UPPER_SNAKE_CASE
const user_email = "test@test.com";            // snake_case (valid but avoid)

// Function Declarations
function fetchUserOrders() { }                 // camelCase
function processPaymentTransaction() { }       // descriptive camelCase

// Class Declarations
class PaymentGateway { }                       // PascalCase
class UserAuthenticationService { }            // descriptive PascalCase

// Object Properties
const appConfig = {
    apiBaseUrl: "https://api.example.com",    // camelCase
    max_connections: 100,                      // snake_case in object (JSON style)
    VERSION: "2.0.0"                         // UPPER in object (rare)
};

// ============================================================
// Console Output Examples
// ============================================================

console.log("=== camelCase Examples ===");
console.log("Name:", firstName, lastName);
console.log("Total:", calculateTotalPrice(5, 100));

console.log("\n=== PascalCase Examples ===");
const user = new UserAccount("jdoe", "jdoe@example.com");
console.log("User:", user);

console.log("\n=== snake_case Examples ===");
console.log("User:", user_name, email_address);

console.log("\n=== UPPER_SNAKE_CASE Examples ===");
console.log("Max Attempts:", MAX_LOGIN_ATTEMPTS);
console.log("API URL:", API_BASE_URL);

console.log("\n=== Invalid (commented out to prevent errors) ===");
console.log("See SECTION 9 for invalid identifier examples");
