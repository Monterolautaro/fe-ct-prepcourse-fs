const suma = require("../../C5 Fundamentos Javascript/ejercicios/19");

function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  var n = numeros.length + 1;
  var sumaTotal = (n *(n +1) / 2)

  var sumaReal = 0;

  for( var i = 0; i < numeros.length; i++){
    sumaReal += numeros[i];
  }
  var numeroFaltante = sumaTotal - sumaReal;

  return numeroFaltante;

}

module.exports = encontrarNumeroFaltante;