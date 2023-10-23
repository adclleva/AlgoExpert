/**
 * Sorted Squared Array
 *
 * Write a function that takes in a non-empty array of integers that are sorted in ascending order
 * and returns a new array of the same length with the squares of the original integers
 * also sorted in ascending order.
 */

export function sortedSquaredArrayV1(array: number[]) {
  // Write your code here.
  return array.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
}

/*
  using the array map and sort methods

  Space - O(1)
    using the same array

  Time - O(nlog(n))
    we are iterating through the array and then sorting it
*/
