class GraphClass {
  constructor(nbn) {
    this.nbOfnodes = nbn;
    this.nodesNames = [];
    this.weights = [];
  }

  getNbOfNodes() {
    return this.nbOfnodes;
  }

  initializeGraph() {
    let n = this.getNbOfNodes();
    console.log("Number of nodes: " + n);

    for (let i = 0; i < n; i++) {
      this.nodesNames.push(undefined);
      let w = [];
      for (let j = 0; j < n; j++) {
        w.push(undefined);
      }
      this.weights.push(w);
    }
  }

  getElementInNode(p) {
    if (p >= 0 && p < this.nodesNames.length) {
      return this.nodesNames[p];
    }
    return undefined;
  }
  putElementInNode(e, p) {
    if (p >= 0 && p < this.nodesNames.length) {
      this.nodesNames[p] = e;
    }
  }
  putWeightInNode(w, o, d) {
    let n = this.getNbOfNodes();
    let c1 = o >= 0 && o < n;
    let c2 = d >= 0 && d < n;
    if (c1 && c2) {
      this.weights[o][d] = w;
    }
  }
}

let graph = new GraphClass(5);
graph.initializeGraph();
graph.putElementInNode("A", 0);
graph.putElementInNode("B", 1);
graph.putElementInNode("C", 2);
graph.putElementInNode("D", 3);
graph.putElementInNode("E", 4);

graph.putWeightInNode(10, 0, 1);
graph.putWeightInNode(20, 0, 2);
graph.putWeightInNode(30, 1, 3);
graph.putWeightInNode(40, 1, 4);
graph.putWeightInNode(50, 2, 4);
// graph.putWeightInNode(10, 0, 1);
// graph.putWeightInNode(20, 1, 2);
console.log(graph);
