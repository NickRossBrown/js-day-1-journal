import { journal } from './journal';
import { getTeaser } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var entry = $('#entry').val();
    var output = journal(entry);
    var wordOutput = getTeaser(entry);
    $('#solution').append("<h3>" + wordOutput + "</h3>");
    $('#solution').append("<li>" + output + "</li>");
  });
});
