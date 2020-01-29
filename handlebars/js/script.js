// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
$(document).ready(function() {
  var source = $("#entr#y-template").html();
  var template = Handlebars.compile(source);

  var context = {
    title: Handlebars,
    nome: "Giuseppe",
    cognome: "Arimatea",
    eta: "23"
  };
  var html = template(context);
  app.append(html);
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

//
// // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

});
