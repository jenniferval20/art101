// lab.js - JavaScript for the Web
// Author: Jennifer Vallecillo
// Date: May 19

//Sorts the characters of a string in alphabetical order.
function sortString(inputString){
    // Convert string  to array, sort, and convert back to string
    return  inputString.split('').sort().join('');
}

//Click listener for button
$("#submit").click (function(){
//Get Value of input field
const userName =  $("#user-name").val();

//Sort it
const userNameSorted = sortString(userName);

// Append a new div to our output div
$("output").html('div class="text"><p>' + userNameSorted + '</p></div>');
});