import { journal } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var entry = $('#entry').val().split("");
    var output = journal(entry);
    $('#solution').append("<li>" + output + "</li>");
  });
});
