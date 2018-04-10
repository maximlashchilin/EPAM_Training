function toUpperCaseFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

function toUpperCaseFirstWordChar(str) {
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = toUpperCaseFirstChar(str[i]);
    }
    return str.join(" ");
};

console.log(toUpperCaseFirstWordChar("I am cool"));