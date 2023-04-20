// 1. prompt user for the password criteria
//      a. password length 8<128 characters
//      b. lowercase, uppercaes, numbers, special characters
// 2. validiate the input (make sure what the user inputs follows our criteria)
// 3. generate the password
// 4. display generated password onto the page



var characterLength = 8;
var choiceArr = [];

var specialArr = ['!','@','#','%','$','^','&','*','(',')','+','=','/','-',';',':'];
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var validPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if (validPrompts) {
        var newPass = generatePassword();
        passwordText.value = newPass;
    } else {
        passwordText.value = "";
    }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
    choiceArr = [];
    
    characterLength = parseInt(prompt("Choose a password length (type number from 8 - 128)"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Please type a number from 8 - 128 to set your password length!");
        return false;
    }

    if (confirm("Would you like lowercase letters in your password?")) {
        choiceArr = choiceArr.concat(lowerArr);
    }

    if (confirm("Would you like uppercase letters in your password?")) {
        choiceArr = choiceArr.concat(upperArr);
    }

    if (confirm("Would you like special characters in your password?")) {
        choiceArr = choiceArr.concat(specialArr);
    }

    if (confirm("Would you like numbers in your password?")) {
        choiceArr = choiceArr.concat(numberArr);
    }
}

