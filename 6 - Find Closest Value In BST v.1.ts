class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Find Closest Value In BST
 *
 * Given a Binary Search Tree (BST) and a target integer value,
 * this function returns the closest value to that target value contained in the BST.
 *
 * @param tree - The root node of the BST.
 * @param target - The target integer value.
 * @returns The closest value in the BST to the target.
 */

export function findClosestValueInBst(tree: BST, target: number) {
  let closestValue: number | null = null;
  let currentNode: BST | null = tree;
  let smallestDifference: number | null = null;

  while (currentNode) {
    let currentDifference = target - currentNode.value;
    let absoluteDifference = Math.abs(currentDifference);

    if (currentDifference === 0) {
      return currentNode.value;
    }

    if (smallestDifference === null || absoluteDifference < smallestDifference) {
      smallestDifference = absoluteDifference;
      closestValue = currentNode.value;
    }

    // go right
    if (currentDifference > 0) {
      currentNode = currentNode.right;
      // go left
    } else if (currentDifference < 0) {
      currentNode = currentNode.left;
    }
  }

  return closestValue;
}

/*
  Notes

  - either use a que or a stack
  - when trying to find the difference or closest value, we use a absolute value to compare
  - similar logic to insertion & removal because this is a BST, so we can traverse
    based on the current value

  Iterative Approach

  Space O(1) - space doesn't rely on input and is always constant

  Time
    O(n) - if tree is skewed, meaning that worst case, it will go to the deepest tree level by going through each node
    O(logn) - if the tree is balance since we don't have to traverse through every node

*/
