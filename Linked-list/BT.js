const { SinglyLinkedList, Node } = require("./doubly");

const root = new Node(1)
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

//      1
//     / \
//    2   3
//   / \ / \
//  4  5 6  7


function inorderRecursive(node) {
  console.log({ node: node })
  if (node) {
    inorderRecursive(node.left); // Visit left subtree
    // console.log({value: node.value});     // Visit root
    inorderRecursive(node.right); // Visit right subtree
  }
}

function inorderIterative(root) {
  const stack = [];
  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current); // Push all left nodes onto the stack
      current = current.left;
    }

    current = stack.pop(); // Process the node
    // console.log({ current })
    console.log(current.value);

    current = current.right; // Move to the right subtree
  }
}

function preorderIterative(root) {
  let current = root
  let stack = []

  while (current || stack.length > 0) {
    while (current) {
      console.log(current.value)
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    current = current.right
  }
}

function preorderRecursive(node) {
  if (node) {
    console.log(node.value);     // Visit root
    preorderRecursive(node.left);  // Visit left subtree
    preorderRecursive(node.right); // Visit right subtree
  }
}


function postorderIterative(root) {
  if (!root) return;

  const stack = [];
  const result = [];
  stack.push(root);

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);

    // Push left child first so right is processed first
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  // Reverse the result for correct postorder
  result.reverse().forEach(value => console.log(value));
}

function postorderRecursive(node) {
  if (node) {
    postorderRecursive(node.left);  // Visit left subtree
    postorderRecursive(node.right); // Visit right subtree
    console.log(node.value);        // Visit root
  }
}

function searchingBinarySearchTree(node, value) {
  let current = node
  while (current) {
    if (current.value === value) {
      console.log(current)
      return current
    } else if (current.value < value) {
      current = current.right
    } else {
      current = current.left
    }
  }

  console.log('Node does not exists')
}

function searchingBinarySearchTreeRecursive(node, value) {
  if (!node || node.value === value) {
    console.log({ node })
    return node
  }

  if (node.value < value) {
    return searchingBinarySearchTreeRecursive(node.right, value)
  }

  return searchingBinarySearchTreeRecursive(node.left, value)

}

// searchingBinarySearchTree(root, 10)
searchingBinarySearchTreeRecursive(root, 1)

// console.log("Inorder Recursive:");
// inorderRecursive(root); // 4, 2, 5, 1, 6, 3, 7

// console.log("Inorder Iterative:");
// inorderIterative(root) // 4, 2, 5, 1, 6, 3, 7

// console.log('Preorder Iterative')
// preorderIterative(root) // 1, 2, 4, 5, 3, 6, 7

// console.log('Preorder Recursive')
// preorderRecursive(root) // 1, 2, 4, 5, 3, 6, 7

// console.log('Postorder Iterative')
// postorderIterative(root) // 4, 5, 2, 6, 7, 3, 1

// console.log('Postorder Recursive')
// postorderRecursive(root) // 4, 5, 2, 6, 7, 3, 1
