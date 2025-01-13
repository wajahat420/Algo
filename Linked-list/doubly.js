class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Pointer to the next node
    this.prev = null; // Pointer to the previous node
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // First node in the list
    this.tail = null; // Last node in the list
    this.size = 0;    // Track the size of the list
  }

  // Add a node at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty, head and tail are the same
      this.head = this.tail = newNode;
    } else {
      // Update the current tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }

  // Add a node at the beginning
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  // Remove a specific node
  remove(node) {
    if (!node) return;

    // Update the previous and next pointers
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    // Update head or tail if needed
    if (node === this.head) this.head = node.next;
    if (node === this.tail) this.tail = node.prev;

    this.size--;
  }

  // Remove the first node
  removeFirst() {
    if (!this.head) return null;
    const value = this.head.value;
    this.remove(this.head);
    return value;
  }

  // Remove the last node
  removeLast() {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.remove(this.tail);
    return value;
  }

  // Find a node by value
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  iterativeReversal() {
    let prev = null
    let current = this.head

    while (current) {
      let next = current.next
      current.next = prev

      prev = current
      current = next
    }

    this.head = prev
  }

  // Traverse and print the list (for debugging)
  print() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' <-> '));
  }

  // Get the size of the list
  getSize() {
    return this.size;
  }
}

const list = new DoublyLinkedList();

// Append nodes to the list
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 <-> 20 <-> 30

// Prepend nodes to the list
list.prepend(5);
list.print(); // Output: 5 <-> 10 <-> 20 <-> 30

// Remove a specific node
// const node = list.find(20);
// list.remove(node);
// list.print(); // Output: 5 <-> 10 <-> 30

// Remove the first node
// list.removeFirst();
// list.print(); // Output: 10 <-> 30

// Remove the last node
// list.removeLast();
// list.print(); // Output: 10

console.log('\nReverse')
list.iterativeReversal()
list.print()
// Check the size of the list
console.log('size = ', list.getSize()); // Output: 1
