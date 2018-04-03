function isStringOrNumber(value) {
    var result;
    if (typeof(value) === "string") {
        result = "This is a string";
    } else {
        result = "This is a number";
    }
    console.log(result);
};

isStringOrNumber(4);
isStringOrNumber("string");
isStringOrNumber(10);