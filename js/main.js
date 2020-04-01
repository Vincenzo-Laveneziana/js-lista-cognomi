//referenze
var i;

//chiedere all’utente il cognome
var tuoCognome = document.getElementById("tuo-cognome");
var list = document.getElementById("list");
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi", "Laveneziana"];
tuoCognome.focus();

bottoneCerca.addEventListener("click", function(){
  
   //first letter uppercase
  var tuoCognomeUp = tuoCognome.value.charAt(0).toUpperCase() + tuoCognome.value.slice(1);
  var boolean = false;
  
  for ( i = 0; i < cognomi.length; i++ ){
   
    var controllo = cognomi[i];
    console.log(controllo);

    if (tuoCognomeUp == controllo){
      boolean = true;
    }
  }

  if ( boolean == true){
    alert("Cognome già esistente");
  } else if (boolean == false){
      
    //inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
    cognomi.push(tuoCognomeUp);
    cognomi.sort();
    console.log(cognomi);

    var elementi ="";


    for (i = 0; i < cognomi.length; i++) {
      elementi += "<li>" + cognomi[i] + "</li>";

      if(tuoCognomeUp == cognomi[i]){
        console.log("Il nuovo utente si trova alla posizione " + (i+1) + " della lista ordinata");
        document.getElementById("eccoti2").innerHTML = (i+1);
      }
    }
    //output elementi
    eccoti.className = "show";
    list.innerHTML= elementi;

    tuoCognome.value = "";
    tuoCognome.valueUp = "";
    tuoCognome.focus();
  }
    
  

  

});

bottoneReset.addEventListener("click",
  function(){
    window.location.reload(); 
  }
)

