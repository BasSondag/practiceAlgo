function substrCount(n, s) {
    let result = n;
    let j = 0, count = 0, b = 2;
    let hasMiddel = -1;
    for (let i = 1; i < n; i++) {
        if (j < 0) {
            console.log("j < 0  :",result, s, s[j],s[hasMiddel], s[i])
            j = hasMiddel;
            i = hasMiddel ;
            hasMiddel = -1;
            count = 0
            console.log("j < 0 after reset   :",result, s, s[j],s[hasMiddel], s[i])
            console.log()
            console.log()

        }
        else if (s[j] !== s[i] && hasMiddel > 0) {
            console.log('j != i after middel   :',result, s, s[j],s[hasMiddel], s[i])
            j = hasMiddel;
            i = hasMiddel;
            hasMiddel = -1;
            count = 0;
            console.log('j != i after middel after reset . .   :',result, s, s[j],s[hasMiddel], s[i])
            console.log()
            console.log()
        }
        else if (s[j] === s[i] && hasMiddel > 0) {
            console.log('j == i after middel   :', result, s, s[j],s[hasMiddel], s[i])
            result++;
            if (s[j] === s[j - 1]) {
                console.log("updating j")
                j--;
            } else {
                console.log("reseting")
                j = hasMiddel;
                i = hasMiddel;
                hasMiddel = -1;
                count = 0;
            }


            console.log('j == i after middel after reset . .   :',result, s, s[j], s[hasMiddel], s[i])
            console.log()
            console.log()
        }
        else if (s[j] === s[i] && hasMiddel < 0) {
            console.log('j == before middel   :',result, s, s[j],s[hasMiddel], s[i])
            result++;
            result += count;
            j++;
            count++;
            console.log('j == i before middel after reset . .   :',result, s, s[j], s[hasMiddel], s[i])
            console.log()
            console.log()
        }
        else if (s.charAt(j) !== s.charAt(i) && hasMiddel < 0) {
            hasMiddel = i;
            console.log("setting middel incresing i      :",result, s, s[j], s[hasMiddel], s[i])
            console.log()
            console.log()

        }
    }
    return result;
}
s1 = "abcbaba"
// expect result 10
console.log(substrCount(s1.length,s1))
