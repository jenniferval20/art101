
/*
 * Lab 15 - AJAX
 * Author: Jennifer Vallecillo
 * Date: June 2, 2025
 */

$(document).ready(function () {
    console.log("Document is ready. jQuery loaded.");
  
    $("#activate").click(function () {
      console.log("Button clicked.");
  
      $("#output").empty();
  
      $.ajax({
        url: "https://yesno.wtf/api",
        type: "GET",
        dataType: "json",
        success: function(data) {
          console.log("AJAX success:", data);
  
          const answer = data.answer;
          const imageURL = data.image;
  
          $("#output").html(
            `<p><strong>Answer:</strong> ${answer}</p>
             <img src="${imageURL}" alt="${answer}" />`
          );
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.error("AJAX error:", textStatus, errorThrown);
          $("#output").text("Sorry, something went wrong with the API request.");
        }
      });
    });
  });
  