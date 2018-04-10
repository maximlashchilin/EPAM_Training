function toUpperCaseFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

function toCamelCase(str) {
    str = str.split(" ");
    str[0] = str[0].toLowerCase();
    for (var i = 1, x = str.length; i < x; i++) {
        str[i] = toUpperCaseFirstChar(str[i]);
    }
    return str.join("");
};

console.log(toCamelCase("User Object"));
console.log(toCamelCase("To local upper case"));