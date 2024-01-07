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

    dfs(startingVertex, visited = new Set()) {
        visited.add(startingVertex);
        console.log(startingVertex);

        const neighbors = this.edges.get(startingVertex);

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
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

console.log("DFS starting from vertex 'A':");
graph.dfs("A");
