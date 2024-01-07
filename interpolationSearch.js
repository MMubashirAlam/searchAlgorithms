function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[pos] === target) {
            return pos; 
        }

        if (arr[pos] < target) {
            low = pos + 1; 
        } else {
            high = pos - 1; 
        }
    }

    return -1; 
}


const sortedArray = [1, 2, 3, 5, 7, 8, 9];
const targetValue = 9;

const result = interpolationSearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`Target ${targetValue} found at index ${result}`);
} else {
    console.log(`Target ${targetValue} not found in the array`);
}
