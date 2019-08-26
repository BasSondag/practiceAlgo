// let s1 = "RLRRLLRLRRLL";
// let s2 = "RLLLLLL";
// let s3 = 'R';
// let s4 ='';
// let s5 ="RRRRRRRRRLLLLLLLLLRLRLRLRLRLRLRLRLRLRLRLLLLRRRRRLRLRLRLRLRLRLRLRLRLRLRLRL"
//
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let result = 0, r = 0, l = 0;
//     for (let i = 0; i < S.length; i++) {
//       if (S.charAt(i) === "R") {
//         r++;
//       } else {
//         l++;
//       }
//       if (r === l) {
//         result++;
//       }
//     }
//     return result;
//
// }
//
// console.log(solution(s1))
// console.log(solution(s2))
// console.log(solution(s3))
// console.log(solution(s4))
// console.log(solution(s5))

a1 = [5,4,0,3,1,6,2]
a2 = Array.apply(null, {length: 20}).map(Number.call, Number)

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
a2 = shuffle(a2)
// console.log(a2)
// function solution(A) {
//   const hash = {};
//
// let j,  result = 0;
//   for (let i = 0; i < A.length; i++) {
//     if( i in hash && !(A[i] in hash)){
//       j = i;
//       while(Array.isArray(hash[j]) === false) {
//         j = hash[j];
//       }
//       hash[j].push(A[i])
//       result = checkLength(hash[j].length, result)
//       hash[A[i]] = j;
//
//     }
//     else if(A[i] in hash && !(i in hash)){
//         j = A[i]
//       while(Array.isArray(hash[j]) === false) {
//         j = hash[j];
//       }
//       hash[j].push(i)
//       result = checkLength(hash[j].length, result)
//       hash[i] = j
//     }
//     else if (!(i in hash) && !(A[i] in hash)){
//         hash[i] = [i, A[i]];
//         result = checkLength(2, result)
//         hash[A[i]] = i
//     }
//     console.log(hash, i, result)
//   }
//   return result
// }
function solution(A) {
  const hash = {};

let j,  result = 0, test = "0";
  console.log(typeof result, typeof test, "testing")
  for (let i = 0; i < A.length; i++) {
    if( i in hash && !(A[i] in hash)){
      j = i;
      while(typeof hash[j] === "string") {
        j = parseInt(hash[j]);
      }
      hash[j]++;
      result = checkLength(hash[j], result)
      hash[A[i]] = j.toString()

    }
    else if(parseInt(A[i]) in hash && !(i in hash)){
        j = parseInt(A[i]);
      while(typeof hash[j] === "string") {
        j = parseInt(hash[j]);
      }
      hash[j]++;
      result = checkLength(hash[j], result)
      hash[i] = j.toString()
    }
    else if (!(i in hash) && !(A[i] in hash)){
      if( i === A[i]){
        hash[i] = 1;

      }else {
        hash[i] = 2;
        hash[A[i]] = i.toString()
      }
        result = checkLength(hash[i], result)

    }
    console.log(hash, i, result)
  }
  return result
}

function checkLength(curentL, maxL) {
  if (curentL > maxL ) {
    maxL = curentL;
  }
  return maxL;
}
console.log(solution(a2))
