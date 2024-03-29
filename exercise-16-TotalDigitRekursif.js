function totalDigitRekursif(angka) {
  // you can only write your code here!
  angka = String(angka);
  let sliceAngka = angka.slice(1);
  if (angka.length <= 0) {
    return 0;
  } else return Number(angka[0]) + totalDigitRekursif(sliceAngka);
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5