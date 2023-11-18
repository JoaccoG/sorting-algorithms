// Finds the smallest element in the array and swaps it with the element in the beginning. Repeats this process until the array is sorted.

// Time Complexity: O(n^2) (quadratic time)
// Space Complexity: O(1)
// Stable: No
// In-Place: Yes
// Online: No
// Use cases: Memory constraints
// Representation: https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif
// Implementation:

export const selectionSort = <T>(arr: T[]): T[] => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    // A more readable way to swap elements:
    // if (min !== i) {
    //   const temp = arr[i];
    //   arr[i] = arr[min];
    //   arr[min] = temp;
    // }
  }

  return arr;
};
