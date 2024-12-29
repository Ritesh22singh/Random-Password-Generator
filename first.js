// Password Generator

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const specialChars = document.getElementById("specialChars");
const passwordLength = document.getElementById("passwordLength");
const generatePassword = document.getElementById("generatePassword");
const passwordResult = document.getElementById("passwordResult");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const specialCharsSet = "!@#$%^&*()_+-={}[]:;";

function generateRandomPassword() {
  let allowChars = "";
  let password = "";

  // Add selected character sets to the allowed pool
  if (lowercase.checked) allowChars += lowercaseChars;
  if (uppercase.checked) allowChars += uppercaseChars;
  if (numbers.checked) allowChars += numberChars;
  if (specialChars.checked) allowChars += specialCharsSet;

  // Validate that at least one checkbox is selected
  if (!allowChars) {
    passwordResult.textContent =
      "Please select at least one option to generate a password.";
    return;
  }
  if (passwordLength.value == 0) {
    passwordResult.textContent = `Please select length of the password`;
  } else {
    // Get the password length from the input
    const length = parseInt(passwordLength.value, 10); // Default length is 8 if not provided

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowChars.length);
      password += allowChars[randomIndex];
    }

    // Display the generated password
    passwordResult.textContent = `Generated Password: ${password}`;
  }

  // Generate the password
}
