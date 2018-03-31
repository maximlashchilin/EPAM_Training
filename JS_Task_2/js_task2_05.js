function getMaxValue(arr) {
    var maxValue = arr[0];
    for(var i = 1; i < arr.length; i++){
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return "Max value: " + maxValue;
};

console.log(getMaxValue([45, 44, 43, 1, 44]));
console.log(getMaxValue([1, 2, 3, 4, 5]));
console.log(getMaxValue([1, 8, 5, 5, 7]));
console.log(getMaxValue([8, 8, 8]));