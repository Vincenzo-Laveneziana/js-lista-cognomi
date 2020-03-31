//referenze

//chiedere all’utente il cognome
var tuoCognome = document.getElementById("tuo-cognome");
var list = document.getElementById("list");
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi", "Laveneziana"];
var btnCerca = document.getElementById("bottoneCerca");
tuoCognome.focus();

btnCerca.addEventListener("click", function(){

    //first letter uppercase
  var tuoCognomeUp = tuoCognome.value.charAt(0).toUpperCase() + tuoCognome.value.slice(1);

  //inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
  cognomi.push(tuoCognomeUp);
  console.log(cognomi);
  
  var items ="";

  //stampa la lista ordinata alfabeticamente
  cognomi.sort();
  console.log(cognomi);

  for (var i = 0; i < cognomi.length; i++) {
    items += "<li>" + cognomi[i] + "</li>";
    if(tuoCognomeUp == cognomi[i]){
      console.log("Il nuovo utente si trova alla posizione " + (i+1) + " della lista ordinata");
      document.getElementById("eccoti2").innerHTML = (i+1);
    }
  }

  //output elementi
  eccoti.className = "show";
  list.innerHTML= items;

  
  
  


});