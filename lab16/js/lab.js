JavaScript
/*
* Author: Jennifer
* Created: June 3, 2025
* Lab 16: JSON and APIs
*/


function getComic() {
   $.ajax({
       url: "https://api.allorigins.win/get?url=https://xkcd.com/info.0.json",
       type: "GET",
       dataType: "json",
       success: function (response) {
           // Parse the JSON from the 'contents' string
           let comicObj = JSON.parse(response.contents);
           console.log(comicObj); // for debugging


           let comicHTML = `
               <h3>${comicObj.title}</h3>
               <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
               <p>${comicObj.alt}</p>
           `;
           $("#output").html(comicHTML);
       },
       error: function (jqXHR, textStatus, errorThrown) {
           console.log("Error:", textStatus, errorThrown);
       }
   });
}


$(document).ready(function () {
   getComic();
});
