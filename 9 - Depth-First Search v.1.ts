/*
Depth-First Search:

You're given a `Node` class that has a `name` and an array of optional `children` nodes. 
When put together, nodes form an acyclic tree-like structure.

Implement the `depthFirstSearch` method on the `Node` class, which takes in an empty array, 
traverses the tree using the Depth-First Search approach (specifically navigating the tree from left to right), 
stores all of the node names in the input array, and returns it.

If you're unfamiliar with Depth-First Search, we recommend watching the Conceptual Overview 
section of this question's video explanation before starting to code.

Sample Input:

    graph = A
          / | \
         B  C  D
        / \   / \
       E   F G   H
          / \   \
         I   J   K

Sample Output:

["A", "B", "E", "F", "I", "J", "C", "D", "G", "H", "K"]
*/

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array: string[]) {    
    if (!this.name) return
    array.push(this.name)
    for (const child of this.children) {      
      child.depthFirstSearch(array)
    }
    return array;
  }
}

/*
  recursion of only using the class methods
		
  Time - O(V + E) - where v is vertices/nodes and e is edges
  because we have a node and we call the edges or children to that node with our recursion function
  hence it would take the vertices + edges time
		
  Space - O(V) - where in the worst case the nodes can be determined with the frames in the call stack
  when calling the recursive dfs function
*/