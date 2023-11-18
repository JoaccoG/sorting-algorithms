// Non-comparative algorithm. Distribute the elements based on their individual digits starting from the least significant digit (LSD) to the most significant digit (MSD). The elements are sorted in each pass based on the digit being processed.

// Time Complexity: O(k * n)
// Space Complexity: O(n + k)
//                  n = number of elements
//                  k = number of digits or bits in the input elements
// Stable: Yes
// In-Place: No
// Online: No
// Use cases: When the input elements are integers or binary strings
// Representation: https://upload.wikimedia.org/wikipedia/commons/f/fe/Radix.JPG
// Implementation:

const getDigit = (num: number, i: number): number =>
  Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const getNumberOfDigits = (num: number): number =>
  Math.floor(Math.log10(Math.abs(num))) + 1;

export const radixSort = <T extends number>(arr: T[]): T[] => {
  let maxDigits = 0;

  for (const el of arr) {
    maxDigits = Math.max(maxDigits, getNumberOfDigits(el));
  }

  for (let i = 0; i < maxDigits; i++) {
    const buckets: T[][] = Array.from({ length: 10 }, () => []);

    for (const el of arr) {
      const digit = getDigit(el, i);
      buckets[digit].push(el);
    }

    arr = ([] as T[]).concat(...buckets);
  }

  return arr;
};
