// finding shortest path 
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Insert a new node (distance, vertex)
  insert(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  // Bubble up the inserted node to maintain the heap property
  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  // Extract the smallest node (min element)
  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  // Bubble down to maintain heap property after extraction
  bubbleDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      this.bubbleDown(smallest);
    }
  }

  // Check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}

function dijkstra(graph, source) {
  const distances = {}; // Store the shortest distances
  const visited = new Set(); // Keep track of visited nodes
  const heap = new MinHeap(); // Create a min-heap priority queue

  // Initialize distances to infinity, except for the source
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[source] = 0;

  // Add the source node to the heap with distance 0
  heap.insert([0, source]);

  while (!heap.isEmpty()) {
    const [currentDistance, currentNode] = heap.extractMin();

    // Skip if the node is already visited
    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    // Relax the neighbors
    for (let [neighbor, weight] of graph[currentNode]) {
      const newDistance = currentDistance + weight;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        heap.insert([newDistance, neighbor]);
      }
    }
  }

  return distances;
}


const graph = {
  A: [["B", 4], ["C", 1]],
  B: [["D", 2]],
  C: [["D", 5]],
  D: []
};

const source = "A";
const shortestPaths = dijkstra(graph, source);

console.log(shortestPaths);
// Output: { A: 0, B: 4, C: 1, D: 6 }
