// Divide and conquer algorithm. Breaks the main array into subarrays using recursivity until each subarray consists of a single element. Then, merges the subarrays back while comparing sorting them.

// Time Complexity: O(n log n) (quasilinear time)
// Space Complexity: O(n)
// Stable: Yes
// In-Place: No
// Online: No
// Use cases: Large data sets (when memory is not a constraint)
//            Linked lists
//            External sorting
// Representation: https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif
// Implementation:

const mergeSort = <T>(arr: T[]): T[] => {
  const mid = arr.length / 2;

  if (arr.length < 2) return arr;

  const left = arr.splice(0, mid);
  return merge(mergeSort(left), mergeSort(arr));
};

const merge = <T>(left: T[], right: T[]): T[] => {
  const result: T[] = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) result.push(left.shift()!);
    else result.push(right.shift()!);
  }

  return [...result, ...left, ...right];
};
