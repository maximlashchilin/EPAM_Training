function getNumberOfEvenAndOddNumbersAndNull(arr) {
    var counterOfNull = counterOfEven = counterOfOdd = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            counterOfNull++;
        } else if (arr[i] % 2 === 0) {
            counterOfEven++;
        } else {
            counterOfOdd++;
        }
    }
    var result;
    if (counterOfNull !== 0) {
        result = "Even: " + counterOfEven + ", odd: " + counterOfOdd + ", null: " + counterOfNull;
    } else {
        result = "Even: " + counterOfEven + ", odd: " + counterOfOdd;
    }
    console.log(result);
};

getNumberOfEvenAndOddNumbersAndNull([1, 2, 3, 4]);
getNumberOfEvenAndOddNumbersAndNull([1, 2, 3, 0]);