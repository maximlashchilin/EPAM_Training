function getAllElementsAndSize(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    var result = "Number of elements: " + arr.length;
    console.log(result);
};

getAllElementsAndSize([1, 2, 3, 4]);
getAllElementsAndSize([5, 6, 7, 8]);