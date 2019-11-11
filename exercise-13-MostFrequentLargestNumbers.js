function sorting(arrNumber) {
  // code di sini
  return arrNumber.sort();
}

function getTotal(arrNumber) {
  // code di sini
  let counter = 1;
  for (let i = arrNumber.length - 2; i >= 0; i--) {
    if (arrNumber[arrNumber.length - 1] === arrNumber[i]) counter++;
  }
  return arrNumber.length > 0 ? `angka paling besar adalah ${arrNumber[arrNumber.length - 1]} dan jumlah kemunculan sebanyak ${counter} kali` : '';
}


function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest; // */
  // 3 line di atas sama dengan  ==>>
  // return getTotal(sorting(arrNumber));
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''