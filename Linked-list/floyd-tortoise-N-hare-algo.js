const { CircularSinglyLinkedList } = require("./circular-singly");
const { SinglyLinkedList } = require("./singly");

function Algo() {
  const circular = new CircularSinglyLinkedList()
  // const singly = new SinglyLinkedList()
  const list = circular.bulkInsertDummyData()

  let slow = list.head;
  let fast = list.head;

  if (!list || !slow) {
    return console.log('The list is empty')
  }

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (fast === slow) {
      console.log('Its a cicular list')
      return true
    }

  }

  console.log('Its not a cicular list')
  return false
}

module.exports = Algo()