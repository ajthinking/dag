// SEE IF WE CAN BREAK DOWN GOD OBJECTS AND AVOID INHERITANCE ABSTRACT CLASSES
// class Diagram - holds nodes and links
// class DiagramNode - holds name and ports
// class CompuationNode - holds parameters and input/output logic
// class Blueprint - holds everything needed to create a "node" in a gui context or elsewhere
// class Blueprints - holds a collection of blueprints

import { create } from 'ts-node';
import { Blueprint } from './Blueprint';

class Diagram {}

class DiagramNode {
  constructor(computer) {}
}
class ComputationNode {}

const Create = new DiagramNode(new ComputationNode());
const DoNothing = new DiagramNode(new ComputationNode());
const Output = new DiagramNode(new ComputationNode());

// User stories
// Generate a list of available nodes
// Given a serialized node, recreate it
// Using a diagram as a node

class Blueprints {
  all() {}
}

// I have put both diagram and computation logic in the same class.
// Consider this instead:
// A class acting as a NodeFactory which accepts a computer and a diagram class?
// However the computaters are often dependent on the ports?
class SomeNode {
  constructor(computer, diagramNode) {}

  computerNode() {}

  diagramNode() {}
}

// Consider having a dir for each node
// Create
// |		index
// |		blueprint --> contains the ports and parameters, and which computer (an abstract/static representation)
// |		builder?
// |		factory?
// |		computer --> contains the input/output logic

// DiagramNodeFactory
// ComputationFactory
class Computation {
  diagram;
  computers;

  async start() {
    // POPULATE the computers

    const starters = []; // DiagramNodes
    starters.forEach((starter) => {
      ComputerFactory.fromDiagramNode(starter)
        .computer()
        .start(); // resolve computers via factories???
    });
  }
}

// Treat yourself as someone you have responsibility of helping.

// Consider keyed ports for clean access without looping

// Put it to the test 1
// 1. Create a diagram with a few nodes
// 2. Serialize the diagram
// 3. Deserialize the diagram
// 4. Start the diagram

// Put it to the test 2
// 1. Create a diagram with a few nodes in a GUI
// 3. Deserialize the diagram
// 4. Start the diagram

Blueprint = donothing;

Diagram;
DiagramNode(CreateBlueprint);
DiagramNode(DoNothingBlueprint);
DiagramNode(OutputBlueprint);

// All the event madness!
DiagramComputation(Diagram);

// To model as key->value or array???
