const airports = ['YYZ','LAC','MIN','HKG','SZA','NOP','DAL']

const routes = [
    ['YYZ','LAC'],
    ['LAC','MIN'],
    ['MIN','HKG']
]

// Implement adjacency list as key, value pairs
// key is the name of the airport, value is the array of edges
const adjacencyList = new Map()  // map is our graph

function addNode(airport){
    adjacencyList.set(airport, [])
}

function addEdge(origin, destination){
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)

}

airports.forEach(addNode)
routes.forEach(val => addEdge(...val))

console.log(adjacencyList);
