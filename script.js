// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
// 1 Prompt user for password criteria
//    -length should be 8-128 characters

// 2 Confirm whether symbols, numbers, uppercase, lowercase should be used

// 3 validate user preferences

// 4 generate password

// 5 display password on screen
  return "Password"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
