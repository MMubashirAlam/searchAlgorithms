class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.g = 0; 
        this.h = 0; 
        this.f = 0; 
        this.parent = null;
    }

    isEqual(otherNode) {
        return this.x === otherNode.x && this.y === otherNode.y;
    }
}

function astarSearch(grid, start, goal) {
    const openSet = [];
    const closedSet = new Set();

    openSet.push(start);

    while (openSet.length > 0) {
        let current = openSet[0];
        for (let i = 1; i < openSet.length; i++) {
            if (openSet[i].f < current.f || (openSet[i].f === current.f && openSet[i].h < current.h)) {
                current = openSet[i];
            }
        }

        openSet.splice(openSet.indexOf(current), 1);

        closedSet.add(current);

        if (current.isEqual(goal)) {
            const path = [];
            let currentPathNode = current;
            while (currentPathNode !== null) {
                path.unshift({ x: currentPathNode.x, y: currentPathNode.y });
                currentPathNode = currentPathNode.parent;
            }
            return path;
        }

        const neighbors = getNeighbors(grid, current);
        for (const neighbor of neighbors) {
            if (!closedSet.has(neighbor)) {
                const tentativeG = current.g + 1; 

                if (!openSet.includes(neighbor) || tentativeG < neighbor.g) {
                    neighbor.g = tentativeG;
                    neighbor.h = heuristic(neighbor, goal);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.parent = current;

                    if (!openSet.includes(neighbor)) {
                        openSet.push(neighbor);
                    }
                }
            }
        }
    }

    return null;
}

function getNeighbors(grid, node) {
    const neighbors = [];
    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]; 

    for (const dir of directions) {
        const newX = node.x + dir[0];
        const newY = node.y + dir[1];

        if (isValidPosition(grid, newX, newY)) {
            neighbors.push(new Node(newX, newY));
        }
    }

    return neighbors;
}

function isValidPosition(grid, x, y) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] !== 1; 
}

function heuristic(node, goal) {
    return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
}

const gridSize = 5;
const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));

const startNode = new Node(0, 0);
const goalNode = new Node(4, 4);

const path = astarSearch(grid, startNode, goalNode);

console.log("A* Search Path:", path);
