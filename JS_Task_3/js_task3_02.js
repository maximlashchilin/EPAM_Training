function getKeysAndValues(obj) {
    for(var key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

getKeysAndValues({car: "Tesla", power: 100, color: "red"});