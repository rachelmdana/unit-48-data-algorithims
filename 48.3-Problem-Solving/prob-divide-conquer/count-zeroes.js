function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    let firstZeroIndex = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === 0) {
            firstZeroIndex = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    if (firstZeroIndex == -1) {
        return 0;
    }
    return arr.length - firstZeroIndex;
}



module.exports = countZeroes