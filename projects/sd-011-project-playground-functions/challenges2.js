const techList = (tech, name) => {
  tech = tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    tech[index] = {
      tech: tech[index],
      name,
    };
  }
  if (tech.length === 0) {
    tech = 'Vazio!';
  }
  return tech;
}

const more3 = (numberArray, x) => {
  let counts = 0;
  for (let i = 0; i <= numberArray.length; i += 1) {
    if (numberArray[i] === x) {
      counts += 1;
    }
  }
  return counts;
}

const byNineNumber = (numberArray) => {
  for (let i of numberArray) {
    if (i < 0 || i > 9 || more3(numberArray, i) >= 3) {
      return false;
    }
  }
}

const generatePhoneNumber = (numberArray) => {
  if (numberArray.length !== 11) {
    return `${'Array com tamanho incorreto.'}`;
  }
  if (byNineNumber(numberArray) === false) {
    return `${'não é possível gerar um número de telefone com esses valores'}`;
  }
  let cleaned = `${(numberArray)}`.replace(/\D/g, '');
  let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
}

const triangleCheck = (lineA, lineB, lineC) => {
  let lines1 = Math.abs(lineA + lineB);
  let lines2 = Math.abs(lineA - lineB);
  let value = false;
  if (lineC < lines1 && lineC > lines2) {
    value = true;
  }
  return value;
}

const hydrate = (drinks) => {
  let drinksReturn = /\d+/g;
  let cupsOfWater = 0;
  drinks = drinks.match(drinksReturn);
  for (let i = 0; i < drinks.length; i += 1) {
    cupsOfWater += Number(drinks[i]);
  }
  if (cupsOfWater === 1) {
    return `${cupsOfWater} copo de água`;
  }
  return `${cupsOfWater} copos de água`;
}
