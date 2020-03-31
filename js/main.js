/**
 * chiedere all’utente il cognome
 * inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
 * stampa la lista ordinata alfabeticamente
 * scrivi anche la posizione della lista in cui  il nuovo utente si trova
 */

 //chiedere all’utente il cognome
 var tuoCognome = prompt("inserisci il tuo cognome");
 console.log(tuoCognome);

 //rendo il cognome dell'ultente first letter uppercase
 var tuoCognomeUp = tuoCognome.charAt(0).toUpperCase() + tuoCognome.slice(1);

 //inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
 var cognomi = [" Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi", "Laveneziana"];

 cognomi.push(tuoCognomeUp);
 console.log(cognomi);

 //stampa la lista ordinata alfabeticamente
 cognomi.sort();
 console.log(cognomi);

 //scrivi anche la posizione della lista in cui  il nuovo utente si trova

 for( var i=0; i < cognomi.length; i++){
  if(tuoCognomeUp == cognomi[i]){
    console.log("Il nuovo utente si trova nella posizione " + (i+1) + " della lista ordinata");
  }
 }
