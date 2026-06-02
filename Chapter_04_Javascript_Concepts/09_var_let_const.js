var v= 10;
let l = 40;
const c = 3.15;

// var can be redeclared and reassign

var browser = "chrome";
var browser = "mozilla"; // redeclared
browser = "edge";        // reassigned

console.log(browser);  

//for, functions

var testcase = ["login", "signup", "logout"];
for(var i = 0; i < testcase.length; i++)
{
    console.log("Running tests:", testcase[i]);
}

console.log("Loop counter leaked outside", i);