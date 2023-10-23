/**
 * Sorted Squared Array
 *
 * Write a function that takes in a non-empty array of integers that are sorted in ascending order
 * and returns a new array of the same length with the squares of the original integers
 * also sorted in ascending order.
 */
export function sortedSquaredArrayV3(array: number[]) {
  const result = Array(array.length).fill(0);
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    // we use the absolute number to compare the ends since it's sorted
    let leftNum = Math.abs(array[leftPointer]);
    let rightNum = Math.abs(array[rightPointer]);

    if (leftNum > rightNum) {
      result[i] = Math.pow(leftNum, 2);
      leftPointer++;
    } else {
      result[i] = Math.pow(rightNum, 2);
      rightPointer--;
    }
  }

  return result;
}

/*
  using a for loop
  two pointer technique

    Space O(n)
    we are creating an array based on the length of the input array

  Time O(n)
    since we are iterating through an array once
*/
