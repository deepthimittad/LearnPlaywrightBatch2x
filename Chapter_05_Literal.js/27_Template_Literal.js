let firstname = 'mittad';
let fullname = `Hey ${firstname} deepthi`;
console.log(fullname);



let env = "staging";
env = "prod";
let userId = "320665";
userId = "1234";
const apiurl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiurl);