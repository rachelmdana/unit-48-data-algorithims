function merge(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i<arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++
        }
    }
    
    // If there are remaining elements in the first array, add them to the result
    while(i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // If there are still remaining elements in the second array, add them to the result
    while(i<arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid  = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right= mergeSort(arr.slice(mid));

    return merge(left, right);
}

module.exports = { merge, mergeSort};