// Builds up a sorted array one element at a time. It takes each element from the input and finds the place, within the sorted array, where that element belongs.

// Time Complexity: O(n^2) (quadratic time)
// Space Complexity: O(1)
// Stable: Yes
// In-Place: Yes
// Online: Yes
// Use cases: Small data sets
// Representation: https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif
// Implementation:

const insertionSort = (arr: []): [] => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }

  return arr;
};
