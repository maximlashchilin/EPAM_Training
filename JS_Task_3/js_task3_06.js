function deepClone(obj) {
    var finalObj = {};
    for (var key in obj) {
        var prop = obj[key];

        // Avoid infinite loop; if two objects are mutual referenced the loop aren't infinite
        if (prop === finalObj) {
            continue;
        }

        if (typeof prop === 'object') {
            finalObj[key] = deepClone(prop);
        } else {
            finalObj[key] = prop;
        }
    }
    return finalObj;
};

obj = { a:1, b:{ c:0 }, e:{ f:{ g:1 } } };
copyObj = deepClone(obj);
var value1 = (obj.b === copyObj.b) // false
var value2 = (obj.e === copyObj.e) // false
var value3 = (obj.e.f === copyObj.e.f) // false

console.log(value1 + " " + value2 + " " + value3);

console.log(deepClone({car: "Tesla", color: "red", engine: {power: 100, type: "electric"}}));