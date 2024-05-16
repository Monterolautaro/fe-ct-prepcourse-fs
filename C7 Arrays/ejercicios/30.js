function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
var numerosVistos = new Set();

for(var i = 0; i < numeros.length; i++){
  if (numerosVistos.has(numeros[i])) {
    return numeros[i]
  }else{
    numerosVistos.add(numeros[i]);
  }
}
}
module.exports = encontrarElementoRepetido;