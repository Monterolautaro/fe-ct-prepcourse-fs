function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
 if(array.length < 1){
  return true;
 }
  for(var i = 0; i < array.length; i++){
  if(array[i] !== array[0]){
    return false;
  }
}
return true;
}
console.log(todosIguales([1, 1, 1, 1, 2]))
module.exports = todosIguales;
