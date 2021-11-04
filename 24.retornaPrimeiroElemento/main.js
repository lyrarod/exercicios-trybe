// Complete a código deste exercício verificando se a variável lista (que é um array) possui pelo menos um elemento.
// - Se sim, o valor da variável resultado deve ser igual ao primeiro elemento do array lista
// - Se não, o valor da variável resultado deve ser igual a "array vazio"

const lista = ["Marula", "Noni", "Pequi"];

function retornaPrimeiroElemento(lista) {
  /*
   * Complete o código atribuindo na variável `resultado`
   * o primeiro elemento do array `lista` se o array não estiver vazio,
   * ou a string "array vazio" se o array `lista` estiver vazio.
   */

  var resultado;

  resultado = lista.length > 0 ? lista[0] : "array vazio";

  return console.log(resultado);
}

retornaPrimeiroElemento(lista);
