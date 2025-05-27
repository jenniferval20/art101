
/*
 * Author: Jennifer
 * Date: May 26, 2025
 * This script prints numbers 1 to 200 and outputs "Fizz", "Buzz", "Boom"
 */

function fizzBuzzBoom() {
  let outputStr = "";

  for (let i = 1; i <= 200; i++) {
      let str = "";

      if (i % 3 === 0) str += "Fizz";
      if (i % 5 === 0) str += "Buzz";
      if (i % 7 === 0) str += "Boom";

      if (str === "") str = i;

      outputStr += "<p>" + str + "</p>";
  }

  $("#output").html(outputStr);
}

$(document).ready(function () {
  fizzBuzzBoom();
});

