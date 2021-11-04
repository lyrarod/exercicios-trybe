// Neste exercício, você possui uma variável n e deverá escrever um código para encontrar todos os números primos entre 0 e n.
// Você deve criar uma array chamada numerosPrimos que contenha todos os números primos encontrados.
// O que é um número primo?
// Números primos são os números naturais que têm apenas dois divisores: o 1 e ele mesmo.
// Exemplos:
// 1) 2 tem apenas os divisores 1 e 2, portanto 2 é um número primo.
// 2) 17 tem apenas os divisores 1 e 17, portanto 17 é um número primo.
// 3) 10 tem os divisores 1, 2, 5 e 10, portanto 10 não é um número primo.
// Obs: a variável n já existe, você não deve cria-la, e o valor dela sempre será maior que 2

function buscaNumeroPrimos(n) {
  /*
   * Nas linhas a seguir, escreva um código que encontre todos
   * os números primos entre 0 e n e coloque-os num array chamado
   * `numerosPrimos`(você deve criar esse array)
   */

  var numerosPrimos = [2, 3];

  for (var numeroAtual = 4; numeroAtual < n; numeroAtual++) {
    var quantidadeDeDivisores = 0;

    for (var numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor++) {
      if (numeroAtual % numeroMenor == 0) {
        quantidadeDeDivisores++;
      }
    }

    if (quantidadeDeDivisores == 0) {
      numerosPrimos.push(numeroAtual);
    }
  }

  return console.log(numerosPrimos);

  // var numerosPrimos = [];

  // for (let i = 2; i < n; i++) {
  //   let qtdDivisor = 0;

  //   for (let j = 2; j < i; j++) {
  //     if (i % j === 0) qtdDivisor++;
  //   }

  //   if (qtdDivisor === 0) numerosPrimos.push(i);
  // }

  // return console.log(numerosPrimos);
}

buscaNumeroPrimos(20);
