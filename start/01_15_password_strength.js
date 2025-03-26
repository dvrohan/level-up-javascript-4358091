// Write your code here
function isStrongPassword(password) {
  let oneLowerCase = /(?=.*[a-z])/;
  let oneUpperCase = /(?=.*[A-Z])/;
  let oneNumber = /(?=.*[0-9])/;
  let oneSpecialCharacter = /(?=.*[!@#$%^&*])/;
  let minimumEightCharacter = /(?=.{8,})/;
  let isValid = oneLowerCase.test(password) &&
    oneUpperCase.test(password) &&
    oneNumber.test(password) &&
    oneSpecialCharacter.test(password) &&
    minimumEightCharacter.test(password);

  return isValid ? "Your password in valid" : "Your password is invalid";
}

console.log(isStrongPassword("dad"));
console.log(isStrongPassword("Abcd123*"));