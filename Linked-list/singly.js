class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  prepend(node) {
    const newNode = new Node(node)
    if (!this.head) this.head = newNode

    let tempHead = this.head
    this.head = newNode
    this.head.next = tempHead
  }

  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  find(node) {
    let current = this.head

    while (current) {
      if (current.value === node) return current

      current = current.next
    }

    return null
  }

  remove(node) {
    if (node === this.head) this.head = node.next
    else {
      let current = this.head
      let prev = null

      while (current) {
        prev = current
        current = current.next

        if (current === node) {
          break
        }
      }

      if (prev) {
        prev.next = current.next || null
      }

    }
  }

  removeFirst() {
    if (!this.head) return

    this.head = this.head.next
  }

  removeLast() {
    let current = this.head
    let last = null

    while (current.next) {
      last = current
      current = current.next
    }

    last.next = null
    this.tail = last
  }

  print() {
    let current = this.head
    let output = []

    while (current) {
      output.push(current.value)
      current = current.next
    }

    console.log(output.join(' -> '))
  }
}

const list = new LinkedList()
list.append(5)
list.append(10)
list.append(15)
list.print()

const node = list.find(10)
list.remove(node)
list.print()

list.removeFirst()
list.print()

list.prepend(10)
list.print()
list.prepend(5)
list.print()

list.removeLast()
list.print()
