function sortedFrequency(arr, target) {
    function findFirst(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let firstOccur = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                firstOccur = mid;
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return firstOccur;
    }

    function findSecond(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let lastOccur = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                lastOccur = mid;
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return lastOccurOccur;
    }
    const firstIndex = findFirst(arr, target);
    const secondIndex = findSecond(arr, target);

    if (firstIndex === -1 || secondIndex === -1) {
        return -1;
    }
    return secondIndex - firstIndex + 1;
}

module.exports = sortedFrequency