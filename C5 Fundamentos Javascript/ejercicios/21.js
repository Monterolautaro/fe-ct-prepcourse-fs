function multiplica(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la multiplicacion de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 50
  // 5, 5 ---> 25
  // Tu código:
  if(typeof x === "number" && typeof y === "number"){
    return x * y;
  }else{
    return 'Dato incorrecto';
  }
}
module.exports = multiplica;