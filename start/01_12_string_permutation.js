// Write your code here
function getPermutations(string) {
  let total;
  for (let i = 1; i <= string.length; i++) {
    if (total == undefined) {
      total = i;
      continue;
    }
    total *= i;
  }
  return total;
}

function getPermutationsRecursive(string) {
  if (string.length === 1) {
    return 1;
  }
  return string.length * getPermutationsRecursive(string.slice(1));
}

console.log(getPermutations("hello"));
console.log(getPermutationsRecursive("hello"));