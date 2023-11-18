// Compares adjacent elements and swaps them if they are not in the intended order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Stable: Yes
// In-Place: Yes
// Online: No
// Use cases: When the list is small.
//            When memory space is small or limited.
//            When the list is almost sorted (only a few elements are misplaced).
// Representation: https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif
// Implementation:

const bubbleSort = (arr: []): [] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};
