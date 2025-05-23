/**
 * Author: jennifer
 * Date: May 22, 2025
 * Lab 12 - Conditionals
 */

// This function sorts the name into a "house" based on its length
function sortingHat(str) {
  let length = str.length;
  let mod = length % 4;

  if (mod === 0) {
    return "Hufflepuff";
  } else if (mod === 1) {
    return "Ravenclaw";
  } else if (mod === 2) {
    return "Gryffindor";
  } else if (mod === 3) {
    return "Slytherin";
  }
}

// Add click listener
$("#button").click(function () {
  let name = $("#input").val();
  let house = sortingHat(name);
  $("#output").html("<p>The Sorting Hat has sorted you into: <strong>" + house + "</strong></p>");
});

