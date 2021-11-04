// Escreva um código que imprima um quadrado de asteriscos onde:
// - a quantidade de asteriscos por linha é o valor da variável n
// - e a quantidade de linhas também é o valor da variável n
// Você deve usar o comando console.log() para escrever os asteriscos. Lembre-se que esse comando sempre adiciona uma quebra de linha após imprimir o valor que foi passado pra ele.

// Exemplos de saída:
// - quando o valor de n é 5
//   *****
//   *****
//   *****
//   *****
//   *****

// - quando o valor de n é 2
//   **
//   **

function imprimaQuadradoAsterisco(n) {
  /*
   * Escreva nas linhas a seguir um código que
   * imprima um quadrado de asteríscos
   * de altura e largura igual ao valor de n
   */

  for (var index = 0; index < n; index++) {
    var linhaDeAsteriscos = "";

    for (var linha = 0; linha < n; linha++) {
      linhaDeAsteriscos = linhaDeAsteriscos + "*";
    }

    console.log(linhaDeAsteriscos);
  }
}

imprimaQuadradoAsterisco(4);
