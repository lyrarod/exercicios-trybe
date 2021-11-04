const arrDeInteiros = [2, 3, 5, 8, 10];
// const arrDeInteiros = [100, 200, 401];

function tripleTheChances(chances) {
  let arrMultiplicadoPor3 = [];

  for (let i = 0; i < chances.length; i++) {
    arrMultiplicadoPor3.push(chances[i] * 3);
  }

  //Versão utilizando forEach
  // chances.forEach((chance) => arrMultiplicadoPor3.push(chance * 3));

  //Versão utilizando map
  // chances.map((chance) => arrMultiplicadoPor3.push(chance * 3));

  return arrMultiplicadoPor3;
}

console.log(tripleTheChances(arrDeInteiros));
