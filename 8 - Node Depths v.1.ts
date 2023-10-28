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

export function nodeDepths(root: BinaryTree) {
  // Write your code here.
  let sumDepths = 0
  const stack: {node: BinaryTree | null; depth: number}[] = [{node: root, depth: 0}]

  while (stack.length > 0) {
    /*
      The non-null assertion operator (!) in TypeScript is a postfix expression that 
      you can use when you're certain that an expression is not null or undefined.
    */
    const {node, depth} = stack.pop()!

    if (!node) continue
  
    sumDepths += depth

    if (node?.left) {      
      stack.push({node: node.left, depth: depth + 1})  
    }

    if (node?.right) {      
      stack.push({node: node.right, depth: depth + 1})
    }
     
  }
  
  return sumDepths;
}

/*
  solving it iteratively using a stack

  Space
    O(h) - h being the height of the tree for the call stack memory    

  Time
    O(n) - for every node to iterate through
*/
