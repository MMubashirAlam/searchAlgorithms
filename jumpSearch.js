function jumpSearch(arr, target) {
    const n = arr.length;
    const blockSize = Math.floor(Math.sqrt(n));
    let step = blockSize;

    let prev = 0;
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += blockSize;

        if (prev >= n) {
            return -1; 
        }
    }

    for (let i = prev; i < Math.min(step, n); i++) {
        if (arr[i] === target) {
            return i; 
        }
    }

    return -1; 
}


const sortedArray = [1, 2, 3, 5, 7, 8, 9];
const targetValue = 7;

const result = jumpSearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`Target ${targetValue} found at index ${result}`);
} else {
    console.log(`Target ${targetValue} not found in the array`);
}
