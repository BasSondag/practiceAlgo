function almostSimularString(s, t) {
  let len = s.length;
  let hash = {};
  const results = [];
  isAlmostString = true;
  if (t.length > s.length) {
    len = t.length;
  }
  for (let i = 0; i < len; i ++) {
    if (s[i].length !== t[i].length || s[i] === undefined || t[i] === undefined) {
      results.push("NO");
      console.log("strings are not the same length")
    } else {
      console.log("going to check string length", s[i].length )
      for (let j = 0; j < s[i].length; j++) {
        if (s[i][j] in hash) {
          hash[s[i][j]]++;
          console.log(hash, "adding to ", s[i][j])
        }
        if (!(s[i][j]in hash)) {
          hash[s[i][j]] = 1;
          console.log(hash, "setting", s[i][j])
        }
        if (t[i][j] in hash) {
          hash[t[i][j]]--;
          console.log(hash, "subtracting from ", s[i][j])
        }
        if (!(t[i][j] in hash)) {
          hash[t[i][j]] = -1;
          console.log(hash, "setting", t[i][j])
        }

      }
      console.log(hash, results)
      for (let key in hash) {
        console.log()
        if(hash[key] > 3){
          isAlmostString = false;
        }
      }
      if (isAlmostString) {
        results.push("YES")
      } else {
        results.push("NO")
        isAlmostString = true;
      }
      hash = {};

    }
  }
  console.log(hash, results)

}

const s = ['aabbccdd', 'abc', 'aaaa'], t = ['aabbcaba', 'aaaa', 'bbbb'];
almostSimularString(s, t);
