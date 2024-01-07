class Graph {
    constructor() {
        this.nodes = new Map(); // Map to store nodes and their neighbors
    }

    addNode(node) {
        this.nodes.set(node, new Set());
    }

    addEdge(node1, node2) {
        this.nodes.get(node1).add(node2);
        this.nodes.get(node2).add(node1); // Assuming an undirected graph
    }

    bidirectionalSearch(startNode, goalNode) {
        const visitedStart = new Set(); // Set to track visited nodes from the start
        const visitedGoal = new Set(); // Set to track visited nodes from the goal

        const queueStart = [startNode]; // Queue for BFS from the start
        const queueGoal = [goalNode]; // Queue for BFS from the goal

        visitedStart.add(startNode);
        visitedGoal.add(goalNode);

        while (queueStart.length > 0 && queueGoal.length > 0) {
            const currentStart = queueStart.shift();
            const currentGoal = queueGoal.shift();

            if (visitedGoal.has(currentStart) || visitedStart.has(currentGoal)) {
                // The searches meet in the middle
                console.log(`Meeting point: ${currentStart}`);
                return true;
            }

            for (const neighborStart of this.nodes.get(currentStart)) {
                if (!visitedStart.has(neighborStart)) {
                    visitedStart.add(neighborStart);
                    queueStart.push(neighborStart);
                }
            }

            for (const neighborGoal of this.nodes.get(currentGoal)) {
                if (!visitedGoal.has(neighborGoal)) {
                    visitedGoal.add(neighborGoal);
                    queueGoal.push(neighborGoal);
                }
            }
        }

        return false; // No meeting point found
    }
}

// Example usage:
const graph = new Graph();

const nodes = ['A', 'B', 'C', 'D', 'E', 'F'];
for (const node of nodes) {
    graph.addNode(node);
}

const edges = [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'C'],
    ['B', 'D'],
    ['C', 'E'],
    ['D', 'E'],
    ['D', 'F'],
    ['E', 'F'],
];

for (const edge of edges) {
    graph.addEdge(edge[0], edge[1]);
}

const startNode = 'A';
const goalNode = 'F';

const hasMeetingPoint = graph.bidirectionalSearch(startNode, goalNode);

if (!hasMeetingPoint) {
    console.log('No meeting point found.');
}
