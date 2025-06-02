/*
 * Lab 15 - jQuery AJAX example
 * Author: Jennifer Vallecillo
 * Date: 2025-06-02
 */

$(document).ready(function() {
  // When button is clicked
  $("#activate").click(function() {
      // Clear previous output
      $("#output").empty();

      // Example API: Yes or No API
      $.ajax({
          url: "https://yesno.wtf/api",
          type: "GET",
          dataType: "json",
          success: function(data) {
              console.log("API data:", data);

              // Show the answer and an image from the API response
              const answer = data.answer; // "yes" or "no"
              const imageUrl = data.image;

              $("#output").html(`
                  <p><strong>Answer:</strong> ${answer}</p>
                  <img src="${imageUrl}" alt="${answer}" />
              `);
          },
          error: function(jqXHR, textStatus, errorThrown) {
              console.error("AJAX error:", textStatus, errorThrown);
              $("#output").text("Sorry, something went wrong with the API request.");
          }
      });
  });
});
