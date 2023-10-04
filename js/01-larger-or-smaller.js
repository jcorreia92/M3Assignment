// Asks user for 2 integers and displays the larger within the browser window

// Get the user's numbers
let num1 = parseInt(prompt("Please enter the first number:"));
let num2 = parseInt(prompt("Please enter the second number:"));

// Compare the numbers
if (num1 > num2) {
    document.write(num1 + " is larger than " + num2);
}

else if (num2 > num1) {
    document.write(num2 + " is larger than " + num1);
}

// If the numbers are equal
else {
    document.write("The numbers are equal");
}