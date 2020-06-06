/* global moment */

// When the page loads, grab and display all of our chirps
$.get("/api/all", function (data) {
  console.log("jquery get");
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].chirp + "</p>");
      row.append(
        "<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>"
      );

      $("#chirp-area").prepend(row);
    }
  }
});

// When user chirps (clicks addBtn)
$("#chirp-submit").on("click", function (event) {
  event.preventDefault();

  // Make a newChirp object, this is your req.body object api-route.js will use
  var newChirp = {
    author: $("#author").val().trim(),
    chirp: $("#chirp-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/chirps", newChirp)
    // On success, run the following code
    .then(function () {
      // this can all be replaced with a location reload and the GET route above will populate for dryer code, but this method displays the chirp instantly
      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.author + " chirped: </p>");
      row.append("<p>" + newChirp.chirp + "</p>");
      row.append(
        "<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>"
      );

      $("#chirp-area").prepend(row);
    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");
});
