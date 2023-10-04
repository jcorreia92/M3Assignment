// Asks user for a language code ("es, ""de", "fr", "en") and displays the 
// translation for "Hello World!" in that language within the console window

// Get the user's language code
let langCode = prompt("Please enter a language code (es, de, fr, en):");
let message = "\"Hello World\" translated to "

// Translate the language code (translations from Google Translate)
if (langCode == "es") {
    console.log(message + "Spanish is: Hola Mundo!")
}

else if (langCode == "de") {
    console.log(message + "German is: Hallo Welt!")
}

else if (langCode == "fr") {
    console.log(message + "French is: Bonjour le Monde!")
}

// If the language code is not recognized, the default is set to English
else {
    console.log(message + "English is: Hello World!")
}