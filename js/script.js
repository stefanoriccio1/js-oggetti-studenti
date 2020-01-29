// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
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
console.log(studenti[1]['eta']);


  for (var key in studenti[i]) {
   if (key == 'nome'){
     console.log('nome');
   }
   else if(key == 'cognome'){
     console.log('cognome');
   }
  }

// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
