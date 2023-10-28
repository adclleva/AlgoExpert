/**
 * Node Depths
 * 
 * The distance between a node in a BinaryTree and the tree's root is called the node's depth.
 * Write a function that takes in a BinaryTree and returns the sum of its nodes' depths.
 * 
 * Each BinaryTree node has an integer `value`, a `left` child node, and a `right` child node. 
 * Children nodes can either be BinaryTree nodes themselves or `None`/`null`.
 * 
 * Sample Input:
 * 
 * tree =     1
 *         /     \
 *        2       3
 *      /   \   /   \
 *     4     5 6     7
 *    / \
 *   8   9
 * 
 * Sample Output:
 * 
 * 16
 *  The depth of the node with value 2 is 1.
 *  The depth of the node with value 3 is 1.
 *  The depth of the node with value 4 is 2.
 *  The depth of the node with value 5 is 2.
 *  etc...
 *  Summing all of these depths yields 16.
 */

// This is the class of the input binary tree.

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

export function nodeDepthsV2(root: BinaryTree) {
  return getDepthSumRecursion(root, 0)  
}

const getDepthSumRecursion = (node: BinaryTree | null,  depth: number): number => {
  // base case 
  if (!node) return 0

  let leftDepthSum = getDepthSumRecursion(node.left, depth + 1)
  let rightDepthSum = getDepthSumRecursion(node.right, depth + 1)


  return depth + leftDepthSum + rightDepthSum
  
}

/*
  recursive

  if the tree is balanced 
  
  Space O(h) 
    space needed for the call stack where h is the height of the tree
    
  Time O(n) 
    n is the time it takes to go through each node
*/




