// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
$(document).ready(function (){
  var studente ={
    'nome': 'Stefano',
    'cognome': 'Riccio',
    'eta': 31
  }
  for (var key in studente) {
  console.log(studente[key]);
  }


  // - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome


  var studenti = [
    {
      'nome': 'Stefano',
      'cognome': 'Riccio',
      'eta': 31
    },
    {
      'nome': 'Marco',
      'cognome': 'Riccio',
      'eta': 30
    },
    {
      'nome': 'Giovanni',
      'cognome': 'Riccio',
      'eta': 32
    }
  ]
  // console.log(studenti[1]['eta']);

  for (var i = 0; i < studenti.length; i++) {
    var studenteSingolo = studenti[i]
    console.log(studenteSingolo.nome + ' ' + studenteSingolo.cognome);
  }

  // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
  var nuovoStudente = {
    'nome': prompt('Inserisci il tuo nome'),
    'cognome': prompt('inserisci il tuo cognome'),
    'eta': parseInt(prompt('inserisci la tua età'))
  }
  console.log(nuovoStudente);

  studenti.push(nuovoStudente);
  console.log(studenti);

  var source = document.getElementById("entry-template").innerHTML;
  var template = Handlebars.compile(source);

  var context = {
  'name': nuovoStudente.nome,
  'cognome': nuovoStudente.cognome
  };

  var html = template(context);
  
  $('.lista_studenti').append(context);
})
