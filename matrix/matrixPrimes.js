function primesOfN(n){
  let numbers = [], primes = [];

  for(let i = n;i>= 2;i--){
   numbers.push(i);
  }

  while(numbers.length > 0){
    primes.push(numbers.pop());
      numbers = numbers.filter(
        function(i){return i%primes[primes.length-1]!=0}
      );
  }
  return primes;
}

// console.log(primesOfN(30))

function primesMatrix(n) {
  const myPrimes = primesOfN(60)
  let p = Math.floor(Math.sqrt(myPrimes.length))
  console.log(p)
  let minCol = 0, minRow = 0, maxCol = p-1, maxRow = p-1, counter = 0;
  let result = [];
  for(let i = 0; i < p; i++ ){
    let row = []
    for(let j = 0; j < p; j++) {
      row.push(j)
      console.log(row)
    }
    result.push(row)
  }

  while (minCol <= maxRow) {
    for(let i = minCol; i <= maxCol; i++) {
      result[minRow][i] = myPrimes[counter];
      counter++;
    }
    minRow++;
      console.log(result, minRow, maxRow, minCol, maxCol)
    for(let i = minRow; i <= maxCol; i++) {
      result[i][maxCol] = myPrimes[counter];
      counter++;
    }
    maxCol--;
    console.log(result, minRow, maxRow, minCol, maxCol)
    for(let i = maxCol; i >= minCol; i--) {
      result[maxRow][i] = myPrimes[counter];
      counter++;
    }
    maxRow--;
    console.log(result, minRow, maxRow, minCol, maxCol)
    for(let i = maxRow; i >= minRow; i--) {
      result[i][minCol] = myPrimes[counter];
      counter++;
    }
    minCol++;
    console.log(result, minRow, maxRow, minCol, maxCol)
  }

  console.log(result, myPrimes )

}
primesMatrix(30)
// function allPrimes(n){
//   let range = [...Array(n+1).keys()].slice(2)
//   return range.filter(number=>isPrime(number))
//   function isPrime(number){
//     for (let i = 2; i<Math.sqrt(number); i++){
//       if (!(number%i)) return false
//     }return true
//   }
// }
//
// console.log(allPrimes(30))
