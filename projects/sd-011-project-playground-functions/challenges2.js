// Desafio 10
// para o entendimento desse desafio precisei comparar o código de colegas no slack
// https://trybecourse.slack.com/archives/C01PLFW7347/p1617330837144600
// https://github.com/tryber/sd-011-project-playground-functions/pull/168/files
// vendo o codigo do guilheme pereira no github, ficou muito claro o entendimento desse desafio
function techList(tech, name) {
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

// Desafio 11
// https://learnersbucket.com/examples/javascript/how-to-format-phone-number-in-javascript/
// para divinuir a complexidade do meu código, comparei com de colegas no github
// https://github.com/tryber/sd-011-project-playground-functions/pull/160/files
function more3(numberArray, x) {
  let counts = 0;
  for (let i = 0; i <= numberArray.length; i += 1) {
    if (numberArray[i] === x) {
      counts += 1;
    }
  }
  return counts;
}

function byNineNumber(numberArray) {
  for (let i of numberArray) {
    if (i < 0 || i > 9 || more3(numberArray, i) >= 3) {
      return false;
    }
  }
}

function generatePhoneNumber(numberArray) {
  if (numberArray.length !== 11) {
    return `${'Array com tamanho incorreto.'}`;
  }
  if (byNineNumber(numberArray) === false) {
    return `${'não é possível gerar um número de telefone com esses valores'}`;
  }
  let cleaned = `${(numberArray)}`.replace(/\D/g, ''); // Filter only numbers from the input
  let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/); // Check if the input is of correct length
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
}

// Desafio 12
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// para diminuir a complexidade do meu código,comparei com o codigo do colega vitor cardoso
// https://github.com/tryber/sd-011-project-playground-functions/pull/77/files
function triangleCheck(lineA, lineB, lineC) {
  let lines1 = Math.abs(lineA + lineB);
  let lines2 = Math.abs(lineA - lineB);
  let value = false;
  if (lineC < lines1 && lineC > lines2) {
    value = true;
  }
  return value;
}

// Desafio 13
// https://www.youtube.com/watch?v=pfkkdzeyx6U&ab_channel=AllThingsJavaScript%2CLLC
function hydrate(drinks) {
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