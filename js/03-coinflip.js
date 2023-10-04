// Prompts the user to guess the result of a coin flip and compares their guess
// to a randomly generated coin flip, displaying the result in an alert box.

// Generate a random number [0, 1) which is rounded to 0 or 1
let coinFlip = Math.round(Math.random())

// Get the user's guess
let choice = prompt("Heads or Tails! Please enter h for heads or t for tails:")
while (choice != "h" && choice != "t") {
    choice = prompt("Invalid choice. Please enter either h or t:")
}

// Compare the user's guess to the coin flip
if (coinFlip == 0) {
    if (choice == "h") {
        alert("The flip was heads and you chose heads...you win!")
    }

    else {
        alert("The flip was heads but you chose tails...you lose!")
    }
}

else {
    if (choice == "h") {
        alert("The flip was tails but you chose heads...you lose!")
    }

    else {
        alert("The flip was tails and you chose tails...you win!")
    }
}