// Complete o código deste exercício, atribuindo na variável resultado, o resultado da comparação da variável elementoA, que é um número, com as seguintes condições:

// Se o valor da variável elementoA for um número par, atribua a variável resultado com o valor "par";
// Se o valor da variável elementoA não for par, atribua a variável resultado o valor com o valor "ímpar".

// Obs: Neste exercício, todas as variáveis necessárias já estão declaradas, você não precisa cria-las, apenas completar o código. Preencha a partir da linha 38.

function verificaParOuImpar(elementoA) {
  /*
   * Atribua um dos seguintes valores na variável `resultado`
   *
   * par: se o valor da variável `elementoA` for par;
   * impar: se o valor da variável `elementoA` for ímpar;
   */

  var resultado;
  // Não altere a linha acima e responda na linha abaixo

  if (elementoA % 2 === 0) {
    resultado = "par";
  } else {
    resultado = "ímpar";
  }

  // Não altere a linha abaixo
  return resultado;
}

console.log(verificaParOuImpar(10));
