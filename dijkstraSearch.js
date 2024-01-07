class Graph {
    constructor() {
        this.nodes = new Map(); 
    }

    addNode(node) {
        this.nodes.set(node, new Map());
    }

    addEdge(node1, node2, weight) {
        this.nodes.get(node1).set(node2, weight);
        this.nodes.get(node2).set(node1, weight); 
    }

    dijkstra(startNode) {
        const distance = new Map(); 
        const visited = new Set(); 
        const priorityQueue = new PriorityQueue(); 

        for (const node of this.nodes.keys()) {
            distance.set(node, Infinity);
        }
        distance.set(startNode, 0);
        priorityQueue.enqueue(startNode, 0);

        while (!priorityQueue.isEmpty()) {
            const current = priorityQueue.dequeue().element;
            visited.add(current);

            for (const neighbor of this.nodes.get(current).keys()) {
                if (!visited.has(neighbor)) {
                    const newDistance = distance.get(current) + this.nodes.get(current).get(neighbor);

                    if (newDistance < distance.get(neighbor)) {
                        distance.set(neighbor, newDistance);
                        priorityQueue.enqueue(neighbor, newDistance);
                    }
                }
            }
        }

        return distance;
    }
}

class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift();
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

const graph = new Graph();

const nodes = ['A', 'B', 'C', 'D', 'E', 'F'];
for (const node of nodes) {
    graph.addNode(node);
}

const edges = [
    ['A', 'B', 1],
    ['A', 'C', 4],
    ['B', 'C', 2],
    ['B', 'D', 5],
    ['C', 'E', 3],
    ['D', 'E', 1],
    ['D', 'F', 7],
    ['E', 'F', 2],
];

for (const edge of edges) {
    graph.addEdge(edge[0], edge[1], edge[2]);
}

const startNode = 'A';
const distances = graph.dijkstra(startNode);

console.log(`Shortest distances from node ${startNode}:`);
for (const [node, distance] of distances) {
    console.log(`${node}: ${distance}`);
}
