function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
 var numerosMayoresADiez = 0;
 array.forEach(element => {
  if(element > 10){
    numerosMayoresADiez++;
  }
 });
 return numerosMayoresADiez; 
}

module.exports = contarElementosMayoresA10;
