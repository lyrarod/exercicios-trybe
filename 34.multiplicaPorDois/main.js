// Neste exercício, você deve completar a função multiplicaPorDois. Essa função:
// - recebe como parâmetro um array chamado numeros
// - e deve retornar um array que contenha todos os elementos da variável numeros multiplicados por dois
// Por exemplo: Se o valor de numeros for [1, 2, 3, 4, 5], a função deve retornar o array [2, 4, 6, 8, 10]
// Dica:
// O comando push é utilizado para adicionar um novo elemento em um array.
// Exemplo: Se o valor de uma variável chamada variavelA for igual a [] (ou seja, um array vazio) e nos executarmos o comando variavelA.push(7), o valor de variavelA pasará a ser [7] (um array que contem o elemento 7)

const numArr = [1, 2, 3, 4, 5];

function multiplicaPorDois(numeros) {
  let myArray = [];

  for (let i = 0; i < numeros.length; i++) {
    myArray.push(numeros[i] * 2);
  }

  // numeros.forEach((n) => myArray.push(n * 2));
  // numeros.map((n) => myArray.push(n * 2));

  return console.log(myArray);
}

multiplicaPorDois(numArr);
