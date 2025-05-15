// lab.js - JavaScript for the Web
// Author: Jennifer Vallecillo
// Date: May 14

// This function generates a random slice of Lorem Ipsum text
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const min = 3;
    const max = 20;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    return text.slice(randStart, randStart + randLen);
}

// Click listener for button
$("#make-convo").click(function() {
    // Get new fake dialogue
    const newText = generateRandomText();

    // Append a new div with the dialogue to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
