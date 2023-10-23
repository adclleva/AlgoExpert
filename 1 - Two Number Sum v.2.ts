/**
 * Two Number Sum
 *
 * Write a function that takes in a non-empty array of distinct integers and an
 * integer representing a target sum. If any two numbers in the input array sum
 * up to the target sum, the function should return them in an array, in any order.
 * If no two numbers sum up to the target sum, the function should return an empty array.
 *
 * Note that the target sum has to be obtained by summing two different integers
 * in the array; you can't add a single integer to itself in order to obtain the
 * target sum.
 *
 * You can assume that there will be at most one pair of numbers summing up to the target sum.
 */

function twoNumberSumV2(array, targetSum) {
  // const sortedArray: number[] = array.sort((a, b) => a - b);
  // we can sort in place
  array.sort((a, b) => a - b);

  let pointer1 = 0;
  let pointer2 = array.length - 1;

  while (pointer1 !== pointer2) {
    let num1 = array[pointer1];
    let num2 = array[pointer2];

    let sum = num1 + num2;
    let diff = targetSum - sum;

    if (diff === 0) {
      return [num1, num2];
    } else if (diff > 0) {
      pointer1++;
    } else if (diff < 0) {
      pointer2--;
    }
  }

  return [];
}

/*
  sorting the array first allows us to use two pointers

    Space
      O(1) - since we're sorting in place and the space for the pointers are always constant

    Time
      O(nlog(n)) - n is the length of the array
                    logn is the time it takes to sort the array
  */
