function binarySearch(arr, low, high, target) {
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; 
}

function exponentialSearch(arr, target) {
    const n = arr.length;

    if (arr[0] === target) {
        return 0; 
    }

    let i = 1;
    while (i < n && arr[i] <= target) {
        i *= 2; 
    }

    return binarySearch(arr, i / 2, Math.min(i, n - 1), target);
}

const sortedArray = [1, 2, 3, 5, 7, 8, 9];
const targetValue = 1;

const result = exponentialSearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`Target ${targetValue} found at index ${result}`);
} else {
    console.log(`Target ${targetValue} not found in the array`);
}
