function insertStringInAnotherString(str1, str2, num) {
    var result = [];
    str1 = str1.split(" ");
    for (var i = 0; i < str1.length; i++) {
        if (i === num) {
            result[i] = str1[i] + " " + str2;
            continue;
        }
        result[i] = str1[i];
    }
    return result.join(" ");
};

console.log(insertStringInAnotherString("I am cool", "very", 1));