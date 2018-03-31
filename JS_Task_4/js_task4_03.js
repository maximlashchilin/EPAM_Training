function hasStrOtherStr(str1, str2) {
    return str1.includes(str2);
};

console.log(hasStrOtherStr("I love cats", "cats"));
console.log(hasStrOtherStr("I love cats", "like"));