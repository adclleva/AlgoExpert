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

export function findClosestValueInBst(tree: BST, target: number) {
  return findClosestValueRecursion(tree, target, tree.value);
}

const findClosestValueRecursion = (tree: BST | null, target: number, closest: number): number => {
  if (tree === null) return closest; // base case

  const difference = target - tree.value;
  const clostestDifference = target - closest;

  if (Math.abs(difference) < Math.abs(clostestDifference)) {
    closest = tree.value;
  }

  // go left
  if (difference < 0) {
    return findClosestValueRecursion(tree.left, target, closest);
  }
  // go right
  else if (difference > 0) {
    return findClosestValueRecursion(tree.right, target, closest);
  } else {
    return closest;
  }
};

/*
  notes

  recursive approach

  Space
    O(n) if tree is scewed (worst case)- because it requires the use of the memory
      call stack depending on the number of levels of the tree
    O(logn) if tree is balanced - on average since the stack is getting a new frame
      on each recursie call and each call reduces the size of the tree by approximately half


  Time
    O(n) if tree is screwed (worst case)
      because it has to go through every level and node of the tree
    O(logn) if the tree is balanced
      because we half the amount of nodes we have to go through
*/
