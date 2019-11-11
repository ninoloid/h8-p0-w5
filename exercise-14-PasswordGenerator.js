function changeVocals(str) {
  //code di sini
  strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    switch (strArr[i]) {
      case 'a':
        strArr[i] = 'b';
        break;
      case 'i':
        strArr[i] = 'j';
        break;
      case 'u':
        strArr[i] = 'v';
        break;
      case 'e':
        strArr[i] = 'f';
        break;
      case 'o':
        strArr[i] = 'p';
        break;
      case 'A':
        strArr[i] = 'B';
        break;
      case 'I':
        strArr[i] = 'J';
        break;
      case 'U':
        strArr[i] = 'V';
        break;
      case 'E':
        strArr[i] = 'F';
        break;
      case 'O':
        strArr[i] = 'P';
        break;
    }
  }
  return strArr;
}

function reverseWord(str) {
  //code di sini
  // return changeVocals(str).reverse().join('');
  return str.reverse().join('');
}

function setLowerUpperCase(str) {
  //code di sini
  // str = reverseWord(str);
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      temp += str[i].toLowerCase();
    } else temp += str[i].toUpperCase();
  }
  return temp;
}

function removeSpaces(str) {
  //code di sini
  // str = setLowerUpperCase(str);
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      temp += '';
    } else temp += str[i];
  }
  return temp;
}

function passwordGenerator(name) {
  //code di sini
  return name.length >= 5 ? removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name)))) :
    `Minimal karakter yang diinputkan adalah 5 karakter`;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'