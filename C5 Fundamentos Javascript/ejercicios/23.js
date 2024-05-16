function obtenerResto(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:
  if(typeof x === "number" && typeof y === "number"){
    return x % y;
  }else{
    return 'Dato incorrecto';
  }
}

module.exports = obtenerResto;