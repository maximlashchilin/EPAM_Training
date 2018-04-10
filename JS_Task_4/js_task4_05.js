function getShortStr(str, num) {
    if (str.length > num) {
        str = str.substring(0, num - 3) + "...";
    }
    return str;
}

console.log(getShortStr("abcdefg", 5));
console.log(getShortStr("abcde", 5));
console.log(getShortStr("abcde", 10));