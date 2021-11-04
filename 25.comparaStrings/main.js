// Dadas duas variáveis primeiraString e segundaString concatene-as por ordem crescente de tamanho. Se as duas strings possuírem o mesmo tamanho, a segundaString deverá vir primeiro e depois a primeiraString.
// Atribua na variável resultado o valor da sua concatenação.
// Exemplo: se a primeiraString = "abacaxi" e a segundaString = "uva", o valor de resultado deverá ser "uvaabacaxi", porque o tamanho de uva é 3 e o de abacaxi é 7.
// Obs: Neste exercício, as variáveis primeiraString , segundaString e resultado já estão declaradas, você não precisa cria-las.

function comparaStrings(primeiraString, segundaString) {
  /*
   * Complete o código abaixo atribuindo na variável resultado
   * a concatenação das strings `primeiraString` e
   * `segundaString` de acordo com as regras do exercício
   */

  var resultado = "";

  if (primeiraString.length >= segundaString.length) {
    resultado = segundaString + primeiraString;
  } else {
    resultado = primeiraString + segundaString;
  }

  // não altere as linhas abaixo
  return console.log(resultado);
}

comparaStrings("abacaxi", "uva");
