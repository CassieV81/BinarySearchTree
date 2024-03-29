
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class Tree {

//     constructor() {
//         this.root = null;
//     }

//     buildBST(arr, start=0, end=arr.length - 1) {
//         if (start > end) return null; 
//         let mid = parseInt((start + end) / 2);
//         let node = new Node(arr[mid]);
    
//         node.left = this.buildBST(arr, start, mid - 1);
//         node.right = this.buildBST(arr, mid + 1, end);
    
//         return node;
//     }
    
// }


  
// let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const sorted = arr.sort((a, b) => a - b);

// let node = new Tree();
// let tree = node.buildBST(sorted);
// console.log(tree)
// prettyPrint(tree)
class Node {
    constructor(data=null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
        this.array = [];
    }

    buildTree(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i]);
        }
        return this.root
    }

    buildBalancedTree(arr) {
        
        arr.sort((a, b) => a - b);
        if (arr.length === 0) return null;
        let midde = Math.floor(arr.length / 2);

        this.root = new Node(arr[midde]);
        const queue = [[this.root, [0, midde - 1]], [this.root, [midde + 1, arr.length - 1]]]
        
        while (queue.length > 0) {
            const [parent, [left, right]] = queue.shift();
            if (left <= right && parent != null) {
                const mid = Math.floor((left + right)/2);
                const child = new Node(arr[mid]);
                if (arr[mid] < parent.data) {
                    parent.left = child;
                } else {
                    parent.right = child
                }
                queue.push([child, [left, mid - 1]]);
                queue.push([child, [mid + 1, right]]);
            }
        }
        return this.root;
    }

    insert(value) {
        const newNode = new Node(value);
        
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        
        let currentNode = this.root;
        while (true) {
            // Uncomment below to remove double values while creating Nodes
            // if (value === currentNode.data) break;
            if (value < currentNode.data) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

    delete(value) {
        let arr = this.preOrder(this.root);
        this.root = null;
        for (let i = 0; i < arr.length; i++) {
            if (value === arr[i]) continue;
            this.insert(arr[i]);
        }
        return this.root
        
    }

    find(value) {

        // if (this.root === null) return null
        let valueNode;
        let currentNode = this.root;
        if (currentNode.data === value) return valueNode = currentNode;
        while (true) {
            if (value < currentNode.data) {
                if (!currentNode.left) return null;
                if (currentNode.left.data === value) {
                    return valueNode = currentNode.left;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) return null;
                if (currentNode.right.data === value) {
                    return valueNode = currentNode.right;
                }
                currentNode = currentNode.right;
            }
        }
    }

    levelOrder(node) {
        this.array = [];
        if (node === null) return null;
        let arr = [node];
        while (arr.length > 0) {
            node = arr.shift();
            this.array.push(node.data);
            if (node.left !== null) arr.push(node.left);
            if (node.right !== null) arr.push(node.right);
        }
        return this.array;
    }

    preOrder(node, isFirstCall=true) {
        if (node === null) return null;

        if (isFirstCall) this.array = [];

        this.array.push(node.data);
        this.preOrder(node.left, false);
        this.preOrder(node.right, false);

        return this.array
    }

    inOrder(node, isFirstCall=true) {
        if (node === null) return null;

        if (isFirstCall) this.array = [];

        this.inOrder(node.left, false);
        this.array.push(node.data);
        this.inOrder(node.right, false);
        
        return this.array;
    }

    postOrder(node, isFirstCall=true) {
        if (node === null) return null;

        if (isFirstCall) this.array = [];

        this.postOrder(node.left, false);
        this.postOrder(node.right, false);
        this.array.push(node.data);
        
        return this.array;
    }

    height(node) {
        
        if (node === null) return 0;

        let leftNode = this.height(node.left);
        let rightNode = this.height(node.right);

        return 1 + Math.max(leftNode, rightNode);

    }

    depth(node) {
        if (!this.root || !node) return null;

        let queue = [{ currentNode: this.root, depth: 0 }];
        // console.log(this.root)
        while (queue.length > 0) {
            let { currentNode, depth } = queue.shift();
            // console.log(currentNode, depth)
            if (node === currentNode) return depth;
            // console.log(currentNode, depth)
            if (currentNode.left) queue.push({currentNode: currentNode.left, depth: depth + 1});
            if (currentNode.right) queue.push({currentNode: currentNode.right, depth: depth + 1})
        }
        return null;
    }

    isBalanced(node) {
        if (node === null) return null;

        let leftNodeHeight = this.height(node.left);
        let rightNodeHeight = this.height(node.right);

        return leftNodeHeight === rightNodeHeight ? true : false;
    }

    reBalance(node) {
        if (this.isBalanced(node)) return node;
        let array = this.inOrder(node);
        node = this.buildBalancedTree(array);
        return node;
    }
    
}


const bst = new BinarySearchTree();
const arr = [...Array(100)].map(() => Math.floor(Math.random() * 100))
console.log(arr)
console.log(bst.array)
const node = bst.buildTree(arr);
// bst.insert(50)
// bst.insert(0)
// bst.insert(6)
// bst.insert(25)
// bst.prettyPrint(node)
console.log(bst.levelOrder(node))
console.log(bst.preOrder(node))
console.log(bst.inOrder(node))
console.log(bst.postOrder(node))

console.log(`isBalanced: ${bst.isBalanced(node)}`);
let newNode = bst.reBalance(node);
console.log(`isBalanced: ${bst.isBalanced(newNode)}`);
// bst.prettyPrint(newNode)
console.log(bst.levelOrder(newNode))
console.log(bst.preOrder(newNode))
console.log(bst.inOrder(newNode))
console.log(bst.postOrder(newNode))

// const ord = bst.inOrder(node);
// console.log(ord);
// const node1 = bst.buildTree(ord)
// console.log(node1);
// bst.prettyPrint(node1)
// const node2 = bst.buildBalancedTree(ord)
// console.log(node2);
// bst.prettyPrint(node2)
// let f = bst.find(4);
// console.log(f);
// bst.prettyPrint(f)
// console.log(bst.height(node))
// console.log(bst.height(f))
// console.log(bst.depth(node))
// console.log(bst.depth(f))
// console.log(bst.isBalanced(node))
// console.log(bst.isBalanced(f))
// console.log(bst.isBalanced(node2))
