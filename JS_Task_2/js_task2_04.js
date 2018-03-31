function isSameElements(arr) {
    var result = true;
    for(var i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            result = false;
            break;
        }
    }
    console.log(result);
};

isSameElements([1, 1, 1]);
isSameElements([1, 1, 2]);