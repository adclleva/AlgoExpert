/**
 * Sorted Squared Array
 *
 * Write a function that takes in a non-empty array of integers that are sorted in ascending order
 * and returns a new array of the same length with the squares of the original integers
 * also sorted in ascending order.
 */

export function sortedSquaredArrayV2(array: number[]) {
  const resultArray: number[] = Array(array.length).fill(0);
  let leftArrayPointer = 0;
  let rightArrayPointer = array.length - 1;

  let resultPointer = resultArray.length - 1;

  let leftAbsNum = Math.abs(array[leftArrayPointer]);
  let rightAbsNum = Math.abs(array[rightArrayPointer]);

  while (resultPointer >= 0) {
    leftAbsNum = Math.abs(array[leftArrayPointer]);
    rightAbsNum = Math.abs(array[rightArrayPointer]);
    if (leftAbsNum > rightAbsNum) {
      resultArray[resultPointer] = Math.pow(leftAbsNum, 2);
      resultPointer--;
      leftArrayPointer++;
    } else {
      resultArray[resultPointer] = Math.pow(rightAbsNum, 2);
      resultPointer--;
      rightArrayPointer--;
    }
  }

  return resultArray;
}

/*
  using a while loop

  Space O(n)
    we are creating an array based on the length of the input array

  Time O(n)
    since we are iterating through an array once
*/
