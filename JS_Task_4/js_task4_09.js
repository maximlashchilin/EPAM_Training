function getCharCount(str) {
    var result = str.charAt(0);
    var arr = [];
    var count = 1;
    var sum = 0;
    var k = 0;
    if (str.length == 1) {
        result = result + ":" + count;
        return result;
    } else {
        for(var i=1; i<str.length; i++) {
            if(str.charAt(i) != str.charAt(i-1)) {
                result = result + count + "," + str.charAt(i);
                count = 1;
            } else {
                count++;
            }
            if (i == str.length - 1) {
                result += count;
            }
        }
        result = result.split(",");
        for (var i = 0; i < result.length-1; i++) {
            for (var j = 1; j < result.length; j++) {
                if ((result[i].charAt(0) === result[j].charAt(0)) && i !== j) {
                    sum = +result[i].substr(1) + +result[j].substr(1);
                    if (i < j) {
                        result[i] = result[i].charAt(0) + sum;
                        result[j] = "";
                    } else {
                        result[j] = result[j].charAt(0) + sum;
                        result[i] = "";
                    }
                }
            }
        }
        for (var i = 0; i < result.length; i++) {
            if (result[i] != 0) {
                arr[k] = result[i].charAt(0) + ":" + result[i].substr(1);
                k++;
            }
        }
        return arr.join(" ");
    }
    
};

console.log(getCharCount("abccbazabceeeec"));
console.log(getCharCount("a"));
console.log(getCharCount("abc"));