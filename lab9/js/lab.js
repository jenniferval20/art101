
/*
    lab.js – This simple JavaScript/jQuery script uses buttons to modify some elements on the page

    Requirements: jQuery must be loaded for this script to work.

    Author: Jennifer Vallecillo
    Date: May 12, 2025
*/

// This function ensures the page is fully loaded before running the script
$(document).ready(function() {
  // Add a button to the Challenge section
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");

  // Add a button to the Problems section
  $("#problems").append("<button id='button-problems'>Make Special</button>");

  // Add a button to the Results section
  $("#results").append("<button id='button-results'>Make Special</button>");

  // Click event listener for the Challenge section
  $("#button-challenge").click(function() {
      $("#challenge").toggleClass("special");
  });

  // Click event listener for the Problems section
  $("#button-problems").click(function() {
      $("#problems").toggleClass("special");
  });

  // Click event listener for the Results section
  $("#button-results").click(function() {
      $("#results").toggleClass("special");
  });
});
