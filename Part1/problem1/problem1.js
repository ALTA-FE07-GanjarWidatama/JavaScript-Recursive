function primeX(num) {
  let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  let reveal = arr[num - 1];
  return reveal;
}

console.log(primeX(1));
console.log(primeX(5));
console.log(primeX(8));
console.log(primeX(9));
console.log(primeX(10));
