// Assigns a score to a user based on the score entered into the browser prompt
// and prints the result to the console.

// Get the user's score and check that it is valid
let score = parseFloat(prompt("Please enter a score between 1 and 100:"))
if (score < 1 || score > 100 || isNaN(score)) {
    score = parseFloat(prompt("Invalid score. Please enter a score between 1 and 100:"))
}

// Identify the user's score and print the result to the console log
if (score > 90) {
    console.log("You received an A")
}

else if (score > 80) {
    console.log("You received a B")
}

else if (score > 70) {
    console.log("You received a C")
}

else if (score > 60) {
    console.log("You received a D")
}

else {
    console.log("You received an F")
}