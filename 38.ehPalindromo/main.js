// Neste exercício, você precisa criar uma função que recebe uma string como primeiro e único parâmetro e que:

// Retorne SIM, SOU UM PALÍNDROMO caso a string informada é um palíndromo;
// Retorne INFELIZMENTE, NÃO SOU UM PALÍNDROMO caso a string informada não seja um palíndromo.
// Palíndromo são palavras ou frases que podem ser lidas da esquerda para a direita ou da direita para a esquerda. Para o nosso exercício, só iremos usar palavras, como por exemplo:

// mamam;
// mirim;
// rapar;

function ehPalindromo(palavra) {
  /*
   * Complete o código abaixo para verificar se
   * varíavel `palavra` é um palíndromo ou não.
   * Caso seja um palíndromo, a função deve retornar
   * `SIM, SOU UM PALÍNDROMO`, se não é um palídromo
   * a função deve retornar
   * `INFELIZMENTE, NÃO SOU UM PALÍNDROMO`
   */
  // escreva aqui seu código:

  var palindromo = "";

  for (var index = palavra.length - 1; index >= 0; index--) {
    palindromo += palavra[index];
  }

  if (palavra == palindromo) {
    return console.log("SIM, SOU UM PALÍNDROMO");
  } else {
    return console.log("INFELIZMENTE, NÃO SOU UM PALÍNDROMO");
  }

  // let palindromo = "";

  // for (let i = palavra.length - 1; i >= 0; i--) {
  //   palindromo += palavra[i];
  // }

  // if (palavra === palindromo) {
  //   return console.log("SIM, SOU UM PALÍNDROMO");
  // } else {
  //   return console.log("INFELIZMENTE, NÃO SOU UM PALÍNDROMO");
  // }
}

ehPalindromo("ovo");
