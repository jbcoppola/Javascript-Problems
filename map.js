function map(array, callback) {
    var newArr = [];
    for (i = 0; i < array.length; i++) {
        newArr.push(callback(array[i], i, array));
    }
    return newArr;
}