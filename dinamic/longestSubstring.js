var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let longest = 0
    const set = new Set()
    let c = 0
    for (let i = 0; i < s.length; i++) {
      if((!set.has(s.charAt(i)))) {
        set.add(s.charAt(i))
        longest++;
        if (longest > result) {
          result = longest
        }
      } else {
        while(s.charAt(c) !== s.charAt(i)) {
          set.delete(s.charAt(c))
          longest--;
          c++;
        }
        if (s.charAt(c) === s.charAt(i)){
          c++;
        }
      }

      console.log(s,i, set, result)
    }
    return result;
};

s1 = "abcabcbb"
s2 = "bbbbbbbb"
s3 = "aabaab!bb"
s4 = 'o'
console.log(lengthOfLongestSubstring(s1))
console.log(lengthOfLongestSubstring(s2))
console.log(lengthOfLongestSubstring(s3))
console.log(lengthOfLongestSubstring(s4))
