/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    const pivotVal = arr[start];
    let pivotInd =  start;
    
    for (let i=start + 1; i <= end; i++) {
        if (arr[i] < pivotVal){
            pivotInd++;
            [arr[pivotInd], arr[i]] = [arr[i], arr[pivotInd]];
        }
    }
    [arr[start], arr[pivotInd]] = [arr[pivotInd], arr[start]];
   return pivotInd;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotInd = pivot(arr, left, right);
        quickSort(arr, left, pivotInd-1);
        quickSort(arr, pivotInd+1, right);
    }
    return arr;
}

module.exports = quickSort, pivot;