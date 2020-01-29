

$(document).ready( function () {
$('button').click(function () {
  var message = $('input').val(); // prendiamo tramite val l input
  var source = $("#template").html(); // selezioniamo template
  var template = Handlebars.compile(source); //handlebars
  var context = { //aggiungiamo classe testo e orario
    'classe': 'domanda',
    'text' : message,
    'time' : getTime()
  };
  var html = template(context); // creiamo variabile che contiene la classe mess e data
  $('.app').append(html); // li aggiungiamo ad app
  $('input').val(''); // ripristianiamo l input

  setTimeout(function () { // stessa cosa ma per la risposta con un setTimeout di 3 secondi
    var anni = '100!'
    var source =$("#template").html();
    var template = Handlebars.compile(source);
    var context = {
      'classe': 'risposta',
      'text' : anni,
      'time' : getTime()
    };
    var html = template(context);
    $('.app').append(html);
  }, 3000);
});

function getTime() { // funzione data
var data = new Date();
var hours = addZero(data.getHours());
var minutes = addZero(data.getMinutes());
var time = hours +':'+ minutes;
return time;
}
function addZero(number) {
if(number < 10) {
  number = '0' + number;
}
return number;
}

});
