/**
 * Non-Constructible Change
 *
 * Given an array of positive integers representing the values of coins in your possession,
 * this function returns the minimum amount of change (the minimum sum of money) that you
 * cannot create. The given coins can have any positive integer value and aren't necessarily unique.
 *
 * @param coins - An array of positive integers representing the values of coins.
 * @returns The minimum amount of change that cannot be created using the given coins.
 */

export function nonConstructibleChange(coins: number[]) {
  coins.sort((a, b) => a - b); // sort in place to save memory

  let changeTotal = 0;
  for (let i = 0; i < coins.length; i++) {
    let currentCoin = coins[i];

    if (currentCoin > changeTotal + 1) return changeTotal + 1;

    changeTotal += currentCoin;
  }

  return changeTotal + 1;
}

/*
  Space O(1) - it stays constant, doesn't change based on input

  Time O(mlogn) - logn because of the sorting, m because of iterating through the sorted array
*/
