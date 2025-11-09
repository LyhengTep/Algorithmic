function partition(arr, low, high) {
  let pivot = arr[Math.floor((low + high) / 2)];

  let i = low - 1;
  let j = high + 1;

  console.log("Pivot chosen:", pivot);
  while (true) {
    do i++;
    while (arr[i] < pivot);
    do j--;
    while (arr[j] > pivot);
    console.log("Current indices:", i, j);
    // console.log("Current array state:", i, j);
    if (i >= j) {
      console.log("Current array state:", arr, i, j);
      return j;
    }
    // let temp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = temp;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
function quickSort(arr, low, high) {
  if (low < high) {
    let p = partition(arr, low, high);
    console.log("partition", low, high, p);

    quickSort(arr, low, p);
    quickSort(arr, p + 1, high);
  }
}
// Example usage:
let arr = [10, 7, 8, 18, 9, 1, 5, 128];
let n = arr.length;
quickSort(arr, 0, n - 1);
// let pi = partition(arr, 0, n - 1);
console.log("Sorted array:", arr);
