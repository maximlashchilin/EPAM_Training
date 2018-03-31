function getPropertyInProto(keyName, obj) {
    for (var key in obj) {
        if (!obj.hasOwnProperty(key) && key === keyName) {
            console.log(key);
        }
    }
}

var objProto = {a: 1, b: 1};
var obj1 = Object.create(objProto);
obj1.c = 3;

getPropertyInProto("a" , obj1);
getPropertyInProto("b", obj1);