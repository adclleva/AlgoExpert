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

function twoNumberSumV1(array, targetSum) {
  const numbersObj = {};

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let diff = targetSum - num;

    if (numbersObj[diff] !== undefined) {
      return [numbersObj[diff], num];
    } else {
      numbersObj[num] = num;
    }
  }

  return [];
}

/*
    Space
      O(n) - space needed for every element of the array

    Time
      O(n) - iterate through the array linearly
  */
