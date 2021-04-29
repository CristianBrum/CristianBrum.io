// Desafio 1
// Para este desafio utilizei o que aprendi em aula.
function compareTrue(valorOne, ValorTwo) {
  return valorOne && ValorTwo;
}

// Desafio 2
// Para este desafio utilizei o que aprendi em aula.
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(SeparateWords) {
  return (SeparateWords.split(' '));
}

// Desafio 4
// Para este desafio utilizei o que aprendi em aula.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
function concatName(myArray) {
  return `${myArray[myArray.length - 1]}, ${myArray[0]}`;
}

// Desafio 5
// Para este desafio utilizei o que aprendi em aula.
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
// Para este desafio utilizei o que aprendi em aula.
// https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
function highestCount(listOfNumbers) {
  let count = 0;
  let highestNumber = Math.max.apply(null, listOfNumbers);
  for (let index = 0; index < listOfNumbers.length; index += 1) {
    if (listOfNumbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// Para este desafio utilizei o que aprendi em aula.
function fizzBug(divArray) {
  for (let index = 0; index < divArray.length; index += 1) {
    if (divArray[index] % 3 === 0) {
      divArray[index] = 'fizz';
    } else if (divArray[index] % 1 === 0) {
      divArray[index] = 'bug!';
    }
  }
  return divArray;
}

function fizzBuzz(divArray) {
  for (let index = 0; index < divArray.length; index += 1) {
    if (divArray[index] % 3 === 0 && divArray[index] % 5 === 0) {
      divArray[index] = 'fizzBuzz';
    } else if (divArray[index] % 5 === 0) {
      divArray[index] = 'buzz';
    }
  }
  divArray = fizzBug(divArray);
  return divArray;
}

// Desafio 9
// https://www.w3schools.com/jsref/jsref_replace.asp
function encode(encondeParam) {
  encondeParam = encondeParam.replace(/a/g, '1');
  encondeParam = encondeParam.replace(/e/g, '2');
  encondeParam = encondeParam.replace(/i/g, '3');
  encondeParam = encondeParam.replace(/o/g, '4');
  encondeParam = encondeParam.replace(/u/g, '5');
  return encondeParam;
}

function decode(decodeParam) {
  decodeParam = decodeParam.replace(/1/g, 'a');
  decodeParam = decodeParam.replace(/2/g, 'e');
  decodeParam = decodeParam.replace(/3/g, 'i');
  decodeParam = decodeParam.replace(/4/g, 'o');
  decodeParam = decodeParam.replace(/5/g, 'u');
  return decodeParam;
}
