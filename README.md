# Random-Password-Generator
It dynamically generates a secure password based on user preferences such as including lowercase letters, uppercase letters, numbers, special characters, and specifying password length. The workflow ensures flexibility and user input validation for a seamless experience.
Workflow
Retrieve User Input:

The script starts by capturing user preferences from HTML elements (lowercase, uppercase, numbers, specialChars, and passwordLength) using document.getElementById().
Character Pool Initialization:

Predefined character sets for lowercase letters, uppercase letters, numbers, and special characters are stored in respective variables.
Generate Password:

When the user clicks the "Generate Password" button:
The script checks which character sets (checkboxes) are selected.
Selected character sets are concatenated into a single pool of allowed characters.
Validation:

If no character set is selected, the script displays a message prompting the user to choose at least one option.
If the password length is not set or is 0, a message prompts the user to specify a valid length.
Random Character Selection:

A for loop runs for the specified password length.
Each iteration randomly picks a character from the allowed character pool and appends it to the password string.
Output:

The generated password is displayed in the passwordResult element.
If any validation fails, appropriate error messages are shown.
Features
Ensures strong password generation with customizable options.
Validates user input for a smooth experience.
Provides meaningful feedback for invalid configurations.
Simple yet secure logic to ensure a high-quality random password.
