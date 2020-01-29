

$(document).ready( function () {
$('button').click(function () {
  var message = $('input').val();
  var source = $("#template").html();
  var template = Handlebars.compile(source);
  var context = {
    'classe': 'domanda',
    'text' : message,
    'time' : getTime()
  };
  var html = template(context);
  $('.app').append(html);
  $('input').val('');

  setTimeout(function () {
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

function getTime() {
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
