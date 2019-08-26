function reverseInteger(n) {
  let result = 0;
  let negative = n < 0;
  console.log(negative )
  n = Math.abs(n)
  while (n){
    result = result *10 +(n % 10)
    n = Math.floor(n/10)
  }

  return result > 0x7FFFFFFF ? 0 : negative ? -result : result
}

let num1 = 123
let num2 = 1000
let num3 = 1563847412
let num4 = -1563847412
let num5 = -123
console.log(reverseInteger(num1))
console.log(reverseInteger(num2))
console.log(reverseInteger(num3))
console.log(reverseInteger(num4))
console.log(reverseInteger(num5))
