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

function checkKeyAndAddProperty(keyName, obj) {
    if (!checkKey(keyName, obj)) {
        obj[keyName] = "new";
    }
}

checkKeyAndAddProperty("color", {car: "Tesla", power: 100});