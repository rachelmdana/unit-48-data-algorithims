function bubbleSort(arr) {
    const len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // ES6 destructuring assignment
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

module.exports = bubbleSort;