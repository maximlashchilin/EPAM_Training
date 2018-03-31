var obj = {};
obj.model = "Tesla";
obj.power = 100;
obj.color = "red";
delete obj.power;

for(var key in obj) {
    console.log(obj[key]);
}