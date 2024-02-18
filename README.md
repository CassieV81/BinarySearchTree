# Binary Search Tree Implementation

This project is a hands-on exploration of binary search trees (BST), a fundamental data structure in computer science. Inspired by The Odin Project's curriculum on algorithms and data structures, it serves as a practical exercise to deepen my understanding of BSTs and their operations.

## Features

The implementation covers a variety of methods to manipulate and query a binary search tree:

- `buildTree(arr)`: Constructs an unbalanced binary search tree from an unordered array by inserting elements sequentially.
- `buildBalancedTree(arr)`: Creates a balanced binary search tree from a sorted array, ensuring minimal height.
- `insert(value)`: Adds a new node with the given value to the tree, placing it according to BST rules.
- `prettyPrint(node)`: Visually prints the tree structure in a readable format, making it easier to visualize the tree's layout.
- `delete(value)`: Removes a node with the specified value from the tree, adjusting the tree structure as necessary.
- `find(value)`: Searches for a node with the given value and returns it if found within the tree.
- `levelOrder(node)`: Performs a breadth-first traversal of the tree, returning values in level order.
- `preOrder(node)`: Conducts a pre-order (root, left, right) traversal of the tree, useful for cloning or printing the tree.
- `inOrder(node)`: Executes an in-order (left, root, right) traversal, which returns values in sorted order.
- `postOrder(node)`: Carries out a post-order (left, right, root) traversal, often used for safely deleting or freeing nodes.
- `height(node)`: Calculates the height of the tree or subtree rooted at the given node, measuring the longest path to a leaf.
- `depth(node)`: Determines the depth of a given node, indicating how many levels it is from the root.
- `isBalanced(node)`: Checks if the tree or subtree rooted at the given node is balanced, meaning the height difference between the left and right subtrees is no more than 1.
- `reBalance(node)`: If the tree is unbalanced, this method reconstructs it into a balanced tree.

## Learning Outcomes

Through the implementation of this project, key concepts around binary search trees were reinforced, including how they are structured, how to traverse them in various orders, and the importance of balancing for optimal performance. This project provided practical experience with recursion and the manipulation of node-based structures.

## Acknowledgements

Special thanks to [The Odin Project](https://www.theodinproject.com/) for providing an excellent curriculum on algorithms and data structures. 

