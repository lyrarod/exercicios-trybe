function vezesLetraAparece(frase, letra) {
  frase = frase.toLowerCase();
  letra = letra.toLowerCase();

  let letraRepetida = 0;

  for (let index = 0; index < frase.length; index++) {
    if (frase[index] === letra) {
      letraRepetida += 1;
    }
  }
  return letraRepetida;
}

console.log(vezesLetraAparece("The Lord of The Rings", "o"));
