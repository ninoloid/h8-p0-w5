function kaliTerusRekursif(angka) {
  // you can only write your code here!
  angka = String(angka);

  if (angka.length < 1 || isNaN(angka)) return 0;

  let temp = 1;
  for (let i = 0; i < angka.length; i++) {
    temp *= angka[i];
  }
  return String(temp).length <= 1 ? Number(temp) : kaliTerusRekursif(temp)
}


// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6