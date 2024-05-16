function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if(numero % numero === 0 && numero / 1 === numero){
    return true;
  }else{
    return false;
  }
}
console.log(esNumeroPrimo(2))
module.exports = esNumeroPrimo;
