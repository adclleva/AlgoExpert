/*
  Branch Sums:

  Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

  Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None/null.

  Sample Input:
  tree =     1
           /   \
          2     3
         / \   / \
        4   5 6   7
       /   / \
      8   9  10

  Sample Output: [15, 16, 18, 10, 11]
  15 = 1 + 2 + 4 + 8
  16 = 1 + 2 + 4 + 9
  18 = 1 + 2 + 5 + 10
  10 = 1 + 3 + 6
  11 = 1 + 3 + 7
*/

class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function branchSums(root: BinaryTree): number[] {
  const arraySums: number[] = [];

  recursiveBranchSums(root, 0, arraySums);

  return arraySums;
}

const recursiveBranchSums = (node: BinaryTree | null, runningSum: number, arraySums: number[]) => {
  // base case
  if (!node) return;

  const newRunningSum = runningSum + node.value;

  if (!node.left && !node.right) {
    arraySums.push(newRunningSum);
    return;
  }

  recursiveBranchSums(node.left, newRunningSum, arraySums);
  recursiveBranchSums(node.right, newRunningSum, arraySums);
};

/*
  notes
    it's important to create a new running sum to keep the current instance of that variable during the current stack frame
    otherwise modifiying it directly may affect the results for the next frame stacks

  recursive approach

  Space O(n)
    given the memory needed for the call stack dependining on how many nodes there are

  Time O(n)
    given that we have to traverse every node

*/
