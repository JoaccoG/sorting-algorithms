// Divide and conquer algorithm. Similar alternative option to merge sort when memory is a constraint. Uses a pivot element to create the subarrays that are sorted recursively. The pivot element can be chosen in different ways, but the most common one is to use the last element of the array.

// Time Complexity: O(n log n) (quasilinear time)
// Space Complexity: O(log n)
// Stable: No
// In-Place: Yes
// Online: No
// Use cases: Large data sets (when memory is a constraint)
//            When able to be parallelized
//            Real-time applications
// Representation: https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif
// Implementation:

const swapElements = (arr: number[], i: number, j: number): void => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const splitArray = <T>(
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
): number => {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      swapElements(arr, i, j);
    }
  }

  swapElements(arr, i + 1, right);
  return i + 1;
};

function quickSort(
  array: number[],
  left: number = 0,
  right: number = array.length - 1
): number[] {
  if (left >= right) return array;

  const pivotIndex = splitArray(array, left, right);
  quickSort(array, left, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, right);

  return array;
}
