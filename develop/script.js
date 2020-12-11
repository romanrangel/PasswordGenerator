// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.getElementById("generate").onclick = function () {
  var userInput = prompt("How many characters?");
  if (userInput >=8 && userInput <=128) {
    return true;
  }
  if(userInput <8 && userInput >128)
    alert("Please input between 8 and 128 characters!");
    return false;
  };

document.getElementById("generate").addEventListener("click", function () {
var userInput1= prompt("Would you like special characters in your password? Type: yes or no")
if (userInput === "yes"); {
    return true;
  }
  if(userInput === "no");
  alert("special characters disabled")
    return false;
})

  document.getElementById("generate").addEventListener("click", function () {
    var userInput2= prompt("Would you like uppercase letters in your password? Type: Yes or No")
if (userInput === "yes"); {
    return true;
  }
  if(userInput === "no");
    return false;
})

document.getElementById("generate").addEventListener("click", function () {
var userInput3= prompt("Would you like lowercase letters in your password? Type: Yes or No")
if (userInput === "yes"); {
    return true;
  }
  if(userInput === "no");
    return false;
})

document.getElementById("generate").addEventListener("click", function () {
var userInput4= prompt("Would you like numbers in your password? Type: Yes or No")
if (userInput === "yes"); {
    return true;
  }
  if(userInput === "no");
    return false;
})

document.getElementById("generate").addEventListener("click", function () {
var userInput5= prompt("Would you like special characters in your password? Type: Yes or No")
if (userInput === "yes"); {
    return true;
  }
  if(userInput === "no");
    return false;
})


  function getRandomLower() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
const symbols = '!@#$%^&*(){}[]=<>/,.'
return symbols[Math.floor(Math.random() * symbols.length)];
}