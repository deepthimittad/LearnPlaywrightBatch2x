var a = 10;

//var is a function scoped

console.log(a); // Global Scope

function b() {
    console.log("Hello, how are you.....!");
    a = 40;     // Local Scope
    console.log(a);

    if (true) {
        a = 80;
        console.log(a);
    }
}
b();


