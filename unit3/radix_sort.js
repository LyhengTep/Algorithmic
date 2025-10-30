function countingSort(arr, exp) {
  n = arr.length;
  output = new Array(n);
  //   console.log("output array initialized", output.length);
  count = new Array(10).fill(0);

  for (i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % 10]++;
  console.log("frequency count", count);
  for (i = 1; i < 10; i++) count[i] += count[i - 1];
  console.log("cummulative count", count);
  for (i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }
  console.log("output", output);

  for (i = 0; i < n; i++) arr[i] = output[i];
}

function radixSort(arr) {
  let max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
}

// Example usage:
let arr = [
  1000000000, 178, 46, 76, 98, 808, 26, 6, 66, 166, 196, 236, 346, 446, 546,
  646, 746, 846, 946,
];

radixSort(arr);
console.log("Sorted array:", arr);
