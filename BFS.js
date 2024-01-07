class Graph {
    constructor() {
        this.vertices = [];
        this.edges = new Map();
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges.set(vertex, []);
    }

    addEdge(vertex1, vertex2) {
        this.edges.get(vertex1).push(vertex2);
        this.edges.get(vertex2).push(vertex1); 
    }

    bfs(startingVertex) {
        const visited = new Set();
        const queue = [];

        visited.add(startingVertex);
        queue.push(startingVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);

            const neighbors = this.edges.get(currentVertex);

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

console.log("BFS starting from vertex 'A':");
graph.bfs("A");
