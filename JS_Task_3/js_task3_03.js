function checkKey(keyName, obj) {
    var hasKey = false;
    for (var key in obj) {
        if (keyName === key) {
            hasKey = true;
            break;
        }
    }
    return hasKey;
}

console.log(checkKey("red", {car: "Tesla", color: "red", power: 100}));