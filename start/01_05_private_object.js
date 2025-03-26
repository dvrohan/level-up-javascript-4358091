// Write your code here

const username = Symbol("username");
const password = Symbol("password")

const user = {
  [username]: "user",
  [password]: "pass",
  age: 10
}

console.log(user.age);
console.log(user.username);