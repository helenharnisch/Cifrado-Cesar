# Cifrado César

## Crear una web que pida por medio de un prompt(), una frase al usuario y devuelva
el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro
de desplazamiento de 33 espacios hacia la derecha.

#### funccion cifradoCesar(): Por medio de un buclé do while que siempre ejecuta su cuerpo por lo menos una vez
y empieza a verificar si debería parar sólo después de la primera ejecución, a travez de un prompt()
pregunta al usuario una frase "si quiere cifrar ingrese, 1 y si quiere descifrar, ingrese 2".

Si responde 1, la funcion saltara a la function cipher().

Si responde 2, la function saltara a la function decipher().

De lo contrario saltara una alerta que ingrese una opcion valida.
La condicion aparece despues del cuerpo del buclé si responde espacio
vacido o respuesta no es igual a 1 o no es igual a 2.

function cipher(): Creamos una variable string donde por medio de un promp pregunta al usuario,
"ingresa una frase para cifrar".
Creamos un variable output igual a string vacío para ir almacenando los indices cifrados.

Los numeros de la tarjeta ingresados por el usuario van a ser recorridos por un for, luego
creamos la varible index para obtener el codigo ACII de las letras con un string.charCodeAt.
Aplicamos la formula para cifrar el index (algoritmo de Cifrado César (sumar indice + 33)),
y por String.fromCharCode pasar a letra el indice cifrado.

Sumamos variable output y index para obtener el resultado donde se visualiza a traves de un prompt.

function decipher(): Creamos una variable string donde por medio de un promp pregunta al usuario,
"ingresa una frase para descifrar".
Creamos un variable output igual a string vacío para ir almacenando los indices cifrados.

Los numeros de la tarjeta ingresados por el usuario van a ser recorridos por un for, luego
creamos la varible index para obtener el codigo ACII de las letras con un string.charCodeAt.
Aplicamos la formula para descifrar el index (algoritmo de Cifrado César (sumar indice - 33)),
y por String.fromCharCode pasar a letra el indice descifrado.

Sumamos variable output y index para obtener el resultado donde se visualiza a traves de un prompt.
