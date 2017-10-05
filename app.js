//Cifrar y Descifrar con cifrado cesar
function cifradoCesar (){
     do{
       var answer = prompt("Si quiere  cifrar, ingresa: 1 y si quiere descifrar, ingresa: 2");
        if(answer != ""){
          if(answer == "1"){  //si responde 1, cifrar
            cipher();
          }else if (answer == "2"){  // si responde 2, decifrar
            decipher();
          }else {
            alert("Ingrese una opción valida");
          }
        }
     } while (answer == "" || (answer != "1" && answer != "2"));
}

function cipher(){

  var string = prompt("ingresa una frase para cifrar");  //Preguntar por frase a cifrar
  var output = "";  //string vacío para los índices cifrados

	for (var i = 0 ; i < string.length ; i++){  //recorrer string

    var index = string.charCodeAt(i);  //obtener codigo ASCII de los letras
    index = (((index - 65) + 33) % 26) + 65;  //formula para cifrar el índice
    index = String.fromCharCode(index); //pasar a letra el indice cifrado

    output = output + index;
		}

	return alert("Tu texto cifrado se ve así" + "  " + output);
}

function decipher(){

  var string = prompt("ingresa una frase para descifrar");  //Preguntar por frase a decifrar
  var output = "";  //string vacío para los índices decifrados

	for (var i = 0 ; i < string.length ; i++){  //recorrer string

    var index = string.charCodeAt(i);  //obtener codigo ASCII de los letras
    index = ((((index - 65) + 33) + 26) % 26) + 65;  //formula para decifrar el índice
    index = String.fromCharCode(index); //pasar a letra el indice decifrado

    output = output + index;
  }

	return alert("Tu texto descifrado se ve así" + "  " + output);
}

cifradoCesar();
