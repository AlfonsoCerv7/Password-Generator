// Assignment code here
function passwordLength() { // function to get password length
  var length = parseInt(window.prompt("How many characters do you want your password to be?"));
  console.log(length)
  if(Number.isNaN(length) ){
  window.alert("Please enter a number!")
  return passwordLength();
  }
  
  
  else if (length < 8) {
    window.alert("Password must be at least 8 characters in length!")
    return passwordLength();


  }
  else if (length > 128) {
    window.alert("Password cannot be longer than 128 characters!")
    return passwordLength();
  }
  else if (length >= 8 && length <= 128) {
    return length;
  }
}

function uppercase() { // function to get uppercase variable
  var upperY = window.confirm("Would you like an uppercase in your password?(click cancel for 'no')")
  if (upperY == true) {
    return true;

  }
  else {
    return false;
  }
}

function lowercase() { // function to get lowercase variable
  var lowerY = window.confirm("Would you like a lowercase in your password?(click cancel for 'no')")
  if (lowerY == true) {
    return true;

  }
  else {
    return false;
  }
}

function specialChar(){
  var specchar = window.confirm("Would you like a lowercase in your password?(click cancel for 'no')")
  if (specchar ==true) {
    return true;

  }
  else {
    return false;
  }
}

function numeric(){
  var numb = window.confirm("Would you like a lowercase in your password?(click cancel for 'no')")
  if (numb == true) {
    return true;

  }
  else {
    return false;
  }
}


function generatePassword() {
  length = passwordLength();
  upper = uppercase();
  lower = lowercase();
  number = numeric();
  special = specialChar();
  window.alert("Length is " + length + " Uppercase is " + upper + " Lowercase is " + lower + " numeric is " + number + " Specialchar is " + special);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);