class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge (undirected graph)
  addEdge(vertex1, vertex2, weight = 1) {
    this.adjacencyList.get(vertex1).push({ node: vertex2, weight });
    this.adjacencyList.get(vertex2).push({ node: vertex1, weight });
  }

  // Breadth-First Search (BFS)
  bfs(start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);

      for (let neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor.node)) {
          visited.add(neighbor.node);
          queue.push(neighbor.node);
        }
      }
    }
  }

  // Depth-First Search (DFS) - Recursive
  dfsRecursive(start, visited = new Set()) {
    if (visited.has(start)) return;
    console.log(start);
    visited.add(start);

    for (let neighbor of this.adjacencyList.get(start)) {
      this.dfsRecursive(neighbor.node, visited);
    }
  }

  // Depth-First Search (DFS) - Iterative
  dfsIterative(start) {
    const visited = new Set();
    const stack = [start];

    while (stack.length > 0) {
      const vertex = stack.pop();
      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);
        for (let neighbor of this.adjacencyList.get(vertex)) {
          stack.push(neighbor.node);
        }
      }
    }
  }

  // Dijkstra's Algorithm (Shortest Path)
  dijkstra(start) {
    const distances = {};
    const priorityQueue = new Set();
    const previous = {};

    for (let vertex of this.adjacencyList.keys()) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
      priorityQueue.add(vertex);
    }
    distances[start] = 0;

    while (priorityQueue.size > 0) {
      let current = [...priorityQueue].reduce((a, b) =>
        distances[a] < distances[b] ? a : b
      );

      console.log({ current })
      priorityQueue.delete(current);

      for (let neighbor of this.adjacencyList.get(current)) {
        let newDist = distances[current] + neighbor.weight;
        if (newDist < distances[neighbor.node]) {
          distances[neighbor.node] = newDist;
          previous[neighbor.node] = current;
        }
      }
    }

    return { distances, previous };
  }

  // Cycle Detection using DFS
  hasCycle() {
    const visited = new Set();

    const dfs = (vertex, parent) => {
      visited.add(vertex);

      for (let neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor.node)) {
          if (dfs(neighbor.node, vertex)) return true;
        } else if (neighbor.node !== parent) {
          return true; // Cycle detected
        }
      }
      return false;
    };

    for (let vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        if (dfs(vertex, null)) return true;
      }
    }
    return false;
  }
}

// Example Usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", 2);
graph.addEdge("C", "D", 1);

// console.log("BFS Traversal:");
// graph.bfs("A");
// 
// console.log("\n`DFS Traversal (Recursive):");
// graph.dfsRecursive("A");
// //
// console.log("\nDFS Traversal (Iterative):");
// graph.dfsIterative("A");
//
console.log("\nDijkstra's Shortest Path:");
console.log(graph.dijkstra("A"));
//
console.log("\nCycle Detection:");
console.log(graph.hasCycle()); // Returns true or false