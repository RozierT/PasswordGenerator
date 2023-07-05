// Assignment Code
// Variable declarations
var generateBtn = document.querySelector("#generate");

var chosenChar = [];
var passLength = 10;

var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var symbolArr = ['!','@','#','$','%','^','&','*','(',')','+','=','~','`','<','>','?','/'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var validInput = userInput();
  var passwordText = document.querySelector("#password");
  
  if (validInput){
    var newPassword = generatePassword();
    passwordText.value = newPassword; 
} else {
  passwordText.value = "";
}
}

// create prompts to collect user preferences on password
function userInput(){
  chosenChar = [];
  passLength = parseInt(window.prompt("Choose a password length between 8-128 characters"));
  if (isNaN(passLength) || passLength < 8 || passLength > 128){
    alert("Password length must be btween 8-128 characters");
    return false
  }

  if (window.confirm("Use Uppercase Letters?")) {
    chosenChar = chosenChar.concat(uppercaseArr);
  }
  
  if (window.confirm("Use Lowercase Letters?")) {
    chosenChar = chosenChar.concat(lowercaseArr);
  }
  
  if (window.confirm("Use Numbers?")) {
    chosenChar = chosenChar.concat(numberArr);
  }
  
  if (window.confirm("Use Symbols?")) {
    chosenChar = chosenChar.concat(symbolArr);
  }
  return true
  }

function generatePassword(){
 var password = "";
 for(var i= 0; i < passLength; i++) {
  var randomChar = Math.floor(Math.random() * chosenChar.length);
  password = password + chosenChar[randomChar];
 }
 return password
}



