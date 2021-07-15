     var entrada = prompt("agrega tu frase");
     var salida = document.getElementById("salida");
     var texto = document.createTextNode(entrada);
     var btnCap = document.getElementById("btn");
     salida.appendChild(texto);

     if(salida === ""){
         alert("no hay nada");
     }

