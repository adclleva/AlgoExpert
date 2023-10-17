/**
Validate Subsequence

  Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array.
  For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4],
  and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.
 */

function isValidSubsequenceV1(array: number[], sequence: number[]) {
  let numberPointer = 0;
  let sequencePointer = 0;

  while (numberPointer <= array.length) {
    let numberNum = array[numberPointer];
    let sequenceNum = sequence[sequencePointer];

    if (numberNum === sequenceNum) {
      sequencePointer++;
    }

    if (sequencePointer > sequence.length) {
      return true;
    }

    numberPointer++;
  }

  return false;
}

/*
    Space - O(1)
      space remains constant no matter input

    Time - O(n)
      time it takes to iterate through the array
  */
