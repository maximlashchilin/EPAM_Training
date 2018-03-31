function isSimpleOrSplitNumber(value) {
    var result;
    if (value === 0 || value === 1) {
        result = "This number " + value + " isn't split or simple!";
    } else if (value <= 1000) {
        var size = 1000;
        var arr = [];
        for(var i = 0; i < size; i++) {
            arr[i] = i;
        }
        arr[1] = 0;
        for(var i = 2; i < Math.sqrt(size); i++) {
            if (arr[i] !== 0) {
                for(var j = i * 2; j < size; j += i) {
                    arr[j] = 0;
                }
            }
        }
        result = "This number " + value + " is split!";
        for(var i = 2; i < size; i++) {
            if (value === arr[i]) {
                result = "This number " + value + " is simple";
                break;
            }
        }
    } else {
        result = "Number is more than 1000";
    }
    console.log(result);
};

isSimpleOrSplitNumber(0);
isSimpleOrSplitNumber(1);
isSimpleOrSplitNumber(2);
isSimpleOrSplitNumber(997);