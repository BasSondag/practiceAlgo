const a = [[1,2,3,],[4,5,6,],[7,8,9]]
// should give b = [1,3,9,],[4,9,15,],[7,15,24]]
//                  [1,3,6,],[5,12,21,],[12,27,45]]

function aToB(a) {
  const b =[]
  let temp;
  for (let i = 0; i < a.length; i++) {
    b.push([])
    for (let j = 0; j < a.length; j++) {
      if(i === 0 && j == 0) {
        b[i].push(a[i][j])
      }
      if(i === 0 && j > 0) {
        b[i].push(a[i][j] + b[i][j -1])
      }
      if(i > 0 && j == 0) {
        b[i].push(a[i][j] + b[i-1][j])
        temp = a[i][j]

      }
      if (i > 0 && j > 0) {
        temp += a[i][j]
        b[i].push(temp + b[i-1][j])
      }
    }
  }
console.log(b)
return b;
}

aToB(a)
