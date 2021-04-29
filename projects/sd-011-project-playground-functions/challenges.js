const compareTrue = (valorOne, ValorTwo) => {return valorOne && ValorTwo;}

const calcArea = (base, height) => {return (base * height) / 2;}

const splitSentence = (SeparateWords) => {return (SeparateWords.split(' '));}

const concatName = (myArray) => {return `${myArray[myArray.length - 1]}, ${myArray[0]}`;}

const footballPoints = (wins, ties) => {
  let points = wins * 3 + ties * 1;
  return points;
}

const highestCount = (listOfNumbers) => {
  let count = 0;
  let highestNumber = Math.max.apply(null, listOfNumbers);
  for (let index = 0; index < listOfNumbers.length; index += 1) {
    if (listOfNumbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

const fizzBug = (divArray) => {
  for (let index = 0; index < divArray.length; index += 1) {
    if (divArray[index] % 3 === 0) {
      divArray[index] = 'fizz';
    } else if (divArray[index] % 1 === 0) {
      divArray[index] = 'bug!';
    }
  }
  return divArray;
}

const fizzBuzz = (divArray) => {
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

const encode = (encondeParam) => {
  encondeParam = encondeParam.replace(/a/g, '1');
  encondeParam = encondeParam.replace(/e/g, '2');
  encondeParam = encondeParam.replace(/i/g, '3');
  encondeParam = encondeParam.replace(/o/g, '4');
  encondeParam = encondeParam.replace(/u/g, '5');
  return encondeParam;
}

const decode = (decodeParam) => {
  decodeParam = decodeParam.replace(/1/g, 'a');
  decodeParam = decodeParam.replace(/2/g, 'e');
  decodeParam = decodeParam.replace(/3/g, 'i');
  decodeParam = decodeParam.replace(/4/g, 'o');
  decodeParam = decodeParam.replace(/5/g, 'u');
  return decodeParam;
}
