// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  
}
// ask user if they want to include character types
// store their answer for later
//if inputs equal at least one type, then the input is valid
// generate prompt that matches criteria

// generate password function
function generatePassword(){
  const characterTypes = ['lowercase', 'uppercase', 'numeric', 'special']  
  const passwordLength =prompt('choose a length of at least 8 characters and no more than 128 characters');
  let newString = '';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialChar= '!@#$%^&*()_-+=<>?{}[]|:;,.';
  const numeric = '0123456789';
  let  temp = '';

  function generateChar(characterType){
    const num = (Math.floor(Math.random() * characterType.length))  
      return characterType[num]
  }

    function confirmCharacterTypes (){
      for(let i = 0; i < characterTypes.length;i++){
        const isCharacterType = confirm(`Do you want ${characterTypes[i]} characters in your password ?`)
        if(isCharacterType){
          switch (characterTypes[i]) {
            case "lowercase":
                  newString += generateChar(lowercase);
                  temp += lowercase
                break;
            case "uppercase":
              newString += generateChar(uppercase);
              temp += uppercase
                break;
            case "numeric":
              newString += generateChar(numeric);
              temp += numeric
                  break;
            case "special":
              newString += generateChar(specialChar);
              temp += specialChar
                  break;
            default:
                break;
          }        
        }          
      }    
    }

  if(passwordLength < 8){
     confirm('must be at least 8 characters')
      return
    }else if(passwordLength > 128){
    confirm('must be no longer than 128 characters')
    return
  }else{
    console.log(passwordLength)
      confirmCharacterTypes()
    if(newString.length){
      for(let i = newString.length-1; i < passwordLength-1; i++){
        newString += generateChar(temp)
      }
      return newString
     }else {
       confirm(`you must choose at least one character type`)
     }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
