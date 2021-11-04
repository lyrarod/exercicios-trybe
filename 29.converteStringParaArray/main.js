// Neste exercício, você deve retonar o array na variável resultado com todas as letras da string na variável frase.
// Exemplo: se o valor da variável frase for "Xau Brigado!", a variável resultado tem que retonar ["X", "a", "u", " ", "B", "r", "i", "g", "a", "d", "o", "!"].

function converteStringParaArray(frase) {
  /*
   * Complete o código abaixo atribuindo na variável resultado
   * o valor de acordo com as regras do exercício
   */

  var resultado = [];
  // escreva aqui seu código:

  for (let i = 0; i < frase.length; i++) {
    resultado.push(frase[i]);
  }

  // não altere as linhas abaixo
  return console.log(resultado);
}

converteStringParaArray("Xau Brigado!");
