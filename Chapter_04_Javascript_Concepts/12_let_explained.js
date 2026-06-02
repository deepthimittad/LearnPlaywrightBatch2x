//let can be reassign but cannot be redeclared
/*
let retrycount =0;
retrycount = retrycount + 1;
retrycount = retrycount + 2;
console.log("Retry Attempt:", retrycount);

//let cannot be redeclared

let retrycount= 1;
console.log(retrycount);
*/


let teststatus = "pending";

if (teststatus === "pending");
{
    let executiontime = 1200;
    console.log("Inside block :", executiontime);
}