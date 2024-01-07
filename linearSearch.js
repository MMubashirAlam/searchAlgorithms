function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

const array = [1, 5, 9, 3, 7, 2, 8];
const targetValue = 7;

const result = linearSearch(array, targetValue);

if (result !== -1) {
    console.log(`Target ${targetValue} found at index ${result}`);
} else {
    console.log(`Target ${targetValue} not found in the array`);
}
