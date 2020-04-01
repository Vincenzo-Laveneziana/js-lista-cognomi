
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi", "Laveneziana"];

bottoneCerca.addEventListener("click",
  function(){
    //chiedere all’utente il cognome
    var tuoCognome = document.getElementById("tuo-cognome");
    console.log(tuoCognome);

    //rendo il cognome dell'ultente first letter uppercase
    var tuoCognomeUp = tuoCognome.charAt(0).toUpperCase() + tuoCognome.slice(1);

    if(cognomi.indexOf(tuoCognomeUp) < 0){

      cognomi.push(tuoCognomeUp);
      console.log(cognomi);

      //stampa la lista ordinata alfabeticamente
      cognomi.sort();
      console.log(cognomi);


      //scrivi anche la posizione della lista in cui  il nuovo utente si trova

      var elLista = document.getElementById("list");

      for( var i=0; i < cognomi.length; i++){

        var elementoLista = cognomi[i];

        var contenuto = elLista.innerHTML;

        var nuovoElemento = "<li>" + elementoLista + "</li>"
          elLista.innerHTML = contenuto + nuovoElemento;
        
        if(tuoCognomeUp == cognomi[i]){
          console.log("Il nuovo utente si trova alla posizione " + (i+1) + " della lista ordinata");
          document.getElementById("eccoti2").innerHTML = (i+1);
        }

      }

    eccoti.className = "show";

    } else{
      alert("cognome già inserito");
    }


  }
)


